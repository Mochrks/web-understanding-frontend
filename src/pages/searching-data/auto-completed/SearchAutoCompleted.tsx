import React, { useState, useEffect } from "react";
import { SearchItem, searchApi } from "@/apis/SearchApi";


import { Input } from "@/components/ui/input";
import { Title } from "@/components/demo/Title";

// Card component to display individual search items
const Card: React.FC<SearchItem> = ({ name, description }) => (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export const SearchAutoCompleted: React.FC = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await searchApi.search("");
            setResults(data);
        };
        fetchData();
    }, []);


    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        const data = await searchApi.search(e.target.value);
        setResults(data);
    };

    return (
        <div className="container mx-auto p-4">
            <Title name="Auto Completed Search Page" />
            <div className="flex flex-col justify-center items-center">
                {/* Search Input */}
                <Input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search for technologies..."
                    className="w-full lg:w-2/4 p-2 border border-gray-300 rounded mb-6 mt-10 "
                />

                {/* Display Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {results.length > 0 ? (
                        results.map((item) => <Card key={item.id} {...item} />)
                    ) : (
                        <div>

                            <p >No results found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchAutoCompleted;
