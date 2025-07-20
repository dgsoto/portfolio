// js/modules/projects.js
import { getTranslation } from './lang.js'; // Para traducir el botón

export function renderProjects(projects, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return; // Asegúrate de que el contenedor existe

    container.innerHTML = ''; // Limpia el contenedor antes de renderizar

    const projectsToRender = limit ? projects.slice(0, limit) : projects;

    projectsToRender.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const tagsHtml = project.technologies.map(tag => `<span class="tag">${tag}</span>`).join('');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title} Project Image">
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">${tagsHtml}</div>
                <div class="card-buttons">
                    <a href="${project.detailPage}" class="read-more-btn">${getTranslation('viewProjectButton')}</a>
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Puedes añadir una función para renderizar un solo proyecto en project-detail.html
export function renderProjectDetail(projectId, allProjects) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) {
        // Manejar caso de proyecto no encontrado
        document.getElementById('project-detail-container').innerHTML = '<p>Proyecto no encontrado.</p>';
        return;
    }
    // Lógica para renderizar los detalles completos del proyecto
    const container = document.getElementById('project-detail-container');
    container.innerHTML = `
        <h1>${project.title}</h1>
        <img src="${project.image}" alt="${project.title} detail image">
        <p>${project.description}</p>
        <p><strong>Tecnologías Clave:</strong> ${project.technologies.join(', ')}</p>
        ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="btn primary-btn">Ver Demo / Código</a>` : ''}
    `;
}