import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useBreakpoint from "@/hooks/useBreakpoint"; // Importing the custom useBreakpoint hook
import { Title } from '@/components/demo/Title';


const ConditionalRendering = () => {
    const [role, setRole] = useState<string>('guest');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    // Get the current screen size using the custom useBreakpoint hook
    const screenSize = useBreakpoint();

    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value);
    };

    // Function to render content based on user role
    const renderBasedOnRole = () => {
        if (isLoggedIn) {
            if (role === 'admin') {
                return <p className="text-green-600">Welcome Admin! You have special access.</p>;
            } else if (role === 'user') {
                return <p className="text-blue-600">Welcome User! You can view the content.</p>;
            } else {
                return <p className="text-gray-600">Welcome Guest! Please register and continue login.</p>;
            }
        }
    };

    return (
        <>
            <header className='pt-10'>
                <Title name="Screen Conditional Rendering" />
            </header>
            <main className="flex flex-col items-center min-h-screen  p-6 mt-20">

                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader>
                        <CardTitle>Conditional Rendering Example</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Input for role */}
                        <div className="mb-4">
                            <label htmlFor="role" className="block mb-2 text-gray-700">Enter role (guest, user, admin):</label>
                            <Input
                                type="text"
                                id="role"
                                value={role}
                                onChange={handleRoleChange}
                                className="border p-2 w-full"
                            />
                        </div>

                        {/* Input login/logout */}
                        <div className="mb-4">
                            <Button onClick={() => setIsLoggedIn(!isLoggedIn)} className="w-full">
                                {isLoggedIn ? 'Logout' : 'Login'}
                            </Button>
                        </div>

                        {/* Input admin access */}
                        <div className="mb-4">
                            <Button onClick={() => setIsAdmin(!isAdmin)} variant="destructive" className="w-full">
                                {isAdmin ? 'Remove Admin Access' : 'Grant Admin Access'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className='w-[50rem] mt-10 p-10 shadow-lg'>

                    {/* Conditional Rendering  Ternary */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Ternary Operator:</h3>
                        <p>
                            {isLoggedIn ? (
                                role === 'admin' ? 'Welcome back, Admin!' : 'Welcome back, User!'
                            ) : (
                                'Please log in to continue.'
                            )}
                        </p>
                    </div>

                    {/* Conditional Rendering  Logical AND */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Logical AND (&&) Operator:</h3>
                        {isAdmin && <p className="text-green-600">Welcome Admin! You have full access.</p>}
                    </div>

                    {/* Conditional Rendering  If Statement */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">If Statement:</h3>
                        {renderBasedOnRole()}
                    </div>

                    {/* Conditional Rendering based on screen size */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Screen Size Conditional Rendering (using useBreakpoint hook):</h3>
                        {/* Render content based on the screen size detected by the useBreakpoint hook */}
                        {screenSize === "xs" && <p>You are using a Mobile Device</p>}
                        {screenSize === "sm" && <p>You are using a Small Device</p>}
                        {screenSize === "md" && <p>You are using a Tablet</p>}
                        {screenSize === "lg" && <p>You are using a Desktop</p>}
                        {screenSize === "xl" && <p>You are using a Large Desktop</p>}
                        {screenSize === "2xl" && <p>You are using an Extra Large Screen</p>}
                    </div>
                </Card>
            </main>
        </>
    );
};

export default ConditionalRendering;
