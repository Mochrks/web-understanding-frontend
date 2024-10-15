import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from 'lucide-react'
import { Title } from '@/components/demo/Title'

// Pricing data
const pricingData = [
    { name: "Basic", monthlyPrice: 9, yearlyPrice: 90, features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"] },
    { name: "Pro", monthlyPrice: 19, yearlyPrice: 190, features: ["5 Users", "50 Projects", "50GB Storage", "Priority Support", "Advanced Analytics"] },
    { name: "Enterprise", monthlyPrice: 49, yearlyPrice: 490, features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Integration", "Dedicated Account Manager"] },
]

// 1. Pricing cards with toggle switch
const TogglePricingCards = () => {
    const [isYearly, setIsYearly] = useState(false)

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
                <span>Monthly</span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                <span>Yearly</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingData.map((plan, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>
                                <span className="text-3xl font-bold">
                                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                {isYearly ? "/year" : "/month"}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Choose Plan</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

// 2. Pricing table with feature highlight
const PricingTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Features</TableHead>
                    {pricingData.map((plan, index) => (
                        <TableHead key={index} className="text-center">{plan.name}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Price</TableCell>
                    {pricingData.map((plan, index) => (
                        <TableCell key={index} className="text-center font-bold">
                            ${plan.monthlyPrice}/month
                        </TableCell>
                    ))}
                </TableRow>
                {pricingData[2].features.map((feature, index) => (
                    <TableRow key={index}>
                        <TableCell>{feature}</TableCell>
                        {pricingData.map((plan, planIndex) => (
                            <TableCell key={planIndex} className="text-center">
                                {plan.features.includes(feature) ? (
                                    <Check className="mx-auto h-4 w-4 text-green-500" />
                                ) : (
                                    <X className="mx-auto h-4 w-4 text-red-500" />
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell>Choose Plan</TableCell>
                    {pricingData.map((plan, index) => (
                        <TableCell key={index} className="text-center">
                            <Button variant="outline">Select {plan.name}</Button>
                        </TableCell>
                    ))}
                </TableRow>
            </TableBody>
        </Table>
    )
}

// 3. Pricing slider with user count
const PricingSlider = () => {
    const [userCount, setUserCount] = useState(1)
    const pricePerUser = 10

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Custom Plan</CardTitle>
                <CardDescription>Choose the number of users for your plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Slider
                    min={1}
                    max={100}
                    step={1}
                    value={[userCount]}
                    onValueChange={(value) => setUserCount(value[0])}
                />
                <div className="text-center">
                    <span className="text-3xl font-bold">{userCount}</span> Users
                </div>
                <div className="text-center">
                    <span className="text-4xl font-bold">${userCount * pricePerUser}</span>/month
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Get Started</Button>
            </CardFooter>
        </Card>
    )
}

// 4. Pricing cards with hover animation
const AnimatedPricingCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingData.map((plan, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>
                                <span className="text-3xl font-bold">${plan.monthlyPrice}</span>/month
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Choose Plan</Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

// 5. Pricing comparison with expandable features
const ExpandablePricingComparison = () => {
    const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

    return (
        <div className="space-y-4">
            {pricingData.map((plan, index) => (
                <Card key={index}>
                    <CardHeader className="cursor-pointer" onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}>
                        <div className="flex justify-between items-center">
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>
                                <span className="text-2xl font-bold">${plan.monthlyPrice}</span>/month
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <AnimatePresence>
                        {expandedPlan === plan.name && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CardContent>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="mr-2 h-4 w-4 text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Choose {plan.name} Plan</Button>
                                </CardFooter>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Card>
            ))}
        </div>
    )
}

// Main component to showcase all Pricing components
export default function ModernPricingComponents() {
    return (
        <>
            <div className="py-5">
                <Title name="Screen Pricing Layout " />
            </div>
            <div className="container mx-auto py-8 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Toggle Pricing Cards</h2>
                    <TogglePricingCards />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Pricing Table</h2>
                    <PricingTable />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Pricing Slider</h2>
                    <PricingSlider />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Animated Pricing Cards</h2>
                    <AnimatedPricingCards />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Expandable Pricing Comparison</h2>
                    <ExpandablePricingComparison />
                </section>
            </div>
        </>
    )
}