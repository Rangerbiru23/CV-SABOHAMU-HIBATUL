'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  Building, 
  Hammer, 
  School, 
  University, 
  Library, 
  Wrench, 
  Ruler,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Phone,
  ArrowRight
} from 'lucide-react'

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <School className="h-16 w-16 text-blue-600" />,
      title: "Gedung Sekolah Dasar & Menengah",
      description: "Pembangunan gedung TK, SD, SMP, SMA dengan desain modern dan fungsional yang sesuai dengan standar pendidikan nasional.",
      features: [
        "Ruang kelas yang nyaman",
        "Laboratorium lengkap",
        "Perpustakaan modern",
        "Ruang olahraga indoor",
        "Fasilitas aksesibilitas"
      ],
      color: "bg-blue-50"
    },
    {
      icon: <University className="h-16 w-16 text-blue-600" />,
      title: "Kampus & Universitas",
      description: "Konstruksi gedung perkuliahan, auditorium, laboratorium riset, dan fasilitas kampus lainnya dengan desain arsitektur modern.",
      features: [
        "Gedung kuliah berkapasitas besar",
        "Laboratorium riset",
        "Perpustakaan digital",
        "Student center",
        "Fasilitas parkir luas"
      ],
      color: "bg-green-50"
    },
    {
      icon: <Hammer className="h-16 w-16 text-blue-600" />,
      title: "Renovasi & Perbaikan",
      description: "Jasa renovasi dan peningkatan gedung pendidikan yang sudah ada untuk meningkatkan fungsionalitas dan keamanan.",
      features: [
        "Analisis struktur bangunan",
        "Peningkatan keamanan",
        "Modernisasi fasilitas",
        "Eko-friendly renovation",
        "Minimal disruption"
      ],
      color: "bg-orange-50"
    }
  ]

  const additionalServices = [
    {
      icon: <Library className="h-12 w-12 text-purple-600" />,
      title: "Perpustakaan & Learning Center",
      description: "Desain dan konstruksi perpustakaan modern dengan sistem pembelajaran digital dan ruang kolaborasi."
    },
    {
      icon: <Building className="h-12 w-12 text-purple-600" />,
      title: "Asrama & Dormitory",
      description: "Pembangunan fasilitas asrama yang nyaman dan aman untuk siswa dan mahasiswa."
    },
    {
      icon: <Wrench className="h-12 w-12 text-purple-600" />,
      title: "Fasilitas Penunjang",
      description: "Kantin, kafetaria, toko buku, dan fasilitas penunjang pendidikan lainnya."
    },
    {
      icon: <Ruler className="h-12 w-12 text-purple-600" />,
      title: "Lapangan Olahraga",
      description: "Konstruksi lapangan olahraga indoor dan outdoor untuk mendukung kegiatan ekstrakurikuler."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Konsultasi & Perencanaan",
      description: "Diskusi mendalam tentang kebutuhan, anggaran, dan timeline proyek."
    },
    {
      step: "02", 
      title: "Desain & Perizinan",
      description: "Pembuatan desain arsitektur dan pengurusan perizinan yang diperlukan."
    },
    {
      step: "03",
      title: "Konstruksi",
      description: "Pelaksanaan pembangunan dengan supervisi ketat dan kontrol kualitas."
    },
    {
      step: "04",
      title: "Serah Terima & Garansi",
      description: "Penyerahan proyek dan jaminan pemeliharaan sesuai kesepakatan."
    }
  ]

  const advantages = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Kualitas Terjamin",
      description: "Material terbaik dengan standar konstruksi yang tinggi"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Tepat Waktu",
      description: "Komitmen untuk menyelesaikan proyek sesuai jadwal"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Garansi",
      description: "Jaminan pemeliharaan dan layanan purnajual"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: "Tim Profesional",
      description: "Tenaga ahli berpengalaman dan bersertifikat"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🏗️ Layanan Kami
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Konstruksi Gedung Pendidikan <span className="text-yellow-300">Profesional</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Spesialis dalam pembangunan gedung pendidikan dengan kualitas terbaik, 
              desain modern, dan fungsional untuk mendukung kegiatan belajar mengajar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi konstruksi komprehensif untuk berbagai kebutuhan gedung pendidikan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className={`mx-auto mb-6 p-6 rounded-full ${service.color}`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Pendukung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fasilitas penunjang untuk melengkapi infrastruktur pendidikan yang komprehensif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-purple-50 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses kerja yang sistematis dan transparan untuk hasil terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Keunggulan Layanan Kami
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mengapa memilih CV SABOHAMU HIBATUL untuk proyek konstruksi gedung pendidikan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-white/10 rounded-full w-fit">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-blue-100">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
              <Phone className="mr-2 h-4 w-4" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}