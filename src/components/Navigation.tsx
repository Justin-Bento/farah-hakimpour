"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiExternalLinkLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import { Card } from "./ui/card";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const navItems = [
    { href: "/", label: "Home", ariaLabel: "navigation-link-home" },
    { href: "/about", label: "About", ariaLabel: "navigation-link-about" },
    {
      href: "/projects",
      label: "Projects",
      ariaLabel: "navigation-link-projects",
    },
    {
      href: "/contact",
      label: "Contact",
      ariaLabel: "navigation-link-contact",
    },
  ];

  return (
    <header className="sticky top-0 z-10 lg:p-0">
      <Card className="rounded-none border-none dark:shadow-gray-700/30">
        <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 sm:items-center">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="link-to-home"
              className="flex items-center group transition-all"
            >
              <Logo classNames="stroke-foreground group-hover:stroke-primary" />
              <p className="text-foreground group-hover:text-primary group-hover:underline uppercase tracking-wide text-sm">
                Farah Hakimpour
              </p>
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMobileMenu}
              className="lg:hidden mr-4"
              aria-label={
                mobileMenuOpen ? "nav-button-open" : "nav-button-close"
              }
            >
              {mobileMenuOpen ? <RiMenuLine /> : <RiCloseLine />}
            </Button>
          </div>

          {/* Navigation Links */}
          <div className={`${mobileMenuOpen ? "hidden lg:flex" : ""}`}>
            <nav className="flex flex-col justify-start w-full gap-6 lg:justify-center lg:flex-row">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="link"
                    aria-label={item.ariaLabel}
                    className="w-full lg:w-auto dark:hover:bg-purple-900/15 hover:cursor-pointer hover:text-purple-500 dark:hover:text-purple-400"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          {/* External Link */}
          <div
            className={`${
              mobileMenuOpen ? "hidden" : ""
            } lg:flex lg:items-center md:justify-end`}
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/farah-hakimpour-0b41911b8/"
            >
              <Button
                variant="secondary"
                aria-label="external-link-to-linkedin"
                className="w-full lg:w-auto dark:hover:bg-purple-900/15 hover:cursor-pointer hover:text-purple-500 dark:hover:text-purple-400"
              >
                <RiExternalLinkLine className="mb-1 mr-1" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </header>
  );
}
