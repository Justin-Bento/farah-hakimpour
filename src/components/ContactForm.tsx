import React from 'react'
import { Button } from './Button'
import { RiSendPlane2Line } from 'react-icons/ri'
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  message: string
  companyName: string
}

export default function ContactForm() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
    >
      <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="firstName"
                aria-invalid={errors.firstName ? "true" : "false"}
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                {...register("firstName", { pattern: /^[A-Za-z]+$/i, required: "* First Name is required" })}
              />
              {errors.firstName && <p className="text-xs [&_p]:leading-relaxed tracking-wide capitalize mt-2 dark:text-red-300">{errors.firstName?.message}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("lastName", { pattern: /^[A-Za-z]+$/i, required: "* Last Name is required" })}
                id="lastName"
                autoComplete="family-name"
                aria-invalid={errors.lastName ? "true" : "false"}
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.lastName && <p className="text-xs [&_p]:leading-relaxed tracking-wide capitalize mt-2 dark:text-red-300">{errors.lastName?.message}</p>}
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
                {...register("email", { required: "* Email Address is required" })}
                id="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.email && <p className="text-xs [&_p]:leading-relaxed tracking-wide capitalize mt-2 dark:text-red-300">{errors.email?.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="companyName"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("companyName", { pattern: /^[A-Za-z]+$/i, required: "* Company Name is required" })}
                id="companyName"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.companyName && <p className="text-xs [&_p]:leading-relaxed tracking-wide capitalize mt-2 dark:text-red-300">{errors.companyName?.message}</p>}
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
                {...register("message", { pattern: /^[A-Za-z]+$/i, required: "*Your Awsome Message is required" })}
                id="message"
                rows={4}
                className="flex min-h-[60px] w-full rounded-md border  ring-primary-600 border-primary-600 bg-transparent dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={""}
                />
                {errors.message && <p className="text-xs [&_p]:leading-relaxed tracking-wide capitalize mt-2 dark:text-red-300">{errors.message?.message}</p>}
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
