export default function Footer() {
  return (
    <footer className="bg-white border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Grid Footer */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              AsaHub
            </h2>
            <p className="text-gray-600">
              Pusat harapan ekosistem bisnis dan teknologi masa depan.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Marketplace</li>
              <li>Dashboard</li>
              <li>Edukasi</li>
              <li>Karir</li>
            </ul>
          </div>

          {/* Vision */}
          <div>
            <h3 className="font-semibold mb-4">Visi AsaHub</h3>
            <p className="text-gray-600">
              Membangun pusat ekosistem bisnis yang memberdayakan individu dan
              brand untuk tumbuh bersama dalam era digital.
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AsaHub – All rights reserved.
        </div>

      </div>
    </footer>
  );
}