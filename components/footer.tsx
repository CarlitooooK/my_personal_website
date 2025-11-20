import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-2">
              {'<CarloDev />'}
            </div>
            <p className="text-sm text-muted-foreground">
              Desarrollador Mobile & Frontend
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" asChild>
              <a href="https://github.com/CarlitooooK" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="https://www.linkedin.com/in/carlocabrera772" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button size="icon" variant="ghost" asChild>
              <a href="mailto:cabreracarlo772@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
