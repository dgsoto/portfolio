// js/modules/lang.js
let langData = {};

export async function loadLanguageData(lang) {
    try {
        const response = await fetch(`./js/data_${lang}.js`); // Ajusta la ruta si es necesario
        // Asumiendo que data_es.js, data_en.js etc. exportan un objeto `languageData` y `projectsData`, `blogData`
        // Esto es un enfoque simplificado, en un proyecto real usarías un JSON importado o un objeto global.
        // Para este ejemplo, cargaremos directamente los módulos de datos.
        const module = await import(`../data_${lang}.js`);
        langData = module.languageData; // Asume que cada archivo de datos exporta `languageData`
    } catch (error) {
        console.error('Error loading language data:', error);
    }
}

export function updateContentLanguage() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
}

export function getTranslation(key) {
    return langData[key] || key; // Devuelve la clave si no encuentra traducción
}

// Puedes exportar los datos de proyectos y blogs desde aquí también si quieres centralizar
// Por ahora, los importamos directamente en main.js desde data_xx.js