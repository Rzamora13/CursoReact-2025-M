import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getImageUrl, getMovieDetails, getMovieVideos } from "../services/tmdb";
import { PacmanLoader } from "react-spinners";
import ReviewForm from "../components/ReviewForm";
import ReviewItem from "../components/ReviewItem";
import { useContext } from "react";
import { ReviewsContext } from "../context/ReviewsContext";
import { useLanguage } from '../context/LanguageContext'

const MovieDetail = () => {
  const { language } = useLanguage()
  const {id} = useParams();
  const {data, loading, error} = useFetch(() => getMovieDetails(language, Number(id)),[language, id]);
  const {data: videos} = useFetch(() => getMovieVideos(language, Number(id)),[language, id]);
  const { reviews } = useContext(ReviewsContext)

  if (error){
    return(
      <div className="text-center p-10">
        <p className="text-red-600">Error al cargar la película</p>
      </div>
    )
  }
  if(loading) return <PacmanLoader color='#3a6bca' />;

  // Encontrar el primer trailer disponible
  const trailer = videos?.results?.find(
    video => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <article className="max-w-6xl mx-auto p-4">
      <header className="relative h-[300px] mb-8">
        <img className="w-full h-full object-cover rounded-lg shadow-xl" src={getImageUrl(data.backdrop_path, 'original')} alt={data.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
            {data.tagline && (
              <p className="text-lg text-gray-300 italic mb-4">{data.tagline}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span className="text-base">{data.vote_average?.toFixed(1)}/10</span>
              </div>
              <span className="text-base">
                {new Date(data.release_date).getFullYear()}
              </span>
              <span className="text-base">{data.runtime} min</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-grow space-y-8">
          {trailer && (
            <section>
              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={trailer.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

          <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-bold text-gray-700">Estado</h3>
              <p>{data.status}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Presupuesto</h3>
              <p>{data.budget ? `$${data.budget.toLocaleString()}` : 'No disponible'}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Ingresos</h3>
              <p>{data.revenue ? `$${data.revenue.toLocaleString()}` : 'No disponible'}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Idioma original</h3>
              <p>{data.original_language?.toUpperCase()}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Popularidad</h3>
              <p>{data.popularity?.toFixed(1)}</p>
            </div>
          </section>
        </div>

        <aside className="w-full md:w-[200px] flex-shrink-0 space-y-6">
          <img src={getImageUrl(data.poster_path)} alt={data.title} className="w-full rounded-lg shadow-lg" />

          <section>
            <h2 className="text-2xl font-bold mb-4">Sinopsis</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.overview || 'No hay sinopsis disponible.'}
            </p>
          </section>
          
          <div className="flex flex-wrap gap-2">
            {data.genres?.map(genre => (
              <span 
                key={genre.id} 
                className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
              >
                {genre.name}
              </span>
            ))}
          </div>
          
        </aside>
      </div>

      <section>
        <ReviewForm key={data.id} movie={data} />
      </section>
      <section className='p-4 mt-10 bg-gray-300 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold mb-4'>Reviews</h2>
        {reviews.filter((review) => review.movieId === data.id).length === 0 && <p className='text-xl text-gray-800'>No hay reviews</p>}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {reviews?.filter((review) => review.movieId === data.id ).map((review) => (
                // Aqui va el componente ReviewItem
                <ReviewItem key={review.id} review={review} />
            ))}
        </div>
      </section>
    </article>
  )
}

export default MovieDetail;