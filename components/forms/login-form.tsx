"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
const formSchema = z.object({
  //email: z.string().email({ message: "Enter a valid email address" }),
  //name: z.string(),
  username: z.string(),
  password: z.string(),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function LoginFormTwo() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    email: "sanketh@duck.com",
    name: "John Doe",
    username: "johndoe",
    password: "*******",
  };

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    signIn("credentials", {
      callbackUrl: callbackUrl ?? "/dashboard",
    });
    try {
      setLoading(true);

      // Make a POST request to your API endpoint
      const response = await axios.post('/login', data);

      // Handle successful response
      console.log('User registered successfully:', response.data);

      // Set showLoginScreen to true after successful login

    } catch (error) {
      // Handle error
      console.error('Error registering user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your username..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="ml-auto w-full" type="submit">
            Login
          </Button>
        </form>
        <div className="relative"></div>
      </Form>
    </>
  );
}
