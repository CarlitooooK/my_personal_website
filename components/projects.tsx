'use client'

import { useInView } from '@/hooks/use-in-view'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Bluey Money - App de Gastos e Ingresos',
    description: 'Aplicación móvil multiplataforma para el seguimiento de gastos e ingresos, con gráficos y estadísticas.',
    image: '/bluey_money_app.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'MVVM'],
    demoUrl: '',
    githubUrl: 'https://github.com/CarlitooooK/BlueMoneey.git'
  },
  
  {
    title: 'Miyo - App de Aprendizaje potenciada por IA',
    description: 'App de aprendizaje adaptativo con IA: Planes de aprendizaje personalizados, rendimiento optimizado y aprendizaje de alta eficiencia para todos con generador de rutas de aprendizaje con Gemini',
    image: '/miyo_project.png',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini AI'],
    demoUrl: 'https://eduhackv1.vercel.app/',
    githubUrl: 'https://github.com/CarlitooooK/miyo_edu.git'
  },
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
