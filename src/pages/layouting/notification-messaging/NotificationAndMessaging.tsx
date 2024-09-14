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
import { Bell, MessageCircle, Search, Send, Paperclip, MoreVertical, Phone, Video, User, Settings } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NotificationAndMessaging = () => {
    const [activeTab, setActiveTab] = useState('inbox')
    const [selectedChat, setSelectedChat] = useState(null)
    const [messageInput, setMessageInput] = useState('')

    const notifications = [
        { id: 1, type: 'message', content: 'New message from John Doe', time: '5m ago', read: false },
        { id: 2, type: 'like', content: 'Sarah liked your post', time: '1h ago', read: false },
        { id: 3, type: 'comment', content: 'New comment on your photo', time: '2h ago', read: true },
        { id: 4, type: 'friend', content: 'Friend request from Jane Smith', time: '1d ago', read: true },
        { id: 5, type: 'system', content: 'System maintenance scheduled', time: '2d ago', read: true },
    ]

    const chats = [
        { id: 1, name: 'John Doe', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Hey, how are you?', time: '5m ago', unread: 2 },
        { id: 2, name: 'Sarah Connor', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'The project is due tomorrow', time: '1h ago', unread: 0 },
        { id: 3, name: 'Tech Support', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Your ticket has been resolved', time: '1d ago', unread: 1 },
        { id: 4, name: 'Jane Smith', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Lunch at 1 PM?', time: '2d ago', unread: 0 },
        { id: 5, name: 'Team Channel', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'New announcement from HR', time: '3d ago', unread: 5 },
    ]

    const renderNotificationIcon = (type) => {
        switch (type) {
            case 'message':
                return <MessageCircle className="h-4 w-4 text-blue-500" />
            case 'like':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-red-500">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            case 'comment':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-500">
                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                </svg>
            case 'friend':
                return <User className="h-4 w-4 text-purple-500" />
            default:
                return <Bell className="h-4 w-4 text-gray-500" />
        }
    }

    const renderInbox = () => (
        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay updated with your latest activities</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px]">
                    {notifications.map((notification) => (
                        <div key={notification.id} className={`flex items-center space-x-4 p-4 ${notification.read ? 'opacity-50' : ''}`}>
                            <div className="flex-shrink-0">
                                {renderNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm font-medium">{notification.content}</p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                            {!notification.read && (
                                <Badge variant="secondary">New</Badge>
                            )}
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    )

    const renderChatList = () => (
        <Card className="h-full">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Chats</CardTitle>
                    <Button variant="ghost" size="icon">
                        <MessageCircle className="h-4 w-4" />
                    </Button>
                </div>
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search chats" className="pl-8" />
                </div>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px]">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            className={`flex items-center space-x-4 p-4 cursor-pointer hover:bg-accent ${selectedChat === chat.id ? 'bg-accent' : ''}`}
                            onClick={() => setSelectedChat(chat.id)}
                        >
                            <Avatar>
                                <AvatarImage src={chat.avatar} alt={chat.name} />
                                <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="text-sm font-medium">{chat.name}</p>
                                <p className="text-xs text-gray-500">{chat.lastMessage}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-xs text-gray-500">{chat.time}</p>
                                {chat.unread > 0 && (
                                    <Badge variant="destructive" className="mt-1">{chat.unread}</Badge>
                                )}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    )

    const renderChatWindow = () => {
        const chat = chats.find(c => c.id === selectedChat)
        if (!chat) return null

        return (
            <Card className="h-full flex flex-col">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={chat.avatar} alt={chat.name} />
                                <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{chat.name}</CardTitle>
                                <CardDescription>Online</CardDescription>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                                <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Video className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Chat Options</DropdownMenuLabel>
                                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Search in Conversation</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                                    <DropdownMenuItem>Block User</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                    <ScrollArea className="h-[300px] pr-4">
                        {/* Placeholder messages */}
                        <div className="space-y-4">
                            <div className="flex justify-start">
                                <div className="bg-accent rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">Hey, how's it going?</p>
                                    <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">Hi! I'm doing well, thanks. How about you?</p>
                                    <p className="text-xs text-primary-foreground/70 mt-1">10:32 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-accent rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">I'm good too. Did you finish the project?</p>
                                    <p className="text-xs text-gray-500 mt-1">10:33 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">Yes, I just submitted it. Can you review it when you have a chance?</p>
                                    <p className="text-xs text-primary-foreground/70 mt-1">10:35 AM</p>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form className="flex space-x-2 w-full" onSubmit={(e) => e.preventDefault()}>
                        <Button variant="outline" size="icon">
                            <Paperclip className="h-4 w-4" />
                        </Button>
                        <Input
                            placeholder="Type a message"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            className="flex-grow"
                        />
                        <Button type="submit">
                            <Send className="h-4 w-4 mr-2" />
                            Send
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        )
    }

    return (
        <div className="container mx-auto py-10">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="inbox" className="flex items-center">
                        <Bell className="w-4 h-4 mr-2" />
                        Inbox
                    </TabsTrigger>
                    <TabsTrigger value="chat" className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="inbox" className="mt-6">
                    {renderInbox()}
                </TabsContent>
                <TabsContent value="chat" className="mt-6">
                    <div className="grid grid-cols-3 gap-6 h-[600px]">
                        <div className="col-span-1">
                            {renderChatList()}
                        </div>
                        <div className="col-span-2">
                            {renderChatWindow()}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default NotificationAndMessaging