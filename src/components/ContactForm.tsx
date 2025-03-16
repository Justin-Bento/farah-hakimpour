"use client";
import { RiSendPlane2Line } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  companyName: string;
}

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
      <div className="w-full space-y-6">
        <div className="space-y-1.5">
          <Label htmlFor="first-name">First Name</Label>
          <Input type="text" id="first-name" placeholder="Eg: John" />
        </div>
        {/* End Of First Name - Input */}
        <div className="space-y-1.5">
          <Label htmlFor="last-name">Last Name</Label>
          <Input type="text" id="last-name" placeholder="Eg: doe" />
        </div>
        {/* End Of Last Name Name - Input */}
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register("email", { required: "* Email Address is required" })}
            id="email"
            placeholder="Email"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-xs capitalize font-medium leading-none text-destructive">
              {errors.email?.message}
            </p>
          )}
        </div>
        {/* End Of Email Input */}
        <div className="space-y-1.5">
          <Label htmlFor="email">Your Message</Label>
          <Textarea
            placeholder="Type your message here."
            defaultValue={""}
            {...register("message", {
              pattern: /^[A-Za-z]+$/i,
              required: "*Your Message is required",
            })}
            id="message"
          />
          {errors.message && (
            <p className="text-xs capitalize font-medium leading-none text-destructive">
              {errors.message?.message}
            </p>
          )}
        </div>
        {/* End Of User Message Input */}
        <div className="">
          <Button
            className="flex items-center gap-2 bg-purple-800 hover:bg-purple-800/70 hover:cursor-pointer trasnition-all"
            aria-label="send-contact"
          >
            <RiSendPlane2Line className="dark:text-purple-50" />
            <div className="dark:text-purple-50">Send Message</div>
          </Button>
        </div>
        {/* End Of User Message Input */}
      </div>
    </form>
  );
}
