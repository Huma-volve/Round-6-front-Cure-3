import Header from "@/lib/Header/Header"
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { addReview } from "@/api/addreview/Addreview"

const AddReview = () => {
  const navigate = useNavigate()
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)
  const [review, setReview] = useState<string>("")

  const handleRating = (value: number) => {
    setRating(value)
  }

  function handleSubmit() {
    addReview({ rating, review })
    .then(() => {
     navigate("/doctorDetails/:id")
    })
  }

  return (
    <>
      <Header
        title="Add Review"
        onBack={() => navigate("/doctorDetails/:id")}
      />

      <main className="mt-7 w-[90%] mx-auto max-w-2xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Your Rate</h2>

        <div className="flex items-center gap-2 mb-6">
          {[...Array(5)].map((_, index) => {
            const value = index + 1
            return (
              <FaStar
                key={value}
                size={30}
                onClick={() => handleRating(value)}
                onMouseEnter={() => setHover(value)}
                onMouseLeave={() => setHover(0)}
                className={`cursor-pointer transition-colors ${
                  value <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            )
          })}
          <p className="ml-2 text-lg font-medium">{rating}/5</p>
        </div>

        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full h-32 p-2 border-2 border-Background-Neutral-Darker rounded-lg focus:outline-none focus:ring-2 focus:ring-Background-Primary-Defult resize-none text-base md:text-lg"
        />

        <Button
          onClick={handleSubmit}
          className="w-full mt-6 rounded-lg p-6 text-Background-Neutral-Lightest bg-Background-Primary-Defult hover:bg-Background-Primary-Defult/90 transition-all text-lg md:text-xl"
        >
          Submit Review
        </Button>
      </main>
    </>
  )
}

export default AddReview
