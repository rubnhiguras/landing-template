import React from "react";
import {
  Code,
  Globe,
  Smartphone,
  Cloud,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Rhaßolutions
          </h1>

          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-blue-600">
              Servicios
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Proyectos
            </a>
            <a href="#about" className="hover:text-blue-600">
              Nosotros
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contacto
            </a>
          </nav>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Solicitar presupuesto
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Transformamos ideas en software
          </h2>

          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100">
            Desarrollamos aplicaciones web, móviles y soluciones cloud para
            impulsar el crecimiento de tu negocio.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold">
              Ver proyectos
            </button>

            <button className="border border-white px-8 py-4 rounded-lg font-semibold">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-4">
            Nuestros Servicios
          </h3>

          <p className="text-center text-gray-600 mb-16">
            Soluciones tecnológicas adaptadas a cada negocio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Globe size={40} />}
              title="Desarrollo Web"
              description="Aplicaciones modernas, rápidas y escalables."
            />

            <ServiceCard
              icon={<Smartphone size={40} />}
              title="Apps Móviles"
              description="Android e iOS con experiencias intuitivas."
            />

            <ServiceCard
              icon={<Cloud size={40} />}
              title="Cloud & DevOps"
              description="Infraestructura segura y automatizada."
            />

            <ServiceCard
              icon={<Code size={40} />}
              title="Software a Medida"
              description="Soluciones personalizadas para cada empresa."
            />
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="projects" className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16">
            Casos de Éxito
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="ERP Empresarial"
              description="Digitalización completa de procesos internos."
            />

            <ProjectCard
              title="Marketplace"
              description="Plataforma de comercio electrónico escalable."
            />

            <ProjectCard
              title="App de Gestión"
              description="Aplicación móvil para equipos de campo."
            />
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-8">
            ¿Por qué elegirnos?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature text="Más de 10 años de experiencia" />
            <Feature text="Metodologías ágiles" />
            <Feature text="Soporte continuo" />
            <Feature text="Arquitecturas escalables" />
            <Feature text="Equipo multidisciplinar" />
            <Feature text="Tecnologías modernas" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h3>

          <p className="text-xl mb-8">
            Hablemos y construyamos juntos la solución que tu negocio necesita.
          </p>

          <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
            Solicitar reunión
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">
            Contacta con nosotros
          </h3>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border rounded-lg p-4"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border rounded-lg p-4"
            />

            <textarea
              rows="5"
              placeholder="Cuéntanos tu proyecto"
              className="w-full border rounded-lg p-4"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        © 2026 Rhaßolutions. Todos los derechos reservados.
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h4 className="font-bold text-2xl mb-4">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <CheckCircle className="text-green-500" />
      <span>{text}</span>
    </div>
  );
}
