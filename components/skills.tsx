'use client'

import { useInView } from '@/hooks/use-in-view'
import { Card } from '@/components/ui/card'

const skillCategories = [
  {
    title: 'Desarrollo Móvil',
    skills: [
      { name: 'Kotlin', level: 90 },
      { name: 'Dart', level: 85 },
      { name: 'Android SDK', level: 90 },
      { name: 'Jetpack Compose', level: 85 },
      { name: 'Flutter', level: 85 },
      { name: 'Java', level: 80 },
    ]
  },
  {
    title: 'Desarrollo Web',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'TypeScript', level: 85 },
    ]
  },
  {
    title: 'Lenguajes de Programación',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'C', level: 70 },
    ]
  }
]

export function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Tecnologías & Habilidades
          </h2>
          <div className="w-20 h-1 bg-primary mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className={`p-6 transition-all duration-700 hover:shadow-lg ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${
                            isInView ? 'w-full' : 'w-0'
                          }`}
                          style={{ 
                            width: isInView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
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
