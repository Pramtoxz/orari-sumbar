import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { Link } from "@inertiajs/react"

interface Berita {
  id: number
  judul: string
  isi: string
  gambar: string
  tanggal: string
  user: {
    name: string
  }
}

export default function ArtikelIndex({ berita }: { berita: Berita[] }) {
  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return '/placeholder.jpg'
    if (imagePath.startsWith('http')) return imagePath
    return `/storage/${imagePath}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#CC1616] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Berita ORARI Sumbar</h1>
          <p className="text-lg opacity-90">Kumpulan berita dan informasi terkini dari ORARI Daerah Sumatera Barat</p>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={getImageUrl(item.gambar)}
                  alt={item.judul}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(item.tanggal).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.judul}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.isi}</p>
                <Link
                  href={`/artikel/${item.id}`}
                  className="inline-flex items-center text-[#CC1616] font-medium hover:underline"
                >
                  Baca selengkapnya
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 