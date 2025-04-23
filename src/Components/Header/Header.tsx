
import {FaUser, FaCartPlus} from 'react-icons/fa'
import { useModalContext } from '../../Contexts/ModalContext'
import { useCart } from '../../Hooks/useCartContext'
export const Header = () => {
  const {setState} = useModalContext()
  const openModal = () => {
    setState(true)
  }

  const {state:{cartItems}} = useCart()
  return (
    <header>
        <div className="container-header bg-gray-900 py-4 px-4 flex justify-between items-center">
            <div className="header__logo text-2xl font-bold text-white">
                <a href="/" className='text-2xl font-bold text-white hover:text-blue-600 transition-all duration-300'>
                    MY FIRST PROJECT
                </a>
            </div>
            <div className="header__menu ">

                <nav className='nav-header flex items-center gap-4' >
                    <ul className='flex items-center gap-4 text-white font-bold'>
                        <li>
                            <a href="/" className="link-header font-bold text-white hover:text-blue-600 transition-all duration-300">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="link-header font-bold text-white hover:text-blue-600 transition-all duration-300">About</a>
                        </li>
                        <li>
                            <a href="/" className="link-header font-bold text-white hover:text-blue-600 transition-all duration-300">Contact</a>
                        </li>
                        <li>
                            <a href="/products" className="link-header font-bold text-white hover:text-blue-600 transition-all duration-300">Products</a>
                        </li>
                    </ul>
                    <div className="header__menu--search flex items-center gap-2">
                        <input type="text" placeholder='Search' className='input-search--header p-2 rounded-md border-2 border-blue-600 w-full focus:outline-none text-white' />
                        <button type='submit' className='button-search--header p-2 rounded-md bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white font-bold cursor-pointer hover:text-white'>Search</button>
                    </div>
                    <div className="header__menu--login flex items-center gap-2">
                        <a href="/login" className='button-login--header flex items-center gap-2 p-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-600 transition-all duration-300'> <FaUser className='text-xl'/></a>
                        <button onClick={openModal} className='button-cart--header flex items-center gap-2 p-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-600 transition-all duration-300'> 
                        <FaCartPlus className='text-xl'/>
                        <span className="cart-count text-white font-bold">{ cartItems.length > 0 ? cartItems.length : 0 }</span>
                        </button>
                        
                    </div>
                </nav>
            </div>
        </div>
    </header>
  );
};
