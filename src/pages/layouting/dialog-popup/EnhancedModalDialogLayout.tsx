import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Title } from '@/components/demo/Title'

type ModalType =
    | 'default'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'confirmation'
    | 'form'
    | 'image'
    | 'video'
    | 'fullscreen'
    | 'sidebar-right'
    | 'sidebar-left'
    | 'tooltip'
    | 'popover'
    | 'drawer-bottom'
    | 'drawer-top'
    | 'notification'
    | 'loading'
    | 'progress'
    | 'carousel'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    type: ModalType
    title: string
    content: React.ReactNode
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, title, content }) => {
    const getModalClass = () => {
        switch (type) {
            case 'fullscreen':
                return 'fixed inset-0 w-full h-full bg-white'
            case 'sidebar-right':
            case 'sidebar-left':
                return 'fixed top-0 h-full w-80 bg-white shadow-lg'
            case 'drawer-bottom':
            case 'drawer-top':
                return 'fixed left-0 right-0 h-2/3 bg-white rounded-3xl shadow-lg'
            case 'tooltip':
            case 'popover':
                return 'bg-white rounded-lg shadow-xl p-4 max-w-xs'
            default:
                return 'bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto'
        }
    }

    const getModalAnimation = () => {
        switch (type) {
            case 'sidebar-right':
                return {
                    hidden: { x: '100%', opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
                    exit: { x: '100%', opacity: 0 }
                }
            case 'sidebar-left':
                return {
                    hidden: { x: '-100%', opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
                    exit: { x: '-100%', opacity: 0 }
                }
            case 'drawer-bottom':
                return {
                    hidden: { y: '100%', opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
                    exit: { y: '100%', opacity: 0 }
                }
            case 'drawer-top':
                return {
                    hidden: { y: '-100%', opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
                    exit: { y: '-100%', opacity: 0 }
                }
            case 'tooltip':
            case 'popover':
                return {
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 30 } },
                    exit: { scale: 0.8, opacity: 0 }
                }
            default:
                return {
                    hidden: { scale: 0.8, opacity: 0, y: 20 },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                            staggerChildren: 0.07,
                            delayChildren: 0.2
                        }
                    },
                    exit: { scale: 0.8, opacity: 0, y: 20 }
                }
        }
    }

    const getModalPosition = () => {
        switch (type) {
            case 'sidebar-right':
                return 'right-0'
            case 'sidebar-left':
                return 'left-0'
            case 'drawer-bottom':
                return 'bottom-0'
            case 'drawer-top':
                return 'top-0'
            default:
                return ''
        }
    }

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariants}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
                    <motion.div
                        className={`relative z-10 ${getModalClass()} ${getModalPosition()}`}
                        variants={getModalAnimation()}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.div variants={childVariants} className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">{title}</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </motion.div>
                        <motion.div variants={childVariants}>{content}</motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default function EnhancedModalDialogLayout() {
    const [openModal, setOpenModal] = useState<ModalType | null>(null)

    const modalTypes: ModalType[] = [
        'default',
        'info',
        'success',
        'warning',
        'error',
        'confirmation',
        'form',
        'image',
        'video',
        'fullscreen',
        'sidebar-right',
        'sidebar-left',
        'tooltip',
        'popover',
        'drawer-bottom',
        'drawer-top',
        'notification',
        'loading',
        'progress',
        'carousel'
    ]

    const getModalContent = (type: ModalType) => {
        switch (type) {
            case 'info':
                return <p className="text-blue-600">This is an informational message with a fancy entrance animation.</p>
            case 'success':
                return (
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p className="text-green-600">Operation completed successfully with style!</p>
                    </div>
                )
            case 'warning':
                return (
                    <div className="flex items-center bg-yellow-100 p-4 rounded-lg">
                        <svg className="w-6 h-6 text-yellow-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <p className="text-yellow-700">Warning: This action cannot be undone. Proceed with caution!</p>
                    </div>
                )
            case 'error':
                return (
                    <div className="bg-red-100 p-4 rounded-lg">
                        <p className="text-red-600 font-semibold">An error occurred. Please try again.</p>
                        <p className="text-red-500 mt-2">If the problem persists, contact support.</p>
                    </div>
                )
            case 'confirmation':
                return (
                    <div>
                        <p className="mb-4">Are you absolutely sure you want to proceed with this action?</p>
                        <div className="flex justify-end space-x-2">
                            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onClick={() => setOpenModal(null)}>Cancel</button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Confirm</button>
                        </div>
                    </div>
                )
            case 'form':
                return (
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Submit</button>
                    </form>
                )
            case 'image':
                return (
                    <div className="space-y-4">
                        <img src="https://picsum.photos/400/300" alt="Random" className="w-full rounded-lg shadow-lg" />
                        <p className="text-gray-600">A beautiful random image for your viewing pleasure.</p>
                    </div>
                )
            case 'video':
                return (
                    <div className="space-y-4">
                        <video controls className="w-full rounded-lg shadow-lg">
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="text-gray-600">Enjoy this short video clip!</p>
                    </div>
                )
            case 'fullscreen':
                return (
                    <div className="h-full flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Fullscreen Mode</h1>
                        <p className="text-xl text-gray-600">This modal takes up the entire screen for an immersive experience.</p>
                    </div>
                )
            case 'sidebar-right':
            case 'sidebar-left':
                return (
                    <div className="h-full flex flex-col">
                        <h3 className="text-lg font-semibold mb-4">Sidebar Navigation</h3>
                        <nav>
                            <ul className="space-y-2">
                                {['Home', 'Profile', 'Settings', 'Help'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-100">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )
            case 'tooltip':
                return <p className="text-sm">This is a helpful tooltip with additional information.</p>
            case 'popover':
                return (
                    <div className="space-y-2">
                        <h3 className="font-semibold">Popover Title</h3>
                        <p className="text-sm">This is a popover with more detailed content and options.</p>
                        <button className="text-blue-500 hover:underline">Learn More</button>
                    </div>
                )
            case 'drawer-bottom':
            case 'drawer-top':
                return (
                    <div className="h-full flex flex-col">
                        <h3 className="text-lg font-semibold mb-4">Drawer Content</h3>
                        <p className="mb-4">This drawer can be used for additional options or information.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Option 1</button>
                            <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">Option 2</button>
                            <button className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">Option 3</button>
                            <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">Option 4</button>
                        </div>
                    </div>
                )
            case 'notification':
                return (
                    <div className="flex items-center bg-green-100 p-4 rounded-lg">
                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-green-700">Your message has been sent successfully!</p>
                    </div>
                )
            case 'loading':
                return (
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                        <p className="mt-4 text-gray-600">Loading... Please wait.</p>
                    </div>
                )
            case 'progress':
                return (
                    <div className="space-y-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-gray-600">Uploading... 75% complete</p>
                    </div>
                )
            case 'carousel':
                return (
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <img src="https://picsum.photos/800/450" alt="Carousel" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                            <button className="bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors">
                                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>
                            <button className="bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors">
                                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            default:
                return <p>This is the default modal content with a smooth entrance animation.</p>
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="py-5">
                <Title name="Screen Modal/PopUp Animations " />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {modalTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setOpenModal(type)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Open {type.replace('-', ' ')} modal
                    </button>
                ))}
            </div>
            {openModal && (
                <Modal
                    isOpen={true}
                    onClose={() => setOpenModal(null)}
                    type={openModal}
                    title={`${openModal.replace('-', ' ').charAt(0).toUpperCase() + openModal.replace('-', ' ').slice(1)} Modal`}
                    content={getModalContent(openModal)}
                />
            )}
        </div>
    )
}