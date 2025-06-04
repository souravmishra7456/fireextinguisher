import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "@/components/userAuthForm";

export default function AuthenticationPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left section - branding/testimonial */}
            <div className="hidden lg:flex flex-col justify-between p-10 bg-muted border-r">
                <div className="flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Acme Inc
                </div>
                <blockquote className="mt-auto text-sm italic text-muted-foreground">
                    “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.” - Sofia Davis
                </blockquote>
            </div>

            {/* Right section - form */}
            <div className="flex items-center justify-center p-6">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">Create an account</h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                    <UserAuthForm />
                    <p className="text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
