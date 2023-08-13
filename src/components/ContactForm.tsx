
import {
  useForm
} from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { Button } from "./Button";
import { RiSendPlane2Line } from "react-icons/ri";

type FormInputs = {
  fullName: string;
  company: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [serverState, sendToFormspree] = useFormspree(`${process.env.NEXT_PUBLIC_FORM_DATA}`); // replace
  const { register, handleSubmit, formState: { errors }, } = useForm<FormInputs>();
  if (serverState.succeeded) { return (<span className="min-h-screen capitalize dark:text-gray-300">Thanks for the message</span>) }
  return (
    <>
      <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="">
        <div className="lg:max-w-3xl">
          <div className="flex flex-col gap-8">
            <div >
              <label
                htmlFor="full-name"
                defaultValue="full_Name"
                className="text-sm font-bold capitalize"
              >
                Full name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  id="full-name"
                  autoComplete="given-name"
                  className="flex w-full h-10 px-3 py-2 text-sm tracking-wider border rounded-md border-primary-500 bg-primary-50 dark:bg-primary-960 dark:caret-gray-300 dark:text-gray-300 ring-offset-primary-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                {errors.fullName && (
                  <span className="text-xs font-normal tracking-wider text-red-800 capitalize dark:text-red-600">
                    * Your full name is required
                  </span>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-bold capitalize"
              >
                email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                  className="flex w-full h-10 px-3 py-2 text-sm tracking-wider border rounded-md border-primary-500 bg-primary-50 dark:bg-primary-960 dark:caret-gray-300 dark:text-gray-300 ring-offset-primary-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              {errors.email && (
                <span className="text-xs font-normal tracking-wider text-red-800 capitalize dark:text-red-600">
                  * email  is required
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-bold capitalize"
              >
                Your Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="company"
                  autoComplete="company"
                  {...register("company", { required: true })}
                  className="flex w-full h-10 px-3 py-2 text-sm tracking-wider border rounded-md border-primary-500 bg-primary-50 dark:bg-primary-960 dark:caret-gray-300 dark:text-gray-300 ring-offset-primary-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              {errors.company && (
                <span className="text-xs font-normal tracking-wider text-red-800 capitalize dark:text-red-600">
                  * Your Company Name is required
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-bold capitalize"
              >
                message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={4}
                  className={"flex min-h-[80px] w-full rounded-md border border-primary-500  bg-inherit px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:border-primary-500 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:caret-gray-300 dark:text-gray-300"}
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-xs font-normal tracking-wider text-red-800 capitalize dark:text-red-600">
                    * Your message is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8">
            {/* errors will return when  validation fails  */}
            <Button
              type="submit"
              variant="secondary"
              className="gap-1"
            >
              <RiSendPlane2Line />
              Send message
            </Button>
          </div>
        </div>
      </form>

    </>
  )
}