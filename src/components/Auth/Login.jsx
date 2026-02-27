import { useState } from "react";
import { supabase } from "../../services/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    await supabase.auth.signInWithOtp({
      email,
    });

    setLoading(false);
    alert("Check email untuk login link");
  }

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <div className="max-w-md mx-auto mt-32 bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login AsaHub</h2>

      <input
        className="w-full border p-3 rounded-xl mb-4"
        placeholder="Email kamu"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-3 rounded-xl mb-3 hover:bg-blue-700"
      >
        Login dengan Email
      </button>

      <button
        onClick={handleGoogleLogin}
        className="w-full border p-3 rounded-xl hover:bg-gray-100"
      >
        Login dengan Google
      </button>

      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
}
