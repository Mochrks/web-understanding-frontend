import React, { useState, useEffect } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Title } from '@/components/demo/Title'

// 1. Glitch Text Animation
const GlitchText = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <motion.h1
                className="text-8xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="relative inline-block">
                    <motion.span
                        className="absolute top-0 left-0 h-full w-full bg-red-500"
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.span
                        className="absolute top-0 left-0 h-full w-full bg-blue-500"
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.1 }}
                    />
                    404
                </span>
            </motion.h1>
            <motion.p
                className="text-2xl mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Oops! Page not found
            </motion.p>
            <Button>Go Home</Button>
        </div>
    )
}

// 2. Interactive Illustration with Particles
const InteractiveIllustration = () => {


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {

        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
            <motion.h1 className="text-8xl font-bold mb-4 relative z-10">404</motion.h1>
            <motion.p className="text-2xl mb-8 relative z-10">Page not found</motion.p>
            <Button className="relative z-10">Return Home</Button>

        </div>
    )
}

// 3. SVG Path Animation
const SVGPathAnimation = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <svg width="200" height="200" viewBox="0 0 100 100">
                <motion.path
                    d="M10 90 L50 10 L90 90 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg>
            <motion.h1
                className="text-6xl font-bold mt-8 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                404
            </motion.h1>
            <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                The page you're looking for doesn't exist
            </motion.p>
            <Button variant="outline">Go Back</Button>
        </div>
    )
}

// 4. Parallax Effect
const ParallaxEffect = () => {
    const y = useMotionValue(0)
    const background = useTransform(y, [0, -300], ["#3498db", "#e74c3c"])
    const text1Y = useTransform(y, [0, -300], [0, -150])
    const text2Y = useTransform(y, [0, -300], [0, -100])
    const text3Y = useTransform(y, [0, -300], [0, -50])

    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background }}
            drag="y"
            dragConstraints={{ top: -300, bottom: 0 }}
            onDrag={(_, info) => y.set(info.point.y)}
        >
            <motion.h1
                className="text-9xl font-bold text-white mb-4"
                style={{ y: text1Y }}
            >
                4
            </motion.h1>
            <motion.h1
                className="text-9xl font-bold text-white mb-4"
                style={{ y: text2Y }}
            >
                0
            </motion.h1>
            <motion.h1
                className="text-9xl font-bold text-white mb-8"
                style={{ y: text3Y }}
            >
                4
            </motion.h1>
            <p className="text-2xl text-white mb-8">Drag to explore</p>
            <Button variant="secondary">Return Home</Button>
        </motion.div>
    )
}

// 5. Animated Maze
const AnimatedMaze = () => {
    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 2, ease: "easeInOut" } }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <svg width="300" height="300" viewBox="0 0 300 300">
                <motion.path
                    d="M50 50 L250 50 L250 250 L50 250 L50 50 M50 150 L150 150 M150 50 L150 150 M250 150 L150 150"
                    stroke="#2563eb"
                    strokeWidth="10"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="10"
                    fill="#ef4444"
                    animate={{
                        cx: [50, 250, 250, 150, 150, 250],
                        cy: [50, 50, 250, 250, 150, 150],
                    }}
                    transition={{ duration: 4, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 0.8, 1], repeat: Infinity }}
                />
            </svg>
            <h1 className="text-4xl font-bold mt-8 mb-4">404: Lost in the Maze</h1>
            <p className="text-xl mb-8">Let's find our way back together</p>
            <Button>Exit Maze</Button>
        </div>
    )
}

// 6. Typewriter Effect
const TypewriterEffect = () => {
    const text = ""
    const [displayText, setDisplayText] = useState("404:Pages Not Found")

    useEffect(() => {
        let i = 0
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i))
                i++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        return () => clearInterval(typingInterval)
    }, [])

    return (

        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-6xl font-mono mb-8 relative">
                {displayText}
                <span className={`inline-block w-1 h-10 bg-white ml-2 ${displayText.length === text.length ? '' : 'animate-blink'}`}></span>
            </h1>
            <p className="text-xl mb-8">The page you're looking for has gone missing.</p>
            <Button variant="outline" className='text-black'>Return to Safety</Button>
        </div>

    )
}



// 7. 3D Flip Card
const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-64 h-96 [perspective:1000px]" onClick={() => setIsFlipped(!isFlipped)}>
                <motion.div
                    className="w-full h-full [transform-style:preserve-3d] cursor-pointer"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col items-center justify-center rounded-lg [backface-visibility:hidden]">
                        <h1 className="text-6xl font-bold mb-4">404</h1>
                        <p className="text-xl">Page Not Found</p>
                    </div>
                    <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col items-center justify-center rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <h2 className="text-2xl font-bold mb-4">Oops!</h2>
                        <p className="text-center mb-4">The page you're looking for doesn't exist.</p>
                        <Button>Go Home</Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

// 8. Interactive Search
const InteractiveSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSearching(true)
        setTimeout(() => setIsSearching(false), 2000)
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <Card className="w-96">
                <CardContent className="pt-6">
                    <h1 className="text-4xl font-bold mb-4 text-center">404: Not Found</h1>
                    <p className="text-center mb-6">Let's find what you're looking for</p>
                    <form onSubmit={handleSearch} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="search">Search</Label>
                            <Input
                                id="search"
                                type="text"
                                placeholder="Enter your search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSearching}>
                            {isSearching ? "Searching..." : "Search"}
                        </Button>
                    </form>
                    {isSearching && (
                        <motion.div
                            className="mt-4 text-center text-blue-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            Searching for "{searchTerm}"...
                        </motion.div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

// Main component to showcase all 404 Error components
export default function ModernErrorComponents() {
    const [currentComponent, setCurrentComponent] = useState(0)
    const components = [
        GlitchText,
        InteractiveIllustration,
        SVGPathAnimation,
        ParallaxEffect,
        AnimatedMaze,
        TypewriterEffect,
        FlipCard,
        InteractiveSearch,
    ]

    return (
        <>
            <div className="py-5">
                <Title name="Screen 404 Error Layout " />
            </div>
            <div className="min-h-screen">
                {components.map((Component, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentComponent === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: currentComponent === index ? 'block' : 'none' }}
                    >
                        <Component />
                    </motion.div>
                ))}
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {components.map((_, index) => (
                        <Button
                            key={index}
                            variant={currentComponent === index ? "default" : "outline"}
                            onClick={() => setCurrentComponent(index)}
                        >
                            {index + 1}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    )
}