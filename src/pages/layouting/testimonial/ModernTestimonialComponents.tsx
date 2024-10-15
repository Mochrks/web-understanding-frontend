import React, { useState } from 'react'
import { motion, useAnimation, useTransform, useMotionValue } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Title } from '@/components/demo/Title'

// Sample testimonial data
const testimonials = [
    { id: 1, name: "Alice Johnson", role: "CEO, TechCorp", content: "This product has revolutionized our workflow. Highly recommended!", rating: 5, avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Bob Smith", role: "Designer", content: "Intuitive and powerful. It's a game-changer for our design team.", rating: 4, avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Carol Williams", role: "Marketing Manager", content: "The analytics features are outstanding. It's helped us make data-driven decisions.", rating: 5, avatar: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "David Brown", role: "Developer", content: "The API is well-documented and easy to integrate. Kudos to the dev team!", rating: 4, avatar: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Eva Martinez", role: "Startup Founder", content: "This tool has been crucial in scaling our operations. Thank you!", rating: 5, avatar: "/placeholder.svg?height=40&width=40" },
]

// 1. Carousel Testimonial
const CarouselTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg mb-4">"{testimonials[currentIndex].content}"</p>
                        <div className="flex items-center">
                            <Avatar className="mr-4">
                                <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                                <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                                <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>
            <Button variant="outline" className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}

// 2. Grid Testimonial with hover animation
const GridTestimonial = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
                <motion.div
                    key={testimonial.id}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Card className="h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                            <p className="text-lg mb-4 flex-grow">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <Avatar className="mr-4">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

// 3. Testimonial with star rating and animation
const StarRatingTestimonial = () => {
    return (
        <div className="space-y-6">
            {testimonials.map((testimonial) => (
                <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Star
                                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-lg mb-4">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <Avatar className="mr-4">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

// 4. Testimonial with moving avatar
const MovingAvatarTestimonial = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set(event.clientX - rect.left)
        y.set(event.clientY - rect.top)
    }

    const avatarSize = 64 // Ukuran avatar (64px atau 4rem)

    return (
        <div className="relative w-full max-w-3xl mx-auto h-[25rem]" onMouseMove={handleMouseMove}>
            <Card className="bg-white shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                    <p className="text-lg mb-4 text-center">"{testimonials[0].content}"</p>
                    <div className="text-center">
                        <p className="font-semibold">{testimonials[0].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[0].role}</p>
                    </div>
                </CardContent>
            </Card>

            {/* Avatar yang bergerak mengikuti kursor */}
            {/* <motion.div
                className="absolute rounded-full overflow-hidden shadow-lg"
                style={{
                    x: useTransform(x, (value) => value - avatarSize / 2), // Posisi x diatur agar avatar terpusat di kursor
                    y: useTransform(y, (value) => value - avatarSize / 2), // Posisi y diatur agar avatar terpusat di kursor
                    width: avatarSize,
                    height: avatarSize,
                }}
            >
                <img
                    src="https://github.com/shadcn.png"
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                />
            </motion.div> */}
        </div>
    )
}

// 5. Testimonial with parallax effect
const ParallaxTestimonial = () => {
    const y = useMotionValue(0)
    const background = useTransform(y, [0, -200], ["#ffffff", "#f3f4f6"])

    return (
        <motion.div
            className="w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg"
            style={{ background }}
            drag="y"
            dragConstraints={{ top: -200, bottom: 0 }}
            onDrag={(_, info) => y.set(info.point.y)}
        >
            <div className="p-6 space-y-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        style={{ y: useTransform(y, [0, -200], [0, index * 50]) }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-lg mb-4">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <Avatar className="mr-4">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

// Main component to showcase all Testimonial components
export default function ModernTestimonialComponents() {
    return (
        <>
            <div className="py-5">
                <Title name="Screen Testimonial Layout " />
            </div>
            <div className="container mx-auto py-12 space-y-24">
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Carousel Testimonial</h2>
                    <CarouselTestimonial />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Grid Testimonial</h2>
                    <GridTestimonial />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Star Rating Testimonial</h2>
                    <StarRatingTestimonial />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Moving Avatar Testimonial</h2>
                    <MovingAvatarTestimonial />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Parallax Testimonial</h2>
                    <ParallaxTestimonial />
                </section>
            </div>
        </>
    )
}