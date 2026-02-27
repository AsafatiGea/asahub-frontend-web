import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import ReviewSection from "../components/Marketplace/ReviewSection";
import ChatBox from "../components/Marketplace/ChatBox";

export default function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    loadListing();
  }, []);

  async function loadListing() {
    const { data } = await supabase
      .from("listings")
      .select("*")
      .eq("id", id)
      .single();

    setListing(data);
  }

  if (!listing) {
    return <p className="text-center mt-32">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="bg-white rounded-2xl shadow p-8">
        {listing.image_url && (
          <img
            src={listing.image_url}
            alt=""
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
        )}

        <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>

        <p className="text-gray-600 mb-6">{listing.description}</p>

        <p className="text-2xl font-bold text-blue-600 mb-10">
          Rp {listing.price}
        </p>
      </div>

      {/* Review Section */}
      <ReviewSection listingId={listing.id} />

      {/* Chat Section */}
      <ChatBox listingId={listing.id} />
    </div>
  );
}
