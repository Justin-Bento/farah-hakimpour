import React from "react";
import Link from "next/link";
import { footer_navigation } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary-200">
      <div className="px-6 py-12 lg:px-0 lg:mx-auto lg:container md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {footer_navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition-all text-primary-800 hover:opacity-80">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-sm leading-7 tracking-wider text-primary-960">
            &copy; {new Date().getFullYear()} Farah Designs, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
