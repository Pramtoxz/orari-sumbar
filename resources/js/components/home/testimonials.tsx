import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonialsList = [
    {
      name: "Dr. Ir. H AUDY JOINALDY, S.Pt., M.Sc., M.M.,M.IP., IPU., ASEAN, Eng, - YC5AUJ",
      role: "Ketua ORARI Daerah Sumatera Barat",
      quote:
        "ORARI Sumbar terus berkomitmen dalam pengembangan komunikasi radio amatir dan peningkatan kapasitas anggota dalam menghadapi situasi darurat.",
    },
    {
      name: "Drs. BUSTAVIDIA, M.M - YB5BV",
      role: "Wakil Ketua ORARI Daerah Sumatera Barat",
      quote:
        "Sebagai garda terdepan komunikasi darurat, kami selalu siap membantu dalam situasi bencana dan memberikan dukungan komunikasi yang vital.",
    },
    {
      name: "Meldi Putra, S.Kom, M.Kom",
      role: "Anggota ORARI Daerah Sumatera Barat",
      quote:
        "Selama 5 tahun bergabung dengan ORARI, saya menyaksikan bagaimana organisasi ini berkembang dan memberikan dampak positif bagi masyarakat Sumbar.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Suara Anggota ORARI</h2>
          <p className="text-lg text-gray-600">Pengalaman dan pandangan dari para anggota ORARI Daerah Sumatera Barat</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#02188B]/10 flex items-center justify-center">
                  <span className="text-[#02188B] font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 