// Cookie Banner Handler
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieReject = document.getElementById('cookie-reject');

    if (cookieBanner && cookieAccept && cookieReject) {
        // Function to show cookie banner
        window.showCookieBanner = () => {
            localStorage.removeItem('cookieChoice');
            cookieBanner.classList.add('show');
        };

        // Check if user has already made a choice
        const cookieChoice = localStorage.getItem('cookieChoice');
        if (!cookieChoice) {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1000);
        }

        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'accepted');
            cookieBanner.classList.remove('show');
        });

        cookieReject.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'rejected');
            cookieBanner.classList.remove('show');
        });
    }
});
