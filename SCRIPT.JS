const themeToggleBtn = document.getElementById('theme-toggle');
const fontIncreaseBtn = document.getElementById('font-increase');
const fontDecreaseBtn = document.getElementById('font-decrease');

// Alternar Tema (Claro / Escuro)
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙 Dark';
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '☀️ Light';
    }
});

// Controle do Tamanho da Fonte
let currentFontSize = 16;

fontIncreaseBtn.addEventListener('click', () => {
    if (currentFontSize < 22) {
        currentFontSize += 2;
        document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
    }
});

fontDecreaseBtn.addEventListener('click', () => {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
    }
});
