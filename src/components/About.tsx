const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-200 text-gray-800 bg-[url('/images/hamburgesa.jpg')] bg-no-repeat bg-cover bg-center min-h-[60vh]">
    
      <div className="bg-orange-400/50  py-12 px-6 rounded-4xl max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg mb-4 text-white">
          En <span className="font-bold text-orange-400">Pollos Kiara</span>,
          nos dedicamos a ofrecer una experiencia culinaria única. Durante el
          día, servimos deliciosos almuerzos caseros que incluyen sopas
          tradicionales y platos principales llenos de sabor. Por la noche,
          deleitamos a nuestros clientes con pollo frito crujiente y opciones a
          la parrilla que son perfectas para compartir en familia o con amigos.
        </p>
        <p className="text-lg text-white">
          Nuestro compromiso es brindar comida de calidad, preparada con
          ingredientes frescos y un toque especial que nos distingue. ¡Te
          esperamos todos los días para disfrutar de lo mejor de nuestra cocina!
        </p>
      </div>
    </section>
  );
};

export default About;
