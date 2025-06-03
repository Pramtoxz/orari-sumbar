import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "@inertiajs/react"
import Foto from "@/assets/tesss.jpg"

// Interface untuk tipe data berita
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

export default function News({ berita }: { berita: Berita[] }) {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0)

  // Auto-rotate berita
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNewsIndex((prev) => (prev + 1) % berita.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [berita.length])

  // Fungsi untuk mendapatkan URL gambar
  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return Foto
    if (imagePath.startsWith('http')) return imagePath
    return `/storage/${imagePath}`
  }

  return (
    <section id="news" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita ORARI Daerah Sumatera Barat Terkini</h2>
        </motion.div>

        {berita.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNewsIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <img
                      src={getImageUrl(berita[activeNewsIndex].gambar)}
                      alt={berita[activeNewsIndex].judul}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#CC1616] text-white text-xs px-2 py-1 rounded-full">
                          Berita ORARI
                        </span>
                        <span className="text-xs text-white/80">
                          {new Date(berita[activeNewsIndex].tanggal).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{berita[activeNewsIndex].judul}</h3>
                      <p className="text-white/90 mb-4">
                        {berita[activeNewsIndex].isi.length > 200
                          ? berita[activeNewsIndex].isi.substring(0, 200) + "..."
                          : berita[activeNewsIndex].isi}
                      </p>
                      <Link
                        href={`/artikel/${berita[activeNewsIndex].id}`}
                        className="bg-white text-[#CC1616] px-4 py-2 rounded-md text-sm font-medium inline-flex items-center"
                      >
                        Baca Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation dots */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {berita.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveNewsIndex(index)}
                      className={`w-2 h-2 rounded-full ${index === activeNewsIndex ? "bg-white" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {berita.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    index === activeNewsIndex ? "bg-[#CC1616] text-white" : "bg-white hover:bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => setActiveNewsIndex(index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 ${
                        index === activeNewsIndex ? "border-2 border-white" : ""
                      }`}
                    >
                      <img
                        src={getImageUrl(item.gambar)}
                        alt={item.judul}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className={`text-xs ${index === activeNewsIndex ? "text-blue-200" : "text-gray-500"}`}>
                        {new Date(item.tanggal).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                      <h4 className="font-medium line-clamp-2">{item.judul}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Link
                href="/artikel"
                className="block text-center bg-white border border-gray-200 text-[#CC1616] px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Lihat Semua Berita
              </Link>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Belum ada berita yang ditampilkan</p>
          </div>
        )}
      </div>
    </section>
  )
} 