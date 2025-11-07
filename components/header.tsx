"use client";

import React from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navItems";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Logo } from "./logo";
import { ChevronDown } from "lucide-react";

export function HeroHeader() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed z-20 w-full px-2">
      <nav
        className={cn(
          "mx-auto mt-2 flex h-14 w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 lg:px-12",
          isScrolled &&
            "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex-wrap">
            {navItems.map((item) =>
              item.dropdown ? (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className="hover:text-accent-foreground cursor-pointer bg-transparent text-sm font-medium">
                    <Link href={item.href}>{item.name}</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background rounded-md border shadow-lg">
                    <ul className="grid sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.dropdown.map((link) => (
                        <ListItem
                          key={link.title}
                          title={link.title}
                          href={link.href}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:text-accent-foreground bg-transparent text-sm font-medium"
                    )}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Controls */}
        <div className="hidden items-center gap-2 lg:flex">
          <AnimatedThemeToggler />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <AnimatedThemeToggler />
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="lg:hidden"
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Drawer Menu */}
      <AnimatePresence>
        {open && <MobileDrawer open={open} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (typeof window === "undefined") return null;
  return createPortal(
    <>
      {/* Backdrop */}
      <motion.div
        key="drawer-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 bg-black"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <motion.aside
        key="drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-background fixed top-0 right-0 z-50 flex h-full w-80 flex-col overflow-y-auto border-l px-5 py-6 shadow-lg"
      >
        <div className="mb-6 flex items-center justify-between">
          <Logo />
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </Button>
        </div>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) =>
            item.dropdown ? (
              <CollapsibleMenuItem
                key={item.name}
                item={item}
                onClose={onClose}
              />
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground text-base font-medium transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </motion.aside>
    </>,
    document.body
  );
}

function CollapsibleMenuItem({
  item,
  onClose,
}: {
  item: {
    name: string;
    href: string;
    dropdown: { title: string; href: string; icon: React.ElementType }[];
  };
  onClose: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Link
          href={item.href}
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground text-base font-medium transition-colors"
        >
          {item.name}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-foreground flex items-center justify-between text-base font-semibold"
        >
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="size-4" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-2 ml-3 flex flex-col gap-2 border-l pl-3"
          >
            {item.dropdown.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <link.icon className="size-4 opacity-70" />
                <span>{link.title}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="hover:bg-accent hover:text-accent-foreground rounded-md p-3 transition-colors"
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground mt-1 line-clamp-2 text-xs leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
