'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactForm() {
  const { ref, isInView } = useInView()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-center">
            Solicitar Servicios
          </h2>
          <div className="w-20 h-1 bg-primary mb-4 mx-auto" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Completa el formulario y me pondré en contacto contigo 
            lo antes posible para discutir los detalles.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="p-8">
                {submitted ? (
                  <div className="text-center py-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarme. Te responderé pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Juan Pérez"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="juan@ejemplo.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+52 123 456 7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Tipo de Proyecto *</Label>
                        <Input
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          placeholder="App móvil, Web, etc."
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Descripción del Proyecto *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame sobre tu proyecto, objetivos y cualquier requisito específico..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  contacto@developer.com
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <Phone className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-sm text-muted-foreground">
                  +52 123 456 7890
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-sm text-muted-foreground">
                  Ciudad de México, México
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
