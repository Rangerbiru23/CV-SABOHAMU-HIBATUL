'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building, 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Hammer, 
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Konstruksi Gedung Pendidikan",
      description: "Spesialis dalam pembangunan gedung sekolah, kampus, dan fasilitas pendidikan lainnya."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Kualitas Terjamin",
      description: "Material terbaik dengan standar konstruksi yang tinggi untuk keamanan dan kenyamanan."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Tim Profesional",
      description: "Tenaga ahli berpengalaman dalam konstruksi gedung pendidikan selama lebih dari 10 tahun."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Tepat Waktu",
      description: "Komitmen untuk menyelesaikan proyek sesuai jadwal yang telah ditentukan."
    }
  ]

  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: "Gedung Sekolah",
      description: "Pembangunan gedung TK, SD, SMP, SMA dengan desain modern dan fungsional."
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Kampus & Universitas",
      description: "Konstruksi gedung perkuliahan, perpustakaan, laboratorium, dan fasilitas kampus."
    },
    {
      icon: <Hammer className="h-12 w-12 text-blue-600" />,
      title: "Renovasi Gedung",
      description: "Perbaikan dan peningkatan gedung pendidikan yang sudah ada."
    }
  ]

  const advantages = [
    "Pengalaman lebih dari 10 tahun",
    "Material berkualitas tinggi",
    "Harga kompetitif",
    "Garansi konstruksi",
    "Tim profesional bersertifikat",
    "Desain sesuai kebutuhan"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                🏗️ Konstruksi Gedung Pendidikan
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">CV SABOHAMU HIBATUL</span>
                <br />
                Membangun Masa Depan Pendidikan Indonesia
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Perusahaan profesional yang berdedikasi membangun infrastruktur pendidikan 
                berkualitas tinggi untuk mendukung generasi bangsa yang lebih cerdas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <FileText className="mr-2 h-4 w-4" />
                  Lihat Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/company-logo.png"
                alt="CV SABOHAMU HIBATUL"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">CV SABOHAMU HIBATUL</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah mitra terpercaya dalam pembangunan infrastruktur pendidikan 
              yang berkualitas dan berkelanjutan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spesialisasi kami dalam konstruksi gedung pendidikan dengan berbagai skala dan kompleksitas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">{service.description}</p>
                  <div className="text-center">
                    <Button variant="outline" className="w-full">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Keunggulan Kami
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Sebagai mitra konstruksi terpercaya, kami menawarkan berbagai keunggulan 
                untuk memastikan kepuasan klien dan hasil terbaik.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Hubungi Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-blue-100">
                      JL TIUNG VI BLOK E 3 NO 140, Gunungbahagia, Balikpapan Selatan
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-blue-100">085285703497</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">info@sabohamuhibatul.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Membangun Gedung Pendidikan Impian Anda?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Konsultasikan kebutuhan konstruksi gedung pendidikan Anda dengan tim profesional kami. 
            Dapatkan solusi terbaik dengan harga kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Mail className="mr-2 h-4 w-4" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}