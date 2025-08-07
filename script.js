// Alternar seções
function toggleSection(sectionId) {
    const content = document.getElementById(`${sectionId}-content`);
    content.classList.toggle('active');
}

// Mudar idioma
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateVisibleLanguage();
}

// Atualizar elementos visíveis com base no idioma
function updateVisibleLanguage() {
    const lang = document.documentElement.lang;
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = 'none';
    });
    
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
        el.style.display = 'inline';
    });
}

// Carregar idioma preferido
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    document.documentElement.lang = savedLang;
    updateVisibleLanguage();
    
    // Fechar todas as seções inicialmente
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
});