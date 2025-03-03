import Link from 'next/link'
import React from 'react'

export default function page() {
  const links = ["home", "about", "projects", "contact"]
  return (
    <main className="max-w-prose mx-auto mt-24">
      <nav>
        <ul className="list-disc">
          {links.map((link) => {
            return (
              <li className="hover:underline hover:text-blue-500">
                <Link href={link.toLocaleLowerCase()} className="capitalize">{link}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </main>
  )
}
