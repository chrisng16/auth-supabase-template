"use client";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";

// Improved schema with additional validation rules
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[a-zA-Z0-9]/, { message: "Password must be alphanumeric" }),
});

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      startTransition(async () => {
        console.log(values);
        toast(
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        );
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast({
        variant: "destructive",
        title: "Failed to Submit Form",
        description: `Failed to submit the form. Please try again. ${error}`,
      });
    }
  }

  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
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
                    <FormItem className="col-span-2">
                      <FormLabel required>Password</FormLabel>

                      <FormControl>
                        <div className="flex">
                          <Input
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Password"
                            autoComplete="new-password"
                            {...field}
                            disabled={isPending}
                          />
                          <button
                            type="button"
                            id="password"
                            onClick={() =>
                              setIsPasswordVisible((prev) => !prev)
                            }
                            className="-ml-8 font-medium text-color-secondary"
                          >
                            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                          </button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
