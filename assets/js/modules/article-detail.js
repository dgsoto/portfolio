// js/article-detail.js
import { getBlogData } from '../data_es.js'; // Ajustaremos para multi-idioma
import { getTranslation, loadLanguageData, updateContentLanguage } from './lang.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Inicializar idioma y tema (similar a main.js para elementos compartidos como nav)
    const savedLang = localStorage.getItem('lang') || 'es';
    await loadLanguageData(savedLang);
    updateContentLanguage();

    const urlParams = new URLSearchParams(window.location.search);
    const articleSlug = urlParams.get('slug'); // Obtener el 'slug' de la URL
    const articleDetailContainer = document.getElementById('article-detail-container');

    if (!articleSlug) {
        articleDetailContainer.innerHTML = `<p>${getTranslation('articleNotFound')}</p>`;
        return;
    }

    const articles = getBlogData(savedLang); // Obtener los artículos en el idioma actual
    const article = articles.find(a => a.slug === articleSlug);

    if (!article) {
        articleDetailContainer.innerHTML = `<p>${getTranslation('articleNotFound')}</p>`;
        return;
    }

    // Cargar y renderizar el contenido HTML del artículo
    await renderArticleDetails(article, articleDetailContainer);
    // Actualizar las meta etiquetas para SEO
    updateMetaTags(article);

    // Asegurar que el año actual se muestre en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Re-ejecutar el resaltado de código si se usa highlight.js
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
});

async function renderArticleDetails(article, container) {
    try {
        const response = await fetch(`articles/${article.slug}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const htmlContent = await response.text();
        container.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading article content:', error);
        container.innerHTML = `<p>${getTranslation('errorLoadingArticle')}</p>`;
    }
}

// Función crucial para SEO: Actualiza las meta etiquetas de la página
function updateMetaTags(article) {
    const title = `${article.title} | Blog QA | Diego Gonzales Soto`;
    const description = article.description; // Usar la descripción corta para la meta
    const imageUrl = `https://dgsoto.github.io/portfolio/${article.image}`; // Ruta absoluta
    const pageUrl = `https://dgsoto.github.io/portfolio/articles/${article.slug}.html`; // URL del artículo

    document.title = title;

    document.querySelector('meta[name="description"]').setAttribute('content', description);
    
    // Open Graph / Facebook
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);
    document.querySelector('meta[property="og:url"]').setAttribute('content', pageUrl);
    document.querySelector('meta[property="og:type"]').setAttribute('content', 'article'); // Para artículos, el tipo es 'article'

    // Twitter
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', imageUrl);
    document.querySelector('meta[name="twitter:url"]').setAttribute('content', pageUrl);
}