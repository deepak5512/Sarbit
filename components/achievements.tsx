"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { achievements } from "@/data/achievementsData";

function AchievementsSection() {
  const { theme } = useTheme();
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "achievements-animations";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes ach-float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6%)} }
      @keyframes ach-pulse { 0%,100%{transform:scale(1);opacity:0.85}50%{transform:scale(1.08);opacity:1} }
      @keyframes ach-tilt { 0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)} }
      @keyframes ach-drift { 0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(6%,-6%,0)} }
      @keyframes ach-intro { 0%{opacity:0;transform:translate3d(0,28px,0)}100%{opacity:1;transform:translate3d(0,0,0)} }
      @keyframes ach-card { 0%{opacity:0;transform:translate3d(0,18px,0) scale(0.96)}100%{opacity:1;transform:translate3d(0,0,0) scale(1)} }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white pt-24 text-neutral-900 transition-colors duration-500 md:pt-32 dark:bg-black dark:text-white">
      <section
        ref={sectionRef}
        className={`relative mx-auto max-w-5xl px-6 motion-safe:opacity-0 ${
          sectionVisible
            ? "motion-safe:animate-[ach-intro_0.9s_ease-out_forwards]"
            : ""
        }`}
      >
        {/* Header */}
        <div className="mx-auto max-w-5xl gap-4 px-6 sm:grid sm:grid-cols-3">
          <div className="sm:col-span-1">
            <h2 className="text-3xl font-bold sm:text-4xl">Achievements</h2>
          </div>
          <div className="mt-6 sm:col-span-2 sm:mt-0">
            <p>
              Our journey is marked by innovation, collaboration, and
              recognition. From national grants to academic partnerships, each
              milestone strengthens our mission to pioneer advanced sensor
              technologies.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 gap-3 md:mt-24 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
          {achievements.map((item, i) => (
            <AchievementCard
              key={item.title}
              data={item}
              theme={theme}
              index={i}
              isVisible={sectionVisible}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

interface Achievement {
  title: string;
  blurb: string;
  meta?: string;
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & { strokeWidth?: number }
  >;
  span?: string;
  animation?: string;
}

interface CardProps {
  data: Achievement;
  theme?: string;
  index?: number;
  isVisible?: boolean;
}

function AchievementCard({
  data,
  theme = "light",
  index = 0,
  isVisible = false,
}: CardProps) {
  const { icon: Icon, animation, title, blurb, meta, span = "" } = data;
  const gradientFill =
    theme === "dark"
      ? "radial-gradient(ellipse 60% 120% at 12% 0%, rgba(59,130,246,0.24), transparent 72%)"
      : "radial-gradient(ellipse 60% 120% at 12% 0%, rgba(148,163,184,0.32), transparent 72%)";
  const animationDelay = `${index * 0.12}s`;

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] motion-safe:opacity-0 ${
        isVisible ? "motion-safe:animate-[ach-card_0.8s_ease-out_forwards]" : ""
      } dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)] ${span}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-white/85 transition-colors duration-500 dark:bg-white/8" />
        <div
          className="absolute inset-0 opacity-70 transition-opacity duration-500 dark:opacity-60"
          style={{ background: gradientFill }}
        />
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900/15 bg-white transition-colors duration-500 dark:border-white/15 dark:bg-white/10">
          <Icon
            className="h-7 w-7 text-neutral-900 transition-colors duration-500 dark:text-white"
            strokeWidth={1.5}
            style={{ animation }}
          />
        </div>
        <div className="flex-1">
          <header className="flex items-start gap-3">
            <h3 className="text-base font-semibold tracking-wide text-neutral-900 uppercase transition-colors duration-500 dark:text-white">
              {title}
            </h3>
            {meta && (
              <span className="ml-auto rounded-full border border-neutral-900/10 px-2 py-0.5 text-[10px] tracking-[0.3em] text-neutral-500 uppercase transition-colors duration-500 dark:border-white/15 dark:text-white/60">
                {meta}
              </span>
            )}
          </header>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition-colors duration-500 dark:text-white/60">
            {blurb}
          </p>
        </div>
      </div>
    </article>
  );
}

export default AchievementsSection;
