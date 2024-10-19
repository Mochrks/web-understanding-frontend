'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertTriangle, CheckCircle, Info, HelpCircle, Bell, Settings, User, Mail, Lock } from 'lucide-react'

// Helper component for the backdrop
const Backdrop = ({ children, onClick }) => (
    <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </motion.div>
)

// 1. Basic Modal
const BasicModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Basic Modal</h2>
                        <p className="mb-4">This is a simple modal with basic animation.</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 2. Slide-in Modal
const SlideInModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Slide-in Modal</h2>
                        <p className="mb-4">This modal slides in from the right side of the screen.</p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            onClick={onClose}
                        >
                            Got it
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 3. Fade-in Modal with Blur Effect
const FadeInBlurModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Fade-in Blur Modal</h2>
                        <p className="mb-4">This modal fades in with a blur effect, creating a frosted glass appearance.</p>
                        <button
                            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 4. Expanding Circle Modal
const ExpandingCircleModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-full p-6 flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ width: 0, height: 0, opacity: 0 }}
                        animate={{ width: '300px', height: '300px', opacity: 1 }}
                        exit={{ width: 0, height: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center">Expanding Circle</h2>
                        <p className="mb-4 text-center">This modal expands from a central point.</p>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 5. Flip Card Modal
const FlipCardModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: 90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Flip Card Modal</h2>
                        <p className="mb-4">This modal flips into view like a card being turned over.</p>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                            onClick={onClose}
                        >
                            Flip Back
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 6. Bouncing Modal
const BouncingModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: -300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 300, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Bouncing Modal</h2>
                        <p className="mb-4">This modal bounces into view from the top of the screen.</p>
                        <button
                            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                            onClick={onClose}
                        >
                            Bounce Out
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 7. Rotating Modal
const RotatingModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ rotate: 180, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -180, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Rotating Modal</h2>
                        <p className="mb-4">This modal rotates into view while scaling up.</p>
                        <button
                            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                            onClick={onClose}
                        >
                            Spin Away
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 8. Elastic Modal
const ElasticModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Elastic Modal</h2>
                        <p className="mb-4">This modal scales with an elastic bouncing effect.</p>
                        <button
                            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                            onClick={onClose}
                        >
                            Snap Shut
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 9. Swipe-to-dismiss Modal
const SwipeToDismissModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.9}
                        dragSnapToOrigin={true}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 200) {
                                onClose()
                            }
                        }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Swipe-to-dismiss Modal</h2>
                        <p className="mb-4">Swipe this modal down to dismiss it, or use the button below.</p>
                        <button
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// 10. Multi-step Modal
const MultiStepModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1)
    const totalSteps = 3

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1)
        } else {
            onClose()
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Multi-step Modal</h2>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                {[1, 2, 3].map((s) => (
                                    <div
                                        key={s}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center ${s === step ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                            }`}
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                            <div className="h-2 bg-gray-200 rounded">
                                <motion.div
                                    className="h-full bg-blue-500 rounded"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                                />
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                {step === 1 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Step 1: Introduction</h3>
                                        <p>Welcome to the multi-step modal! Click next to continue.</p>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Step 2: Details</h3>
                                        <p>Here you can add more detailed information or form fields.</p>
                                    </div>
                                )}
                                {step === 3 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Step 3: Confirmation</h3>
                                        <p>Great! You've completed all steps. Click finish to close the modal.</p>
                                    </div>
                                )}
                            </motion.div>

                        </AnimatePresence>
                        <div className="flex justify-between mt-6">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                                onClick={prevStep}
                                disabled={step === 1}
                            >
                                Previous
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={nextStep}
                            >
                                {step === totalSteps ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

// Main component to showcase all modals
export default function EnhancedModalDialogLayout() {
    const [openModal, setOpenModal] = useState(null)

    const modals = [
        { name: 'Basic Modal', component: BasicModal },
        { name: 'Slide-in Modal', component: SlideInModal },
        { name: 'Fade-in Blur Modal', component: FadeInBlurModal },
        { name: 'Expanding Circle Modal', component: ExpandingCircleModal },
        { name: 'Flip Card Modal', component: FlipCardModal },
        { name: 'Bouncing Modal', component: BouncingModal },
        { name: 'Rotating Modal', component: RotatingModal },
        { name: 'Elastic Modal', component: ElasticModal },
        { name: 'Swipe-to-dismiss Modal', component: SwipeToDismissModal },
        { name: 'Multi-step Modal', component: MultiStepModal },
    ]

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Dialog Modal Layouts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modals.map((modal, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setOpenModal(index)}
                        >
                            <h2 className="text-xl font-semibold mb-2">{modal.name}</h2>
                            <p className="text-gray-600">Click to open this modal type.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {modals.map((modal, index) => {
                const ModalComponent = modal.component
                return (
                    <ModalComponent
                        key={index}
                        isOpen={openModal === index}
                        onClose={() => setOpenModal(null)}
                    />
                )
            })}
        </div>
    )
}