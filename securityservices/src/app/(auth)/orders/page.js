"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Package,
    Clock,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

// This would come from your API/database
const orders = [
    {
        id: "ORD001",
        date: "2024-01-15",
        status: "delivered",
        total: "₹25,000",
        items: [
            {
                name: "Fire Extinguisher Type ABC",
                quantity: 5,
                price: "₹5,000"
            }
        ],
        shippingAddress: "123, Park Street, Mumbai, 400001",
        paymentMethod: "Credit Card",
        trackingNumber: "IN123456789"
    },
    {
        id: "ORD002",
        date: "2024-01-20",
        status: "processing",
        total: "₹12,000",
        items: [
            {
                name: "HD CCTV Camera System",
                quantity: 1,
                price: "₹12,000"
            }
        ],
        shippingAddress: "456, Lake Road, Delhi, 110001",
        paymentMethod: "UPI",
        trackingNumber: "IN987654321"
    },
    {
        id: "ORD003",
        date: "2024-01-25",
        status: "shipped",
        total: "₹16,000",
        items: [
            {
                name: "Smoke Detectors",
                quantity: 4,
                price: "₹4,000"
            }
        ],
        shippingAddress: "789, Hill View, Bangalore, 560001",
        paymentMethod: "Net Banking",
        trackingNumber: "IN456789123"
    }
];

const getStatusColor = (status) => {
    switch (status) {
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
    switch (status) {
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

export default function OrdersPage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Your Orders</h1>
                    <p className="text-muted-foreground">Track and manage your orders</p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search orders..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
                {orders.map((order) => (
                    <Link href={`/orders/${order.id}`} key={order.id}>
                        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">Order #{order.id}</span>
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
                                            <span className="text-sm text-muted-foreground">
                                                Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <div className="font-semibold">{order.total}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                                            </div>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                </div>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Package className="h-4 w-4" />
                                            <span>{item.quantity}x {item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
} 