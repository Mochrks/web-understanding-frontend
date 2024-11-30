import { useState } from 'react';
import { Page } from '@/components/demo/Page';
import { Title } from '@/components/demo/Title';
import { SearchItem, dummyData } from '@/apis/SearchApi';
import { ShowDataPage } from '@/components/demo/ShowDataPage';
import { Card } from '@/components/ui/card';

export const PaginationClient = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate total pages
    const totalPages = Math.ceil(dummyData.length / itemsPerPage);

    // Get current page data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(Number(value));
        setCurrentPage(1); // Reset to first page when items per page change
    };

    return (
        <>
            <div className='container p-5 '>
                <Title name="Screen pagination client-side" />
            </div>
            <div className='h-full py-20'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {currentItems.length > 0 ? (
                        currentItems.map((item: SearchItem) => (
                            <Card key={item.id} className='p-5'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-gray-500">
                            <p>Data Not Found</p>
                        </div>
                    )}

                </div>
            </div>
            <Card>
                <div className='flex flex-col lg:flex-row justify-between p-5 gap-2'>
                    <ShowDataPage onItemsPerPageChange={handleItemsPerPageChange} />
                    <Page currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            </Card>
        </>
    );
};

export default PaginationClient;
