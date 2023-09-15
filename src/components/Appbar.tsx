import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/Button";
import { RiMenuLine, RiExternalLinkLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

export default function Appbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const onClick = () => setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  return (
    <header className="p-4 lg:p-0">
      <div className="grid grid-cols-1 gap-6 justify-evenly lg:container sm:px-6 lg:px-8 lg:mx-auto lg:items-center lg:grid-cols-3">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="link-to-home">
            <Logo classNames="fill-primary-700 dark:fill-primary-50" />
          </Link>
          {mobileMenuOpen ? (
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-primary-200 dark:border-primary-300/50"
              onClick={onClick}
              aria-label="nav-button-open"
            >
              <RiMenuLine />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-primary-200 dark:border-primary-300/50"
              onClick={onClick}
              aria-label="nav-button-close"
            >
              <RiCloseLine />
            </Button>
          )}
        </div>
        <div className={`${mobileMenuOpen ? "hidden lg:flex" : ""}`}>
          <nav className="flex flex-col justify-start w-full gap-6 lg:justify-center lg:flex-row">
            <Link href="/">
              <Button variant="navLink" size="lg" className="w-full" aria-label="navigation-link-home">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="navLink" size="lg" className="w-full" aria-label="navigation-link-about">
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="navLink" size="lg" className="w-full" aria-label="navigation-link-projects">
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="navLink" size="lg" className="w-full" aria-label="navigation-link-contact">
                Contact
              </Button>
            </Link>
          </nav>
        </div>
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
              className="flex gap-1.5 w-full lg:w-auto"
              aria-label="external-link-to-linkedin"
            >
              <RiExternalLinkLine />
              LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
