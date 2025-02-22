const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de información */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-rose-300">PokéApp</h3>
            <p className="text-gray-200">
              Tu fuente definitiva de información sobre Pokémon. 
              Explora el mundo Pokémon, descubre nuevas especies y 
              guarda tus favoritos en tu Pokédex personal.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 text-rose-300">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-200 hover:text-rose-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/search" className="text-gray-200 hover:text-rose-300 transition-colors">
                  Búsqueda
                </a>
              </li>
              <li>
                <a href="/favorites" className="text-gray-200 hover:text-rose-300 transition-colors">
                  Favoritos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 PokéApp. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-rose-300 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-300 text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-300 text-sm transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;