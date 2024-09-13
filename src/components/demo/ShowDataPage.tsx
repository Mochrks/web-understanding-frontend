import React, { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from '../ui/label';
import { Input } from '../ui/input';

interface ShowDataPageProps {
    onItemsPerPageChange: (value: number) => void;
}

export const ShowDataPage: React.FC<ShowDataPageProps> = ({ onItemsPerPageChange }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSelectChange = (value: string) => {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) && parsedValue > 0) {
            onItemsPerPageChange(parsedValue);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setInputValue(value);

        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) && parsedValue > 0) {
            onItemsPerPageChange(parsedValue);
        }
    };

    return (
        <div className='flex gap-3 text-center justify-start items-center w-full '>
            <Label>Items per pages</Label>
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[60px]">
                    <SelectValue placeholder="5" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Input
                id="itemsPerPage"
                type="number"
                min="1"
                value={inputValue}
                onChange={handleInputChange}
                className="border px-2 py-1 w-[50px] rounded"
            />
        </div>

    );
};
