import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const featuredProjects = [
  {
    title: "Kasa - Application de location d'appartements",
    image: "/assets/LogoKasa.svg",
    description:
      "Une application web (single-page app React) pour la location d'appartements, similaire à Airbnb. Les utilisateurs peuvent parcourir les annonces, voir les détails et les photos de chaque appartement, et lire les avis. Construite avec React, React Router et Sass, l'application comprend des composants personnalisés comme des menus déroulants pour les détails et un carrousel pour les images. Elle est entièrement responsive et a été créée à partir de maquettes Figma.",
    tech: ["React", "Sass", "React Router", "Responsive Design"],
    liveLink: "https://kasaoc.netlify.app/",
    codeLink: "https://github.com/Leobelias/Kasa",
  },
  {
    title: "Booki - Site de réservation de vacances",
    image: "/assets/booki.svg",
    description:
      "Un site web responsive pour une agence de voyage fictive qui permet aux utilisateurs de trouver des hébergements et des activités de vacances. Construit avec HTML5 & CSS3, il dispose d'une interface utilisateur épurée avec des filtres de recherche. Ce projet m'a appris les bases du design web responsive et du HTML sémantique.",
    tech: ["HTML5", "CSS3", "Responsive Design", "Semantic HTML"],
    liveLink: "https://bookiocr.netlify.app/",
    codeLink: "https://github.com/Leobelias/OpenclassroomsProject.git",
  },
];

const otherProjects = [
  {
    title: "Sophie Bluel - Portfolio d'architecte",
    description:
      "Ajout de fonctionnalités de galerie dynamique avec du JavaScript pur et des interactions API. Implémentation d'une authentification sécurisée, d'une fonctionnalité de téléversement d'images et de la gestion de contenu dynamique.",
    tech: ["JavaScript", "REST API", "Authentication"],
    codeLink: "https://github.com/Leobelias/SecondOpenclassroomProject.git",
  },
  {
    title: "Nina Carducci - Site de photographe",
    description:
      "Débogage et optimisation des performances, du SEO et de l'accessibilité. Amélioration des scores Lighthouse, implémentation du balisage Schema.org et optimisation des stratégies de chargement d'images.",
    tech: ["SEO", "Performance", "Accessibility"],
    codeLink: "https://github.com/Leobelias/Nina-Carducci-Dev-master",
  },
  {
    title: "Mon Vieux Grimoire - API d'évaluation de livres",
    description:
      "Une API RESTful sécurisée pour une application d'évaluation de livres, construite avec Node.js, Express et MongoDB. Comprend une authentification utilisateur, le téléversement d'images et un système de notation.",
    tech: ["Node.js", "Express", "MongoDB"],
    codeLink: "https://github.com/Leobelias/grimoiresp7",
  },
];

const Projects = () => {
  const [featuredRef, isFeaturedVisible] = useIntersectionObserver();
  const [otherProjectsRef, isOtherVisible] = useIntersectionObserver();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="heading--lg heading--with-line text-center animate--fade-in">
          Projets en Vedette
        </h2>
        <p className="text--lg text-center animate--fade-in delay-1">
          Voici quelques-uns des projets sur lesquels j'ai travaillé et qui
          mettent en valeur mes compétences et mon expérience.
        </p>

        <div
          ref={featuredRef}
          className={`projects__featured reveal reveal--up ${
            isFeaturedVisible ? "active" : ""
          }`}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card animate--slide-right delay-${index + 1}`}
            >
              <div className="project-card__img-container">
                <img
                  src={project.image}
                  alt={`Capture d'écran de ${project.title}`}
                  className="project-card__img"
                />
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>
                <ul className="project-card__tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="animate--scale delay-1">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline animate--slide-right delay-2"
                  >
                    Voir la Démo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline animate--slide-right delay-3"
                  >
                    Voir le Code
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48C19.14 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={otherProjectsRef}
          className={`other-projects reveal reveal--up ${
            isOtherVisible ? "active" : ""
          }`}
        >
          <h2 className="heading--lg heading--with-line text-center animate--fade-in">
            Autres Projets
          </h2>
          <div className="other-projects__list">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`other-project-card animate--slide-left delay-${
                  index + 1
                }`}
              >
                <h3 className="other-project-card__title">{project.title}</h3>
                <p className="other-project-card__description">
                  {project.description}
                </p>
                <ul className="project-card__tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="animate--scale delay-1">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="other-project-card__link animate--slide-right delay-2"
                >
                  Voir sur GitHub
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
