import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { MdMenu, MdClose } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import Link from 'next/link';
import Logo from './Logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 shadow z-[999] bg-fuchsia-100 dark:bg-fuchsia-900">
      <div className="px-4 wrapper">
        <nav className="flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Farah Designs</span>
              <Logo classNames="fill-fuchsia-700 dark:fill-fuchsia-50" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MdMenu className="w-6 h-6 fill-fuchsia-950 dark:fill-fuchsia-50" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="rounded-md bg-transparent px-2.5 py-1.5 font-semibold hover:bg-fuchsia-200 transition-all body-medium active:bg-fuchsia-300 active:text-fuchsia-950">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="https://www.linkedin.com/in/farah-hakimpour-0b41911b8/"
              target="_blank"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-fuchsia-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
            >
              <TbExternalLink className="w-4 h-4" />
              LinkedIn
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-fuchsia-50 dark:bg-fuchsia-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Farah Designs</span>
                <Logo classNames="fill-fuchsia-700 dark:fill-fuchsia-50" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <MdClose className="w-6 h-6 fill-fuchsia-950 dark:fill-fuchsia-50" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-md block bg-transparent px-2.5 py-1.5 font-semibold hover:bg-fuchsia-200 transition-all body-medium active:bg-fuchsia-300 active:text-fuchsia-950"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="w-full py-6">
                  <Link
                    href="https://www.linkedin.com/in/farah-hakimpour-0b41911b8/"
                    target="_blank"
                    className="inline-flex w-full items-center gap-x-1.5 rounded-md bg-fuchsia-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600">
                    <TbExternalLink className="w-4 h-4" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>

  )
}
