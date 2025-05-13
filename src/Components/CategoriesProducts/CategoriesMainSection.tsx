import { useState, useEffect } from "react";

interface Category {
    id: number;
    name: string;
    url: string;
}

export const CategoriesMainSection = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://dummyjson.com/products/categories');
            const data = await response.json();
            setCategories(data.slice(0, 4));
            console.log(data);
        };
        fetchCategories();
    }, []);
   
    return (
        <section className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Categories
                    </h3>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {categories.map((category) => (
                        <div 
                            key={category.id} 
                            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="aspect-square flex flex-col items-center justify-center text-center">
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {category.name}
                                </h4>
                                <div className="mt-4 w-12 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
