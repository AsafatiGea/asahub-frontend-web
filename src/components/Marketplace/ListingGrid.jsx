import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { Link } from "react-router-dom";

export default function ListingGrid() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  async function loadListings() {
    const { data } = await supabase
      .from("listings")
      .select("*")
      .order("created_at", { ascending: false });

    setListings(data || []);
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Marketplace AsaHub
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {listings.map((item) => (
          <Link key={item.id} to={`/listing/${item.id}`}>
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt=""
                  className="w-full h-52 object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <p className="font-bold text-blue-600">Rp {item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
