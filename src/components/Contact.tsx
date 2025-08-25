import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  Send,
  CheckCircle2,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      contact: "+49 123 456 7890",
      available: "Lun - Vie: 9AM - 6PM",
      primary: true
    },
    {
      icon: Mail,
      title: "Email",
      description: "Consultas detalladas",
      contact: "info@consultoria-alemania.com",
      available: "Respuesta en 24h",
      primary: false
    },
    {
      icon: Phone,
      title: "Videollamada",
      description: "Consulta personalizada",
      contact: "Agendar cita",
      available: "Lun - Vie: 2PM - 5PM",
      primary: false
    }
  ];

  const benefits = [
    "Consulta inicial gratuita de 30 minutos",
    "Plan personalizado para tu perfil",
    "Acompañamiento durante todo el proceso",
    "Garantía de devolución si no obtienes la visa"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            ¿Listo para empezar?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Comienza tu</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              aventura alemana
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agenda tu consulta gratuita y descubre cómo podemos hacer realidad 
            tu sueño de estudiar en Alemania.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Contáctanos</h3>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index} 
                  className={`border-0 shadow-soft hover:shadow-brand transition-all duration-300 cursor-pointer group ${
                    method.primary ? 'bg-gradient-primary text-primary-foreground' : 'bg-card hover:bg-card/80'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        method.primary ? 'bg-white/20' : 'bg-primary/10'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          method.primary ? 'text-white' : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-lg mb-1 ${
                          method.primary ? 'text-white' : 'text-primary'
                        }`}>
                          {method.title}
                        </h4>
                        <p className={`text-sm mb-2 ${
                          method.primary ? 'text-white/80' : 'text-muted-foreground'
                        }`}>
                          {method.description}
                        </p>
                        <p className={`font-medium mb-1 ${
                          method.primary ? 'text-white' : 'text-foreground'
                        }`}>
                          {method.contact}
                        </p>
                        <div className="flex items-center gap-2">
                          <Clock className={`w-4 h-4 ${
                            method.primary ? 'text-white/60' : 'text-muted-foreground'
                          }`} />
                          <span className={`text-xs ${
                            method.primary ? 'text-white/80' : 'text-muted-foreground'
                          }`}>
                            {method.available}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Office Location */}
            <Card className="border-0 shadow-soft bg-muted/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">
                      Oficina en Alemania
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Berlín, Alemania<br />
                      Atención presencial con cita previa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-brand bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Agenda tu consulta gratuita
                </CardTitle>
                <CardDescription className="text-lg">
                  Cuéntanos sobre tu proyecto académico y te contactaremos en menos de 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (WhatsApp)</Label>
                    <Input id="phone" placeholder="+57 300 123 4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">Universidad de destino</Label>
                    <Input id="university" placeholder="Ej: TU Berlin, LMU Munich..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Programa de estudios</Label>
                  <Input id="program" placeholder="Ej: Ingeniería, Administración, Medicina..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cuéntanos sobre tu proyecto</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe tu situación actual, fechas de intercambio, dudas específicas..."
                    className="min-h-[120px]"
                  />
                </div>

                {/* Benefits */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">
                    ¿Qué incluye tu consulta gratuita?
                  </h4>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="hero" size="lg" className="w-full text-lg py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar solicitud de consulta
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas que nos comuniquemos contigo para brindarte 
                  información sobre nuestros servicios. No compartimos tu información con terceros.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;