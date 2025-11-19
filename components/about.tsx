'use client'

import { useInView } from '@/hooks/use-in-view'
import { Card } from '@/components/ui/card'
import { Code2, Smartphone, Globe } from 'lucide-react'

export function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-primary mb-12" />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Smartphone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desarrollo Móvil</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creación de aplicaciones nativas para Android con Kotlin y Jetpack Compose, 
                y aplicaciones multiplataforma con Flutter y Dart.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Globe className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
              <p className="text-muted-foreground leading-relaxed">
                Interfaces web modernas y responsivas utilizando React, JavaScript, 
                HTML y CSS con las mejores prácticas de la industria.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Code2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Soluciones Completas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Desde el diseño hasta el despliegue, ofrezco soluciones completas 
                adaptadas a las necesidades específicas de cada proyecto.
              </p>
            </Card>
          </div>

          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un desarrollador apasionado por crear experiencias digitales excepcionales. 
              Con experiencia en desarrollo móvil y web, me especializo en construir aplicaciones 
              que no solo se ven bien, sino que también funcionan de manera fluida y eficiente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Mi enfoque combina habilidades técnicas sólidas con una atención meticulosa al detalle, 
              asegurando que cada proyecto cumpla con los más altos estándares de calidad y rendimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
