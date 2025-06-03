import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Foto from "@/assets/tesss.jpg"

export default function Cta() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#CC1616] to-[#CC1616] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bergabung dengan ORARI dan Jadilah Bagian dari Komunitas Radio Amatir
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Kembangkan pengetahuan dan keterampilan Anda dalam dunia radio amatir bersama ORARI. Mari bergabung dalam kegiatan sosial dan komunikasi yang bermanfaat.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/6285274488588"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
              >
                Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={Foto}
                alt="Kegiatan ORARI"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#CC1616]/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 