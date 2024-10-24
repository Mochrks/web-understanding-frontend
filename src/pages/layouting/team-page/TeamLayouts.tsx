'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Shuffle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Dummy data for team members
const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
    { id: 2, name: 'Jane Smith', role: 'CTO', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
    { id: 3, name: 'Mike Johnson', role: 'Designer', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
    { id: 4, name: 'Emily Brown', role: 'Developer', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
    { id: 5, name: 'Alex Lee', role: 'Marketing', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
    { id: 6, name: 'Sarah Wilson', role: 'HR Manager', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
    { id: 7, name: 'Tom Harris', role: 'Product Manager', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
    { id: 8, name: 'Lisa Chen', role: 'UX Researcher', image: 'https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg' },
]

const LayoutSelector = ({ currentLayout, setCurrentLayout }) => {
    const layouts = ['Grid', 'Carousel', 'Masonry', 'Horizontal', 'Stacked', 'Hexagon', 'Timeline', 'Orbit', 'Pyramid', 'Wave']

    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {layouts.map((layout) => (
                <Button
                    key={layout}
                    variant={currentLayout === layout ? "default" : "outline"}
                    onClick={() => setCurrentLayout(layout)}
                    className="mb-2"
                >
                    {layout}
                </Button>
            ))}
        </div>
    )
}

const GridLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
            {teamMembers.map((member) => (
                <motion.div
                    key={member.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Card className="overflow-hidden">
                        <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-48 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
}

const CarouselLayout = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextMember = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }

    const prevMember = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative overflow-hidden"
        >
            <div className="flex items-center justify-center h-[400px]">
                <Button variant="outline" size="icon" className="absolute left-4 z-10" onClick={prevMember}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, x: 400 }}
                        animate={{ opacity: 1.4, x: 0 }}
                        exit={{ opacity: 0, x: -400 }}
                        transition={{ duration: 0.9 }}
                    >
                        <Avatar className="w-64 h-64">
                            <AvatarImage src={teamMembers[currentIndex].image} alt={teamMembers[currentIndex].name} />
                            <AvatarFallback>{teamMembers[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-2xl font-semibold mt-4">{teamMembers[currentIndex].name}</h3>
                        <p className="text-xl text-muted-foreground">{teamMembers[currentIndex].role}</p>
                    </motion.div>
                </AnimatePresence>
                <Button variant="outline" size="icon" className="absolute right-4 z-10" onClick={nextMember}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </motion.div>
    )
}

const MasonryLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-8"
        >
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.id}
                    className="break-inside-avoid mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="overflow-hidden">
                        <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-muted-foreground">{member.role}</p>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
}

const HorizontalScrollLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative overflow-x-auto"
        >
            <div className="flex space-x-8 pb-4">
                {teamMembers.map((member) => (
                    <motion.div
                        key={member.id}
                        className="flex-shrink-0 w-64"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Card className="overflow-hidden">
                            <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-48 object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

const StackedLayout = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-[500px]"
        >
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.id}
                    className="absolute top-0 left-0 w-full"
                    initial={{ scale: 0.8, y: index * 40 }}
                    animate={{
                        scale: index === activeIndex ? 1 : 0.8,
                        y: index * 40 - (index === activeIndex ? 40 : 0),
                        zIndex: teamMembers.length - index
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setActiveIndex(index)}
                >
                    <Card className="overflow-hidden cursor-pointer">
                        <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-muted-foreground">{member.role}</p>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
}

const HexagonLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center items-center gap-8"
        >
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.id}
                    className="relative w-48 h-48"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="absolute inset-0 bg-primary [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] shadow-lg" />
                    <motion.div
                        className="absolute inset-2 bg-background [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex flex-col items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Avatar className="w-20 h-20">
                            <AvatarImage src={member.image} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm font-semibold mt-2">{member.name}</h3>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    )
}

const TimelineLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
        >
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary" />
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.id}
                    className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                        <Card className="overflow-hidden">
                            <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-48 object-cover"
                                whileHover={{ scale: 1.05 }}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                        </Card>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full z-10" />
                </motion.div>
            ))}
        </motion.div>
    )
}

const OrbitLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-[600px]"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                    <Shuffle className="w-16 h-16 text-primary-foreground" />
                </div>
            </div>
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.id}
                    className="absolute"
                    style={{
                        width: '120px',
                        height: '120px',
                        left: 'calc(50% - 60px)',
                        top: 'calc(50% - 60px)',
                    }}
                    initial={{ rotate: index * 45 }}
                    animate={{
                        rotate: [index * 45, 360 + index * 45],
                        transition: {
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear"
                        }
                    }}
                >
                    <motion.div
                        className="absolute"
                        style={{
                            width: '120px',
                            height: '120px',
                            transformOrigin: '60px 60px',
                        }}
                        animate={{
                            rotate: [0, -360],
                            transition: {
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear"
                            }
                        }}
                    >
                        <Avatar className="w-full  h-full">
                            <AvatarImage src={member.image} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    )
}

const PyramidLayout = () => {
    const rows = [
        [teamMembers[0]],
        [teamMembers[1], teamMembers[2]],
        [teamMembers[3], teamMembers[4], teamMembers[5]],
        [teamMembers[6], teamMembers[7]]
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
        >
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-8">
                    {row.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="mx-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (rowIndex * 0.2) + (index * 0.1) }}
                        >
                            <Avatar className="w-24 h-24 md:w-32 md:h-32">
                                <AvatarImage src={member.image} alt={member.name} />
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="text-center mt-2">
                                <h3 className="text-sm font-semibold">{member.name}</h3>
                                <p className="text-xs text-muted-foreground">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ))}
        </motion.div>
    )
}

const WaveLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center"
        >
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.id}
                    className="m-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        y: {
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        },
                    }}
                    style={{ y: Math.sin(index) * 20 }}
                >
                    <Avatar className="w-24 h-24">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-center mt-2">
                        <h3 className="text-sm font-semibold">{member.name}</h3>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default function ModernTeamLayouts() {
    const [currentLayout, setCurrentLayout] = useState('Grid')

    return (
        <div className="bg-background min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Our Amazing Team</h1>
                <LayoutSelector currentLayout={currentLayout} setCurrentLayout={setCurrentLayout} />
                <AnimatePresence mode="wait">
                    {currentLayout === 'Grid' && <GridLayout key="grid" />}
                    {currentLayout === 'Carousel' && <CarouselLayout key="carousel" />}
                    {currentLayout === 'Masonry' && <MasonryLayout key="masonry" />}
                    {currentLayout === 'Horizontal' && <HorizontalScrollLayout key="horizontal" />}
                    {currentLayout === 'Stacked' && <StackedLayout key="stacked" />}
                    {currentLayout === 'Hexagon' && <HexagonLayout key="hexagon" />}
                    {currentLayout === 'Timeline' && <TimelineLayout key="timeline" />}
                    {currentLayout === 'Orbit' && <OrbitLayout key="orbit" />}
                    {currentLayout === 'Pyramid' && <PyramidLayout key="pyramid" />}
                    {currentLayout === 'Wave' && <WaveLayout key="wave" />}
                </AnimatePresence>
            </div>
        </div>
    )
}