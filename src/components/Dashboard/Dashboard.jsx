import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  if (!user) {
    return <p className="text-center mt-32">Loading dashboard...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-28 bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Dashboard AsaHub</h2>

      <div className="space-y-3 text-gray-600">
        <p>Email: {user.email}</p>
        <p>User ID: {user.id}</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
