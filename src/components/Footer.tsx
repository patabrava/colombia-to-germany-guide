import { GraduationCap, Mail, MessageCircle, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    servicios: [
      { name: "Gestión de Visa", href: "#" },
      { name: "Búsqueda de Vivienda", href: "#" },
      { name: "Cuenta Bancaria", href: "#" },
      { name: "Integración Social", href: "#" }
    ],
    recursos: [
      { name: "Guía de Visa", href: "#" },
      { name: "Universidades", href: "#" },
      { name: "Costo de Vida", href: "#" },
      { name: "Blog", href: "#" }
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "#" },
      { name: "Preguntas Frecuentes", href: "#" },
      { name: "Testimonios", href: "#" },
      { name: "Contacto", href: "#" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-xl">ConsultorAlemania</div>
                <div className="text-primary-foreground/80 text-sm">Tu puente hacia Europa</div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Especialistas en asesoría integral para estudiantes colombianos 
              que desean realizar su intercambio académico en Alemania.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">+49 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">info@consultoria-alemania.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">Berlín, Alemania</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 ConsultorAlemania. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>para estudiantes colombianos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;