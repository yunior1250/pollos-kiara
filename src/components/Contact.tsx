const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-orange-400">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="bg-orange-300 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              Información
            </h3>
            <p className="text-lg mb-2">
              📍 <span className="font-bold">Dirección:</span> Av. Principal
              123, Ciudad
            </p>
            <p className="text-lg mb-2">
              📞 <span className="font-bold">Teléfono:</span>{" "}
              <a
                href="https://wa.me/59175652697"
                className="text-orange-500 hover:underline"
              >
                +591 75652697
              </a>
            </p>
            <p className="text-lg mb-2">
              🕒 <span className="font-bold">Horarios:</span> Lunes a Domingo,
              12:00 PM - 10:00 PM
            </p>
            <p className="text-lg">
              ¡Haz tu pedido ahora y disfruta de lo mejor de{" "}
              <span className="font-bold text-orange-500">Pollos Kiara</span>!
            </p>
          </div>

          {/* Mapa de Google */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=-17.804778,-63.190278&z=17&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
