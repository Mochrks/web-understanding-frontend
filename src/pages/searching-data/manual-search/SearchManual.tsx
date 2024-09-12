import React, { useState, useEffect } from "react";
import { SearchItem, searchApi } from "@/apis/SearchApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/demo/Title";
import { X } from "lucide-react";

// Card component to display individual search items
const Card: React.FC<SearchItem> = ({ name, description }) => (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export const SearchManual: React.FC = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchItem[]>([]);

    // Load all data initially
    useEffect(() => {
        const fetchData = async () => {
            const data = await searchApi.search("");
            setResults(data);
        };
        fetchData();
    }, []);

    // Handle search button click
    const handleSearchClick = async () => {
        const data = await searchApi.search(query);
        setResults(data);
    };

    // Handle clear search click
    const handleClearSearch = async () => {
        setQuery("");
        const data = await searchApi.search("");
        setResults(data);
    };

    return (
        <div className="container mx-auto p-4">
            <Title name="Manual Search Page" />

            {/* Search Input with Clear Button */}
            <div className="flex w-full mb-6 justify-center mt-10 ">
                <div className="relative w-full lg:w-2/4">
                    <Input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for technologies..."
                        className="w-full p-2 border border-gray-300 rounded mr-2"
                    />
                    {query && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-2 top-2 p-1 bg-gray-200 rounded-full"
                        >
                            <X className="h-4 w-4 text-gray-500" />
                        </button>
                    )}
                </div>
                <Button onClick={handleSearchClick} className="ml-2">
                    Search
                </Button>
            </div>

            {/* Display Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {results.length > 0 ? (
                    results.map((item) => <Card key={item.id} {...item} />)
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchManual;
