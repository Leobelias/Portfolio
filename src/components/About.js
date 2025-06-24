import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
// I will assume there is an image in assets. I'll add a placeholder for now.
// import profileImage from '../../assets/images/profile.jpg';

const About = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about reveal reveal--up ${isVisible ? "active" : ""}`}
    >
      <div className="container">
        <h2 className="heading--lg heading--with-line">À Propos de Moi</h2>
        <div className="about__content">
          <div className="about__text">
            <p className="text--lg">
              J’ai commencé mon parcours en licence d’anglais (LLCER), avant de
              me tourner vers le marketing d’influence digitale. Pendant
              plusieurs années, j’ai travaillé en agence avec des créateurs de
              contenu et des marques, en coordonnant des campagnes et des
              partenariats.
            </p>
            <p>
              J’ai ensuite décidé de me reconvertir dans le développement web,
              un domaine qui m’a toujours attiré. Je suis actuellement la
              formation "Développeur Web" d'OpenClassrooms, au cours de laquelle
              j'ai réalisé plusieurs projets concrets utilisant HTML, CSS,
              JavaScript et React.
            </p>
            <p>
              Je construis aujourd'hui des interfaces modernes et
              fonctionnelles, et je continue d'apprendre chaque jour pour
              évoluer dans ce métier en constante évolution.
            </p>
            <div className="about__cta">
              <a href="#contact" className="btn btn--primary">
                Contactez-moi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
