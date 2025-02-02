import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import TosConsent from "@/components/tos-consent";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex flex-col gap-6 w-full">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Forgot Password</CardTitle>
          <CardDescription>Enter your email to reset password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form>
            <div className="grid">
              <div className="grid gap-6">
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

                <SubmitButton
                  pendingText="Loading..."
                  formAction={forgotPasswordAction}
                >
                  Reset Password
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
