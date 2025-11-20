// ...existing code...
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X, Github, Linkedin } from 'lucide-react'
// ...existing code...


export function Navigation() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }
  // ...existing code...

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-primary hover:text-accent transition-colors"
          >
            {'<CarloDev />'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
              Sobre Mí
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-sm hover:text-primary transition-colors">
              Experiencia
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-sm hover:text-primary transition-colors">
              Tecnologías
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-primary transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">
              Contacto
            </button>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/CarlitooooK" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Github className="h-4 w-4" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/carlocabrera772" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsDark(!isDark)}
                className="rounded-full"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
            <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-primary transition-colors">
              Sobre Mí
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-left py-2 hover:text-primary transition-colors">
              Experiencia
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-left py-2 hover:text-primary transition-colors">
              Tecnologías
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left py-2 hover:text-primary transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-primary transition-colors">
              Contacto
            </button>

            {/* Social icons mobile */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button size="icon" variant="ghost">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button size="icon" variant="ghost">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
// ...existing code...