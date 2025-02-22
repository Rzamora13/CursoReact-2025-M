import { useContext } from 'react'
import { ReviewsContext } from '../context/ReviewsContext'
import { useToast } from '../context/ToastContext'

const ReviewItem = ({ review }) => {
  const { deleteReview } = useContext(ReviewsContext)
  const { showToast } = useToast()
  return (
    <article key={review.id} className='break-words card transform transition-transform duration-300 hover:scale-105 bg-blue-950 rounded m-2 p-4 min-h-[100px] flex flex-col' >
      <div className='flex justify-between'>
        <div className='bg-black bg-opacity-50 text-white py-1 px-2 rounded'>
          ⭐ {review.rating}
        </div>
        <button onClick={() => (deleteReview(review.id), showToast('Review eliminada ❌', 'error'))}>🗑</button>
      </div>
      <h3 className='font-bold text-lg text-white pt-2'>{review.movieTitle}</h3>
      <p className='text-sm text-gray-300'>
        {review.review}
      </p>
    </article>
  )
}

export default ReviewItem