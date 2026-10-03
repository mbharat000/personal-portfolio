"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

// Total number of sequential frames available in public/sequence/
const TOTAL_FRAMES = 144;

// Format frame index to match 'frame_000_delay-0.056s.png'
const getFrameUrl = (index: number): string => {
  const paddedIndex = String(index).padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.056s.png`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [imagesReady, setImagesReady] = useState<boolean>(false);

  // Link scroll progress of the 500vh container (0.0 to 1.0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Draw specific frame index onto canvas with responsive object-fit: cover
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Handle high DPI / retina screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    const targetWidth = Math.round(displayWidth * dpr);
    const targetHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Fill background with exact frame ambient color (#031015) for seamless blending
    ctx.fillStyle = "#031015";
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    // Responsive "object-fit: cover" calculation
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const hRatio = displayWidth / imgWidth;
    const vRatio = displayHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const renderWidth = imgWidth * ratio;
    const renderHeight = imgHeight * ratio;
    const shiftX = (displayWidth - renderWidth) / 2;
    const shiftY = (displayHeight - renderHeight) / 2;

    ctx.drawImage(img, shiftX, shiftY, renderWidth, renderHeight);

    // Subtle radial edge vignette to flawlessly merge canvas boundaries on wide screens
    const maxDim = Math.max(displayWidth, displayHeight);
    const vignette = ctx.createRadialGradient(
      displayWidth / 2,
      displayHeight / 2,
      maxDim * 0.28,
      displayWidth / 2,
      displayHeight / 2,
      maxDim * 0.72
    );
    vignette.addColorStop(0, "rgba(3, 16, 21, 0)");
    vignette.addColorStop(0.65, "rgba(3, 16, 21, 0.15)");
    vignette.addColorStop(1, "rgba(3, 16, 21, 0.85)");

    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    ctx.restore();
    currentFrameRef.current = frameIndex;
  }, []);

  // RequestAnimationFrame-throttled frame rendering
  const queueFrameRender = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        drawFrame(clamped);
        rafIdRef.current = null;
      });
    },
    [drawFrame]
  );

  // Preload all 120 images into memory
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onImageLoaded = () => {
      if (!isMounted) return;
      loadedCount++;
      const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      setLoadProgress(progress);

      // Once the first 12 frames are ready, we can render the initial state
      if (loadedCount === 12 && !imagesReady) {
        imagesRef.current = preloadedImages;
        drawFrame(0);
      }

      // When all images are preloaded
      if (loadedCount === TOTAL_FRAMES) {
        imagesRef.current = preloadedImages;
        setImagesReady(true);
        setIsLoading(false);
        drawFrame(currentFrameRef.current);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = onImageLoaded;
      img.onerror = () => {
        // Even on error, count it so progress doesn't stall indefinitely
        onImageLoaded();
      };
      preloadedImages[i] = img;
    }

    imagesRef.current = preloadedImages;

    // Safety timeout: if network takes too long, unveil gracefully
    const fallbackTimer = setTimeout(() => {
      if (isMounted && isLoading) {
        setIsLoading(false);
        setImagesReady(true);
        drawFrame(0);
      }
    }, 4500);

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawFrame, imagesReady, isLoading]);

  // Window resize handler: redraw currently active frame
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  // Scrub through frames as user scrolls through the 500vh container
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!imagesRef.current.length) return;
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(progress * TOTAL_FRAMES))
    );
    queueFrameRender(frameIndex);
  });

  return (
    <div
      ref={containerRef}
      id="hero-scroll"
      className="relative w-full h-[500vh] bg-[#030f14]"
    >
      {/* Sticky container pinned to viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block select-none pointer-events-none"
        />

        {/* Cinematic Preloader HUD */}
        {isLoading && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#030f14]/90 backdrop-blur-md transition-opacity duration-700">
            <div className="w-72 max-w-[85vw] flex flex-col items-center gap-4">
              <div className="flex items-center justify-between w-full text-xs font-mono tracking-widest text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  INITIALIZING BUFFER
                </span>
                <span className="text-orange-400 font-semibold">{loadProgress}%</span>
              </div>
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400 transition-all duration-150 ease-out"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
                {loadProgress < 100
                  ? `PRELOADING FRAME BUFFER [ ${loadProgress} / 100 ]`
                  : "CALIBRATING RETINA CANVAS..."}
              </p>
            </div>
          </div>
        )}

        {/* Scroll Parallax Overlay */}
        <Overlay containerRef={containerRef} />
      </div>
    </div>
  );
}
