console.log("archivo idiomas cargado");

function changeLanguage(lang) {

    console.log("cambiando idioma a:", lang);

    document.querySelectorAll("[data-translate]").forEach(element => {

        const key = element.getAttribute("data-translate");

        console.log(key);

        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}
const translations = {

    es: {

        heroSubtitle:
            "Innovación, Tecnología y Transformación Digital",

        navHome:
            "Inicio",

        navExperience:
            "Experiencia",

        navConferences:
            "Conferencias",

        navGlossary:
            "Glosario",

        navConclusion:
            "Conclusión",

        whatIsTitle:
            "¿Qué es Colombia 5.0?",

        whatIsText:
            `Colombia 5.0 es una iniciativa que busca impulsar la transformación digital del país mediante el uso de nuevas tecnologías e innovación. Este espacio reúne a estudiantes, emprendedores, empresas y expertos para compartir conocimientos y experiencias relacionadas con temas como la inteligencia artificial, el desarrollo de software, la ciberseguridad, la ciencia de datos y la transformación digital.<br><br>En Colombia 5.0 se pueden encontrar conferencias, talleres, charlas y actividades prácticas que permiten aprender sobre las tendencias tecnológicas más importantes de la actualidad. Además, es una oportunidad para conocer proyectos innovadores, establecer contactos profesionales y descubrir cómo la tecnología puede contribuir al desarrollo de la sociedad y la economía del país.`,

        objectiveTitle:
            "Objetivo del Sitio",

        objectiveText:
            `El objetivo de este sitio web es presentar información sobre Colombia 5.0, un evento enfocado en la innovación, la tecnología y la transformación digital en el país. A través de esta página se busca compartir los principales temas abordados durante el evento, las conferencias a las que asistí y los conocimientos adquiridos durante esta experiencia. Además, se pretende destacar la importancia de las nuevas tecnologías y su impacto en el desarrollo profesional, académico y social, mostrando cómo espacios como Colombia 5.0 fomentan el aprendizaje, la creatividad y la innovación.`,

        experienceTitle:
            "Mi Experiencia",

        experienceText:
            `Participar en Colombia 5.0 fue una experiencia muy enriquecedora, ya que tuve la oportunidad de conocer de cerca algunas de las tecnologías que están transformando el mundo actual. Durante las conferencias y actividades aprendí sobre temas como la inteligencia artificial, la innovación digital y el impacto de la tecnología en diferentes sectores. Además, pude escuchar las experiencias de expertos y profesionales del área, lo que me permitió ampliar mis conocimientos y comprender mejor las oportunidades que ofrece el sector tecnológico.<br><br>Lo que más me llamó la atención fue la forma en que la tecnología puede utilizarse para resolver problemas reales y mejorar la calidad de vida de las personas. Esta experiencia fortaleció mi interés por seguir aprendiendo sobre tecnología y me motivó a continuar desarrollando habilidades que serán importantes para mi formación profesional.<br><br>Durante mi participación en Colombia 5.0 tuve la oportunidad de asistir a dos conferencias que me permitieron conocer diferentes perspectivas sobre la innovación y el impacto de la tecnología en la actualidad. En la siguiente sección presento un breve resumen de cada una y los aspectos que más llamaron mi atención.`,

        conferenceSectionTitle:
            "Conferencias",

        conference1Title:
            "Inteligencia Artificial en Videovigilancia",

        conference1Text:
            "Aplicación de inteligencia artificial para mejorar los sistemas de vigilancia y la toma de decisiones en tiempo real.",

        conference2Title:
            "IA en Marketing y Negocios",

        conference2Text:
            "Uso de inteligencia artificial generativa para optimizar procesos y crear contenido digital de manera eficiente.",

        readMore:
            "Leer más →",

        glossaryTitle:
            "Glosario Técnico",

        glossaryText:
            `Como parte de las conferencias y actividades desarrolladas en Colombia 5.0, se presentaron diversos conceptos fundamentales relacionados con la inteligencia artificial, la videovigilancia, el marketing digital y la transformación digital. Estos temas permitieron comprender el impacto de las tecnologías emergentes en la sociedad y en el ámbito empresarial, así como las oportunidades que ofrecen para la innovación y el crecimiento. A continuación, se presenta un glosario técnico con algunos de los términos más importantes abordados durante el evento, acompañado de sus respectivas definiciones y traducciones al inglés.`,

        viewGlossary:
            "Ver Glosario Completo →",

        conclusionTitle:
            "Conclusión y Reflexión Ética",

        conclusionText1:
            `La experiencia en Colombia 5.0 permitió comprender el impacto de la transformación digital y el papel de tecnologías como la inteligencia artificial en distintos sectores. Las conferencias mostraron cómo estas herramientas pueden mejorar la eficiencia, la seguridad y la innovación en las organizaciones.`,

        conclusionText2:
            `La ética en la tecnología empresarial se implementa mediante el uso responsable de la inteligencia artificial, la protección adecuada de los datos y una automatización orientada a apoyar y optimizar el trabajo humano. Por ello, es fundamental que las empresas utilicen estas tecnologías de manera transparente y responsable, garantizando el respeto por la privacidad, la equidad y el bienestar de la sociedad.`,

        footerText:
            "Colombia 5.0 - Herly Johana Villamizar Carreño"
    },

    en: {

        heroSubtitle:
            "Innovation, Technology and Digital Transformation",

        navHome:
            "Home",

        navExperience:
            "Experience",

        navConferences:
            "Conferences",

        navGlossary:
            "Glossary",

        navConclusion:
            "Conclusion",

        whatIsTitle:
            "What is Colombia 5.0?",

        whatIsText:
            `Colombia 5.0 is an initiative that seeks to promote the country's digital transformation through the use of new technologies and innovation. This space brings together students, entrepreneurs, companies, and experts to share knowledge and experiences related to topics such as artificial intelligence, software development, cybersecurity, data science, and digital transformation.<br><br>At Colombia 5.0, participants can attend conferences, workshops, talks, and practical activities that help them learn about the most important technological trends of today. It is also an opportunity to discover innovative projects, build professional connections, and understand how technology can contribute to the development of society and the economy.`,

        objectiveTitle:
            "Website Purpose",

        objectiveText:
            `The purpose of this website is to present information about Colombia 5.0, an event focused on innovation, technology, and digital transformation in the country. Through this page, the main topics discussed during the event, the conferences I attended, and the knowledge gained from this experience are shared. It also highlights the importance of emerging technologies and their impact on professional, academic, and social development.`,

        experienceTitle:
            "My Experience",

        experienceText:
            `Participating in Colombia 5.0 was a very enriching experience, as I had the opportunity to learn firsthand about some of the technologies transforming today's world. During the conferences and activities, I learned about topics such as artificial intelligence, digital innovation, and the impact of technology on different sectors. I also listened to the experiences of experts and professionals, which helped me broaden my knowledge and better understand the opportunities offered by the technology sector.<br><br>What impressed me most was how technology can be used to solve real-world problems and improve people's quality of life. This experience strengthened my interest in continuing to learn about technology and motivated me to develop skills that will be important for my professional growth.<br><br>During my participation in Colombia 5.0, I attended two conferences that allowed me to explore different perspectives on innovation and the impact of technology today.`,

        conferenceSectionTitle:
            "Conferences",

        conference1Title:
            "Artificial Intelligence in Video Surveillance",

        conference1Text:
            "Application of artificial intelligence to improve surveillance systems and real-time decision-making.",

        conference2Title:
            "AI in Marketing and Business",

        conference2Text:
            "Use of generative artificial intelligence to optimize processes and efficiently create digital content.",

        readMore:
            "Read more →",

        glossaryTitle:
            "Technical Glossary",

        glossaryText:
            `As part of the conferences and activities developed during Colombia 5.0, several key concepts related to artificial intelligence, video surveillance, digital marketing, and digital transformation were presented. These topics helped demonstrate the impact of emerging technologies on society and business, as well as the opportunities they offer for innovation and growth.`,

        viewGlossary:
            "View Full Glossary →",

        conclusionTitle:
            "Conclusion and Ethical Reflection",

        conclusionText1:
            `The experience at Colombia 5.0 made it possible to understand the impact of digital transformation and the role of technologies such as artificial intelligence in different sectors. The conferences showed how these tools can improve efficiency, security, and innovation within organizations.`,

        conclusionText2:
            `Ethics in business technology is implemented through the responsible use of artificial intelligence, proper data protection, and automation aimed at supporting and optimizing human work. Therefore, it is essential for companies to use these technologies transparently and responsibly, ensuring respect for privacy, fairness, and social well-being.`,

        footerText:
            "Colombia 5.0 - Herly Johana Villamizar Carreño"
    }
};

function changeLanguage(lang) {

    document.querySelectorAll("[data-translate]").forEach(element => {

        const key = element.getAttribute("data-translate");

        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

document.getElementById("language-selector").addEventListener("change", function () {
    changeLanguage(this.value);
});

window.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("language") || "es";

    document.getElementById("language-selector").value =
        savedLanguage;

    changeLanguage(savedLanguage);
});