"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/Logo";
import { Close, Menu } from "@/components/icons";
import { PillButton } from "@/components/ui/PillButton";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-surface/85 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between md:h-[92px]">
        <Link href="/" aria-label="TechFynite home" className="text-[#333]">
          <Logo className="h-8 w-auto md:h-10" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={cn(
                "text-lg transition-colors hover:text-brand",
                isActive(pathname, link.href) ? "text-brand" : "text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="/contact-us">Contact Us</PillButton>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full bg-ink text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/5 bg-surface lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className={cn(
                      "block py-3 text-2xl font-medium",
                      isActive(pathname, link.href) ? "text-brand" : "text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4" onClick={() => setOpen(false)}>
                <PillButton href="/contact-us">Contact Us</PillButton>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
