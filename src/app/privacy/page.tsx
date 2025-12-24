'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  User, 
  Database, 
  Lock,
  Eye,
  Cookie,
  FileText,
  CheckCircle
} from 'lucide-react'

export default function PrivacyPage() {
  const lastUpdated = "24 November 2024"

  const sections = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Informasi yang Kami Kumpulkan",
      content: [
        "Informasi identitas pribadi (nama, email, telepon, alamat)",
        "Informasi perusahaan/institusi yang Anda wakili",
        "Detail proyek dan kebutuhan konstruksi",
        "Informasi teknis (alamat IP, browser, perangkat)",
        "Data komunikasi (email, panggilan telepon, pesan)"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Penggunaan Informasi",
      content: [
        "Merpons permintaan dan konsultasi proyek",
        "Menyediakan penawaran dan proposal konstruksi",
        "Mengelola proyek dan komunikasi dengan klien",
        "Mengirim informasi relevan tentang layanan kami",
        "Meningkatkan kualitas layanan dan pengalaman pengguna"
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Berbagi Informasi",
      content: [
        "Kami tidak menjual atau menyewakan informasi pribadi Anda",
        "Informasi hanya dibagikan dengan pihak ketiga yang terkait proyek",
        "Data dapat dibagikan dengan mitra konstruksi yang terpercaya",
        "Informasi akan dibagikan jika diwajibkan oleh hukum",
        "Kami melindungi data Anda dengan perjanjian kerahasiaan"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Keamanan Data",
      content: [
        "Enkripsi data selama transmisi dan penyimpanan",
        "Akses terbatas ke informasi pribadi",
        "Sistem keamanan berlapis untuk melindungi data",
        "Audit keamanan berkala untuk memastikan perlindungan",
        "Backup data terencana untuk mencegah kehilangan"
      ]
    },
    {
      icon: <Cookie className="h-8 w-8 text-blue-600" />,
      title: "Cookie dan Teknologi Pelacakan",
      content: [
        "Menggunakan cookie untuk meningkatkan pengalaman pengguna",
        "Cookie membantu kami mengingat preferensi Anda",
        "Google Analytics untuk analisis penggunaan website",
        "Anda dapat menonaktifkan cookie melalui browser",
        "Cookie tidak digunakan untuk mengumpulkan informasi sensitif"
      ]
    },
    {
      icon: <User className="h-8 w-8 text-blue-600" />,
      title: "Hak Privasi Anda",
      content: [
        "Akses ke informasi pribadi yang kami simpan",
        "Koreksi data yang tidak akurat",
        "Penghapusan data pribadi sesuai permintaan",
        "Penolakan penggunaan data untuk tujuan tertentu",
        "Portabilitas data untuk transfer ke layanan lain"
      ]
    }
  ]

  const rights = [
    {
      title: "Hak Akses",
      description: "Anda berhak mengetahui data pribadi yang kami simpan tentang Anda."
    },
    {
      title: "Hak Koreksi",
      description: "Anda dapat memperbarui informasi pribadi yang tidak akurat."
    },
    {
      title: "Hak Penghapusan",
      description: "Anda dapat meminta penghapusan data pribadi Anda."
    },
    {
      title: "Hak Pembatasan",
      description: "Anda dapat membatasi pengolahan data pribadi Anda."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Kebijakan Privasi
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kebijakan Privasi <span className="text-yellow-300">CV SABOHAMU HIBATUL</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda 
              sesuai dengan peraturan yang berlaku di Indonesia.
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
                CV SABOHAMU HIBATUL ("kami", "perusahaan") sangat memperhatikan privasi 
                dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana 
                kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                yang Anda berikan kepada kami melalui website, email, telepon, atau interaksi 
                lainnya.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami dan memberikan informasi pribadi kepada kami, 
                Anda setuju dengan praktik yang dijelaskan dalam Kebijakan Privasi ini.
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

      {/* Data Retention */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Retensi Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menyimpan informasi pribadi Anda selama diperlukan untuk tujuan yang 
                telah ditentukan, kecuali periode penyimpanan yang lebih lama diperlukan 
                atau diizinkan oleh hukum.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Kriteria Retensi:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Data proyek: Disimpan minimal 10 tahun setelah proyek selesai</li>
                  <li>• Data keuangan: Disimpan sesuai periode akuntansi yang berlaku</li>
                  <li>• Data komunikasi: Disimpan 5 tahun dari komunikasi terakhir</li>
                  <li>• Data marketing: Disimpan hingga Anda meminta penghapusan</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hak Privasi Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sebagai pemilik data, Anda memiliki hak-hak berikut sesuai peraturan yang berlaku.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rights.map((right, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{right.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-blue-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center mb-4">
                Pertanyaan tentang Privasi?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-blue-100 text-lg">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin 
                menggunakan hak privasi Anda, silakan hubungi kami:
              </p>
              <div className="space-y-2">
                <p className="text-white font-medium">Email: privacy@sabohamuhibatul.com</p>
                <p className="text-white font-medium">Telepon: 085285703497</p>
                <p className="text-white font-medium">
                  Alamat: JL TIUNG VI BLOK E 3 NO 140, Gunungbahagia, Balikpapan Selatan
                </p>
              </div>
              <p className="text-blue-100 text-sm mt-6">
                Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Perubahan Kebijakan Privasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan 
                perubahan dalam praktik kami atau perubahan peraturan yang berlaku. Setiap perubahan 
                akan diposting di halaman ini dengan tanggal "Terakhir Diperbarui" yang baru.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Perubahan material akan diberitahukan kepada Anda melalui email atau pemberitahuan 
                di website kami. Kami menyarankan Anda untuk secara berkala meninjau Kebijakan 
                Privasi ini untuk tetap informasikan tentang praktik privasi kami.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}