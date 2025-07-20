// js/project-detail.js
import { getProjectsData } from '../data_es.js'; // Ajustaremos para multi-idioma
import { getTranslation, loadLanguageData, updateContentLanguage } from './lang.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Inicializar idioma y tema (similar a main.js para elementos compartidos como nav)
    const savedLang = localStorage.getItem('lang') || 'es';
    await loadLanguageData(savedLang); // Asegura que los datos de idioma estén cargados
    updateContentLanguage(); // Aplica las traducciones a los elementos comunes

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const projectDetailContainer = document.getElementById('project-detail-container');

    if (!projectId) {
        projectDetailContainer.innerHTML = `<p>${getTranslation('projectNotFound')}</p>`;
        return;
    }

    const projects = getProjectsData(savedLang); // Obtiene los proyectos en el idioma actual
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        projectDetailContainer.innerHTML = `<p>${getTranslation('projectNotFound')}</p>`;
        return;
    }

    // Renderizar los detalles del proyecto
    renderProjectDetails(project, projectDetailContainer);
    // Actualizar las meta etiquetas para SEO
    updateMetaTags(project);

    // Asegurar que el año actual se muestre en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

function renderProjectDetails(project, container) {
    const technologiesHtml = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');

    // Construye un HTML más rico y detallado para la página del proyecto
    container.innerHTML = `
        <h1 class="project-title">${project.title}</h1>
        <div class="project-header">
            <img src="${project.image}" alt="${project.title} - Imagen Principal" class="project-main-image">
        </div>
        <div class="project-description-full">
            <p>${project.fullDescription || project.description}</p>
            ${project.challenges ? `<h3>${getTranslation('projectChallengesTitle')}</h3><p>${project.challenges}</p>` : ''}
            ${project.solutions ? `<h3>${getTranslation('projectSolutionsTitle')}</h3><p>${project.solutions}</p>` : ''}
            ${project.results ? `<h3>${getTranslation('projectResultsTitle')}</h3><p>${project.results}</p>` : ''}
            
            <div class="technologies-used">
                <h3>${getTranslation('technologiesUsedTitle')}</h3>
                <div class="tags">${technologiesHtml}</div>
            </div>

            ${project.additionalImages && project.additionalImages.length > 0 ? `
                <h3>${getTranslation('projectGalleryTitle')}</h3>
                <div class="project-gallery">
                    ${project.additionalImages.map(img => `<img src="${img.src}" alt="${img.alt}" class="gallery-image">`).join('')}
                </div>
            ` : ''}

            <div class="project-actions">
                ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="btn primary-btn">${getTranslation('viewLiveDemo')}</a>` : ''}
                ${project.repoLink ? `<a href="${project.repoLink}" target="_blank" class="btn secondary-btn">${getTranslation('viewRepository')}</a>` : ''}
            </div>
            <div class="back-link">
                <a href="projects.html" class="btn secondary-btn">&larr; ${getTranslation('backToProjects')}</a>
            </div>
        </div>
    `;
}

// Función crucial para SEO: Actualiza las meta etiquetas de la página
function updateMetaTags(project) {
    const title = `${project.title} | Proyectos QA | Diego Gonzales Soto`;
    const description = project.fullDescription || project.description;
    const imageUrl = `https://dgsoto.github.io/portfolio/${project.image}`; // Ruta absoluta
    const pageUrl = `https://dgsoto.github.io/portfolio/project-detail.html?id=${project.id}`;

    document.title = title;

    document.querySelector('meta[name="description"]').setAttribute('content', description);
    
    // Open Graph / Facebook
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);
    document.querySelector('meta[property="og:url"]').setAttribute('content', pageUrl);

    // Twitter
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', imageUrl);
    document.querySelector('meta[name="twitter:url"]').setAttribute('content', pageUrl);
}