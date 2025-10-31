"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import React from "react";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const menuItems = [
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleMenuItemClick = () => {
    setMenuState(false);
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 w-full border-b transition-colors duration-150",
          scrolled && "bg-background/50 backdrop-blur-3xl"
        )}
      >
        <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Left: Logo */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Logo />
            </Link>

            {/* Right: Theme toggle + Menu button (mobile only) */}
            <div className="flex items-center gap-2 lg:hidden">
              <AnimatedThemeToggler />
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 p-2"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 transition-all duration-200",
                    menuState && "scale-0 rotate-180 opacity-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 transition-all duration-200",
                    menuState && "scale-100 rotate-0 opacity-100"
                  )}
                />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <AnimatedThemeToggler />
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {menuState && (
            <div className="bg-background mb-6 w-full flex-col space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 lg:hidden dark:shadow-none">
              <ul className="w-full space-y-6 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={handleMenuItemClick}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
