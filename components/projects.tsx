'use client'

import { useInView } from '@/hooks/use-in-view'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'App de E-commerce Móvil',
    description: 'Aplicación móvil nativa para Android con sistema de pagos integrado, carrito de compras y notificaciones push.',
    image: '/modern-mobile-ecommerce-app-interface.jpg',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Dashboard Administrativo',
    description: 'Panel de administración web con gráficos interactivos, gestión de usuarios y análisis de datos en tiempo real.',
    image: '/modern-admin-dashboard.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'App de Fitness Multiplataforma',
    description: 'Aplicación multiplataforma para seguimiento de ejercicios, planes de entrenamiento y estadísticas de progreso.',
    image: '/fitness-tracking-app.png',
    tags: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Red Social para Desarrolladores',
    description: 'Plataforma web para compartir código, colaborar en proyectos y conectar con otros desarrolladores.',
    image: '/developer-social-network-interface.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'App de Delivery en Tiempo Real',
    description: 'Sistema de delivery con rastreo GPS en tiempo real, chat integrado y gestión de pedidos.',
    image: '/food-delivery-app-tracking.jpg',
    tags: ['Android', 'Kotlin', 'Google Maps API', 'Coroutines'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Interactivo',
    description: 'Sitio web portfolio con animaciones 3D, modo oscuro y diseño totalmente responsivo.',
    image: '/interactive-portfolio-website.jpg',
    tags: ['React', 'Three.js', 'Framer Motion', 'CSS'],
    demoUrl: '#',
    githubUrl: '#'
  }
]

export function Projects() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-primary mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 group ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 pb-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
