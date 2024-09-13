import React, { useState, useEffect } from 'react';
import { SearchItem, dummyData } from '@/apis/SearchApi'; // Assuming the dummy data is imported here
import { Card } from '@/components/ui/card';
import { Title } from '@/components/demo/Title';

export const InfiniteScrollPage = () => {
    const [currentItems, setCurrentItems] = useState<SearchItem[]>([]);
    const [itemsPerPage] = useState(20); // Default 20 items per load
    const [hasMore, setHasMore] = useState(true); // Flag to track if more data is available
    const [currentPage, setCurrentPage] = useState(1); // Track the current page number
    const [isLoading, setIsLoading] = useState(false); // Flag to indicate loading state

    useEffect(() => {
        // Fetch initial data
        loadMoreItems();
    }, []);

    useEffect(() => {
        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Cleanup scroll event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentItems, hasMore]);

    const loadMoreItems = () => {
        if (isLoading) return; // Prevent multiple simultaneous loads
        setIsLoading(true); // Set loading state to true

        // Simulate a 2-second delay using setTimeout
        setTimeout(() => {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const nextItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

            if (nextItems.length > 0) {
                setCurrentItems((prevItems) => [...prevItems, ...nextItems]);
                setCurrentPage((prevPage) => prevPage + 1);
            } else {
                setHasMore(false); // No more data to load
            }

            setIsLoading(false); // Reset loading state after data load
        }, 2000); // 2-second delay
    };

    const handleScroll = () => {
        // Check if user has scrolled to the bottom of the page
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            if (hasMore && !isLoading) {
                loadMoreItems();
            }
        }
    };

    return (
        <div className='h-full py-6'>
            <div className='container mb-10 '>
                <Title name="Screen pagination infinite-scroll" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentItems.map((item: SearchItem) => (
                    <Card key={item.id} className='p-5'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </Card>
                ))}
            </div>

            {/* Show loading or no more data message */}
            {isLoading ? (
                <div className="text-center text-gray-500 mt-5">Loading more data...</div>
            ) : hasMore ? (
                <div className="text-center text-gray-500 mt-5">Scroll down for more data</div>
            ) : (
                <div className="text-center text-gray-500 mt-5">No more data to display</div>
            )}
        </div>
    );
};

export default InfiniteScrollPage;
