import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
    minPrice: number;
    maxPrice: number;
    selectedCategory: string;
    setMinPrice: (value: number) => void;
    setMaxPrice: (value: number) => void;
    setSelectedCategory: (value: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    return (
        <FilterContext.Provider value={{
            minPrice,
            maxPrice,
            selectedCategory,
            setMinPrice,
            setMaxPrice,
            setSelectedCategory
        }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilters = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilters must be used within a FilterProvider');
    }
    return context;
};