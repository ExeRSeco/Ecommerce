import {FaUser, FaShoppingCart, FaBars, FaTimes} from 'react-icons/fa'
import { useModalContext } from '../../Contexts/ModalContext'
import { useCart } from '../../Hooks/useCartContext'
import { useState } from 'react'

export const Header = () => {
  const {setState} = useModalContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {state:{cartItems}} = useCart()

  const openModal = () => {
    setState(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50">
        <div className="bg-gray-900 py-4 px-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center">
                <a href="/" className='text-2xl font-bold text-white hover:text-blue-500 transition-colors duration-300'>
                    MY FIRST PROJECT
                </a>
            </div>
            
            {/* Botón menú móvil */}
            <button 
              className="md:hidden text-white text-2xl hover:text-blue-500 transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent z-50 shadow-lg md:shadow-none`}>
                <nav className='flex flex-col md:flex-row items-center gap-4 p-4 md:p-0' >
                    <ul className='flex flex-col md:flex-row items-center gap-4 text-white font-bold'>
                        <li>
                            <a href="/" className="hover:text-blue-500 transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-blue-500 transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
                        </li>
                        <li>
                            <a href="/products" className="hover:text-blue-500 transition-colors duration-300">Products</a>
                        </li>
                    </ul>
                    <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
                        <input 
                            type="text" 
                            placeholder='Search' 
                            className='w-full md:w-64 p-2 rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white' 
                        />
                        <button 
                            type='submit' 
                            className='w-full md:w-auto px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-bold'
                        >
                            Search
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <a 
                            href="/login" 
                            className='flex items-center gap-2 p-2 rounded-md text-white hover:bg-blue-500 transition-colors duration-300'
                        >
                            <FaUser className='text-xl'/>
                        </a>
                        <button 
                            onClick={openModal} 
                            className='flex items-center gap-2 p-2 rounded-md text-white hover:bg-blue-500 transition-colors duration-300'
                        > 
                            {location.pathname !== '/checkout' && <FaShoppingCart className='text-xl'/>}
                            {location.pathname !== '/checkout' && (
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {cartItems.length > 0 ? cartItems.length : 0}
                                </span>
                            )}
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  );
};
