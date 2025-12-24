'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Kontak', href: '/kontak' }
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/company-logo.png"
              alt="CV SABOHAMU HIBATUL"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">CV SABOHAMU HIBATUL</h1>
              <p className="text-xs text-gray-600">Konstruksi Gedung Pendidikan</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <img
                      src="/company-logo.png"
                      alt="CV SABOHAMU HIBATUL"
                      className="h-8 w-auto"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">CV SABOHAMU HIBATUL</h2>
                      <p className="text-xs text-gray-600">Konstruksi Gedung Pendidikan</p>
                    </div>
                  </div>
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full mt-4">
                    <Link href="/kontak" onClick={() => setIsOpen(false)}>
                      Hubungi Kami
                    </Link>
                  </Button>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>085285703497</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>info@sabohamuhibatul.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}