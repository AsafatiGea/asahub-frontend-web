import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";

export default function ReviewSection({ listingId }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("listing_id", listingId)
      .order("created_at", { ascending: false });

    setReviews(data || []);
  }

  async function submitReview() {
    const { data: userData } = await supabase.auth.getUser();

    await supabase.from("reviews").insert([
      {
        listing_id: listingId,
        user_id: userData?.data?.user?.id,
        rating,
        comment,
      },
    ]);

    setComment("");
    loadReviews();
  }

  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl mb-4">Review</h3>

      <div className="space-y-4 mb-6">
        {reviews.map(r => (
          <div key={r.id} className="bg-gray-100 p-4 rounded-xl">
            <p>⭐ {r.rating} / 5</p>
            <p className="text-gray-600">{r.comment}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={e => setRating(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />

        <textarea
          placeholder="Tulis review..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />

        <button
          onClick={submitReview}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Kirim Review
        </button>
      </div>
    </div>
  );
}