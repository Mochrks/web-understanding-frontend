import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { Title } from '@/components/demo/Title'

// FAQ data
const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is TypeScript?", answer: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript." },
    { question: "What is Vite?", answer: "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects." },
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces." },
    { question: "What is Framer Motion?", answer: "Framer Motion is a production-ready motion library for React that makes it easy to create fluid animations." },
]

// 1. Accordion FAQ with slide animation
const AccordionFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="space-y-2">
            {faqData.map((item, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                        className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <span>{item.question}</span>
                        {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-4 bg-white">{item.answer}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

// 2. Grid FAQ with flip cards
const FlipCardFAQ = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqData.map((item, index) => (
                <div key={index} className="relative h-48 [perspective:1000px] group">
                    <motion.div
                        className="absolute inset-0 [transform-style:preserve-3d] transition-all duration-500"
                        whileHover={{ rotateY: 180 }}
                    >
                        <div className="absolute inset-0 bg-primary text-primary-foreground flex items-center justify-center p-4 [backface-visibility:hidden]">
                            <h3 className="text-lg font-semibold text-center">{item.question}</h3>
                        </div>
                        <div className="absolute inset-0 bg-secondary text-secondary-foreground flex items-center justify-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <p>{item.answer}</p>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

// 3. Vertical tabs FAQ with fade animation
const TabsFAQ = () => {
    return (
        <Tabs defaultValue="0" className="flex flex-col space-x-4 bg-gray-200 w-full" orientation="vertical">
            <TabsList className="w-full">
                {faqData.map((item, index) => (
                    <TabsTrigger key={index} value={index.toString()} className="w-full text-left">
                        {item.question}
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className='w-full '>
                {faqData.map((item, index) => (
                    <TabsContent key={index} value={index.toString()} className="p-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card>
                                    <CardContent className="pt-4">
                                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                                        <p>{item.answer}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}

// 4. Timeline FAQ with scroll animation
const TimelineFAQ = () => {
    return (
        <ScrollArea className="h-[600px] w-full pr-4">
            <div className="relative border-l-2 border-primary pl-4 space-y-10 ">
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-200 p-4 rounded-sm"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[22px] top-1" />
                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                        <p>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </ScrollArea>
    )
}

// 5. Modal popup FAQ with scale animation
const ModalFAQ = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqData.map((item, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full h-24 text-left flex flex-col items-start justify-center p-4">
                            <span className="font-semibold mb-2">Question {index + 1}</span>
                            <span className="text-sm text-muted-foreground truncate">{item.question}</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                                <p>{item.answer}</p>
                            </motion.div>
                        </AnimatePresence>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}

// Main component to showcase all FAQ components
export default function ModernFAQComponents() {
    return (
        <>
            <div className="py-5">
                <Title name="Screen FAQ Layout " />
            </div>
            <div className="container mx-auto py-8 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Accordion FAQ</h2>
                    <AccordionFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Flip Card FAQ</h2>
                    <FlipCardFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Vertical Tabs FAQ</h2>
                    <TabsFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Timeline FAQ</h2>
                    <TimelineFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Modal Popup FAQ</h2>
                    <ModalFAQ />
                </section>
            </div>
        </>
    )
}