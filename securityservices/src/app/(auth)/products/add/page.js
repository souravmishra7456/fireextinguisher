"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddProductPage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Add New Product</h1>
                    <p className="text-muted-foreground">Add a new product to the catalog</p>
                </div>
            </div>

            <Card>
                <CardContent className="p-6">
                    <form className="space-y-6">
                        {/* Basic Information */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Basic Information</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Product Name</Label>
                                    <Input id="name" placeholder="Enter product name" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="fire-safety">Fire Safety</SelectItem>
                                            <SelectItem value="surveillance">Surveillance</SelectItem>
                                            <SelectItem value="security">Security</SelectItem>
                                            <SelectItem value="access-control">Access Control</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="price">Price (₹)</Label>
                                    <Input id="price" type="number" placeholder="Enter price" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="sku">SKU</Label>
                                    <Input id="sku" placeholder="Enter SKU" />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Description</h2>

                            <div className="space-y-2">
                                <Label htmlFor="short-description">Short Description</Label>
                                <Textarea
                                    id="short-description"
                                    placeholder="Enter a brief description"
                                    className="h-20"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="detailed-description">Detailed Description</Label>
                                <Textarea
                                    id="detailed-description"
                                    placeholder="Enter detailed description"
                                    className="h-32"
                                />
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Specifications</h2>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="weight">Weight</Label>
                                        <Input id="weight" placeholder="e.g., 6 kg" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="dimensions">Dimensions</Label>
                                        <Input id="dimensions" placeholder="e.g., 50x20x20 cm" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="certification">Certification</Label>
                                        <Input id="certification" placeholder="e.g., ISI Marked" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="warranty">Warranty</Label>
                                        <Input id="warranty" placeholder="e.g., 5 years" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Product Images</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                                    <div className="mt-2">
                                        <Button variant="outline" className="w-full">
                                            Upload Main Image
                                        </Button>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            PNG, JPG up to 5MB
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                                    <div className="mt-2">
                                        <Button variant="outline" className="w-full">
                                            Upload Gallery Image
                                        </Button>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            PNG, JPG up to 5MB
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                                    <div className="mt-2">
                                        <Button variant="outline" className="w-full">
                                            Upload Gallery Image
                                        </Button>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            PNG, JPG up to 5MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button variant="outline">Cancel</Button>
                            <Button>Add Product</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
} 