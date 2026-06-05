"use client";

import Image from "next/image";

const projects = [
  {
    title: "Atelier",
    description:
      "Tienda de ropa con un diseño alterno diseñado totalmente con html css y vue.js",
    image: "/img/atelier.jpg",
    technologies: ["CSS", "HTML", "JavaScript"],
    demoUrl: "https://radfix00.github.io/Atelier-Shop/",
    githubUrl: "https://github.com/RadFix00/Atelier-Shop",
  },
  {
    title: "Galactic Vortex",
    description:
      "Juego sencillo creado con javascript html y css, con guardado desde el usuario para el mejor puntuacion",
    image: "/img/galactic-vortex.png",
    technologies: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://radfix00.github.io/Galactic-Vortex/",
    githubUrl: "https://github.com/RadFix00/Galactic-Vortex",
  },
  {
    title: "Servidor Homelab",
    description:
      "Proyecto de infraestructura con servicios propios, monitoreo y automatización.",
    image: "/img/homelab.jpg",
    technologies: ["Linux", "Docker", "Nginx", "CasaOs"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "MoneyApp",
    description:
      "Proyecto de rediseño de una pagina web con css y html.",
    image: "/img/MoneyApp.png",
    technologies: ["CSS", "HTML"],
    demoUrl: "https://radfix00.github.io/MoneyApp/",
    githubUrl: "https://github.com/RadFix00/MoneyApp",
  },
  {
    title: "QrListo",
    description:
      "Proyecto de creacion de qr permanentes con servicios propios y multiple opciones de creacion.",
    image: "/img/LogoQrListo.webp",
    technologies: ["CSS", "TypeScript", "JavaScript"],
    demoUrl: "https://qr.radfix.site/",
    githubUrl: "https://github.com/RadFix00/qrlisto.site",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen px-6 py-24 text-white">

      <div>
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-6xl text-green-500 drop-shadow-[0_0_5px_green]">
            Projects
          </h2>

          <h3 className="mx-auto mt-5 max-w-2xl text-slate-400 text-4xl max-w-2xl font-semibold text-white">
            Algunos proyectos donde combino desarrollo web, servidores y diseño visual.
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-white/10 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-green-400/60 hover:shadow-[0_0_13px_green]"
            >
              <div className="relative h-56 w-full overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-green-400/30 px-3 py-1 text-sm font-mono text-green-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 items-center justify-center">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-green-400 px-4 py-2 font-bold text-black transition hover:bg-green-300"
                    >
                      Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-slate-600 px-4 py-2 font-bold text-white transition hover:border-green-400 hover:text-green-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}