'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Dummy data for team members
const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO', image: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png' },
    { id: 2, name: 'Jane Smith', role: 'CTO', image: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png' },
    { id: 3, name: 'Mike Johnson', role: 'Designer', image: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png' },
    { id: 4, name: 'Emily Brown', role: 'Developer', image: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png' },
    { id: 5, name: 'Alex Lee', role: 'Marketing', image: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png' },
    { id: 6, name: 'Sarah Wilson', role: 'HR Manager', image: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png' },
]

// Component 1: Grid Layout with Hover Effect
const GridLayout = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <motion.div
                        key={member.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 2: Circular Layout with Rotation
const CircularLayout = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Experts</h2>
            <div className="flex flex-wrap justify-center items-center">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.id}
                        className="m-4"
                        initial={{ rotate: index * 60 }}
                        animate={{ rotate: 360 + index * 60 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <motion.div
                            className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </motion.div>
                        {/* <div className="text-center mt-2">
                            <h3 className="font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.role}</p>
                        </div> */}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 3: Masonry Layout with Fade-in
const MasonryLayout = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Talented Team</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.id}
                        className="break-inside-avoid mb-8 bg-white rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 4: Horizontal Scroll with Parallax
const HorizontalScrollLayout = () => {
    const [scrollX, setScrollX] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollX(window.scrollX)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative h-screen overflow-hidden">
            <h2 className="text-4xl font-bold text-center py-8 bg-white sticky top-0 z-10">Our Innovative Team</h2>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="inline-block px-3"
                            style={{
                                transform: `translateX(${scrollX * 0.1 * (index + 1)}px)`,
                            }}
                        >
                            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <img src={member.image} alt={member.name} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    )
}

// Component 5: 3D Cube Layout
const CubeLayout = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        const x = (clientY / innerHeight) * 360 - 180
        const y = (clientX / innerWidth) * 360 - 180
        setRotation({ x, y })
    }

    return (
        <div className="container mx-auto px-4 py-16" onMouseMove={handleMouseMove}>
            <h2 className="text-4xl font-bold text-center mb-12">Team Cube</h2>
            <div className="flex justify-center items-center h-[600px] perspective-1000">
                <motion.div
                    className="w-64 h-64 relative transform-style-3d"
                    animate={{ rotateX: rotation.x, rotateY: rotation.y }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    {teamMembers.slice(0, 6).map((member, index) => (
                        <div
                            key={member.id}
                            className="absolute w-full h-full bg-white shadow-lg flex flex-col justify-center items-center"
                            style={{
                                transform: `rotateY(${index * 60}deg) translateZ(150px)`,
                            }}
                        >
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4" />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default function TeamLayouts() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <GridLayout />
            <CircularLayout />
            <MasonryLayout />
            <HorizontalScrollLayout />
            <CubeLayout />
        </div>
    )
}