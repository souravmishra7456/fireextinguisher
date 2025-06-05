"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Camera,
    FireExtinguisher,
    AlertCircle,
    ShieldCheck,
    Lock,
    Bell
} from "lucide-react";

const products = [
    {
        id: 1,
        name: "Fire Extinguisher Type ABC",
        category: "Fire Safety",
        price: "₹5,000",
        description: "Multipurpose dry chemical fire extinguisher suitable for Class A, B, and C fires.",
        features: ["6 kg capacity", "5 year warranty", "Pressure gauge", "Wall mount included"],
        icon: FireExtinguisher,
        color: "text-red-500"
    },
    {
        id: 2,
        name: "HD CCTV Camera System",
        category: "Surveillance",
        price: "₹12,000",
        description: "High-definition security camera system with night vision and motion detection.",
        features: ["1080p resolution", "Night vision", "Motion detection", "Mobile app viewing"],
        icon: Camera,
        color: "text-blue-500"
    },
    {
        id: 3,
        name: "Wireless Smoke Detector",
        category: "Fire Safety",
        price: "₹4,000",
        description: "Advanced smoke detection system with wireless connectivity and mobile alerts.",
        features: ["Wireless connection", "Mobile alerts", "Battery backup", "Easy installation"],
        icon: AlertCircle,
        color: "text-yellow-500"
    },
    {
        id: 4,
        name: "Access Control System",
        category: "Security",
        price: "₹15,000",
        description: "Biometric and card-based access control system for enhanced security.",
        features: ["Fingerprint reader", "RFID cards", "Time attendance", "Mobile app control"],
        icon: Lock,
        color: "text-purple-500"
    },
    {
        id: 5,
        name: "Security Alarm System",
        category: "Security",
        price: "₹8,000",
        description: "Complete security alarm system with sensors and mobile notifications.",
        features: ["Motion sensors", "Door sensors", "Siren", "Mobile notifications"],
        icon: Bell,
        color: "text-green-500"
    },
    {
        id: 6,
        name: "Fire Safety Kit",
        category: "Fire Safety",
        price: "₹10,000",
        description: "Complete fire safety kit including extinguisher, smoke detector, and safety gear.",
        features: ["Fire extinguisher", "Smoke detector", "Safety gear", "First aid kit"],
        icon: ShieldCheck,
        color: "text-orange-500"
    }
];

export default function ProductsPage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Our Products</h1>
                    <p className="text-muted-foreground">Explore our range of security and safety solutions</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline">Filter</Button>
                    <Button variant="outline">Sort By</Button>
                </div>
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 flex-wrap">
                {["All", "Fire Safety", "Surveillance", "Security", "Access Control"].map((category) => (
                    <Button
                        key={category}
                        variant={category === "All" ? "default" : "outline"}
                        className="rounded-full"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                    const Icon = product.icon;
                    return (
                        <Card key={product.id} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Icon className={`h-6 w-6 ${product.color}`} />
                                    <Badge variant="outline">{product.category}</Badge>
                                </div>
                                <CardTitle className="mt-2">{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <div className="font-bold text-lg">{product.price}</div>
                                <div className="space-x-2">
                                    <Link href={`/products/${product.id}`}>
                                        <Button variant="outline" size="sm">Details</Button>
                                    </Link>
                                    <Button size="sm">Buy Now</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
