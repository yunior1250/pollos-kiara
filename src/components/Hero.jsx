

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Contenido */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Bienvenido a Pollos Kiara</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                    Descubre el sabor auténtico de nuestros pollos asados.
                </p>
                <a
                    href="#about"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                    Conócenos
                </a>
            </div>
        </section>
    );
}

export default Hero;