import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Home, CreditCard, Users, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Gestión de Visa",
      description: "Te guiamos paso a paso en el proceso de solicitud de visa de estudiante para Alemania",
      features: [
        "Revisión de documentos",
        "Preparación para la entrevista",
        "Seguimiento del proceso",
        "Asesoría legal especializada"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Home,
      title: "Búsqueda de Vivienda",
      description: "Encontramos el alojamiento perfecto para tu estancia en Alemania",
      features: [
        "Residencias estudiantiles",
        "Apartamentos compartidos",
        "Verificación de contratos",
        "Apoyo en mudanza"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: CreditCard,
      title: "Cuenta Bancaria",
      description: "Te ayudamos a abrir tu cuenta bancaria bloqueada y gestionar tus finanzas",
      features: [
        "Cuenta bloqueada (Sperrkonto)",
        "Tarjetas de débito",
        "Transferencias internacionales",
        "Asesoría financiera"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Users,
      title: "Integración Social",
      description: "Te conectamos con la comunidad colombiana y alemana para facilitar tu adaptación",
      features: [
        "Red de contactos",
        "Eventos de integración",
        "Mentoría personalizada",
        "Apoyo emocional"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un servicio integral que cubre todas tus necesidades para estudiar en Alemania. 
            Desde el primer trámite hasta tu graduación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-success flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Solicitar consulta gratuita
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;