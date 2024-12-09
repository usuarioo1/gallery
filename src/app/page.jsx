'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Galeria from '@/components/Galeria'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero nombre="Nicolás González" imagenFondo="https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358278/iWEB/galeria/iaiucmko8nygbvzuhukz.jpg" />
      <Galeria />
      <Contacto />
    </main>
  )
}

