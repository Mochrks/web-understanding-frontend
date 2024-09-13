import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PageProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

export const Page: React.FC<PageProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const renderPaginationItems = () => {
        const pages = [];

        // Always show the first page
        pages.push(
            <PaginationItem key={1}>
                <PaginationLink
                    href="#"
                    className={`${currentPage === 1 ? 'bg-black hover:bg-black text-white hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} px-3 py-1 rounded`}
                    onClick={() => onPageChange(1)}
                >
                    1
                </PaginationLink>
            </PaginationItem>
        );

        // Show ellipsis if currentPage is beyond page 4
        if (currentPage > 4) {
            pages.push(<PaginationEllipsis key="ellipsis-start" />);
        }

        // Pages around the current page
        const startPage = Math.max(2, currentPage - 2); // Start from 2nd page or around the current
        const endPage = Math.min(totalPages - 1, currentPage + 2); // End before the last page or around the current

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        href="#"
                        className={`${currentPage === i ? 'bg-black hover:bg-black text-white hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} px-3 py-1 rounded`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        // Show ellipsis before the last page if not yet displayed
        if (endPage < totalPages - 1) {
            pages.push(<PaginationEllipsis key="ellipsis-end" />);
        }

        // Always show the last page
        if (totalPages > 1) {
            pages.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink
                        href="#"
                        className={`${currentPage === totalPages ? 'bg-black hover:bg-black text-white hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} px-3 py-1 rounded`}
                        onClick={() => onPageChange(totalPages)}
                    >
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        return pages;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={handlePrevious}
                        className={`${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={currentPage === 1}
                    />
                </PaginationItem>

                {renderPaginationItems()}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={handleNext}
                        className={`${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={currentPage === totalPages}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
