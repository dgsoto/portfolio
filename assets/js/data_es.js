// js/data_es.js
export const languageData = {
    navAbout: "Sobre Mí",
    navProjects: "Proyectos",
    navBlog: "Blog",
    navContact: "Contacto",
    navResume: "Descargar CV",

    aboutTitle: "Sobre Mí",
    aboutParagraph1: "¡Hola! Soy Diego Gonzales Soto, un apasionado y experimentado Ingeniero QA y Especialista en Automatización de Pruebas con una trayectoria sólida en el mundo del desarrollo de software. Mi misión es garantizar que los productos digitales no solo funcionen, sino que lo hagan de manera impecable, ofreciendo la mejor experiencia al usuario final.",
    aboutParagraph2: "Cuento con amplia experiencia en la creación y mantenimiento de frameworks de automatización de pruebas para APIs y UIs web/móviles, utilizando tecnologías como Python (PyTest, Selenium), JavaScript (Playwright, Cypress). Mi enfoque se centra en la integración continua (CI/CD), la optimización de procesos de testing y la implementación de estrategias de calidad que se alineen con metodologías ágiles.",
    aboutParagraph3: "Más allá de la automatización, soy un firme creyente en la importancia del testing manual exploratorio y de usabilidad para descubrir defectos sutiles y asegurar una calidad integral. Siempre estoy en la búsqueda de nuevas herramientas y metodologías para mejorar la eficiencia y la efectividad de las pruebas.",
    aboutParagraph4: "Si buscas a un profesional proactivo, meticuloso y con una fuerte orientación a la calidad para tu equipo, no dudes en <a href='contact.html'>contactarme</a>. ¡Estaré encantado de colaborar en tu próximo desafío!",
    aboutContactLink: "contactarme", // Solo si quieres traducir el texto del enlace en el párrafo
    skillsTitle: "Mis Habilidades Clave",

    heroTitle: "Hola, soy Diego Gonzales Soto",
    heroSubtitle: "Ingeniero QA & Especialista en Automatización",
    heroDescription: "Apasionado por la calidad del software, la automatización de pruebas y la creación de procesos de testing eficientes. Mi objetivo es garantizar productos robustos y confiables a nivel global.",
    viewProjects: "Ver Proyectos",
    contactMe: "Contactar",
    featuredProjectsTitle: "Proyectos Destacados",
    allProjects: "Ver Todos los Proyectos",
    latestBlogPostsTitle: "Últimas Publicaciones del Blog",
    allBlogPosts: "Ir al Blog",
    footerRights: "Todos los derechos reservados.",
    viewProjectButton: "Ver Proyecto", // Nuevo para botones de proyecto
    readMoreButton: "Leer Más", // Nuevo para botones de blog
    projectNotFound: "Proyecto no encontrado.",
    projectChallengesTitle: "Retos y Obstáculos",
    projectSolutionsTitle: "Soluciones Implementadas",
    projectResultsTitle: "Resultados y Logros",
    technologiesUsedTitle: "Tecnologías Utilizadas",
    projectGalleryTitle: "Galería del Proyecto",
    viewLiveDemo: "Ver Demo en Vivo",
    viewRepository: "Ver Repositorio",
    backToProjects: "Volver a Proyectos",

    articleNotFound: "Artículo no encontrado.", // Nueva traducción
    errorLoadingArticle: "Error al cargar el contenido del artículo.", // Nueva traducción
    backToBlog: "Volver al Blog", // Nueva traducción

    allProjectsTitle: "Todos Mis Proyectos", // Nueva traducción
    loadingProjects: "Cargando proyectos...", // Nueva traducción

    allBlogPostsTitle: "Últimas Publicaciones del Blog", // Nueva traducción (ya la tenías pero asegúrate que apunte a H1)
    loadingBlogPosts: "Cargando publicaciones...", // Nueva traducción

    contactTitle: "Contáctame",
    contactSubtitle: "¡Me encantaría saber de ti! Ya sea para oportunidades laborales, colaboraciones o simplemente para saludar.",
    contactEmail: "Correo Electrónico",
    contactEmailText: "La mejor manera de contactarme para consultas detalladas.",
    sendEmail: "Enviar Correo",
    contactLinkedIn: "LinkedIn",
    contactLinkedInText: "Conéctate conmigo en LinkedIn para oportunidades profesionales.",
    visitLinkedIn: "Visitar Perfil",
    contactGitHub: "GitHub",
    contactGitHubText: "Explora mis proyectos y contribuciones en GitHub.",
    visitGitHub: "Visitar Perfil",
    contactFormTitle: "O envíame un Mensaje Directo",
    contactFormInfo: "Para consultas rápidas, utiliza el siguiente formulario. Responderé a la brevedad posible.",
    formNameLabel: "Nombre:",
    formEmailLabel: "Correo Electrónico:",
    formMessageLabel: "Mensaje:",
    formSubmitButton: "Enviar Mensaje",
    formNote: "Utilizo Formspree.io para gestionar los envíos de este formulario."
};

export function getProjectsData(lang = 'es') {
    const projects = [
        {
            id: 'api-automation-framework',
            title: 'Framework de Automatización de API',
            image: 'assets/images/projects/api-automation-framework.jpg',
            description: 'Desarrollé un framework robusto de automatización de API usando Python y PyTest para pruebas eficientes y escalables de APIs RESTful.',
            fullDescription: 'Este proyecto se enfoca en la creación de un framework de automatización de pruebas para APIs RESTful utilizando Python y la librería `requests` junto con el framework de pruebas `PyTest`. El objetivo principal fue establecer un sistema que permitiera la ejecución de pruebas rápidas, confiables y mantenibles para validar la funcionalidad y el rendimiento de los endpoints de API. Se implementaron patrones de diseño como Page Object Model para las APIs, gestión de datos de prueba dinámicos y reportes detallados. La integración con Jenkins permitió la ejecución automática en el pipeline de CI/CD, mejorando la detección temprana de defectos.',
            technologies: ['Python', 'PyTest', 'Requests', 'Jenkins', 'CI/CD'],
            challenges: 'Uno de los principales desafíos fue la gestión de tokens de autenticación y datos dinámicos. También, asegurar que las pruebas fueran aisladas y que no tuvieran dependencias entre sí.',
            solutions: 'Se implementó un sistema de autenticación centralizado que refrescaba los tokens automáticamente. Para los datos dinámicos, se usaron factories de datos y se limpió el entorno después de cada ejecución de prueba. Se adoptó una estructura modular que facilitaba la adición de nuevas pruebas sin afectar las existentes.',
            results: 'Reducción del tiempo de ejecución de pruebas de API en un 70%, aumento en la cobertura de pruebas y una mejora del 50% en la detección temprana de regresiones en el pipeline de CI/CD. El equipo de desarrollo ahora tiene un feedback más rápido sobre la calidad de las APIs.',
            demoLink: 'https://github.com/dgsoto/your-api-automation-repo/blob/main/demo.md', // Ejemplo de un enlace a una demo
            repoLink: 'https://github.com/dgsoto/your-api-automation-repo',
            detailPage: 'project-detail.html?id=api-automation-framework',
            additionalImages: [
                { src: 'assets/images/projects/api-framework-screenshot1.jpg', alt: 'Vista de la estructura del framework de API' },
                { src: 'assets/images/projects/api-framework-screenshot2.jpg', alt: 'Captura de pantalla de reportes de PyTest' }
            ]
        },
        {
            id: 'web-ui-test-suite',
            title: 'Suite de Pruebas de UI Web con Playwright',
            image: 'assets/images/projects/web-ui-test-suite.jpg',
            description: 'Una suite completa de pruebas de UI web construida con Playwright y JavaScript para pruebas de compatibilidad entre navegadores.',
            fullDescription: 'Este proyecto demuestra una suite de pruebas de interfaz de usuario web de extremo a extremo utilizando Playwright con JavaScript y Node.js. El enfoque principal fue garantizar una experiencia de usuario fluida y sin defectos en múltiples navegadores (Chromium, Firefox, WebKit) y dispositivos. Se implementaron los patrones Page Object Model para una mejor mantenibilidad, así como pruebas de regresión visual para detectar cambios inesperados en la UI. La suite está optimizada para la ejecución paralela y se integra fácilmente con soluciones de CI/CD como GitHub Actions.',
            technologies: ['JavaScript', 'Playwright', 'Node.js', 'Jest', 'CI/CD'],
            challenges: 'Asegurar la estabilidad de las pruebas en diferentes navegadores y manejar elementos dinámicos que cambian frecuentemente. La gestión de los tiempos de espera y los selectores robustos fue clave.',
            solutions: 'Se utilizaron selectores CSS y XPath avanzados y se aplicaron esperas explícitas con Playwright. Se implementó un enfoque de "reintentos" para pruebas inestables y se usaron herramientas de depuración avanzadas de Playwright para identificar fallas rápidamente. Se usó `percy.io` o similar para regresión visual.',
            results: 'Mejora del 80% en la eficiencia de las pruebas de regresión UI, lo que permitió un ciclo de feedback más rápido para el equipo de desarrollo. Se redujeron los errores de UI en producción en un 40% gracias a la detección temprana de defectos visuales y funcionales.',
            demoLink: 'https://dgsoto.github.io/portfolio/demos/playwright-ui-suite/', // Ejemplo de demo en vivo
            repoLink: 'https://github.com/dgsoto/your-web-ui-test-repo',
            detailPage: 'project-detail.html?id=web-ui-test-suite',
            additionalImages: [
                { src: 'assets/images/projects/ui-suite-screenshot1.jpg', alt: 'Ejemplo de ejecución de pruebas Playwright en múltiples navegadores' },
                { src: 'assets/images/projects/ui-suite-screenshot2.jpg', alt: 'Dashboard de reporte de pruebas Playwright' }
            ]
        },
        {
            id: 'data-driven-backend-testing',
            title: 'Pruebas Dirigidas por Datos para Backend',
            image: 'assets/images/projects/data-driven-backend-testing.jpg',
            description: 'Implementé una solución de pruebas dirigida por datos para servicios backend, aprovechando Python y Flask.',
            fullDescription: 'Este proyecto implementa una estrategia de pruebas dirigida por datos para servicios backend, utilizando Python, Flask para simular servicios y SQL para la gestión de bases de datos de prueba. La solución permite ejecutar un solo conjunto de pruebas con múltiples conjuntos de datos de entrada, garantizando una cobertura exhaustiva para diferentes escenarios de negocio. Se enfoca en la validación de la lógica de negocio, la integridad de los datos y el rendimiento del backend bajo diversas condiciones. Las pruebas se realizan a nivel de API y de base de datos directamente.',
            technologies: ['Python', 'Flask', 'SQL', 'PyTest', 'PostgreSQL', 'MySQL'],
            challenges: 'El principal reto fue la creación y gestión de un gran volumen de datos de prueba diversos y realistas, así como asegurar que las pruebas no dependieran del estado anterior de la base de datos.',
            solutions: 'Se desarrollaron scripts para generar datos de prueba sintéticos y para limpiar la base de datos antes de cada ejecución de prueba. Se utilizaron fixtures de PyTest para configurar y desmontar el entorno de la base de datos de manera eficiente. La lógica de negocio fue desacoplada para facilitar la inyección de datos.',
            results: 'Aumento del 60% en la cobertura de escenarios de prueba de backend al permitir la validación con diferentes conjuntos de datos. Se redujo el tiempo de preparación de datos de prueba en un 40% y se mejoró la confianza en la estabilidad de los servicios backend.',
            demoLink: 'https://github.com/dgsoto/your-data-driven-testing-repo/blob/main/README.md#demo',
            repoLink: 'https://github.com/dgsoto/your-data-driven-testing-repo',
            detailPage: 'project-detail.html?id=data-driven-backend-testing',
            additionalImages: [
                { src: 'assets/images/projects/backend-testing-screenshot1.jpg', alt: 'Diagrama de flujo de pruebas dirigidas por datos' },
                { src: 'assets/images/projects/backend-testing-screenshot2.jpg', alt: 'Ejemplo de resultados de pruebas de base de datos' }
            ]
        }
    ];
    // Asegurarse de que las descripciones completas estén también en inglés y portugués
    // para los archivos data_en.js y data_pt.js
    return projects;
}

export function getBlogData(lang = 'es') {
    const articles = [
        {
            id: 'optimizando-pruebas-api',
            title: 'Optimizando Pruebas de API con PyTest y Postman',
            image: 'assets/images/blog/api-testing-optimization.jpg',
            description: 'Descubre cómo combinar PyTest y Postman para construir un flujo de trabajo de pruebas de API más eficiente y robusto.',
            date: '15 de Julio, 2025',
            slug: 'optimizando-pruebas-api' // Usado para la URL del artículo
        },
        {
            id: 'rol-qa-devops',
            title: 'El Rol del QA en el Pipeline de DevOps',
            image: 'assets/images/blog/qa-devops-role.jpg',
            description: 'Exploramos cómo los ingenieros QA pueden integrarse y aportar valor en un entorno DevOps para asegurar entregas continuas de calidad.',
            date: '10 de Julio, 2025',
            slug: 'el-rol-qa-devops'
        },
        {
            id: 'cross-browser-testing-playwright',
            title: 'Testing Multi-Navegador Eficiente con Playwright',
            image: 'assets/images/blog/cross-browser-playwright.jpg',
            description: 'Una guía práctica para configurar y ejecutar pruebas multi-navegador con Playwright, garantizando la compatibilidad de tu aplicación web.',
            date: '05 de Julio, 2025',
            slug: 'testing-multi-navegador-playwright'
        }
        // ... más artículos
    ];
    return articles;
}