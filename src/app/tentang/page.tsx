'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Award, 
  Target, 
  Eye, 
  CheckCircle, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Building,
  GraduationCap,
  Hammer,
  Shield,
  Clock,
  Star,
  TrendingUp
} from 'lucide-react'

export default function AboutPage() {
  const companyStats = [
    {
      number: "10+",
      label: "Tahun Pengalaman",
      description: "Berpengalaman dalam konstruksi gedung pendidikan"
    },
    {
      number: "50+",
      label: "Proyek Selesai",
      description: "Gedung pendidikan yang telah berhasil dibangun"
    },
    {
      number: "100%",
      label: "Kepuasan Klien",
      description: "Klien puas dengan hasil kerja kami"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Layanan dukungan dan konsultasi"
    }
  ]

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Integritas",
      description: "Kami berkomitmen untuk jujur, transparan, dan bertanggung jawab dalam setiap proyek yang kami kerjakan."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Kualitas",
      description: "Standar kualitas tertinggi dalam material, desain, dan pelaksanaan konstruksi."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Profesionalisme",
      description: "Tim ahli berpengalaman yang siap memberikan solusi terbaik untuk kebutuhan Anda."
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Komitmen",
      description: "Dedikasi penuh untuk menyelesaikan proyek tepat waktu dengan hasil terbaik."
    }
  ]

  const timeline = [
    {
      year: "2014",
      title: "Didirikan",
      description: "CV SABOHAMU HIBATUL didirikan dengan fokus pada konstruksi gedung pendidikan."
    },
    {
      year: "2016",
      title: "Ekspansi Layanan",
      description: "Memperluas jasa renovasi dan peningkatan gedung pendidikan yang sudah ada."
    },
    {
      year: "2018",
      title: "Sertifikasi ISO",
      description: "Mendapatkan sertifikasi standar kualitas manajemen ISO 9001:2015."
    },
    {
      year: "2020",
      title: "Proyek Besar",
      description: "Menyelesaikan proyek pembangunan kampus dengan nilai kontrak tertinggi."
    },
    {
      year: "2024",
      title: "Inovasi Berkelanjutan",
      description: "Mengadopsi teknologi konstruksi modern dan ramah lingkungan."
    }
  ]

  const team = [
    {
      name: "Direktur Utama",
      role: "Leadership & Strategy",
      description: "Berpengalaman lebih dari 15 tahun dalam industri konstruksi."
    },
    {
      name: "Manajer Proyek",
      role: "Project Management",
      description: "Ahli dalam manajemen proyek konstruksi skala besar."
    },
    {
      name: "Kepala Teknik",
      role: "Technical Lead",
      description: "Spesialis dalam desain struktur dan rekayasa konstruksi."
    },
    {
      name: "Supervisor Lapangan",
      role: "Field Operations",
      description: "Pengawas ketat untuk kualitas dan keselamatan kerja."
    }
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Sistem Manajemen Mutu",
      icon: <Award className="h-8 w-8 text-green-600" />
    },
    {
      name: "SBU Konstruksi",
      description: "Sertifikat Badan Usaha",
      icon: <Building className="h-8 w-8 text-blue-600" />
    },
    {
      name: "K3 Konstruksi",
      description: "Keselamatan & Kesehatan Kerja",
      icon: <Shield className="h-8 w-8 text-purple-600" />
    },
    {
      name: "LPJK",
      description: "Lembaga Pengembangan Jasa Konstruksi",
      icon: <GraduationCap className="h-8 w-8 text-orange-600" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🏢 Tentang Kami
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-yellow-300">CV SABOHAMU HIBATUL</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Perusahaan konstruksi profesional yang berdedikasi membangun infrastruktur pendidikan 
              berkualitas tinggi untuk mendukung masa depan generasi bangsa.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Membangun <span className="text-blue-600">Masa Depan Pendidikan</span> Indonesia
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CV SABOHAMU HIBATUL adalah perusahaan konstruksi yang berfokus pada pembangunan 
                gedung pendidikan. Dengan pengalaman lebih dari 10 tahun, kami telah berkontribusi 
                dalam pengembangan infrastruktur pendidikan di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kami memahami bahwa gedung pendidikan bukan sekadar bangunan, tetapi investasi 
                masa depan untuk generasi mendatang. Oleh karena itu, kami berkomitmen untuk 
                memberikan hasil terbaik dengan kualitas yang terjamin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Building className="mr-2 h-4 w-4" />
                  Lihat Portfolio
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/company-logo.png"
                alt="CV SABOHAMU HIBATUL"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prestasi Kami dalam Angka
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bukti komitmen kami dalam memberikan layanan konstruksi terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <CardTitle className="text-xl font-semibold">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang menjadi landasan setiap keputusan dan tindakan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam sejarah CV SABOHAMU HIBATUL.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 px-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">{item.year}</span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tenaga ahli berpengalaman yang siap mewujudkan visi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Sertifikasi & Penghargaan
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pengakuan atas komitmen kami terhadap kualitas dan profesionalisme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-white/10 rounded-full w-fit">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Mari wujudkan bersama infrastruktur pendidikan yang berkualitas untuk masa depan yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Mail className="mr-2 h-4 w-4" />
              Kirim Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}