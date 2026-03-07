// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.dataset.theme = body.dataset.theme === 'dark' ? '' : 'dark';
            themeToggle.innerHTML = body.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', body.dataset.theme);
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.dataset.theme = savedTheme;
            themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }
});
