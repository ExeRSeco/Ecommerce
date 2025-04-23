import { FaArrowDown } from "react-icons/fa6"
import { useState } from "react"



export const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }





    return (
        <div className="products-container__filters">
            <div className="products-container__filters--header flex justify-between items-center mb-4 gap-2 cursor-pointer" onClick={handleOpen}>
            <h2 className="products-container__filters--title font-bold text-center">Filters</h2>
            <button className="products-container__filters--arrow-icon">
                <FaArrowDown />
            </button>
            </div>
            <div className={`products-container__filters--filter flex flex-col gap-4 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="products-container__filters--filter-item flex gap-2">
                  <label htmlFor="price" className="w-full text-center">Prices</label>
                  <input type="text" placeholder="From" className="w-full text-center border-2 border-gray-300"/>
                  <input type="text" placeholder="To" className="w-full text-center border-2 border-gray-300"/>
                </div>
                <div className="products-container__filters--filter-item flex gap-2">
                    <label htmlFor="categories" className="w-full text-center">Categories</label>
                    <select name="categories" id="categories" className="w-full text-center border-2 border-gray-300">
                        <option value="all" className="text-center">All</option>
                        <option value="category1" className="text-center">Category 1</option>
                        <option value="category2" className="text-center">Category 2</option>
                        <option value="category3" className="text-center">Category 3</option>
                    </select>
                </div>
                <div className="products-container__filters--filter-item flex gap-2">
                    <label htmlFor="colors" className="w-full text-center">Colors</label>
                    <select name="colors" id="colors" className="w-full text-center border-2 border-gray-300">
                        <option value="all" className="text-center">All</option>
                        <option value="color1" className="text-center">Color 1</option>
                        <option value="color2" className="text-center">Color 2</option>
                        <option value="color3" className="text-center">Color 3</option>
                    </select>
                </div>
                <div className="products-container__filters--filter-item flex gap-2">
                    <label htmlFor="sizes" className="w-full text-center">Sizes</label>
                    <select name="sizes" id="sizes" className="w-full text-center border-2 border-gray-300" >
                        <option value="all" className="text-center">All</option>
                        <option value="size1" className="text-center">Size 1</option>
                        <option value="size2" className="text-center">Size 2</option>
                        <option value="size3" className="text-center">Size 3</option>
                    </select>

                </div>
                <div className="products-container__filters--filter-item flex gap-2">
                    <label htmlFor="brands" className="w-full text-center">Brands</label>
                    <select name="brands" id="brands" className="w-full text-center border-2 border-gray-300">
                        <option value="all" className="text-center">All</option>
                        <option value="brand1" className="text-center">Brand 1</option>
                        <option value="brand2" className="text-center">Brand 2</option>
                        <option value="brand3" className="text-center">Brand 3</option>
                    </select>
                </div>
                <button className="products-container__filters--filter-item bg-blue-500 text-white px-4 py-2 rounded-md">Apply Filters</button>
            </div>
        </div>
    )
}
