'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  Calendar,
  CheckCircle
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Telepon",
      content: "085285703497",
      description: "Senin - Sabtu, 08:00 - 17:00"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      content: "info@sabohamuhibatul.com",
      description: "Respon dalam 24 jam"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Alamat Kantor",
      content: "JL TIUNG VI BLOK E 3 NO 140, Gunungbahagia",
      description: "Balikpapan Selatan, Kota Balikpapan"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 17:00",
      description: "Minggu & Hari Libur: Tutup"
    }
  ]

  const projectTypes = [
    "Gedung Sekolah (TK/SD/SMP/SMA)",
    "Kampus & Universitas",
    "Perpustakaan",
    "Laboratorium",
    "Asrama/Dormitory",
    "Renovasi Gedung",
    "Fasilitas Olahraga",
    "Lainnya"
  ]

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan proyek?",
      answer: "Waktu pengerjaan tergantung pada skala dan kompleksitas proyek. Untuk gedung sekolah menengah sekitar 6-12 bulan, universitas 12-24 bulan."
    },
    {
      question: "Apakah menyediakan garansi?",
      answer: "Ya, kami memberikan garansi konstruksi selama 12 bulan untuk seluruh proyek yang kami kerjakan."
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Kami menggunakan sistem termin pembayaran sesuai progress pekerjaan yang disepakati bersama."
    },
    {
      question: "Apakah mengurus perizinan?",
      answer: "Ya, kami dapat membantu pengurusan perizinan yang diperlukan untuk proyek konstruksi."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              📞 Hubungi Kami
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mari <span className="text-yellow-300">Diskusikan Proyek</span> Anda
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Tim profesional kami siap membantu mewujudkan proyek konstruksi gedung pendidikan 
              dengan kualitas terbaik dan harga kompetitif.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 font-medium mb-2">{info.content}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kirim Pesan kepada Kami
              </h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.
              </p>

              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-green-900 mb-2">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-green-700">
                        Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Telepon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="0812-3456-7890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Perusahaan/Institusi</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Nama Sekolah/Universitas"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Jenis Proyek *</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Pilih Jenis Proyek</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan Detail *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Jelaskan kebutuhan proyek Anda secara detail..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kunjungi Kantor Kami
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-96 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Lokasi Kantor</p>
                  <p className="text-gray-500 text-sm mt-2">
                    JL TIUNG VI BLOK E 3 NO 140<br />
                    Gunungbahagia, Balikpapan Selatan<br />
                    Kota Balikpapan, Kalimantan Timur
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                    Kontak Cepat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">085285703497</p>
                      <p className="text-sm text-gray-600">WhatsApp & Telepon</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">info@sabohamuhibatul.com</p>
                      <p className="text-sm text-gray-600">Email Resmi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Senin - Sabtu, 08:00 - 17:00</p>
                      <p className="text-sm text-gray-600">Jam Operasional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Informasi penting tentang layanan dan proses kerja kami.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Masih memiliki pertanyaan?
                </h3>
                <p className="text-blue-100 mb-6">
                  Jangan ragu untuk menghubungi kami langsung. Tim kami siap membantu Anda.
                </p>
                <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}