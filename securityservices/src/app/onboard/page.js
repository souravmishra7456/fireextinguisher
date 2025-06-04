"use client";



import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

export default function Onboard() {
    const searchParams = useSearchParams();
    const userId = searchParams.get("userId");
    const router = useRouter();



    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        referral: "",
        useCase: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData((prev) => ({ ...prev, referral: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId) {
            console.error("User ID missing in URL");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/onboard/onboard", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, ...formData }),
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Onboarding failed:", data.msg);
            } else {
                console.log("Onboarding success:", data);
                router.push("/dashboard");
            }
        } catch (err) {
            console.error("Error submitting onboarding:", err);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-10">
            <Card className="w-full max-w-2xl rounded-2xl shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold mb-1">👋 Welcome!</CardTitle>
                    <p className="text-muted-foreground text-sm">Tell us a bit about yourself</p>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="mb-1 block">Full Name</Label>
                            <Input id="name" value={formData.name} onChange={handleChange} className="w-full" />
                        </div>

                        <div>
                            <Label htmlFor="phone" className="mb-1 block">Phone Number</Label>
                            <Input id="phone" value={formData.phone} onChange={handleChange} className="w-full" />
                        </div>

                        <div>
                            <Label className="mb-1 block">How did you hear about us?</Label>
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="google">Google</SelectItem>
                                    <SelectItem value="instagram">Instagram</SelectItem>
                                    <SelectItem value="friend">Friend</SelectItem>
                                    <SelectItem value="event">Event</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="useCase" className="mb-1 block">What are you looking for?</Label>
                            <Textarea
                                id="useCase"
                                rows={4}
                                value={formData.useCase}
                                onChange={handleChange}
                                placeholder="Briefly describe your use case..."
                                className="w-full"
                            />
                        </div>

                        <Button type="submit" className="w-full text-md py-5 rounded-xl mt-2">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
