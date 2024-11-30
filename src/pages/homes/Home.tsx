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
    }, {
        "name": "Component Lifecycle in React",
        "description": "Learn about the component lifecycle in React and how to manage side effects at each stage.",
        "route": "/component-lifecycle"
    },
    {
        "name": "Custom Hooks in React",
        "description": "Learn how to create and use custom hooks to manage reusable logic in React applications.",
        "route": "/custom-hooks"
    },
    {
        "name": "Error Boundaries in React",
        "description": "Understand how to handle errors in React applications using Error Boundaries.",
        "route": "/error-boundaries"
    },
    {
        "name": "Context API for State Management",
        "description": "Learn how to use the Context API for global state management in React applications.",
        "route": "/context-api"
    },
    {
        "name": "React Router for Navigation",
        "description": "Learn how to use React Router to manage navigation within React applications.",
        "route": "/react-router"
    },
    {
        "name": "Building Forms in React",
        "description": "Learn how to build and manage forms in React with controlled and uncontrolled components.",
        "route": "/building-forms"
    },
    {
        "name": "Using TypeScript with React",
        "description": "Learn how to use TypeScript in React application development to enhance type safety and code quality.",
        "route": "/typescript-react"
    },
    {
        "name": "CSS-in-JS Libraries",
        "description": "Understand how to use CSS-in-JS libraries like Styled Components or Emotion for styling components.",
        "route": "/css-in-js"
    },
    {
        "name": "Performance Optimization in React",
        "description": "Learn techniques to optimize the performance of React applications, including memoization and lazy loading.",
        "route": "/performance-optimization"
    },
    {
        "name": "Web Accessibility (a11y)",
        "description": "Understand the importance of web accessibility and how to implement best practices to make applications accessible to all users.",
        "route": "/web-accessibility"
    },
    {
        "name": "Using WebSockets for Real-Time Communication",
        "description": "Learn how to use WebSockets to build applications that require real-time communication.",
        "route": "/websockets"
    },
    {
        "name": "Service Workers and Caching",
        "description": "Understand how Service Workers work and how to implement caching to improve application performance.",
        "route": "/service-workers"
    },
    {
        "name": "Static Site Generation (SSG) and Server-Side Rendering (SSR)",
        "description": "Learn the differences between SSG and SSR and how to implement them in React applications using Next.js.",
        "route": "/ssg-ssr"
    },
    {
        "name": "Using Third-Party Libraries",
        "description": "Learn how to integrate and use third-party libraries in front-end applications.",
        "route": "/third-party-libraries"
    },
    {
        "name": "Building a Component Library",
        "description": "Learn how to build and document a reusable component library.",
        "route": "/component-library"
    },
    {
        "name": "Understanding the Virtual DOM",
        "description": "Understand the concept of the Virtual DOM and how React uses it to improve rendering performance.",
        "route": "/virtual-dom"
    },
    {
        "name": "Code Splitting and Dynamic Imports",
        "description": "Learn how to split code and use dynamic imports to optimize application load times.",
        "route": "/code-splitting"
    },
    {
        "name": "Using GraphQL Subscriptions",
        "description": "Learn how to use GraphQL subscriptions to receive real-time updates from the server.",
        "route": "/graphql-subscriptions"
    },
    {
        "name": "Micro Frontends Architecture",
        "description": "Understand micro frontends architecture and how to implement it to build large applications.",
        "route": "/micro-frontends"
    },
    {
        "name": "Using CSS Frameworks (Bootstrap, Tailwind CSS)",
        "description": "Learn how to use CSS frameworks like Bootstrap or Tailwind CSS to speed up UI development.",
        "route": "/css-frameworks"
    }

];


interface CardData {
    name: string;
    description: string;
    route: string;
}


export const Home = () => {
    const { theme, toggleTheme } = useTheme();

    const renderCards = (data: CardData[]) => (
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


        </div>
    );
};

export default Home;