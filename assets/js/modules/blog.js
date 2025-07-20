// js/modules/blog.js
import { getTranslation } from './lang.js'; // Para traducir el botón

export function renderBlogPosts(articles, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const articlesToRender = limit ? articles.slice(0, limit) : articles;

    articlesToRender.forEach(article => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        blogCard.innerHTML = `
            <img src="${article.image}" alt="${article.title} Blog Image">
            <div class="card-content">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <p class="article-date">${article.date}</p>
                <div class="card-buttons">
                    <a href="article-detail.html?slug=${article.slug}" class="read-more-btn">${getTranslation('readMoreButton')}</a>
                </div>
            </div>
        `;
        container.appendChild(blogCard);
    });
}

// Puedes añadir una función para renderizar un solo artículo en article-detail.html
export function renderArticleDetail(articleSlug, allArticles) {
    const article = allArticles.find(a => a.slug === articleSlug);
    if (!article) {
        document.getElementById('article-detail-container').innerHTML = '<p>Artículo no encontrado.</p>';
        return;
    }
    // Lógica para cargar el contenido completo del HTML del artículo
    fetch(`articles/${article.slug}.html`) // Asume que el contenido completo está en un HTML separado
        .then(response => response.text())
        .then(html => {
            document.getElementById('article-detail-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading article content:', error);
            document.getElementById('article-detail-container').innerHTML = '<p>Error al cargar el contenido del artículo.</p>';
        });
}