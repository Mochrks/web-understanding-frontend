'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Icons } from "@/components/ui/icons"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Title } from '@/components/demo/Title'
import { Link } from "react-router-dom"
import AuthPagesLoginRegister from './AuthPagesLoginRegister'

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex pt-20 justify-center ">
        <div className="max-w-md w-full">
            {children}
        </div>
    </div>
)

const LoginPage = () => (
    <Card>
        <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="youremail@example.com" type="email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Enter your password" type="password" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex ">
            <Button className='w-full'>Login</Button>
        </CardFooter>
    </Card>
)

const RegisterPage = () => (
    <Card>
        <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="youremail@example.com" type="email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Create a password" type="password" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" placeholder="Confirm your password" type="password" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Register</Button>
        </CardFooter>
    </Card>
)

const ForgotPasswordPage = () => (
    <Card>
        <CardHeader>
            <CardTitle>Forgot Password</CardTitle>
            <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Send Reset Link</Button>
        </CardFooter>
    </Card>
)

const ResetPasswordPage = () => (
    <Card>
        <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>Enter your new password</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="old-password">Old Password</Label>
                        <Input id="old-password" placeholder="Enter old password" type="password" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" placeholder="Enter new password" type="password" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        <Input id="confirm-new-password" placeholder="Confirm new password" type="password" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Reset Password</Button>
        </CardFooter>
    </Card>
)

const VerifyEmailPage = () => (
    <Card>
        <CardHeader>
            <CardTitle>Verify Email</CardTitle>
            <CardDescription>Enter the verification code sent to your email</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="verification-code">Verification Code</Label>
                        <div className='flex items-center  justify-center'>
                            <InputOTP maxLength={6}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button variant="outline">Resend Code</Button>
            <Button>Verify</Button>
        </CardFooter>
    </Card>
)

export default function AuthentificationPages() {

    return (
        <>
            <div className='flex flex-col mt-20 w-full text-center gap-5'>
                <Title name="Screen Authentification Pages" />
            </div>
            <AuthLayout>

                <div className='p-5'>
                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Login
                    </h2>
                    <LoginPage />
                </div>
                <div className='p-5'>
                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Register
                    </h2>
                    <RegisterPage />
                </div>
                <div className='p-5'>
                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Verification Email
                    </h2>
                    <VerifyEmailPage />
                </div>
                <div className='p-5'>
                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Reset Password
                    </h2>
                    <ResetPasswordPage />
                </div>
                <div className='p-5'>
                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Forgot password
                    </h2>
                    <ForgotPasswordPage />
                </div>
            </AuthLayout>
            <div className='pt-20'>
                <div className='py-5'>

                    <AuthPagesLoginRegister />
                </div>
            </div>
        </>
    )
}