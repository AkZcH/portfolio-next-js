"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);
    // Duplicate items multiple times to ensure smooth infinite scrolling
    // If there are few items, duplicate more times to fill the viewport
    const duplicationCount = children.length < 4 ? 4 : 2;
    for (let i = 0; i < duplicationCount; i++) {
      children.forEach((child) => {
        scrollerRef.current.appendChild(child.cloneNode(true));
      });
    }

    setDirection();
    setSpeed();
    setStart(true);
  }, []);

  const setDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const setSpeed = () => {
    const duration =
      speed === "fast" ? "18s" : speed === "normal" ? "30s" : "45s";
    containerRef.current?.style.setProperty(
      "--animation-duration",
      duration
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 overflow-hidden max-w-7xl",
        "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-3 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            className="
              relative
              h-[140px]
              w-[280px]
              shrink-0
              rounded-2xl
              overflow-hidden
              group
            "
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel || `View ${item.title} profile`}
              className="
                relative
                h-[140px]
                w-full
                rounded-2xl
                border border-zinc-800/50
                bg-gradient-to-br from-zinc-900 to-black
                px-5 py-4
                flex flex-col justify-between
                hover:border-zinc-600/50
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-zinc-900/50
                transition-all duration-300 ease-out
                cursor-pointer
              "
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/10 via-transparent to-zinc-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-600/0 via-zinc-600/10 to-zinc-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Header - Icon and Title */}
                <div className="flex items-start gap-3">
                  {typeof item.icon === 'string' ? (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-8 w-8 object-contain flex-shrink-0"
                      draggable={false}
                    />
                  ) : (
                    <div className="h-8 w-8 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                  )}
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                    {item.handle && (
                      <span className="text-xs text-white/50">{item.handle}</span>
                    )}
                  </div>
                </div>

                {/* Content - Headline, Body, CTA */}
                <div className="flex flex-col gap-1.5">
                  {item.headline && (
                    <h3 className="text-xs font-semibold text-white leading-tight">
                      {item.headline}
                    </h3>
                  )}
                  {item.body && (
                    <p className="text-xs text-white/85 leading-snug">
                      {item.body}
                    </p>
                  )}
                  {item.cta && (
                    <p className="text-xs text-white/75 font-medium leading-tight mt-0.5">
                      {item.cta}
                    </p>
                  )}
                  {/* Fallback for old structure */}
                  {!item.headline && item.description && (
                    <p className="text-sm text-white leading-snug">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
