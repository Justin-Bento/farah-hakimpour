"use client"
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiExternalLinkLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import { Card } from "./ui/card";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const onClick = () => setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  return (
    <header className="sticky top-0 z-10 lg:p-0">
      <Card className="rounded-none border-none dark:shadow-gray-700/30">
        <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 sm:items-center">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="link-to-home" className="flex items-center group transition-all">
              <Logo classNames="stroke-gray-900 group-hover:stroke-purple-500 dark:stroke-purple-50 dark:group-hover:stroke-purple-500" />
              <p className="text-gray-900 group-hover:text-purple-500 dark:text-purple-50 dark:group-hover:text-purple-500 group-hover:underline uppercase tracking-wide text-sm">Farah Hakimpour</p>
            </Link>
            {mobileMenuOpen ? (
              <Button
                variant="outline"
                size="icon"
                onClick={onClick}
                className="lg:hidden mr-4"
                aria-label="nav-button-open"
              >
                <RiMenuLine />
              </Button>
            ) : (
              <Button
                variant="outline"
                size="icon"
                onClick={onClick}
                className="lg:hidden"
                aria-label="nav-button-close"
              >
                <RiCloseLine />
              </Button>
            )}
          </div>
          <div className={`${mobileMenuOpen ? "hidden lg:flex" : ""}`}>
            <nav className="flex flex-col justify-start w-full gap-6 lg:justify-center lg:flex-row">
              <Link href="/">
                <Button variant="link" aria-label="navigation-link-home" className="hover:cursor-pointer hover:text-purple-500 dark:hover:text-purple-400">
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="link" aria-label="navigation-link-about" className="hover:cursor-pointer hover:text-purple-500 dark:hover:text-purple-400">
                  About
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="link" aria-label="navigation-link-projects" className="hover:cursor-pointer hover:text-purple-500 dark:hover:text-purple-400">
                  Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="link" aria-label="navigation-link-contact" className="hover:cursor-pointer hover:text-purple-500 dark:hover:text-purple-400">
                  Contact
                </Button>
              </Link>
            </nav>
          </div>
          <div
            className={`${mobileMenuOpen ? "hidden" : ""
              } lg:flex lg:items-center md:justify-end`}
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/farah-hakimpour-0b41911b8/"
            >
              <Button
                variant="secondary"
                aria-label="external-link-to-linkedin"
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