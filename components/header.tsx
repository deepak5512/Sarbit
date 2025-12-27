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
import { ChevronDown, ArrowRight, X } from "lucide-react";

export function HeroHeader() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
            "bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
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
            variant="ghost"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="z-50 lg:hidden"
          >
            <MenuToggleIcon open={open} className="size-6" duration={300} />
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

// --- Modified Mobile Drawer Components ---

const drawerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={drawerVariants}
      // Changed padding: reduced top padding (pt-4) to fit close button, added bottom padding (pb-8)
      className="bg-background/95 fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto px-6 pt-4 pb-8 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80"
    >
      {/* Header with Close Button */}
      <div className="flex justify-end mb-6">
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="text-muted-foreground hover:text-foreground"
        >
            <X className="size-8" />
            <span className="sr-only">Close menu</span>
        </Button>
      </div>

      {/* Scrollable Navigation Area */}
      <div className="flex flex-1 flex-col gap-6">
        {navItems.map((item) =>
          item.dropdown ? (
            <MobileDropdown
              key={item.name}
              item={item}
              onClose={onClose}
              variants={itemVariants}
            />
          ) : (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between text-2xl font-medium tracking-tight"
              >
                {item.name}
                <ArrowRight className="text-muted-foreground size-5 -rotate-45 opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100" />
              </Link>
            </motion.div>
          )
        )}
      </div>
    </motion.div>,
    document.body
  );
}

function MobileDropdown({
  item,
  onClose,
  variants,
}: {
  item: {
    name: string;
    href: string;
    dropdown: { title: string; href: string; icon: React.ElementType }[];
  };
  onClose: () => void;
  variants: any;
}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div variants={variants} className="flex flex-col">
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex items-center justify-between text-2xl font-medium tracking-tight"
      >
        <span className={cn(expanded && "text-primary transition-colors")}>
            {item.name}
        </span>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="size-6 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-col gap-2 border-l-2 pl-4 ml-1">
              {item.dropdown.map((link, idx) => (
                <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                >
                    <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-3 rounded-md p-2 transition-colors"
                    >
                    <div className="bg-background/50 flex size-8 items-center justify-center rounded-md border shadow-sm">
                        <link.icon className="size-4" />
                    </div>
                    <span className="text-lg font-medium">{link.title}</span>
                    </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Helper for Desktop (Unchanged) ---
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
          className="hover:bg-accent hover:text-accent-foreground block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
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