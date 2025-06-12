
document.addEventListener('DOMContentLoaded', function() {
    const langUkBtn = document.getElementById('lang-uk');
    const langEnBtn = document.getElementById('lang-en');
    let currentLang = 'uk';

    // Load saved language from localStorage
    const savedLang = localStorage.getItem('selectedLanguage') || 'uk';
    switchLanguage(savedLang);

    langUkBtn.addEventListener('click', () => switchLanguage('uk'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));

    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update button states
        langUkBtn.classList.toggle('active', lang === 'uk');
        langEnBtn.classList.toggle('active', lang === 'en');
        
        // Update all elements with language data attributes
        const elementsWithLang = document.querySelectorAll('[data-uk][data-en]');
        elementsWithLang.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Save language preference
        localStorage.setItem('selectedLanguage', lang);
        
        // Update document language attribute
        document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
    }
});
