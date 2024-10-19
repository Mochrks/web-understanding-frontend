'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react'

// Dummy data for event items
const eventItems = [
    {
        id: 1,
        title: 'TechConf 2024',
        date: '2024-06-15',
        time: '09:00 AM - 05:00 PM',
        location: 'San Francisco Convention Center',
        description: 'Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops.',
        image: 'https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg',
        schedule: [
            { time: '09:00 AM', title: 'Registration and Breakfast' },
            { time: '10:00 AM', title: 'Keynote: The Future of AI' },
            { time: '11:30 AM', title: 'Workshop: Building Scalable Apps' },
            { time: '01:00 PM', title: 'Lunch Break' },
            { time: '02:00 PM', title: 'Panel: Cybersecurity Challenges' },
            { time: '03:30 PM', title: 'Networking Session' },
            { time: '05:00 PM', title: 'Closing Remarks' },
        ],
    },
    {
        id: 2,
        title: 'Green Earth Expo',
        date: '2024-07-22',
        time: '10:00 AM - 06:00 PM',
        location: 'Central Park, New York',
        description: 'Explore sustainable living solutions and learn about the latest environmental technologies at this eco-friendly event.',
        image: 'https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg',
        schedule: [
            { time: '10:00 AM', title: 'Exhibition Opens' },
            { time: '11:00 AM', title: 'Seminar: Renewable Energy' },
            { time: '01:00 PM', title: 'Eco-friendly Cooking Demo' },
            { time: '03:00 PM', title: 'Panel: Climate Action' },
            { time: '05:00 PM', title: 'Closing Ceremony' },
        ],
    },
    {
        id: 3,
        title: 'Global Business Forum',
        date: '2024-09-10',
        time: '08:30 AM - 04:30 PM',
        location: 'London Business Center',
        description: 'Connect with industry leaders and gain insights into emerging market trends at this premier business networking event.',
        image: 'https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg',
        schedule: [
            { time: '08:30 AM', title: 'Registration and Networking' },
            { time: '09:30 AM', title: 'Opening Address' },
            { time: '10:30 AM', title: 'Keynote: Global Economic Outlook' },
            { time: '12:00 PM', title: 'Lunch and Networking' },
            { time: '01:30 PM', title: 'Panel: Innovation in Finance' },
            { time: '03:00 PM', title: 'Breakout Sessions' },
            { time: '04:30 PM', title: 'Closing Remarks' },
        ],
    },
]

// Component 1: Modern Card Layout
const ModernCardLayout = () => {
    return (
        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventItems.map((event) => (
                        <motion.div
                            key={event.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span>{event.location}</span>
                                </div>
                                <p className="text-gray-700 mb-4">{event.description}</p>
                                <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">
                                    Register Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Component 2: Timeline Layout
const TimelineLayout = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Event Timeline</h1>
                <div className="relative">
                    {eventItems.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className="mb-8 flex justify-between items-center w-full"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={`w-6/12 ${index % 2 === 0 ? 'text-right px-5' : 'order-1 px-5'}`}>
                                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                                <p className="text-gray-600 mb-2">{event.date}</p>
                                <p className="text-gray-700">{event.description}</p>
                            </div>

                            <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : ''}`}>
                                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
                            </div>
                        </motion.div>
                    ))}
                    <div className="absolute h-full w-1 bg-indigo-300 left-1/2 transform -translate-x-1/2 top-0"></div>
                </div>
            </div>
        </div>
    )
}

// Component 3: Interactive Schedule Layout
const InteractiveScheduleLayout = () => {
    const [selectedEvent, setSelectedEvent] = useState(eventItems[0])
    const [expandedSessions, setExpandedSessions] = useState({})

    const toggleSession = (index) => {
        setExpandedSessions((prev) => ({ ...prev, [index]: !prev[index] }))
    }

    return (
        <div className="bg-gradient-to-r from-blue-100 to-teal-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Event Schedule</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">Select Event</h2>
                            {eventItems.map((event) => (
                                <motion.button
                                    key={event.id}
                                    className={`w-full text-left p-4 rounded-lg mb-2 ${selectedEvent.id === event.id ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                    onClick={() => setSelectedEvent(event)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {event.title}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <motion.div
                            key={selectedEvent.id}
                            className="bg-white rounded-lg shadow-lg p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-3xl font-semibold mb-4">{selectedEvent.title}</h2>
                            <div className="flex items-center text-gray-600 mb-2">
                                <Calendar className="w-5 h-5 mr-2" />
                                <span>{selectedEvent.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>{selectedEvent.location}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Schedule</h3>
                            {selectedEvent.schedule.map((session, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-4 bg-gray-50 rounded-lg p-4 cursor-pointer"
                                    onClick={() => toggleSession(index)}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">{session.time}</p>
                                            <p>{session.title}</p>
                                        </div>
                                        {expandedSessions[index] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </div>
                                    <AnimatePresence>
                                        {expandedSessions[index] && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 text-gray-600"
                                            >
                                                <p>Additional details about this session would go here.</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Component 4: Immersive Hero Layout
const ImmersiveHeroLayout = () => {
    const [activeTab, setActiveTab] = useState('about')

    return (
        <div className="min-h-screen pt-20">
            <h1 className="text-4xl font-bold text-center mb-12">Event Heros</h1>
            <div className="relative h-screen">
                <img src={eventItems[0].image} alt={eventItems[0].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {eventItems[0].title}
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {eventItems[0].date} | {eventItems[0].location}
                        </motion.p>
                        <motion.button
                            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register Now
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <button
                            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('about')}
                        >
                            About
                        </button>
                        <button
                            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'schedule' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('schedule')}
                        >
                            Schedule
                        </button>
                        <button
                            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'speakers' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('speakers')}
                        >
                            Speakers
                        </button>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === 'about' && (
                                <div className="max-w-2xl mx-auto">
                                    <h2 className="text-3xl font-bold mb-4">About the Event</h2>
                                    <p className="text-gray-700">{eventItems[0].description}</p>
                                </div>
                            )}
                            {activeTab === 'schedule' && (
                                <div className="max-w-2xl mx-auto">
                                    <h2 className="text-3xl font-bold mb-4">Event Schedule</h2>
                                    {eventItems[0].schedule.map((session, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="font-semibold">{session.time}</p>
                                            <p>{session.title}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'speakers' && (
                                <div className="max-w-2xl mx-auto">
                                    <h2 className="text-3xl font-bold mb-4">Featured Speakers</h2>
                                    <p className="text-gray-700">Information about speakers would go here.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

// Component 5: Multi-Event Dashboard
const MultiEventDashboard = () => {
    const [selectedEvent, setSelectedEvent] = useState(null)

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Event Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                            {eventItems.map((event) => (
                                <motion.div
                                    key={event.id}
                                    className={`p-4 rounded-lg mb-4 cursor-pointer ${selectedEvent?.id === event.id ? 'bg-blue-100' : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                    onClick={() => setSelectedEvent(event)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <h3 className="font-semibold">{event.title}</h3>
                                    <p className="text-sm text-gray-600">{event.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        {selectedEvent ? (
                            <motion.div
                                key={selectedEvent.id}
                                className="bg-white rounded-lg shadow-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-3xl font-semibold mb-4">{selectedEvent.title}</h2>
                                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    <span>{selectedEvent.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span>{selectedEvent.time}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    <span>{selectedEvent.location}</span>
                                </div>
                                <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                                <h3 className="text-xl font-semibold mb-4">Schedule</h3>
                                {selectedEvent.schedule.map((session, index) => (
                                    <div key={index} className="mb-2">
                                        <span className="font-semibold">{session.time}</span> - {session.title}
                                    </div>
                                ))}
                                <div className="mt-8 flex justify-between items-center">
                                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                                        Register
                                    </button>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gray-600" />
                                        <span className="text-gray-600">250 attendees</span>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center h-full">
                                <p className="text-xl text-gray-500">Select an event to view details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function EventLayouts() {
    return (
        <div>
            <ModernCardLayout />
            <TimelineLayout />
            <InteractiveScheduleLayout />
            <ImmersiveHeroLayout />
            <MultiEventDashboard />
        </div>
    )
}