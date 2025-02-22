import { useContext } from 'react'
import ReviewItem from '../components/ReviewItem'
import { ReviewsContext } from '../context/ReviewsContext'

const Reviews = () => {
  const { reviews } = useContext(ReviewsContext)
  return (
    <div className='p-4 mt-10 bg-gray-300 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4'>Reviews</h2>
      {reviews.length === 0 && <p className='text-xl text-gray-800'>No hay reviews</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {reviews?.map((review) => (
              // Aqui va el componente ReviewItem
              <ReviewItem key={review.id} review={review} />
          ))}
      </div>
    </div>
  )
}

export default Reviews