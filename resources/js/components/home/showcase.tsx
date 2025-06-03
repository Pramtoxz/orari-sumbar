import { motion } from "framer-motion"
import { Link } from "@inertiajs/react"

export default function AboutOrari() {
  return (
    <section id="about-orari" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ORARI Sumatera Barat</h2>
          <p className="text-lg text-gray-600">
            Organisasi Amatir Radio Indonesia Daerah Sumatera Barat merupakan cabang ORARI di tingkat provinsi Sumatera Barat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Struktur & Organisasi</h3>
            <p className="text-gray-600">
              ORARI Sumbar memiliki struktur organisasi yang mencakup ORARI Lokal di berbagai kota dan kabupaten di Sumatera Barat, 
              termasuk ORARI Lokal Padang dan ORARI Lokal Bukittinggi-Agam yang telah dikukuhkan pengurusnya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kegiatan Utama</h3>
            <p className="text-gray-600">
              ORARI Sumbar aktif dalam berbagai kegiatan seperti komunikasi radio amatir, bakti sosial, dan "Lakes On The Air" (LOTA) 
              di Danau Diatas. Kami juga melakukan kegiatan QSO (komunikasi dua arah) antar anggota secara rutin.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-white p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Peran & Kontribusi</h3>
          <p className="text-gray-600">
            ORARI Sumbar berperan penting dalam mendukung program-program pemerintah, khususnya dalam mitigasi bencana 
            dan edukasi komunikasi. Kami juga aktif dalam penguatan jaringan informasi dan kerja sama dengan pemerintah daerah 
            untuk berbagai kegiatan sosial kemasyarakatan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}