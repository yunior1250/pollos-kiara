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
            }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              Pollos Broaster y Hamburguesas
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Pollo Broaster Entero</span>
                <span className="font-bold">88 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>1/4 de Pollo</span>
                <span className="font-bold">22 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>1/8 Económico</span>
                <span className="font-bold">14 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>Hamburguesa Doble</span>
                <span className="font-bold">23 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>Hamburguesa Clásica</span>
                <span className="font-bold">16 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>Hamburguesa Simple</span>
                <span className="font-bold">13 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>Milaneza Picada</span>
                <span className="font-bold">20 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>Milaneza Napolitana</span>
                <span className="font-bold">20 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>Bife con Huevo</span>
                <span className="font-bold">15 Bs</span>
              </li>
              <li className="flex justify-between">
                <span>Chuletas Res & Cerdo</span>
                <span className="font-bold">15 Bs</span>
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
            <h3 className="text-3xl font-bold mb-4 text-white">Almuerzos</h3>
            <h2 className="text-2xl font-bold mb-4">Sopas</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Sopa de Maní & Fideo</span>
                <span className="font-bold">$</span>
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Platos</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Feioada mixta res & cerdo</span>
                <span className="font-bold">$</span>
              </li>
              <li className="flex justify-between">
                <span>Pollo a la mostaza</span>
                <span className="font-bold">$</span>
              </li>
              <li className="flex justify-between">
                <span>Saice tarijeño</span>
                <span className="font-bold">$</span>
              </li>
              <li className="flex justify-between">
                <span>Milaneza de pollo </span>
                <span className="font-bold">$</span>
              </li>
              <li className="flex justify-between">
                <span>Milaneza de carne </span>
                <span className="font-bold">$</span>
              </li>
              <li className="flex justify-between">
                <span>Sillpacho c/huevo </span>
                <span className="font-bold">$</span>
              </li>
              <li className="flex justify-between">
                <span>Biffe de higado </span>
                <span className="font-bold">$</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
