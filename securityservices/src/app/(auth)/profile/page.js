"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
    UserCircle,
    Phone,
    Mail,
    MapPin,
    LogOut,
    Camera,
    Bell,
    Shield,
    Key,
    CreditCard,
    Clock,
    Settings
} from "lucide-react";

export default function ProfilePage() {
    const [userInfo, setUserInfo] = useState({
        name: "Sourav Kumar",
        email: "sourav@example.com",
        phone: "+91 98765 43210",
        address: "123 Park Street, Mumbai, Maharashtra 400001",
        notifications: {
            email: true,
            push: false,
            sms: true
        }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedInfo, setEditedInfo] = useState(userInfo);

    const handleSave = () => {
        setUserInfo(editedInfo);
        setIsEditing(false);
        toast.success("Profile updated successfully!");
    };

    const handleLogout = () => {
        toast.success("Logged out successfully!");
    };

    return (
        <div className="p-6 space-y-6 bg-gray-50/50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
                        <p className="text-muted-foreground">Manage your account settings and preferences</p>
                    </div>
                    <Button variant="destructive" onClick={handleLogout}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Profile Summary Card */}
                    <Card className="lg:col-span-4">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative">
                                    <div className="h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                        <UserCircle className="h-20 w-20 text-white" />
                                    </div>
                                    <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full">
                                        <Camera className="h-4 w-4" />
                                    </Button>
                                </div>
                                <h2 className="mt-4 text-xl font-semibold">{userInfo.name}</h2>
                                <p className="text-muted-foreground">Customer</p>
                                <div className="mt-6 w-full">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="bg-primary/5 rounded-lg p-3">
                                            <p className="text-lg font-semibold">5</p>
                                            <p className="text-xs text-muted-foreground">Orders</p>
                                        </div>
                                        <div className="bg-primary/5 rounded-lg p-3">
                                            <p className="text-lg font-semibold">3</p>
                                            <p className="text-xs text-muted-foreground">Products</p>
                                        </div>
                                        <div className="bg-primary/5 rounded-lg p-3">
                                            <p className="text-lg font-semibold">2</p>
                                            <p className="text-xs text-muted-foreground">Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <Tabs defaultValue="personal" className="w-full">
                            <TabsList className="w-full justify-start mb-4">
                                <TabsTrigger value="personal" className="flex items-center gap-2">
                                    <UserCircle className="h-4 w-4" />
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger value="security" className="flex items-center gap-2">
                                    <Shield className="h-4 w-4" />
                                    Security
                                </TabsTrigger>
                                <TabsTrigger value="notifications" className="flex items-center gap-2">
                                    <Bell className="h-4 w-4" />
                                    Notifications
                                </TabsTrigger>
                                <TabsTrigger value="billing" className="flex items-center gap-2">
                                    <CreditCard className="h-4 w-4" />
                                    Billing
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="personal">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Personal Information</CardTitle>
                                        <CardDescription>Update your personal details and contact information</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {isEditing ? (
                                            <div className="space-y-4">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="name">Full Name</Label>
                                                        <Input
                                                            id="name"
                                                            value={editedInfo.name}
                                                            onChange={(e) => setEditedInfo({ ...editedInfo, name: e.target.value })}
                                                            className="bg-white"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            value={editedInfo.email}
                                                            onChange={(e) => setEditedInfo({ ...editedInfo, email: e.target.value })}
                                                            className="bg-white"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="phone">Phone Number</Label>
                                                        <Input
                                                            id="phone"
                                                            value={editedInfo.phone}
                                                            onChange={(e) => setEditedInfo({ ...editedInfo, phone: e.target.value })}
                                                            className="bg-white"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="address">Address</Label>
                                                        <Input
                                                            id="address"
                                                            value={editedInfo.address}
                                                            onChange={(e) => setEditedInfo({ ...editedInfo, address: e.target.value })}
                                                            className="bg-white"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 pt-4">
                                                    <Button onClick={handleSave}>Save Changes</Button>
                                                    <Button variant="outline" onClick={() => {
                                                        setIsEditing(false);
                                                        setEditedInfo(userInfo);
                                                    }}>Cancel</Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-6">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-lg">
                                                        <Mail className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <p className="text-sm font-medium">Email</p>
                                                            <p className="text-sm text-muted-foreground">{userInfo.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-lg">
                                                        <Phone className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <p className="text-sm font-medium">Phone</p>
                                                            <p className="text-sm text-muted-foreground">{userInfo.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-lg">
                                                    <MapPin className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="text-sm font-medium">Address</p>
                                                        <p className="text-sm text-muted-foreground">{userInfo.address}</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" onClick={() => setIsEditing(true)} className="mt-4">
                                                    Edit Profile
                                                </Button>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="security">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Security Settings</CardTitle>
                                        <CardDescription>Manage your password and security preferences</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
                                                <div className="flex items-center gap-4">
                                                    <Key className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="text-sm font-medium">Password</p>
                                                        <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline">Change Password</Button>
                                            </div>
                                            <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
                                                <div className="flex items-center gap-4">
                                                    <Shield className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="text-sm font-medium">Two-Factor Authentication</p>
                                                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                                                    </div>
                                                </div>
                                                <Switch />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="notifications">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Notification Preferences</CardTitle>
                                        <CardDescription>Choose how you want to receive updates</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between py-3">
                                                <div className="flex items-center gap-4">
                                                    <Mail className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">Email Notifications</p>
                                                        <p className="text-sm text-muted-foreground">Receive order updates via email</p>
                                                    </div>
                                                </div>
                                                <Switch checked={userInfo.notifications.email} />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between py-3">
                                                <div className="flex items-center gap-4">
                                                    <Bell className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">Push Notifications</p>
                                                        <p className="text-sm text-muted-foreground">Receive updates in your browser</p>
                                                    </div>
                                                </div>
                                                <Switch checked={userInfo.notifications.push} />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between py-3">
                                                <div className="flex items-center gap-4">
                                                    <Phone className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">SMS Notifications</p>
                                                        <p className="text-sm text-muted-foreground">Receive updates via SMS</p>
                                                    </div>
                                                </div>
                                                <Switch checked={userInfo.notifications.sms} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="billing">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Billing Information</CardTitle>
                                        <CardDescription>Manage your billing details and payment methods</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
                                                <div className="flex items-center gap-4">
                                                    <CreditCard className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">Payment Methods</p>
                                                        <p className="text-sm text-muted-foreground">Add or remove payment methods</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline">Manage</Button>
                                            </div>
                                            <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
                                                <div className="flex items-center gap-4">
                                                    <Clock className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">Billing History</p>
                                                        <p className="text-sm text-muted-foreground">View your past transactions</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline">View History</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
} 