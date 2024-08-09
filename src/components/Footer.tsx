import React from "react";
import Link from "next/link";
import { footer_navigation } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary/20">
      <div className="p-4 py-12 sm:px-6 lg:px-8 lg:container lg:mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-start space-x-6 md:justify-center lg:justify-end md:order-2">
          {footer_navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition-all hover:opacity-80" target="_blank" aria-label="external-link-to-social-media">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6 fill-white" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-sm leading-7 tracking-wider text-white">
            &copy; {new Date().getFullYear()} Farah Designs, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
