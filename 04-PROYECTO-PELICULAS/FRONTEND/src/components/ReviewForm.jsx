import { useContext, useState } from "react";
import { ReviewsContext } from '../context/ReviewsContext'
import { useToast } from "../context/ToastContext";

const ReviewForm = ({ movie }) => {
    const { addReview } = useContext(ReviewsContext)
    const [rating, setRating] = useState(10);
    const { showToast } = useToast()
    const handleSubmit = (e) => {
        const formData = new FormData(e.target)
        e.preventDefault();
        addReview({
            id: Date.now(),
            movieId: movie.id,
            movieTitle: movie.title,
            review: formData.get('review'),
            rating: rating,
        })
        showToast('Review añadida ✔')
        setRating(null)
        e.target.reset()
    }
  return (
    <form className="space-y-4 bg-gray-600 flex flex-col p-4 rounded-lg mt-4" onSubmit={handleSubmit}>
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <label key={value} className="m-1">
                    <input type="radio" value={value} checked={rating === value} onChange={() => setRating(value)} className="hidden" />
                    <span className={`px-2 py-1 rounded-md ${ rating === value ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700" }`} >
                        {value} ⭐
                    </span>
                </label>
            ))}
        </div>
        <textarea required name="review" rows="4" cols="50" placeholder="Escribe tu review" className="text-white"/>
        <button type="submit" className="bg-white p-2 rounded">Clasificar</button>
    </form>
  )
}

export default ReviewForm