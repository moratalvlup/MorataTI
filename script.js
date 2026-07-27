/* =========================================================
   1. ANIMAÇÕES AO ROLAR A PÁGINA (SCROLL REVEAL)
========================================================= */
document.addEventListener('DOMContentLoaded', () => {

    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 150,
            reset: false // Executa a animação uma vez
        });

        // Revela o título das seções
        sr.reveal('.section-title', { delay: 100 });

        // Revela o bloco de introdução e os diferenciais em sequência
        sr.reveal('.intro-card', { delay: 200 });
        sr.reveal('.feature-card', { interval: 150 });

        // Revela os cards de serviços
        sr.reveal('.skill-card', { interval: 200 });

        // Revela os links de contato
        sr.reveal('.contact-links a', { interval: 100 });
    }

    /* =========================================================
       2. EFEITO 3D INTERATIVO NOS CARDS (TILT EFFECT)
    ========================================================= */
    const cards = document.querySelectorAll('.feature-card, .skill-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Inclinação suave no espaço 3D (máximo de 5 graus)
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    /* =========================================================
       3. DESTAQUE AUTOMÁTICO DO MENU AO ROLAR
    ========================================================= */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');

            if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

});