'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, ChevronRight, Mail, Phone, MessageCircle, Book, HelpCircle, ArrowRight } from 'lucide-react'

// Dummy data for help articles
const helpArticles = [
    { id: 1, title: 'Getting Started Guide', category: 'Basics' },
    { id: 2, title: 'How to Reset Your Password', category: 'Account' },
    { id: 3, title: 'Troubleshooting Common Issues', category: 'Support' },
    { id: 4, title: 'Billing and Subscription FAQ', category: 'Billing' },
    { id: 5, title: 'Advanced Features Tutorial', category: 'Features' },
    { id: 6, title: 'Security Best Practices', category: 'Security' },
    { id: 7, title: 'API Documentation', category: 'Developers' },
    { id: 8, title: 'Mobile App User Guide', category: 'Mobile' },
]

// 1. Modern Grid Layout
const ModernGridLayout = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredArticles = helpArticles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">How can we help you?</h1>
                <div className="relative mb-8">
                    <input
                        type="text"
                        placeholder="Search for help..."
                        className="w-full p-4 pr-12 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                        <motion.div
                            key={article.id}
                            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-600 mb-4">Category: {article.category}</p>
                            <motion.button
                                className="text-blue-500 flex items-center"
                                whileHover={{ x: 5 }}
                            >
                                Read more <ChevronRight className="ml-2" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 2. Sidebar Navigation Layout
const SidebarNavigationLayout = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const categories = ['All', ...new Set(helpArticles.map(article => article.category))]

    const filteredArticles = activeCategory === 'All'
        ? helpArticles
        : helpArticles.filter(article => article.category === activeCategory)

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <motion.div
                className="w-64 bg-white shadow-md p-6"
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                <nav>
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={`block w-full text-left py-2 px-4 rounded-md mb-2 ${activeCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => setActiveCategory(category)}
                            whileHover={{ x: 5 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </nav>
            </motion.div>
            <div className="flex-1 p-8">
                <h1 className="text-4xl font-bold mb-8">Help Center</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredArticles.map((article) => (
                        <motion.div
                            key={article.id}
                            className="bg-white rounded-lg shadow-md p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-600 mb-4">Category: {article.category}</p>
                            <motion.button
                                className="text-blue-500 flex items-center"
                                whileHover={{ x: 5 }}
                            >
                                Read more <ChevronRight className="ml-2" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 3. FAQ Accordion Layout
const FAQAccordionLayout = () => {
    const [openItem, setOpenItem] = useState(null)

    const faqItems = [
        { id: 1, question: 'How do I create an account?', answer: 'To create an account, click on the "Sign Up" button in the top right corner of our homepage. Fill in your details and follow the prompts to complete the registration process.' },
        { id: 2, question: 'What payment methods do you accept?', answer: 'We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. You can view all available options during the checkout process.' },
        {
            id: 3, question: 'How can I reset my password?', answer: 'To reset your password, click on the "Forgot Password" link on the login page. Enter your email address, and well send you instructions to reset your password.'
        },
        {
            id: 4, question: 'What is your refund policy?', answer: 'We offer a 30-day money-back guarantee on all our products. If youre not satisfied with your purchase, you can request a full refund within 30 days of the purchase date.'
        },
        { id: 5, question: 'How do I contact customer support?', answer: 'You can contact our customer support team via email at support@example.com or by phone at +1 (800) 123-4567. Our support hours are Monday to Friday, 9 AM to 5 PM EST.' },
    ]

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            initial={false}
                            animate={{ height: openItem === item.id ? 'auto' : '64px' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <button
                                className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                            >
                                <span className="text-lg font-semibold">{item.question}</span>
                                <motion.span
                                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openItem === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="p-4 bg-gray-50"
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 4. Contact Form Layout
const ContactFormLayout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                            <p className="mb-4">We're here to help! Fill out the form, and we'll be in touch as soon as possible.</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 mr-2 text-blue-500" />
                                    <span>support@example.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 mr-2 text-blue-500" />
                                    <span>+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <MessageCircle className="w-6 h-6 mr-2 text-blue-500" />
                                    <span>Live chat available 24/7</span>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 5. Interactive Guide Layout
// const InteractiveGuideLayout = () => {
//     const [currentStep, setCurrentStep] = useState(0)

//     const steps = [
//         { title: 'Getting Started', icon: Book },
//         { title: 'Account Setup', icon: Book },
//         { title: 'Key Features', icon: Book },
//         { title: 'Advanced Tips', icon: Book },
//         { title: 'Troubleshooting', icon: HelpCircle },
//     ]

//     const nextStep = () => {
//         if (currentStep < steps.length - 1) {
//             setCurrentStep(currentStep + 1)
//         }
//     }

//     const prevStep = () => {
//         if (currentStep > 0) {
//             setCurrentStep(currentStep - 1)
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-12">Interactive User  Guide</h1>
//                 <div className="bg-white rounded-lg shadow-md p-8">
//                     <div className="flex justify-between items-center mb-8">
//                         {steps.map((step, index) => {
//                             const Icon = step.icon
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     className={`flex flex-col items-center ${index === currentStep ? 'text-blue-500' : 'text-gray-400'
//                                         }`}
//                                     animate={{ scale: index === currentStep ? 1.1 : 1 }}
//                                 >
//                                     <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
//                                         <Icon className="w-6 h-6" />
//                                     </div>
//                                     <span className="text-sm text-center">{step.title}</span>
//                                 </motion.div>
//                             )
//                         })}
//                     </div>
//                     <motion.div
//                         key={currentStep}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -20 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <h2 className="text-2xl font-semibold mb-4">{steps[currentStep].title}</h2>
//                         <p className="mb-6">
//                             This is where you would put the content for the {steps[currentStep].title.toLowerCase()} step.
//                             Include detailed instructions, images, or videos to guide the user through this part of your product or service.
//                         </p>
//                     </motion.div>
//                     <div className="flex justify-between mt-8">
//                         <motion.button
//                             className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
//                             onClick={prevStep}
//                             disabled={currentStep === 0}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Previous
//                         </motion.button>
//                         <motion.button
//                             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//                             onClick={nextStep}
//                             disabled={currentStep === steps.length - 1}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// Main component to showcase all layouts
export default function HelpCenterLayouts() {
    const [activeLayout, setActiveLayout] = useState(0)

    const layouts = [
        { name: 'Modern Grid', component: ModernGridLayout },
        { name: 'Sidebar Navigation', component: SidebarNavigationLayout },
        { name: 'FAQ Accordion', component: FAQAccordionLayout },
        { name: 'Contact Form', component: ContactFormLayout },
        // { name: 'Interactive Guide', component: InteractiveGuideLayout },
    ]

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold">Help Center Layouts</h1>
                        <div className="flex space-x-4">
                            {layouts.map((layout, index) => (
                                <motion.button
                                    key={index}
                                    className={`px-4 py-2 rounded-md ${activeLayout === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => setActiveLayout(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {layout.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeLayout}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {layouts[activeLayout].component()}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}