import React from 'react'
import { useState, useRef } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Calendar as CalendarIcon, Upload } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Title } from '@/components/demo/Title'
import { Description } from '@/components/demo/Description'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useNavigate } from 'react-router-dom'


export const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [date, setDate] = useState<Date>()
    const navigate = useNavigate();

    const [profilePhoto, setProfilePhoto] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
        if (field === 'password') {
            setShowPassword(!showPassword)
        } else {
            setShowConfirmPassword(!showConfirmPassword)
        }
    }

    const clearDate = () => {
        setDate(undefined)
    }

    const setToday = () => {
        setDate(new Date())
    }

    // Upload Photo profiles
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePhoto(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current?.click()
    }

    const handleLogin = () => {
        navigate("/login");
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <Title name="Screen  Register" />
            <Description text="this pages form validation" />
            <Card className="w-[380px] mt-10">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>Create a new account to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">

                        <div className="space-y-2">
                            <Label htmlFor="profile-photo">Profile Photo</Label>
                            <div className="flex items-center space-x-4">
                                <div
                                    className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center overflow-hidden"
                                    onClick={triggerFileInput}
                                >
                                    {profilePhoto ? (
                                        <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <Upload className="w-8 h-8 text-gray-400" />
                                    )}
                                </div>
                                {/* <Button type="button" onClick={triggerFileInput}>
                                    Upload Photo
                                </Button> */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" placeholder="Enter your username" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('password')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('confirmPassword')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOffIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your.email@email.com" type='email' />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="mobile">Mobile</Label>
                            <Input id="mobile" placeholder="Enter your number phone" type='number' />
                        </div>

                        {/* date manual without component calender shadcn-ui */}
                        {/* <div className="space-y-2">
                            <Label htmlFor="birthdate">Birthdate</Label>
                            <Input id="birthdate" type="date" />
                        </div> */}

                        {/* date update with component calender shadcn-ui */}
                        <div className="space-y-2">
                            <Label htmlFor="birthdate">Birthdate</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {/* NOTES: PPP ==> September 18th,2024 , or changes to format dd/MM/yyyy */}
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                    <div className="flex justify-end space-x-2 p-2">
                                        <Button variant="outline" size="sm" onClick={clearDate}>
                                            Clear
                                        </Button>
                                        <Button variant="outline" size="sm" onClick={setToday}>
                                            Today
                                        </Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>


                        <div className="space-y-2">
                            <Label>Gender</Label>
                            <RadioGroup defaultValue="Male">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Male" id="Male" />
                                    <Label htmlFor="Male">Male</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Female" id="Female" />
                                    <Label htmlFor="Female">Female</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="job">Job</Label>
                            <Select>
                                <SelectTrigger id="job">
                                    <SelectValue placeholder="Select your job" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="employee">Employee</SelectItem>
                                    <SelectItem value="self-employed">Self-employed</SelectItem>
                                    <SelectItem value="unemployed">Unemployed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Textarea id="address" placeholder="Enter your address" rows={4} />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col justify-end gap-4">
                    <Button className="w-full">Register</Button>
                    <Button variant="outline" className='w-full' onClick={handleLogin}>Login</Button>
                </CardFooter>
            </Card></div>
    )
}


export default Register;