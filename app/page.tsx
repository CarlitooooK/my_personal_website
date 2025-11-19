import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  )
}
