import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";

export default function ChatBox({ listingId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("listing_id", listingId)
      .order("created_at", { ascending: true });

    setMessages(data || []);
  }

  async function sendMessage() {
    const { data: userData } = await supabase.auth.getUser();

    await supabase.from("messages").insert([
      {
        listing_id: listingId,
        sender_id: userData?.data?.user?.id,
        content: text,
      },
    ]);

    setText("");
    loadMessages();
  }

  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl mb-4">Chat</h3>

      <div className="h-60 overflow-y-auto bg-gray-100 p-4 rounded-xl mb-4">
        {messages.map((m) => (
          <p key={m.id} className="mb-2 text-sm">
            {m.content}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Ketik pesan..."
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-xl"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
