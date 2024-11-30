
import { useState } from "react"

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
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Title } from "@/components/demo/Title"
import { Description } from "@/components/demo/Description"
import { Separator } from "@radix-ui/react-select"
import { Link } from "react-router-dom"

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Title name="Screen  Login" />
            <Description text="this pages form validation" />
            <Card className="w-[350px] mt-10">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your credentials to access your account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4 ">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="Enter your username" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
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
                        </div>
                    </form >
                </CardContent >
                <CardFooter className="flex flex-col">
                    <Button className="w-full">Login</Button>
                    <div className="flex mt-2 text-sm">
                        <p className="text-muted-foreground">
                            Don't have an account?
                        </p>
                        <Link to="/register" className="ml-1 font-medium text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
                <div className=" flex flex-col  items-center p-6 pt-0 ">
                    <div className="relative w-full py-4">
                        <Separator />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                            OR
                        </p>
                    </div>
                    <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Continue with Google
                    </Button>
                    <p className="text-muted-foreground text-sm text-center mt-5">
                        By clicking Login, you agree to our{" "}
                        <strong className="font-bold">Terms of Service</strong> and{" "}
                        <strong className="font-bold">Privacy Policy</strong>.
                    </p>
                </div>
            </Card >
        </div >
    )
}

export default Login;