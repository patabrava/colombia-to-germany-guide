import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import successImage from "@/assets/success-story.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María Fernanda Rodríguez",
      role: "Ingeniería Industrial",
      university: "TU Berlin",
      city: "Berlín",
      quote: "El proceso de visa fue mucho más fácil de lo que esperaba. El equipo me acompañó en cada paso y me prepararon perfectamente para la entrevista. En menos de 6 semanas tenía mi visa aprobada.",
      rating: 5,
      image: "MF"
    },
    {
      name: "Carlos Andrés Mejía",
      role: "Administración de Empresas",
      university: "Universidad de Múnich",
      city: "Múnich",
      quote: "Encontrar apartamento en Múnich parecía imposible, pero ellos tenían contactos que me ayudaron a conseguir una habitación en el centro de la ciudad. La experiencia ha sido increíble.",
      rating: 5,
      image: "CA"
    },
    {
      name: "Valentina Torres",
      role: "Psicología",
      university: "Universidad de Heidelberg",
      city: "Heidelberg",
      quote: "La apertura de la cuenta bancaria bloqueada fue súper rápida. Me explicaron todo el proceso financiero y ahora manejo mis gastos en Alemania sin problemas. Totalmente recomendado.",
      rating: 5,
      image: "VT"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Historias de éxito
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Lo que dicen nuestros</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              estudiantes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 200 estudiantes colombianos han cumplido su sueño de estudiar en Alemania 
            con nuestra asesoría especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials Grid */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-accent mb-4 opacity-60" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="border-2 border-accent/20">
                      <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                        {testimonial.image}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-accent font-medium">
                        {testimonial.university} • {testimonial.city}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <img 
                src={successImage} 
                alt="Estudiantes colombianos exitosos en Alemania"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              
              {/* Overlay stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">200+</div>
                      <div className="text-xs text-muted-foreground">Estudiantes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent mb-1">15</div>
                      <div className="text-xs text-muted-foreground">Ciudades</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-success mb-1">3</div>
                      <div className="text-xs text-muted-foreground">Años</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;