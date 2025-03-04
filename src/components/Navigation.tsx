"use client"

import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiExternalLinkLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const onClick = () => setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  return (
    <header className="sticky top-0 z-10 p-4 lg:p-0 bg-white shadow shadow-black/10 dark:bg-black dark:shadow-white/10">
      <div className="lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 justify-evenly lg:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="link-to-home" className="flex items-center group">
            <Logo classNames="group-hover:stroke-purple-500" />
            <p className="uppercase text-xs group-hover:underline group-hover:text-purple-500">farah hakimpour</p>
          </Link>
          {mobileMenuOpen ? (
            <Button
              variant="outline"
              size="icon"
              onClick={onClick}
              className="lg:hidden"
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
              <Button variant="link" aria-label="navigation-link-home" className="hover:text-purple-500 hover:cursor-pointer">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="link" aria-label="navigation-link-about" className="hover:text-purple-500 hover:cursor-pointer">
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="link" aria-label="navigation-link-projects" className="hover:text-purple-500 hover:cursor-pointer">
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="link" aria-label="navigation-link-contact" className="hover:text-purple-500 hover:cursor-pointer">
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
              className="bg-purple-100 hover:bg-purple-200 hover:cursor-pointer shadow-none"
            >
              <RiExternalLinkLine className="mb-1 mr-1" />
              LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}