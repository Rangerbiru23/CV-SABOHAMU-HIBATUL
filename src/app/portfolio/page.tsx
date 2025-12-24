'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  School, 
  University, 
  Library, 
  Building, 
  Calendar,
  MapPin,
  Users,
  Square,
  Star,
  ExternalLink,
  Filter,
  ArrowRight
} from 'lucide-react'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: "SDN Modern Balikpapan",
      category: "school",
      location: "Balikpapan, Kalimantan Timur",
      date: "2023",
      area: "5.000 m²",
      description: "Pembangunan gedung sekolah dasar modern dengan 24 ruang kelas, laboratorium, perpustakaan, dan fasilitas olahraga.",
      image: "/portfolio/school-building-1.jpg",
      features: ["24 Ruang Kelas", "Laboratorium IPA", "Perpustakaan", "Lapangan Olahraga", "Kantin", "Area Parkir"],
      status: "completed"
    },
    {
      id: 2,
      title: "Kampus Universitas Teknologi",
      category: "university",
      location: "Balikpapan, Kalimantan Timur",
      date: "2023",
      area: "12.000 m²",
      description: "Konstruksi gedung perkuliahan dengan kapasitas 3.000 mahasiswa, dilengkapi dengan fasilitas modern.",
      image: "/portfolio/university-campus-1.jpg",
      features: ["20 Ruang Kuliah", "4 Laboratorium", "Perpustakaan Digital", "Auditorium", "Student Center", "Masjid"],
      status: "completed"
    },
    {
      id: 3,
      title: "Perpustakaan Pusat Kota",
      category: "library",
      location: "Balikpapan, Kalimantan Timur",
      date: "2022",
      area: "3.500 m²",
      description: "Pembangunan perpustakaan modern dengan sistem pembelajaran digital dan ruang kolaborasi.",
      image: "/portfolio/library-1.jpg",
      features: ["Area Baca", "Ruang Digital", "Kids Zone", "Ruang Diskusi", "Coffee Shop", "Ruang Pameran"],
      status: "completed"
    },
    {
      id: 4,
      title: "SMA Negeri 5 Renovasi",
      category: "renovation",
      location: "Balikpapan, Kalimantan Timur",
      date: "2023",
      area: "4.000 m²",
      description: "Renovasi total gedung SMA dengan penambahan fasilitas modern dan peningkatan kapasitas.",
      image: "/portfolio/school-building-1.jpg",
      features: ["30 Ruang Kelas", "Lab Komputer", "Lab Bahasa", "Studio Musik", "Gor Indoor", "Cafeteria"],
      status: "completed"
    }
  ]

  const categories = [
    { id: 'all', label: 'Semua Proyek', icon: <Building className="h-4 w-4" /> },
    { id: 'school', label: 'Sekolah', icon: <School className="h-4 w-4" /> },
    { id: 'university', label: 'Universitas', icon: <University className="h-4 w-4" /> },
    { id: 'library', label: 'Perpustakaan', icon: <Library className="h-4 w-4" /> },
    { id: 'renovation', label: 'Renovasi', icon: <Building className="h-4 w-4" /> }
  ]

  const ongoingProjects = [
    {
      id: 5,
      title: "Vocational High School Complex",
      category: "school",
      location: "Samarinda, Kalimantan Timur",
      date: "2024",
      area: "8.000 m²",
      description: "Pembangunan kompleks sekolah kejuruan dengan fasilitas workshop dan praktik kerja.",
      progress: 65,
      estimatedCompletion: "Desember 2024"
    },
    {
      id: 6,
      title: "Islamic Education Center",
      category: "university",
      location: "Balikpapan, Kalimantan Timur",
      date: "2024",
      area: "6.000 m²",
      description: "Pusat pendidikan Islam modern dengan fasilitas pendidikan dan dakwah terpadu.",
      progress: 40,
      estimatedCompletion: "Maret 2025"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getCategoryIcon = (category) => {
    const categoryMap = {
      school: <School className="h-5 w-5 text-blue-600" />,
      university: <University className="h-5 w-5 text-blue-600" />,
      library: <Library className="h-5 w-5 text-blue-600" />,
      renovation: <Building className="h-5 w-5 text-blue-600" />
    }
    return categoryMap[category] || <Building className="h-5 w-5 text-blue-600" />
  }

  const getCategoryLabel = (category) => {
    const categoryMap = {
      school: 'Sekolah',
      university: 'Universitas',
      library: 'Perpustakaan',
      renovation: 'Renovasi'
    }
    return categoryMap[category] || 'Lainnya'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🏗️ Portfolio Kami
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Proyek <span className="text-yellow-300">Konstruksi Gedung Pendidikan</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Karya nyata kami dalam membangun infrastruktur pendidikan berkualitas 
              yang telah berkontribusi pada kemajuan pendidikan di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">m² Area Dibangun</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Kota Terlayani</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="completed" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="completed" className="text-lg">Proyek Selesai</TabsTrigger>
              <TabsTrigger value="ongoing" className="text-lg">Proyek Berjalan</TabsTrigger>
            </TabsList>

            {/* Completed Projects */}
            <TabsContent value="completed" className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </Button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                          {getCategoryIcon(project.category)}
                          <span className="ml-2">{getCategoryLabel(project.category)}</span>
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-600 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Selesai
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{project.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Square className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{project.area}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Klien Puas</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.features.length - 3} lagi
                          </Badge>
                        )}
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Lihat Detail
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Ongoing Projects */}
            <TabsContent value="ongoing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ongoingProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                          {getCategoryIcon(project.category)}
                          <span className="ml-2">{getCategoryLabel(project.category)}</span>
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-600 text-white">
                          <Calendar className="h-3 w-3 mr-1" />
                          Berjalan
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Square className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{project.area}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-blue-600">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600">
                          Estimasi Selesai: <span className="font-semibold">{project.estimatedCompletion}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Lihat Progress
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ingin Melihat Proyek Kami Langsung?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kami akan dengan senang hati mengatur kunjungan ke proyek-proyek yang telah kami selesaikan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
              <Calendar className="mr-2 h-4 w-4" />
              Jadwalkan Kunjungan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Filter className="mr-2 h-4 w-4" />
              Lihat Semua Proyek
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}