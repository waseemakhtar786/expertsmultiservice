/* js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    // Toggle Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger){
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Active Link Handler
    const current = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if(link.getAttribute('href') === current || (current === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Form Handler (Mock)
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const original = btn.textContent;
            btn.textContent = 'Sending...';
            setTimeout(() => {
                alert('Message Sent Successfully!');
                form.reset();
                btn.textContent = original;
            }, 1500);
        });
    }
});