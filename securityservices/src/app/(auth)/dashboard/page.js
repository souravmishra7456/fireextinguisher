"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Phone,
    Mail,
    MessageSquare,
    Camera,
    FileText,
    FireExtinguisher,
    AlertCircle,
    Calendar
} from "lucide-react";

export default function ClientDashboard() {
    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Welcome back, Sourav</h1>
                <p className="text-muted-foreground">View your products and get support</p>
            </div>

            {/* Contact Support */}
            <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                    <CardTitle className="text-blue-800">Need Help?</CardTitle>
                    <CardDescription>We're here to assist you 24/7</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline" className="bg-white h-20 flex items-center justify-center gap-3">
                            <Phone className="h-5 w-5 text-blue-600" />
                            <div className="text-left">
                                <div className="font-semibold">Call Support</div>
                                <div className="text-sm text-muted-foreground">+91 7520555555</div>
                            </div>
                        </Button>
                        <Button variant="outline" className="bg-white h-20 flex items-center justify-center gap-3">
                            <Mail className="h-5 w-5 text-blue-600" />
                            <div className="text-left">
                                <div className="font-semibold">Email Us</div>
                                <div className="text-sm text-muted-foreground">support@fireext.com</div>
                            </div>
                        </Button>
                        <Button variant="outline" className="bg-white h-20 flex items-center justify-center gap-3">
                            <MessageSquare className="h-5 w-5 text-blue-600" />
                            <div className="text-left">
                                <div className="font-semibold">Live Chat</div>
                                <div className="text-sm text-muted-foreground">Chat with us</div>
                            </div>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Your Products */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Products</CardTitle>
                        <CardDescription>Equipment purchased from us</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <FireExtinguisher className="h-8 w-8 text-red-500" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium">Fire Extinguishers</p>
                                            <p className="text-sm text-muted-foreground">Type ABC - 5 Units</p>
                                            <p className="text-xs text-muted-foreground">Purchased on: Oct 15, 2023</p>
                                        </div>
                                        <Button variant="outline" size="sm">View Details</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <Camera className="h-8 w-8 text-blue-500" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium">CCTV System</p>
                                            <p className="text-sm text-muted-foreground">HD Cameras - 4 Units</p>
                                            <p className="text-xs text-muted-foreground">Purchased on: Sep 28, 2023</p>
                                        </div>
                                        <Button variant="outline" size="sm">View Details</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <AlertCircle className="h-8 w-8 text-yellow-500" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium">Smoke Detectors</p>
                                            <p className="text-sm text-muted-foreground">Wireless - 3 Units</p>
                                            <p className="text-xs text-muted-foreground">Purchased on: Aug 12, 2023</p>
                                        </div>
                                        <Button variant="outline" size="sm">View Details</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Purchase History */}
                <Card>
                    <CardHeader>
                        <CardTitle>Purchase History</CardTitle>
                        <CardDescription>Your recent transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                {
                                    date: "Oct 15, 2023",
                                    item: "Fire Extinguisher Type ABC",
                                    quantity: "5 Units",
                                    amount: "₹25,000"
                                },
                                {
                                    date: "Sep 28, 2023",
                                    item: "HD CCTV System",
                                    quantity: "4 Cameras",
                                    amount: "₹45,000"
                                },
                                {
                                    date: "Aug 12, 2023",
                                    item: "Wireless Smoke Detectors",
                                    quantity: "3 Units",
                                    amount: "₹12,000"
                                }
                            ].map((purchase, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Calendar className="h-5 w-5 mt-1 text-gray-500" />
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="font-medium">{purchase.item}</p>
                                                <p className="text-sm text-muted-foreground">Quantity: {purchase.quantity}</p>
                                                <p className="text-sm text-muted-foreground">Date: {purchase.date}</p>
                                            </div>
                                            <p className="font-medium text-right">{purchase.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Product Documentation */}
            <Card>
                <CardHeader>
                    <CardTitle>Product Documentation</CardTitle>
                    <CardDescription>User manuals and guides for your products</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                            <FileText className="h-6 w-6" />
                            <div className="text-center">
                                <div className="font-semibold">Fire Extinguisher Manual</div>
                                <div className="text-sm text-muted-foreground">Download PDF</div>
                            </div>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                            <FileText className="h-6 w-6" />
                            <div className="text-center">
                                <div className="font-semibold">CCTV System Guide</div>
                                <div className="text-sm text-muted-foreground">Download PDF</div>
                            </div>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                            <FileText className="h-6 w-6" />
                            <div className="text-center">
                                <div className="font-semibold">Smoke Detector Guide</div>
                                <div className="text-sm text-muted-foreground">Download PDF</div>
                            </div>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
