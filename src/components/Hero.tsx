import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Colombian students in Germany"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/30">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Tu puente hacia Alemania</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Intercambio en
            </span>
            <br />
            <span className="text-foreground">Alemania</span>
            <br />
            <span className="text-2xl lg:text-3xl font-medium text-muted-foreground">
              Sin complicaciones
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Te acompañamos en cada paso: desde la visa hasta tu primer día de clases. 
            Consultoría especializada para estudiantes colombianos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Comenzar mi proceso
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 backdrop-blur-sm bg-background/80 border-primary/30 hover:bg-primary/10">
              Ver casos de éxito
              <GraduationCap className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Estudiantes asesorados</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Visas aprobadas</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Tiempo de respuesta</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;