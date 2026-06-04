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
            "¿Que es?",
        navHome1: "Inicio",

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
            "Colombia 5.0 - Herly Johana Villamizar Carreño",

        glossaryPageTitle: "Glosario Técnico",

        glossaryPageSubtitle:
            "Conceptos aprendidos durante Colombia 5.0",

        tableEnglish: "Inglés",

        tableSpanish: "Español",

        tableDescription: "Descripción",

        backHome: "← Volver al inicio",
        concept1: "Tecnología que permite a las máquinas realizar tareas que normalmente requieren inteligencia humana.",

        concept2: "Sistema de monitoreo mediante cámaras para supervisar espacios y mejorar la seguridad.",

        concept3: "Plataforma tecnológica que integra inteligencia artificial para el análisis de video y la toma de decisiones en seguridad.",

        concept4: "Dispositivo capaz de conectar múltiples cámaras y generar alertas inteligentes.",

        concept5: "Proceso de examinar información para obtener conclusiones útiles.",

        concept6: "Proceso de seleccionar la mejor acción a partir de datos y análisis.",

        concept7: "Identificación automática de personas mediante algoritmos de visión artificial.",

        concept8: "Tecnología que permite calcular el número de personas en un área determinada.",

        concept9: "Sistema que identifica matrículas vehiculares de manera automática.",

        concept10: "Acciones inusuales que pueden representar riesgos o incidentes.",

        concept11: "Biblioteca de visión por computadora utilizada para detectar objetos en tiempo real.",

        concept12: "Tipo de red neuronal especializada en el procesamiento de imágenes y videos.",

        concept13: "Procesador diseñado para acelerar tareas gráficas y de inteligencia artificial.",

        concept14: "Representación visual que muestra zonas con mayor actividad o concentración.",

        concept15: "Estrategias y tecnologías destinadas a reducir riesgos ante emergencias.",

        concept16: "Área monitoreada constantemente mediante sistemas inteligentes de vigilancia.",

        concept17: "Conjunto organizado de información almacenada digitalmente.",

        concept18: "Técnica utilizada para identificar y categorizar elementos según sus colores.",

        concept19: "Conjunto de datos ampliamente utilizado para entrenar modelos de visión artificial.",

        concept20: "Proceso de conectar diferentes tecnologías para que funcionen conjuntamente.",

        concept21: "Tipo de inteligencia artificial capaz de realizar diversas tareas similares a las humanas.",

        concept22: "Inteligencia artificial capaz de crear contenido como texto, imágenes o videos.",

        concept23: "Estrategias de promoción y comunicación realizadas a través de medios digitales.",

        concept24: "Plataformas digitales utilizadas para compartir contenido e interactuar con usuarios.",

        concept25: "Uso de tecnología para ejecutar tareas con mínima intervención humana.",

        concept26: "Incorporación de tecnologías digitales para mejorar procesos y servicios.",

        concept27: "Desarrollo de nuevas ideas, productos o procesos que generan valor.",

        concept28: "Material creado y distribuido en formato digital, como imágenes, videos y publicaciones.",

        concept29: "Aplicación de tecnologías avanzadas para mejorar la protección de personas y bienes.",

        concept30: "Período que transcurre entre la detección de un incidente y la acción tomada."
    },

    en: {

        heroSubtitle:
            "Innovation, Technology and Digital Transformation",

        navHome:
            "What is it?",
        navHome1: "Home",
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
            "Colombia 5.0 - Herly Johana Villamizar Carreño",
        glossaryPageTitle: "Technical Glossary",

        glossaryPageSubtitle:
            "Concepts learned during Colombia 5.0",

        tableEnglish: "English",

        tableSpanish: "Spanish",

        tableDescription: "Description",

        backHome: "← Back to Home",

        concept1: "Technology that enables machines to perform tasks that normally require human intelligence.",

        concept2: "Monitoring system using cameras to supervise spaces and improve security.",

        concept3: "Technological platform that integrates artificial intelligence for video analysis and security decision-making.",

        concept4: "Device capable of connecting multiple cameras and generating intelligent alerts.",

        concept5: "Process of examining information to obtain useful conclusions.",

        concept6: "Process of selecting the best course of action based on data and analysis.",

        concept7: "Automatic identification of people through computer vision algorithms.",

        concept8: "Technology that allows calculating the number of people in a specific area.",

        concept9: "System that automatically identifies vehicle license plates.",

        concept10: "Unusual actions that may represent risks or incidents.",

        concept11: "Computer vision library used to detect objects in real time.",

        concept12: "Type of neural network specialized in image and video processing.",

        concept13: "Processor designed to accelerate graphics and artificial intelligence tasks.",

        concept14: "Visual representation that shows areas with greater activity or concentration.",

        concept15: "Strategies and technologies aimed at reducing risks during emergencies.",

        concept16: "Area continuously monitored through intelligent surveillance systems.",

        concept17: "Organized collection of information stored digitally.",

        concept18: "Technique used to identify and categorize elements according to their colors.",

        concept19: "Dataset widely used to train computer vision models.",

        concept20: "Process of connecting different technologies so they can work together.",

        concept21: "Type of artificial intelligence capable of performing a wide variety of human-like tasks.",

        concept22: "Artificial intelligence capable of creating content such as text, images, or videos.",

        concept23: "Promotion and communication strategies carried out through digital media.",

        concept24: "Digital platforms used to share content and interact with users.",

        concept25: "Use of technology to perform tasks with minimal human intervention.",

        concept26: "Integration of digital technologies to improve processes and services.",

        concept27: "Development of new ideas, products, or processes that create value.",

        concept28: "Material created and distributed in digital format, such as images, videos, and posts.",

        concept29: "Application of advanced technologies to improve the protection of people and assets.",

        concept30: "Period between the detection of an incident and the action taken."
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
