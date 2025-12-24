'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Shield, 
  Users, 
  Gavel,
  CheckCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Building
} from 'lucide-react'

export default function TermsPage() {
  const lastUpdated = "24 November 2024"

  const sections = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Definisi",
      content: [
        "\"Perusahaan\" merujuk pada CV SABOHAMU HIBATUL",
        "\"Klien\" merujuk pada individu atau perusahaan yang menggunakan layanan kami",
        "\"Layanan\" merujuk pada jasa konstruksi gedung pendidikan yang kami sediakan",
        "\"Proyek\" merujuk pada pekerjaan konstruksi yang disepakati bersama",
        "\"Website\" merujuk pada situs web resmi CV SABOHAMU HIBATUL"
      ]
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Layanan Kami",
      content: [
        "Konstruksi gedung sekolah (TK, SD, SMP, SMA)",
        "Pembangunan kampus dan universitas",
        "Konstruksi perpustakaan dan fasilitas pendidikan",
        "Renovasi dan perbaikan gedung pendidikan",
        "Konsultasi desain dan perencanaan",
        "Manajemen proyek konstruksi"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Kewajiban Perusahaan",
      content: [
        "Menyediakan layanan konstruksi dengan standar kualitas tinggi",
        "Menggunakan material yang sesuai spesifikasi dan berkualitas",
        "Menyelesaikan proyek sesuai timeline yang disepakati",
        "Memastikan keselamatan kerja selama pelaksanaan proyek",
        "Memberikan garansi untuk pekerjaan yang telah selesai",
        "Mengurus perizinan yang diperlukan untuk proyek"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Kewajiban Klien",
      content: [
        "Memberikan informasi yang akurat tentang kebutuhan proyek",
        "Menyediakan akses ke lokasi proyek",
        "Memastikan kelengkapan perizinan dari pihak klien",
        "Melakukan pembayaran sesuai kesepakatan",
        "Memberikan keputusan tepat waktu untuk approval desain",
        "Koordinasi dengan tim perusahaan selama proyek berlangsung"
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Pembayaran dan Harga",
      content: [
        "Harga disepakati dalam bentuk penawaran resmi",
        "Pembayaran dilakukan sesuai termin yang disepakati",
        "Perubahan scope proyek dapat mengubah total harga",
        "Pembayaran terlambat dapat dikenakan denda",
        "Biaya tambahan di luar scope akan dikomunikasikan terlebih dahulu",
        "Invoice harus dibayar selambat-lambatnya 14 hari sejak tanggal invoice"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Timeline dan Penyelesaian",
      content: [
        "Timeline proyek ditentukan dalam kontrak",
        "Force majeure dapat menunda timeline proyek",
        "Perubahan desain dapat mempengaruhi jadwal",
        "Perusahaan akan memberikan update progress berkala",
        "Serah terima proyek dilakukan setelah semua pekerjaan selesai",
        "Defect liability period berlaku selama 12 bulan"
      ]
    }
  ]

  const limitations = [
    {
      title: "Batasan Tanggung Jawab",
      items: [
        "Perusahaan tidak bertanggung jawab atas kerugian tidak langsung",
        "Maksimal tanggung jawab sebesar nilai kontrak",
        "Perusahaan tidak bertanggung jawab atas delay dari pihak ketiga",
        "Kehilangan data atau dokumen klien menjadi tanggung jawab klien"
      ]
    },
    {
      title: "Force Majeure",
      items: [
        "Bencana alam (gempa, banjir, tsunami)",
        "Kondisi politik yang tidak stabil",
        "Pemogokan atau kerusuhan",
        "Perubahan peraturan pemerintah",
        "Kondisi cuaca ekstrem yang tidak dapat dihindari"
      ]
    }
  ]

  const termination = [
    {
      condition: "Penghentian oleh Perusahaan",
      description: "Perusahaan dapat menghentikan proyek jika:"
    },
    {
      condition: "Penghentian oleh Klien", 
      description: "Klien dapat menghentikan proyek jika:"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              <Gavel className="h-4 w-4 mr-2" />
              Syarat & Ketentuan
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Syarat & Ketentuan <span className="text-yellow-300">CV SABOHAMU HIBATUL</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Syarat dan ketentuan yang mengatur penggunaan layanan konstruksi 
              gedung pendidikan yang kami sediakan.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              Terakhir diperbarui: <span className="font-semibold">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini ("Ketentuan") mengatur penggunaan layanan 
                konstruksi gedung pendidikan yang disediakan oleh CV SABOHAMU HIBATUL 
                ("Perusahaan"). Dengan menggunakan layanan kami, Anda setuju untuk terikat 
                oleh Ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ketentuan ini berlaku untuk semua klien, mitra, dan pengguna layanan kami. 
                Jika Anda tidak setuju dengan bagian mana pun dari Ketentuan ini, 
                harap jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pembatasan dan Pengecualian
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Batasan tanggung jawab dan kondisi force majeure yang berlaku.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {limitation.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {limitation.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Penghentian Kontrak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {termination.map((term, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {term.condition}
                  </h4>
                  <p className="text-gray-700 mb-3">{term.description}</p>
                  <ul className="space-y-2 ml-4">
                    {index === 0 ? (
                      <>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Klien melanggar ketentuan pembayaran</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Klien tidak memberikan akses ke lokasi proyek</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Terjadi force majeure yang membuat proyek tidak dapat dilanjutkan</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Perusahaan gagal memenuhi kewajiban material</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Perusahaan melanggar ketentuan kontrak</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Klien membayar biaya pembatalan yang disepakati</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua desain, gambar teknis, spesifikasi, dan dokumen lainnya yang dibuat 
                oleh Perusahaan dalam rangka proyek merupakan hak kekayaan intelektual Perusahaan.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Ketentuan HKI:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Desain tidak boleh digunakan untuk proyek lain tanpa izin tertulis</li>
                  <li>• Gambar teknis tetap menjadi milik Perusahaan</li>
                  <li>• Klien memiliki hak penggunaan untuk proyek yang disepakati</li>
                  <li>• Perusahaan berhak menggunakan foto proyek untuk portfolio</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Setiap sengketa yang timbul dari atau berhubungan dengan Ketentuan ini akan 
                diselesaikan melalui musyawarah untuk mufakat terlebih dahulu.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Tahap Penyelesaian:</h4>
                <ol className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="font-semibold text-blue-600">1.</span>
                    <span className="text-gray-700">Negosiasi langsung antara Perusahaan dan Klien</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-semibold text-blue-600">2.</span>
                    <span className="text-gray-700">Mediasi dengan pihak ketiga netral</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-semibold text-blue-600">3.</span>
                    <span className="text-gray-700">Arbitrase atau proses peradilan jika diperlukan</span>
                  </li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Sengketa akan diselesaikan berdasarkan hukum yang berlaku di Republik Indonesia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-white mb-4">
                Pertanyaan tentang Syarat & Ketentuan?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-blue-100 text-lg">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan kami, 
                silakan hubungi tim legal kami:
              </p>
              <div className="space-y-2">
                <p className="text-white font-medium">Email: legal@sabohamuhibatul.com</p>
                <p className="text-white font-medium">Telepon: 085285703497</p>
                <p className="text-white font-medium">
                  Alamat: JL TIUNG VI BLOK E 3 NO 140, Gunungbahagia, Balikpapan Selatan
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}