import React from "react";
import { LoginForm } from "@/components/loginForm";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-6">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                    <p className="text-muted-foreground text-sm">
                        Enter your credentials below to access your account
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
