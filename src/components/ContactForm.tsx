"use client"
import { RiSendPlane2Line } from 'react-icons/ri'
import { Input } from "@/components/ui/input"
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
      <div className="w-full space-y-6">
        <div className="space-y-1.5">
          <Label htmlFor="first-name" className="font-bold">First Name</Label>
          <Input type="text" id="first-name" placeholder="Eg: John" className="border-black dark:border-white" />
        </div>
        {/* End Of First Name - Input */}
        <div className="space-y-1.5">
          <Label htmlFor="last-name" className="font-bold">Last Name</Label>
          <Input type="text" id="last-name" placeholder="Eg: doe" className="border-black dark:border-white" />
        </div>
        {/* End Of Last Name Name - Input */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="font-bold">Email</Label>
          <Input type="email" 
            {...register("email", { required: "* Email Address is required" })}
            id="email" 
            placeholder="Email"
            className="border-black dark:border-white"
            autoComplete="email" />
          {errors.email && <p className="text-xs capitalize font-medium leading-none text-red-700 dark:text-red-500">{errors.email?.message}</p>}
        </div>
        {/* End Of Email Input */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="font-bold">Your Message</Label>
          <Textarea
            placeholder="Type your message here."
            className="border-black dark:border-white"
            defaultValue={""}
            {...register("message", { pattern: /^[A-Za-z]+$/i, required: "*Your Message is required" })}
            id="message"
          />
          {errors.message && <p className="text-xs capitalize font-medium leading-none text-red-700 dark:text-red-500">{errors.message?.message}</p>}
        </div>
        {/* End Of User Message Input */}
        <div className="">
          <Button variant="primary" className='flex items-center gap-2'  aria-label="send-contact" >
            <RiSendPlane2Line />
            <div>
              Send Message
            </div>
          </Button>
        </div>
        {/* End Of User Message Input */}
      </div>
    </form>
  )
}




