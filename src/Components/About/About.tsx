

export const About = () => {
    return (
        <section className="about-section py-16 bg-gray-50 h-[100vh]">
            <div className="container-about mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"> </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                        Somos una empresa comprometida con la excelencia y la satisfacción del cliente. 
                        Desde nuestros inicios, nos hemos dedicado a ofrecer productos de la más alta 
                        calidad, combinando innovación con un servicio personalizado.
                    </p>
                    
                    <p className="text-lg text-gray-700 mb-6">
                        Nuestra misión es proporcionar soluciones que mejoren la vida de nuestros 
                        clientes, manteniendo siempre los más altos estándares de calidad y 
                        responsabilidad social.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Calidad</h3>
                            <p className="text-gray-600">
                                Seleccionamos cuidadosamente cada producto para garantizar la mejor experiencia.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovación</h3>
                            <p className="text-gray-600">
                                Constantemente buscamos nuevas formas de mejorar y evolucionar.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Compromiso</h3>
                            <p className="text-gray-600">
                                Nos dedicamos a brindar el mejor servicio a nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 