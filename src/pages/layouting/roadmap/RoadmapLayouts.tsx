'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Dummy data for roadmap items
const roadmapItems = [
    { id: 1, title: 'Project Initiation', date: 'Q1 2024', status: 'completed', description: 'Kick-off the project and define initial scope.' },
    { id: 2, title: 'Design Phase', date: 'Q2 2024', status: 'in-progress', description: 'Create wireframes and design mockups.' },
    { id: 3, title: 'Development Sprint 1', date: 'Q3 2024', status: 'upcoming', description: 'Begin core feature development.' },
    { id: 4, title: 'User Testing', date: 'Q4 2024', status: 'upcoming', description: 'Conduct user testing and gather feedback.' },
    { id: 5, title: 'Development Sprint 2', date: 'Q1 2025', status: 'upcoming', description: 'Implement feedback and additional features.' },
    { id: 6, title: 'Beta Launch', date: 'Q2 2025', status: 'upcoming', description: 'Release beta version to select users.' },
    { id: 7, title: 'Final Testing', date: 'Q3 2025', status: 'upcoming', description: 'Perform final round of testing and bug fixes.' },
    { id: 8, title: 'Official Launch', date: 'Q4 2025', status: 'upcoming', description: 'Launch the product to the public.' },
]

// Component 1: Vertical Timeline with Animated Progress
const VerticalTimeline = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 0))
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Product Roadmap</h2>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
                <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 origin-top"
                    style={{ height: `${progress}%` }}
                />
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600">{item.date}</p>
                            <p className="mt-2">{item.description}</p>
                        </div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 2: Horizontal Scrolling Roadmap with Milestones
const HorizontalScrollingRoadmap = () => {
    const scrollRef = useRef(null)

    const handleScroll = (direction) => {
        const { current } = scrollRef
        if (current) {
            const scrollAmount = direction === 'left' ? -300 : 300
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Feature Roadmap</h2>
            <div className="relative">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                    onClick={() => handleScroll('left')}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                    onClick={() => handleScroll('right')}
                >
                    <ChevronRight size={24} />
                </button>
                <div ref={scrollRef} className="overflow-x-scroll hide-scrollbar">
                    <div className="flex space-x-8 p-4">
                        {roadmapItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.date}</p>
                                <p className="mt-2 text-sm">{item.description}</p>
                                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                                    <motion.div
                                        className="h-full bg-green-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: item.status === 'completed' ? '100%' : item.status === 'in-progress' ? '50%' : '0%' }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    )
}

// Component 3: Circular Roadmap with Rotating Sections
const CircularRoadmap = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % roadmapItems.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Circular Product Roadmap</h2>
            <div className="relative w-96 h-96 mx-auto">
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="absolute w-full h-full flex items-center justify-center"
                        initial={{ rotate: index * 45 }}
                        animate={{ rotate: index * 45 - activeIndex * 45 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className={`w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer ${index === activeIndex ? 'ring-4 ring-blue-500' : ''
                                }`}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <p className="text-center font-semibold">{item.title}</p>
                        </motion.div>
                    </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{roadmapItems[activeIndex].title}</h3>
                        <p className="text-gray-600">{roadmapItems[activeIndex].date}</p>
                        <p className="mt-2">{roadmapItems[activeIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Component 4: Grid-based Roadmap with Flip Cards
const GridRoadmap = () => {
    const [flipped, setFlipped] = useState({})

    const handleFlip = (id) => {
        setFlipped((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Feature Grid Roadmap</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {roadmapItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative h-64 cursor-pointer"
                        onClick={() => handleFlip(item.id)}
                        whileHover={{ scale: 1.05 }}
                    >
                        <AnimatePresence>
                            {!flipped[item.id] ? (
                                <motion.div
                                    className="absolute inset-0 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                                    initial={{ rotateY: 180 }}
                                    animate={{ rotateY: 0 }}
                                    exit={{ rotateY: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">{item.date}</p>
                                    <div className={`w-full h-2 rounded-full ${item.status === 'completed' ? 'bg-green-500' : item.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                                        }`}></div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="absolute inset-0 bg-blue-500 text-white rounded-lg shadow-md p-4 flex flex-col justify-center"
                                    initial={{ rotateY: 180 }}
                                    animate={{ rotateY: 0 }}
                                    exit={{ rotateY: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p>{item.description}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 5: 3D Perspective Roadmap
const PerspectiveRoadmap = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">3D Roadmap Perspective</h2>
            <div className="relative h-[800px] perspective-800">
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="absolute w-full bg-white rounded-lg shadow-md p-6 cursor-pointer"
                        style={{
                            top: `${index * 80}px`,
                            zIndex: hoveredIndex === index ? 10 : roadmapItems.length - index,
                        }}
                        initial={{ rotateX: 45, scale: 1 - index * 0.09 }}
                        animate={{
                            rotateX: hoveredIndex === index ? 0 : 45,
                            scale: hoveredIndex === index ? 1 : 1 - index * 0.05,
                            y: hoveredIndex === index ? -20 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                    >
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.date}</p>
                        <p className="mt-2">{item.description}</p>
                        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: item.status === 'completed' ? '100%' : item.status === 'in-progress' ? '50%' : '0%' }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default function RoadmapLayouts() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <VerticalTimeline />
            <HorizontalScrollingRoadmap />
            <CircularRoadmap />
            <GridRoadmap />
            <PerspectiveRoadmap />
        </div>
    )
}