"use client";

import { use } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Package,
    Clock,
    CheckCircle2,
    AlertCircle,
    ArrowLeft,
    Truck,
    CreditCard,
    MapPin,
    Phone,
    Mail
} from "lucide-react";

// This would come from your API/database
const orders = {
    "ORD001": {
        id: "ORD001",
        date: "2024-01-15",
        status: "delivered",
        total: "₹25,000",
        items: [
            {
                name: "Fire Extinguisher Type ABC",
                quantity: 5,
                price: "₹5,000",
                total: "₹25,000"
            }
        ],
        shippingAddress: "123, Park Street, Mumbai, 400001",
        billingAddress: "123, Park Street, Mumbai, 400001",
        paymentMethod: "Credit Card",
        trackingNumber: "IN123456789",
        customerDetails: {
            name: "Rahul Sharma",
            email: "rahul.sharma@example.com",
            phone: "+91 98765 43210"
        },
        timeline: [
            {
                status: "Delivered",
                date: "2024-01-18",
                time: "14:30",
                description: "Package delivered successfully"
            },
            {
                status: "Out for Delivery",
                date: "2024-01-18",
                time: "09:15",
                description: "Package is out for delivery"
            },
            {
                status: "Shipped",
                date: "2024-01-16",
                time: "16:45",
                description: "Package has been shipped"
            },
            {
                status: "Processing",
                date: "2024-01-15",
                time: "10:30",
                description: "Order is being processed"
            },
            {
                status: "Order Placed",
                date: "2024-01-15",
                time: "10:00",
                description: "Order has been placed successfully"
            }
        ]
    },
    // Add more orders as needed
};

const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
        case 'delivered':
            return 'bg-green-100 text-green-800';
        case 'processing':
            return 'bg-blue-100 text-blue-800';
        case 'shipped':
            return 'bg-purple-100 text-purple-800';
        case 'cancelled':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
        case 'delivered':
            return <CheckCircle2 className="h-4 w-4 text-green-600" />;
        case 'processing':
            return <Clock className="h-4 w-4 text-blue-600" />;
        case 'shipped':
            return <Package className="h-4 w-4 text-purple-600" />;
        case 'cancelled':
            return <AlertCircle className="h-4 w-4 text-red-600" />;
        default:
            return null;
    }
};

export default function OrderDetailsPage({ params }) {
    const orderId = use(params).id;
    const order = orders[orderId];

    if (!order) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-red-500">Order not found</h1>
                <p className="text-muted-foreground mt-2">The order you're looking for doesn't exist.</p>
                <Link href="/orders" className="mt-4 inline-block">
                    <Button variant="outline" className="mt-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Orders
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/orders">
                        <Button variant="ghost" className="mb-4">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Orders
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold">Order #{order.id}</h1>
                    <p className="text-muted-foreground">
                        Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
                <Badge
                    variant="outline"
                    className={`${getStatusColor(order.status)} border-0`}
                >
                    <span className="flex items-center gap-1">
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Items */}
                <Card>
                    <CardHeader>
                        <CardTitle>Order Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {order.items.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Package className="h-8 w-8 text-gray-500" />
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Quantity: {item.quantity} × {item.price}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="font-medium">{item.total}</p>
                                </div>
                            ))}
                            <div className="pt-4 border-t">
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>{order.total}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Shipping & Payment */}
                <Card>
                    <CardHeader>
                        <CardTitle>Shipping & Payment</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Truck className="h-4 w-4 text-gray-500" />
                                <h3 className="font-semibold">Shipping Details</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Tracking Number: {order.trackingNumber}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <CreditCard className="h-4 w-4 text-gray-500" />
                                <h3 className="font-semibold">Payment Method</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.paymentMethod}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="h-4 w-4 text-gray-500" />
                                <h3 className="font-semibold">Billing Address</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.billingAddress}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Order Timeline */}
            <Card>
                <CardHeader>
                    <CardTitle>Order Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative space-y-4">
                        {order.timeline.map((event, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`} />
                                    {index !== order.timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-gray-200" />
                                    )}
                                </div>
                                <div className="flex-1 pb-4">
                                    <p className="font-medium">{event.status}</p>
                                    <p className="text-sm text-muted-foreground">{event.description}</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {event.date} at {event.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Customer Details */}
            <Card>
                <CardHeader>
                    <CardTitle>Customer Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                {order.customerDetails.name.charAt(0)}
                            </div>
                            <span className="font-medium">{order.customerDetails.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-muted-foreground">{order.customerDetails.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-muted-foreground">{order.customerDetails.phone}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 