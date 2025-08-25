import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileCheck, Plane, GraduationCap } from "lucide-react";
import processImage from "@/assets/process-steps.jpg";

const Process = () => {
  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: "Consulta Inicial",
      description: "Evaluamos tu perfil académico y definimos el plan personalizado para tu intercambio",
      duration: "1-2 semanas",
      tasks: [
        "Análisis de perfil académico",
        "Selección de universidades",
        "Planificación del timeline",
        "Definición de presupuesto"
      ]
    },
    {
      step: "02",
      icon: FileCheck,
      title: "Documentación",
      description: "Te acompañamos en la preparación y gestión de todos los documentos necesarios",
      duration: "3-4 semanas",
      tasks: [
        "Solicitud de visa",
        "Documentos académicos",
        "Seguro médico",
        "Certificados oficiales"
      ]
    },
    {
      step: "03",
      icon: Plane,
      title: "Preparación del Viaje",
      description: "Organizamos todos los aspectos prácticos para tu llegada a Alemania",
      duration: "2-3 semanas",
      tasks: [
        "Búsqueda de alojamiento",
        "Apertura de cuenta bancaria",
        "Reserva de vuelos",
        "Kit de supervivencia"
      ]
    },
    {
      step: "04",
      icon: GraduationCap,
      title: "Integración",
      description: "Te apoyamos durante los primeros meses para garantizar una adaptación exitosa",
      duration: "Primer semestre",
      tasks: [
        "Orientación universitaria",
        "Integración social",
        "Seguimiento académico",
        "Soporte continuo"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-12">
              <Badge variant="outline" className="mb-4 border-accent text-accent">
                Proceso paso a paso
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Tu camino hacia</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Alemania
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Un proceso estructurado y probado que garantiza tu éxito. 
                Cada paso está diseñado para minimizar el estrés y maximizar tus posibilidades.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-primary bg-card/50 hover:bg-card transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary" className="text-xs font-mono">
                              {step.step}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {step.duration}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl text-primary mb-2">
                            {step.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pl-20">
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <img 
                src={processImage} 
                alt="Proceso de asesoría para estudiantes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-brand border">
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Tasa de éxito</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-brand border">
              <div className="text-2xl font-bold text-accent mb-1">6-8</div>
              <div className="text-sm text-muted-foreground">Semanas promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;