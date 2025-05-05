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
        <div className="categories-main-section bg-gray-100 h-[100vh] flex flex-col items-center justify-center">
                <h3 className="categories-main-section__title text-4xl font-bold text-center mb-4">Categories</h3>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <div className="categories-main-section__categories grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-4xl mt-8" > 
                    {categories.map((category) => (
                    <div key={category.id} className="categories-main-section__categories--category bg-white rounded-lg p-4 flex flex-col items-center justify-center h-[200px] w-[200px] hover:bg-gray-100 cursor-pointer shadow-lg transition-all duration-300">
                        <h4 className="categories-main-section__categories--category-title text-2xl font-bold text-center text-gray-800 mt-4" key={category.id}>{category.name}</h4>
                    </div>
                ))} 
            </div>
        </div>
    )
}
