import React from 'react'
import { Button } from './Button'
import { RiSendPlane2Line } from 'react-icons/ri'

export default function ContactForm() {
  return (
    <form
      action="#"
      method="POST"
      className=""
    >
      <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="flex min-h-[60px] w-full rounded-md border ring-primary-600 border-primary-600 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:justify-start">
          <Button className="flex items-center justify-end gap-1 capitalize dark:text-primary-100" aria-label="send-contact" variant="secondary">
            <RiSendPlane2Line />
            Send message
          </Button>
        </div>
      </div>
    </form>
  )
}
