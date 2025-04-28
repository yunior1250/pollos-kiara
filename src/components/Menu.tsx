const Menu = () => {
  return (
    <section
      id="menu"
      className="py-30 bg-red-600 bg-cover bg-center "
     /*  style={{
        backgroundImage: "url('/images/hero.jpg')",
        //queb no se repita la imagen de fondo
        backgroundRepeat: "no-repeat", // Cambia esta ruta por la imagen de fondo
      }} */
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className=" text-white text-3xl font-bold text-center  mb-8">
          Nuestros Menús
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Menú de Pollos Fritos y Hamburguesas */}
          <div
            className="bg-cover bg-center shadow-md rounded-lg p-6 text-white"
            style={{
              backgroundImage: "url('/images/hero.jpg')",

              // Imagen específica para este menú
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Pollos Fritos y Hamburguesas
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Pollo Frito (8 piezas)</span>
                <span className="font-bold">$12.99</span>
              </li>
              <li className="flex justify-between">
                <span>Hamburguesa Clásica</span>
                <span className="font-bold">$8.99</span>
              </li>
              <li className="flex justify-between">
                <span>Hamburguesa BBQ</span>
                <span className="font-bold">$9.99</span>
              </li>
              <li className="flex justify-between">
                <span>Combo Familiar (Pollo + Papas + Bebidas)</span>
                <span className="font-bold">$19.99</span>
              </li>
            </ul>
          </div>

          {/* Menú de Almuerzos */}
          <div
            className="bg-cover bg-center shadow-md rounded-lg p-6 text-white"
            style={{
              backgroundImage: "url('/images/hero.jpg')", // Imagen específica para este menú
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Almuerzos
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Sopa de Maní + Feijoada</span>
                <span className="font-bold">$10.99</span>
              </li>
              <li className="flex justify-between">
                <span>Sopa de Verduras + Ranga</span>
                <span className="font-bold">$9.99</span>
              </li>
              <li className="flex justify-between">
                <span>Caldo de Pollo + Seco de Res</span>
                <span className="font-bold">$11.99</span>
              </li>
              <li className="flex justify-between">
                <span>Sopa de Quinua + Pollo al Horno</span>
                <span className="font-bold">$12.49</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
