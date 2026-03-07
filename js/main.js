// Hamburger Menu and Navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const nav = document.querySelector('.nav');
    const body = document.body;

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const isOpen = nav.classList.contains('show');
            nav.classList.toggle('show');
            hamburger.classList.toggle('active');
            hamburger.innerHTML = isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
            
            // Prevent body scroll when menu is open
            if (nav.classList.contains('show')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        if (navMenu) {
            navMenu.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    nav.classList.remove('show');
                    hamburger.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    body.style.overflow = '';
                }
            });
        }

        // Close menu when clicking outside
        nav.addEventListener('click', (e) => {
            if (e.target === nav) {
                nav.classList.remove('show');
                hamburger.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                body.style.overflow = '';
            }
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
