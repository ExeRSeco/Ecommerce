import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Hero = () => {
    return (
        <section className="hero-section relative w-full h-screen">
            {/* Contenedor del carrusel */}
            <div className="carrousel-home__container relative w-full h-full overflow-hidden">
                {/* Imagen actual */}
                <div className="carrousel-home__container--item w-full h-full">
                    <img 
                        src="./Public/img/hero1.jpg" 
                        alt="img carrousel 1" 
                        className="carrousel-home--item-img w-full h-full object-cover" 
                    />
                    {/* Overlay para mejorar la legibilidad del texto */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                </div>
                
                {/* Contenido de la sección hero */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        Bienvenido a Nuestra Tienda
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
                        Descubre nuestra colección exclusiva de productos con las mejores ofertas del mercado
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all cursor-pointer">
                            Explorar Productos
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all cursor-pointer">
                            Saber Más
                        </button>
                    </div>
                </div>
                
                {/* Botones de navegación del carrusel */}
                <div className="carrousel-home__container--buttons absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                    <button className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                        <FaChevronLeft className="text-white text-2xl" />
                    </button>
                    <button className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                        <FaChevronRight className="text-white text-2xl" />
                    </button>
                </div>
            </div>
        </section>
    )
}
