// ...existing code...
'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
// ...existing code...

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className={`container max-w-5xl mx-auto transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* layout: texto + foto */}
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-secondary/50 text-sm font-mono text-muted-foreground">
              Hi! Soy Carlo Cabrera 🧑‍💻
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              Desarrollador Mobile & Frontend
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
              Especializado en crear aplicaciones móviles nativas o multiplataforma y experiencias web modernas.
              Android, Flutter, React y más.
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <Button size="lg" onClick={scrollToContact} className="group">
                Solicitar Servicios
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">Ver Proyectos</a>
              </Button>
            </div>
          </div>

          {/* Foto: visible en md+, oculta en móviles. Ajusta tamaño según prefieras */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg flex-shrink-0 hidden sm:block">
            <Image
              src="/me.jpg"
              alt="Carlo Cabrera"
              width={10}
              height={500}  
              className="object-cover h-full w-full" 
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      
    </section>
  )
}
// ...existing code...