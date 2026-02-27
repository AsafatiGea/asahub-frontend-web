import { useState } from "react";
import { supabase } from "../../services/supabaseClient";

export default function CreateListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit() {
  const imageUrl = await uploadImage();

  const { data: userData } = await supabase.auth.getUser();

  await supabase.from("listings").insert([
    {
      title,
      description,
      price,
      category,
      image_url: imageUrl,
      seller_id: userData?.data?.user?.id,
    },
  ]);

  alert("Listing berhasil dibuat");
  window.location.reload();
}
  async function uploadImage() {
    if (!image) return null;

    const fileName = `${Date.now()}-${image.name}`;

    const { data, error } = await supabase.storage
      .from("listing-images")
      .upload(fileName, image);

    if (error) return null;

    const { data: publicUrl } = supabase.storage
      .from("listing-images")
      .getPublicUrl(fileName);

    return publicUrl.publicUrl;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow mt-20">
      <h2 className="text-2xl font-bold mb-6">Tambah Listing</h2>

      <input
        className="w-full border p-3 rounded-xl mb-3"
        placeholder="Judul"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-3 rounded-xl mb-3"
        placeholder="Deskripsi"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="w-full border p-3 rounded-xl mb-3"
        placeholder="Harga"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="w-full border p-3 rounded-xl mb-3"
        placeholder="Kategori"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="file"
        className="w-full border p-3 rounded-xl mb-3"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"
      >
        Publish Listing
      </button>
    </div>
  );
}
