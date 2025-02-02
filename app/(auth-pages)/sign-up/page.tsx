import { signInAction, signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import TosConsent from "@/components/tos-consent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome</CardTitle>
          <CardDescription>
            Sign up for an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form>
            <div className="grid">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fname">First Name</Label>
                    <Input
                      id="fname"
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lname">Last Name</Label>
                    <Input
                      id="lname"
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="********"
                    required
                  />
                </div>

                <SubmitButton
                  pendingText="Signing Up..."
                  formAction={signUpAction}
                >
                  Sign Up
                </SubmitButton>
                <FormMessage message={searchParams} />
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/sign-in" className="underline underline-offset-4">
                  Sign In
                </a>
              </div>
            </div>
          </form>
          <TosConsent />
        </CardContent>
      </Card>
    </div>
  );
}
