'use client'

import { useInView } from '@/hooks/use-in-view'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Desarrollador Mobile Senior',
    company: 'Tech Company',
    period: '2022 - Presente',
    description: 'Desarrollo de aplicaciones móviles nativas para Android utilizando Kotlin y Jetpack Compose. Implementación de arquitecturas MVVM y Clean Architecture.',
    tags: ['Kotlin', 'Android', 'Jetpack Compose', 'MVVM']
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Creación de aplicaciones web y móviles multiplataforma. Desarrollo de APIs RESTful y gestión de bases de datos.',
    tags: ['React', 'Flutter', 'Node.js', 'Firebase']
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Startup Tech',
    period: '2018 - 2020',
    description: 'Desarrollo de interfaces de usuario responsivas y dinámicas. Optimización de rendimiento y experiencia de usuario.',
    tags: ['JavaScript', 'React', 'HTML', 'CSS']
  }
]

export function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Experiencia Profesional
          </h2>
          <div className="w-20 h-1 bg-primary mb-12" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`p-6 hover:shadow-lg transition-all duration-500 hover:border-primary/50 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
