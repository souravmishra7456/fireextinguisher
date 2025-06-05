"use client";

import { useState, use } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Camera,
    FireExtinguisher,
    AlertCircle,
    ShieldCheck,
    Lock,
    Bell,
    Check,
    ShoppingCart,
    FileText,
    Star,
    ArrowLeft
} from "lucide-react";

// This would come from your database in a real application
const products = {
    1: {
        id: 1,
        name: "Fire Extinguisher Type ABC",
        category: "Fire Safety",
        price: "₹5,000",
        description: "Multipurpose dry chemical fire extinguisher suitable for Class A, B, and C fires. Perfect for homes, offices, and commercial spaces.",
        features: [
            "6 kg capacity",
            "5 year warranty",
            "Pressure gauge",
            "Wall mount included",
            "Easy-pull safety pin",
            "Corrosion-resistant cylinder"
        ],
        specifications: {
            "Type": "ABC Dry Chemical",
            "Weight": "6 kg",
            "Height": "50 cm",
            "Width": "20 cm",
            "Operating Temperature": "-30°C to 60°C",
            "Range": "4-6 meters",
            "Discharge Time": "15 seconds",
            "Certification": "ISI Marked",
        },
        icon: FireExtinguisher,
        color: "text-red-500",
        images: [
            "/product1.jpg",
            "/product2.jpg",
            "/product3.jpg"
        ],
        reviews: [
            {
                name: "Rahul Sharma",
                rating: 5,
                comment: "Excellent quality and fast delivery. Very satisfied with the product.",
                date: "2023-10-15"
            },
            {
                name: "Priya Patel",
                rating: 4,
                comment: "Good product, but installation guide could be better.",
                date: "2023-09-28"
            }
        ]
    },
    2: {
        id: 2,
        name: "HD CCTV Camera System",
        category: "Surveillance",
        price: "₹12,000",
        description: "High-definition security camera system with night vision and motion detection. Perfect for home and business surveillance.",
        features: [
            "1080p resolution",
            "Night vision",
            "Motion detection",
            "Mobile app viewing",
            "Cloud storage",
            "Weather-resistant"
        ],
        specifications: {
            "Resolution": "1080p Full HD",
            "Night Vision Range": "30 meters",
            "Storage": "1TB HDD",
            "Camera Type": "Dome",
            "Power": "DC 12V",
            "Weather Rating": "IP66",
            "Warranty": "2 years",
        },
        icon: Camera,
        color: "text-blue-500",
        images: [
            "/camera1.jpg",
            "/camera2.jpg",
            "/camera3.jpg"
        ],
        reviews: [
            {
                name: "Amit Kumar",
                rating: 5,
                comment: "Great quality cameras, easy to install and setup.",
                date: "2023-11-01"
            }
        ]
    }
};

export default function ProductDetailsPage({ params }) {
    const [quantity, setQuantity] = useState(1);
    const productId = use(params).id;
    const product = products[productId];

    if (!product) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
                <p className="text-muted-foreground mt-2">The product you're looking for doesn't exist.</p>
                <Link href="/products" className="mt-4 inline-block">
                    <Button variant="outline" className="mt-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Products
                    </Button>
                </Link>
            </div>
        );
    }

    const Icon = product.icon;

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <Link href="/products">
                        <Button variant="ghost" className="mb-4">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Products
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline">{product.category}</Badge>
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">4.5 (128 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Product Image */}
                <Card>
                    <CardContent className="p-6">
                        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                            <Icon className={`h-32 w-32 ${product.color}`} />
                        </div>
                    </CardContent>
                </Card>

                {/* Product Info */}
                <Card>
                    <CardContent className="p-6 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold">{product.price}</h2>
                            <p className="text-sm text-muted-foreground">Including GST</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </Button>
                                    <span className="w-8 text-center">{quantity}</span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </Button>
                                </div>
                                <Button className="flex-1">
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                            <Button variant="outline" className="w-full">Buy Now</Button>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold">Key Features:</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between p-2 bg-gray-50 rounded-lg">
                                <span className="font-medium">{key}</span>
                                <span className="text-muted-foreground">{value}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {product.reviews.map((review, index) => (
                        <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                            <div className="flex items-center justify-between">
                                <div className="font-medium">{review.name}</div>
                                <div className="flex items-center">
                                    {Array(review.rating).fill(null).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
                            <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
} 