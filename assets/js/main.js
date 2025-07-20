import { loadLanguageData, updateContentLanguage } from './modules/lang.js';
import { renderProjects } from './modules/projects.js';
import { renderBlogPosts } from './modules/blog.js';
import { getProjectsData } from './data_es.js'; // Importa el data inicial
import { getBlogData } from './data_es.js'; // Importa el data inicial

document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del Tema Claro/Oscuro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    const themeLink = document.getElementById('theme-link');

    

    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        // Establecer un tema por defecto si no hay preferencia (ej. oscuro)
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // 2. Manejo de Idiomas
    const langSelect = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('lang') || 'es'; // 'es' como idioma por defecto
    langSelect.value = savedLang; // Establecer el select al idioma guardado

    // Cargar y aplicar el idioma inicial
    loadLanguageData(savedLang).then(() => {
        updateContentLanguage();
    });

    langSelect.addEventListener('change', (event) => {
        const newLang = event.target.value;
        localStorage.setItem('lang', newLang);
        loadLanguageData(newLang).then(() => {
            updateContentLanguage();
            // Recargar proyectos y blogs con el nuevo idioma
            if (document.getElementById('projects-container')) {
                renderProjects(getProjectsData(newLang), 'projects-container', 3); // Muestra 3 en la home
            }
            if (document.getElementById('blog-container')) {
                renderBlogPosts(getBlogData(newLang), 'blog-container', 3); // Muestra 3 en la home
            }
        });
    });

    // 3. Cargar Proyectos Destacados (en la página de inicio)
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        // `getProjectsData` debe ser una función que devuelva los datos del idioma actual
        // Necesitarás modificar esto para que `data_es.js`, `data_en.js`, etc. exporten una función que tome el idioma.
        renderProjects(getProjectsData(savedLang), 'projects-container', 3); // Mostrar solo 3 proyectos en la página principal
    }

    // 4. Cargar Últimas Publicaciones del Blog (en la página de inicio)
    const blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        renderBlogPosts(getBlogData(savedLang), 'blog-container', 3); // Mostrar solo 3 blogs en la página principal
    }

    // 5. Año Actual en el Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});