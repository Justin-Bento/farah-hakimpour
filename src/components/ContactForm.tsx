
import {
  useForm
} from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { Button } from "./Button";
import { RiSendPlane2Line } from "react-icons/ri";

type FormInputs = {
  firstName: string;
  lastName: string;
  company: string;
  Email: string;
  Message: string;
};

export default function ContactForm() {
  const [serverState, sendToFormspree] = useFormspree(`${process.env.NEXT_PUBLIC_FORM_DATA}`); // replace
  const { register, handleSubmit, formState: { errors }, } = useForm<FormInputs>();
  if (serverState.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="">
        <div className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
            <input type="text" className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
          {/* End Of Full Name */}

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
            <input type="email" className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
          {/* End Of input type email */}
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company</label>
            <input type="text" className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
          {/* End Of Full Name */}
          {/* End Of input type email */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your Message</label>
            <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-primary-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
          {/* End Of Your Message */}
          <div className="mt-8 lg:justify-start">
            <Button className="flex items-center justify-end gap-1 capitalize dark:text-primary-100" aria-label="send-contact" variant="secondary">
              <RiSendPlane2Line />
              Send message
            </Button>
          </div>
        </div>
      </form>

    </>
  )
}