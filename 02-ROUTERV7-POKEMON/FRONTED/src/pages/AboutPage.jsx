const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-950 mb-4">Sobre PokéApp</h1>
          <p className="text-lg text-gray-600">
            Tu compañero definitivo para explorar el mundo Pokémon
          </p>
        </header>

        {/* Características principales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sky-900 mb-6">Características Principales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-rose-500 mb-3">Búsqueda Avanzada</h3>
              <p className="text-gray-600">
                Encuentra cualquier Pokémon fácilmente usando nuestro sistema de búsqueda intuitivo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-rose-500 mb-3">Lista de Favoritos</h3>
              <p className="text-gray-600">
                Guarda tus Pokémon preferidos en tu lista personal de favoritos para acceso rápido.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo usar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sky-900 mb-6">Cómo Usar PokéApp</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ol className="space-y-4 list-decimal list-inside text-gray-600">
              <li>
                <span className="font-semibold text-sky-800">Explora:</span> Navega por nuestra extensa colección de Pokémon en la página principal.
              </li>
              <li>
                <span className="font-semibold text-sky-800">Busca:</span> Utiliza la función de búsqueda para encontrar Pokémon específicos.
              </li>
              <li>
                <span className="font-semibold text-sky-800">Guarda:</span> Añade tus Pokémon favoritos a tu lista personal.
              </li>
              <li>
                <span className="font-semibold text-sky-800">Aprende:</span> Descubre detalles y estadísticas de cada Pokémon.
              </li>
            </ol>
          </div>
        </section>

        {/* Información técnica */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sky-900 mb-6">Información Técnica</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              PokéApp está construida utilizando tecnologías modernas:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>React para la interfaz de usuario</li>
              <li>Tailwind CSS para el diseño</li>
              <li>PokeAPI como fuente de datos</li>
              <li>React Router para la navegación</li>
            </ul>
          </div>
        </section>

        {/* Versión */}
        <footer className="text-center text-gray-500 mt-8">
          <p>Versión 1.0.0</p>
          <p className="mt-2">Desarrollado por Rubén Zamora Castellano</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;