import React from 'react';
import { Title } from '@/components/demo/Title';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { MoonStar, SunMoon } from 'lucide-react';


const devData = [
    // dev understanding fe
    {
        name: 'Form Validation Login',
        description: 'Learn how to implement form validation in a login page.',
        route: '/login'
    },
    {
        name: 'Form Validation Register',
        description: 'Learn how to implement form validation in a registration page.',
        route: '/register'
    },
    {
        name: 'Searching Page with Autocomplete',
        description: 'Understand how to create a search page with autocomplete functionality.',
        route: '/search-auto-completed'
    },
    {
        name: 'Searching Page with Manual Button',
        description: 'Implement a search page that triggers a search on button click.',
        route: '/search-manual'
    },
    {
        name: 'Pagination Client-side',
        description: 'Learn client-side pagination techniques for displaying large datasets.',
        route: '/pagination-client'
    },
    {
        name: 'Pagination Infinite Scroll',
        description: 'Implement infinite scrolling for dynamically loading content.',
        route: '/pagination-infinite'
    },
    {
        name: 'Pagination Server-side',
        description: 'Implement server-side pagination techniques for display large datasets',
        route: '/pagination-server'
    },
    {
        name: 'Framer Motion Animation',
        description: 'Learn how to create animations using the Framer Motion library.',
        route: '/animation-framer-motion'
    },
    {
        name: 'GSAP Animation',
        description: 'Implement complex animations with the GSAP library.',
        route: '/animation-gsap'
    },
    {
        name: 'API Client Integration',
        description: 'Learn best practices for integrating and managing API clients in your application.',
        route: '/apiclient'
    },
    {
        name: 'Conditional Rendering',
        description: 'Understand how to render components conditionally based on application state.',
        route: '/conditional-rendering'
    },
    {
        name: 'CORS Handling',
        description: 'Learn how to handle Cross-Origin Resource Sharing (CORS) in web applications.',
        route: '/cors'
    },
    {
        name: 'Debouncing and Throttling',
        description: 'Optimize event handling using debouncing and throttling techniques.',
        route: '/debouncing-throttling'
    },
    {
        name: 'Debugging Techniques',
        description: 'Learn effective methods for debugging your web applications.',
        route: '/debugging'
    },
    {
        name: 'File Upload and Download',
        description: 'Implement file upload and download functionalities in your web applications.',
        route: '/file-upload-download'
    },
    {
        name: 'GraphQL API Integration',
        description: 'Learn how to fetch data using GraphQL APIs and Apollo Client.',
        route: '/graphql-api'
    },
    {
        name: 'Using React Hooks in Applications',
        description: 'Deep dive into using React Hooks for managing state and side effects.',
        route: '/hooks-apps'
    },
    {
        name: 'HTTP Interceptors',
        description: 'Implement HTTP interceptors for handling API requests and responses.',
        route: '/interceptors'
    },
    {
        name: 'Internationalization (i18n)',
        description: 'Learn how to implement multi-language support using internationalization libraries.',
        route: '/internationalization'
    },
    {
        name: 'Application Optimization',
        description: 'Techniques for optimizing the performance of your web applications.',
        route: '/optimization'
    },
    {
        name: 'Progressive Web Apps (PWA)',
        description: 'Understand how to build Progressive Web Apps (PWA) for offline-first functionality.',
        route: '/pwa-apps'
    },
    {
        name: 'Responsive Web Applications',
        description: 'Learn how to create responsive layouts for various screen sizes.',
        route: '/responsive-web-apps'
    },
    {
        name: 'Working with REST APIs',
        description: 'Learn how to consume and interact with REST APIs in web applications.',
        route: '/rest-apis'
    },
    {
        name: 'SEO and Meta Tags',
        description: 'Optimize your web pages for search engines using SEO best practices and meta tags.',
        route: '/seo-and-meta-tags'
    },
    {
        name: 'State Management in React',
        description: 'Understand how to manage state using tools like Redux and Context API.',
        route: '/state-management'
    },
    {
        name: 'Client-side Storage',
        description: 'Explore the use of local storage, session storage, and IndexedDB in web applications.',
        route: '/storage'
    },
    {
        name: 'CSS Styling (Vanilla CSS)',
        description: 'Learn how to style web applications using Vanilla CSS for consistent design.',
        route: '/styling-css-vanilla'
    },
    {
        name: 'Suspense in React',
        description: 'Learn how to handle asynchronous rendering using React Suspense.',
        route: '/suspense'
    },
    {
        name: 'Testing React Applications',
        description: 'Understand how to write unit and integration tests for React applications.',
        route: '/testing-app'
    },

];

const layoutData = [
    // layouting FE
    {
        name: 'Dashboards Pages layout',
        description: 'Dashboard Layout  for React applications.',
        route: '/dashboard-layout'
    },
    {
        name: 'Authentification Pages layout',
        description: 'Authentification Pages  for React applications.',
        route: '/authentification-layout'
    },
    {
        name: 'User Profile Pages layout',
        description: 'User Profile pages  for React applications.',
        route: '/user-profiles-layout'
    },
    {
        name: 'E-Commerce Pages layout',
        description: 'E-Commerce pages  for React applications.',
        route: '/e-commerce-layout'
    },
    {
        name: 'Multi Step form Pages layout',
        description: 'Multi Step form pages  for React applications.',
        route: '/multi-step-layout'
    },
    {
        name: 'Notification And Message Pages layout',
        description: 'Notification And Message pages  for React applications.',
        route: '/notif-message-layout'
    },
    {
        name: 'User Feedback & Rating Pages layout',
        description: 'User Feedback and Rating pages  for React applications.',
        route: '/feedback-rating-layout'
    },
    {
        name: 'Coding Practice Pages layout',
        description: 'Coding practice pages  for React applications.',
        route: '/coding-practice-layout'
    },
    {
        name: 'Carousel images Pages layout',
        description: 'Carousel images page  for React applications.',
        route: '/carousel-layout'
    },
    {
        name: 'Hero bg animation Pages layout',
        description: 'Hero Bg animation pages  for React applications.',
        route: '/hero-bg-layout'
    },
    {
        name: 'Loading Animations Pages layout',
        description: 'Loading Animations  for React applications.',
        route: '/loading-animation-layout'
    },
    {
        name: 'Alert Animations  Pages layout',
        description: 'Alert Animations  for React applications.',
        route: '/alert-layout'
    },
    {
        name: 'Modal Dialog Pages Layout',
        description: 'Modal dialog layout for React applications.',
        route: '/modal-dialog-layout'
    },
    {
        name: 'Footer  Pages Layout',
        description: 'Footer layout for React applications.',
        route: '/footer-layout'
    },
    {
        name: 'Navbar  Pages Layout',
        description: 'Navbar layout for React applications.',
        route: '/navbar-layout'
    },
    {
        "name": "FAQ Pages Layout",
        "description": "Frequently Asked Questions (FAQ) pages with collapsible sections.",
        "route": "/faq-pages-layout"
    },
    {
        "name": "Pricing Pages Layout",
        "description": "Pricing pages for product or service offerings.",
        "route": "/pricing-pages-layout"
    },
    {
        "name": "404 Error Pages Layout",
        "description": "Custom 404 error page with navigation options.",
        "route": "/404-error-layout"
    },
    {
        "name": "Testimonial Pages Layout",
        "description": "Testimonial pages to showcase user or client feedback.",
        "route": "/testimonial-pages-layout"
    },
    {
        "name": "Blog Pages Layout",
        "description": "Blog layout for displaying articles, posts, and comments.",
        "route": "/blog-pages-layout"
    },
    {
        "name": "Team Pages Layout",
        "description": "Layout to showcase team members with photos, descriptions, and their roles in the company.",
        "route": "/team-pages-layout"
    },
    {
        "name": "Roadmap Pages Layout",
        "description": "Layout to display a product or feature roadmap in an interactive timeline format.",
        "route": "/roadmap-pages-layout"
    },
    {
        "name": "Gallery Pages Layout",
        "description": "Layout to display photo or video galleries, commonly used for photography or art exhibit websites.",
        "route": "/gallery-pages-layout"
    },
    {
        "name": "Event Pages Layout",
        "description": "Layout for event pages, featuring event descriptions, schedules, and registration options.",
        "route": "/event-pages-layout"
    },
    {
        "name": "Help Center Pages Layout",
        "description": "Layout for a help center, typically including help articles, FAQs, and contact forms.",
        "route": "/help-center-layout"
    },
    {
        "name": "Learning Management System (LMS) Pages Layout",
        "description": " Layout for managing courses, lessons, quizzes, and student progress, used in e-learning platforms.",
        "route": "/lms-layout"
    },
];



export const Home = () => {
    const { theme, toggleTheme } = useTheme();

    const renderCards = (data) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
            {data.map((item) => (
                <div key={item.route} className="bg-card p-5 border rounded-lg shadow-md w-full">
                    <h3 className="text-lg font-bold text-card-foreground">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Link to={item.route} className="mt-2 inline-block">
                        <Button>View Details</Button>
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <div className="container h-full py-10">
            <div className="flex py-5 mb-10 justify-between items-center">
                <Title name="Front-End Developers" />
                <Button variant="outline" onClick={toggleTheme} className="h-10">
                    {theme === 'dark' ? <MoonStar /> : <SunMoon />}
                </Button>
            </div>

            <section className="mb-10">
                <h2 className="text-2xl font-bold py-10">Development Topics </h2>
                {renderCards(devData)}
            </section>

            <section>
                <h2 className="text-2xl font-bold py-10">Front-end Layout</h2>
                {renderCards(layoutData)}
            </section>
        </div>
    );
};

export default Home;