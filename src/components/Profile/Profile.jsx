import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const user = useAuth();

  if (!user) return <p className="text-center">Belum login</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow max-w-md mx-auto mt-20">
      <h2 className="text-xl font-bold mb-4">Profile User</h2>

      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>
    </div>
  );
}
