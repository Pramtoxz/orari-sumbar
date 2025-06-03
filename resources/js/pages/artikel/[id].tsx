import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"
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

export default function Show({ berita }: { berita: Berita }) {
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
          <Link
            href="/artikel"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Daftar Berita
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            {berita.judul}
          </motion.h1>
          <div className="flex items-center gap-4 mt-4 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>
                {new Date(berita.tanggal).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{berita.user.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-96 relative">
            <img
              src={getImageUrl(berita.gambar)}
              alt={berita.judul}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: berita.isi }} />
            </div>
          </div>
        </motion.div>

        {/* Share Section */}
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Bagikan Berita</h3>
          <div className="flex gap-4">
            <button
              onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </button>
            <button
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 