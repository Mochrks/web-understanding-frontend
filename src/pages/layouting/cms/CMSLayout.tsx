import { useState } from 'react'
import { Bell, ChevronDown, Menu, Search, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);


const Overview = () => {
    // Mock data for charts
    const visitorData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Visitors',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    const contentData = {
        labels: ['Articles', 'Images', 'Videos'],
        datasets: [
            {
                label: 'Content Count',
                data: [65, 59, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Tabs defaultValue="visitors" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="visitors">Visitors</TabsTrigger>
                    <TabsTrigger value="content">Content</TabsTrigger>
                </TabsList>
                <TabsContent value="visitors" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Visitor Statistics</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Line data={visitorData} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="content" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Content Distribution</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Bar data={contentData} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}



export default function CMSLayouts() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-white w-64 shadow-lg transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static fixed inset-y-0 left-0 z-50`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className="text-2xl font-bold text-gray-800">CMS Dashboard</h1>
                    <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="lg:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Dashboard</a></li>
                        <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Articles</a></li>
                        <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Media</a></li>
                        <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Users</a></li>
                        <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Settings</a></li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <header className="bg-white shadow-sm z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="lg:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="max-w-lg w-full lg:max-w-xs">
                                    <label htmlFor="search" className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Search className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <Input
                                            id="search"
                                            name="search"
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Button variant="ghost" size="icon" className="ml-4">
                                    <Bell className="h-6 w-6" />
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="ml-4">
                                            <User className="h-6 w-6" />
                                            <ChevronDown className="h-4 w-4 ml-1" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Settings</DropdownMenuItem>
                                        <DropdownMenuItem>Logout</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Overview />
                    </div>
                </main>
            </div>
        </div>
    )
}