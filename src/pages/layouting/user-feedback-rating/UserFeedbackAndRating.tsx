'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Star, ThumbsUp, ThumbsDown, Send, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const UserFeedbackAndRating = () => {
    const [activeTab, setActiveTab] = useState('reviews')
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')
    const [feedbackType, setFeedbackType] = useState('')
    const [feedbackContent, setFeedbackContent] = useState('')
    const [satisfaction, setSatisfaction] = useState(50)
    const [submissionStatus, setSubmissionStatus] = useState(null)

    const products = [
        { id: 1, name: 'Ergonomic Chair', image: '/placeholder.svg?height=100&width=100' },
        { id: 2, name: 'Standing Desk', image: '/placeholder.svg?height=100&width=100' },
        { id: 3, name: 'Wireless Keyboard', image: '/placeholder.svg?height=100&width=100' },
        { id: 4, name: 'Noise-Cancelling Headphones', image: '/placeholder.svg?height=100&width=100' },
    ]

    const existingReviews = [
        { id: 1, user: 'John D.', rating: 4, comment: 'Great product! Very comfortable and easy to adjust.', date: '2023-05-15', helpful: 12, notHelpful: 2 },
        { id: 2, user: 'Sarah M.', rating: 5, comment: 'Absolutely love it! Has improved my posture significantly.', date: '2023-05-10', helpful: 8, notHelpful: 1 },
        { id: 3, user: 'Mike R.', rating: 3, comment: 'Decent product, but a bit overpriced for what you get.', date: '2023-05-05', helpful: 5, notHelpful: 3 },
    ]

    const handleRatingChange = (value) => {
        setRating(value)
    }

    const handleReviewSubmit = () => {
        // In a real application, you would send this data to your backend
        console.log('Submitting review:', { rating, review })
        setSubmissionStatus('success')
        setTimeout(() => setSubmissionStatus(null), 3000)
    }

    const handleFeedbackSubmit = () => {
        // In a real application, you would send this data to your backend
        console.log('Submitting feedback:', { feedbackType, feedbackContent, satisfaction })
        setSubmissionStatus('success')
        setTimeout(() => setSubmissionStatus(null), 3000)
    }

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ))
    }

    const renderReviewsPage = () => (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Write a Review</CardTitle>
                    <CardDescription>Share your thoughts on our products</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <Label>Select Product</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose a product" />
                                </SelectTrigger>
                                <SelectContent>
                                    {products.map((product) => (
                                        <SelectItem key={product.id} value={product.id.toString()}>
                                            {product.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Your Rating</Label>
                            <div className="flex space-x-1 mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-8 w-8 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                        onClick={() => handleRatingChange(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="review">Your Review</Label>
                            <Textarea
                                id="review"
                                placeholder="Write your review here..."
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleReviewSubmit}>Submit Review</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[400px]">
                        <div className="space-y-4">
                            {existingReviews.map((review) => (
                                <div key={review.id} className="border-b pb-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Avatar>
                                                <AvatarFallback>{review.user[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{review.user}</p>
                                                <div className="flex">
                                                    {renderStars(review.rating)}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                    <p className="mt-2">{review.comment}</p>
                                    <div className="mt-2 flex items-center space-x-4">
                                        <Button variant="outline" size="sm">
                                            <ThumbsUp className="h-4 w-4 mr-2" />
                                            Helpful ({review.helpful})
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <ThumbsDown className="h-4 w-4 mr-2" />
                                            Not Helpful ({review.notHelpful})
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )

    const renderFeedbackPage = () => (
        <Card>
            <CardHeader>
                <CardTitle>Send Feedback</CardTitle>
                <CardDescription>Help us improve our products and services</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <Label>Feedback Type</Label>
                        <RadioGroup value={feedbackType} onValueChange={setFeedbackType} className="mt-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="suggestion" id="suggestion" />
                                <Label htmlFor="suggestion">Suggestion</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="complaint" id="complaint" />
                                <Label htmlFor="complaint">Complaint</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="question" id="question" />
                                <Label htmlFor="question">Question</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div>
                        <Label htmlFor="feedback-content">Your Feedback</Label>
                        <Textarea
                            id="feedback-content"
                            placeholder="Describe your feedback in detail..."
                            value={feedbackContent}
                            onChange={(e) => setFeedbackContent(e.target.value)}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label>Overall Satisfaction</Label>
                        <div className="flex items-center space-x-2 mt-2">
                            <Slider
                                value={[satisfaction]}
                                onValueChange={(value) => setSatisfaction(value[0])}
                                max={100}
                                step={1}
                            />
                            <span>{satisfaction}%</span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleFeedbackSubmit}>
                    <Send className="h-4 w-4 mr-2" />
                    Send Feedback
                </Button>
            </CardFooter>
        </Card>
    )

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">User Feedback and Ratings</h1>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
                    <TabsTrigger value="feedback">Send Feedback</TabsTrigger>
                </TabsList>
                <TabsContent value="reviews" className="mt-6">
                    {renderReviewsPage()}
                </TabsContent>
                <TabsContent value="feedback" className="mt-6">
                    {renderFeedbackPage()}
                </TabsContent>
            </Tabs>
            {submissionStatus && (
                <Alert variant="default" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                        Your {activeTab === 'reviews' ? 'review' : 'feedback'} has been submitted successfully. Thank you for your input!
                    </AlertDescription>
                </Alert>
            )}
        </div>
    )
}

export default UserFeedbackAndRating