/* =========================================================
   cs_portfolio — Coffee Shop Theme Interactions
   ========================================================= */

// DOM Elements
const DOM = {
    navbar: document.getElementById('navbar'),
    menuBtn: document.getElementById('menu-btn'),
    menuIcon: document.getElementById('menu-icon'),
    mobileMenu: document.getElementById('mobile-menu'),
    typewriterElement: document.getElementById('typewriter'),
    contactForm: document.getElementById('contact-form'),
    submitBtn: document.getElementById('submit-btn'),
    toast: document.getElementById('toast'),
    toastText: document.getElementById('toast-text')
};

/* ----------------------------------------------------
 * 1. Typewriter Effect
 * ---------------------------------------------------- */
const typewriterPhrases = [
    "Computer Engineer.",
    "Software Developer.",
    "Python Developer.",
    "Web Developer.",
    "Problem Solver."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!DOM.typewriterElement) return;

    const currentPhrase = typewriterPhrases[phraseIndex];

    if (isDeleting) {
        DOM.typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        DOM.typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 1800; // Pause at end of phrase
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        typeSpeed = 400; // Pause before typing next phrase
    }

    setTimeout(typeWriter, typeSpeed);
}

/* ----------------------------------------------------
 * 2. Mobile Menu Drawer Toggle
 * ---------------------------------------------------- */
if (DOM.menuBtn && DOM.mobileMenu && DOM.menuIcon) {
    DOM.menuBtn.addEventListener('click', () => {
        DOM.mobileMenu.classList.toggle('hidden');
        if (DOM.mobileMenu.classList.contains('hidden')) {
            DOM.menuIcon.classList.remove('fa-xmark');
            DOM.menuIcon.classList.add('fa-bars');
        } else {
            DOM.menuIcon.classList.remove('fa-bars');
            DOM.menuIcon.classList.add('fa-xmark');
        }
    });

    // Close mobile drawer on clicking any nav link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            DOM.mobileMenu.classList.add('hidden');
            DOM.menuIcon.classList.remove('fa-xmark');
            DOM.menuIcon.classList.add('fa-bars');
        });
    });
}

/* ----------------------------------------------------
 * 3. Projects Category Filter
 * ---------------------------------------------------- */
const filterBtns = document.querySelectorAll('.project-filter-btn');
const projectCards = document.querySelectorAll('#projects-container .project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active styling from all buttons
        filterBtns.forEach(b => {
            b.classList.remove('bg-espresso', 'text-cream', 'bg-gradient-to-r', 'from-latte', 'to-caramel', 'shadow-md', 'font-bold');
            b.classList.add('text-roast', 'hover:bg-cream', 'font-medium');
        });

        // Add active styling to clicked button
        btn.classList.add('bg-gradient-to-r', 'from-latte', 'to-caramel', 'shadow-md', 'font-bold');
        btn.classList.remove('hover:bg-cream', 'font-medium');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

/* ----------------------------------------------------
 * 4. Contact Form — Formspree AJAX with Toast
 * ---------------------------------------------------- */
if (DOM.contactForm) {
    DOM.contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(DOM.contactForm);
        const submitBtn = DOM.submitBtn;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Sending...`;

        try {
            const response = await fetch(DOM.contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                DOM.toastText.textContent = 'Thank you! Your message has been sent. I\'ll get back to you soon.';
                DOM.contactForm.reset();
            } else {
                setToastError();
            }
        } catch (error) {
            setToastError();
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane text-xs"></i>`;
        DOM.toast.classList.remove('hidden');

        setTimeout(() => {
            DOM.toast.classList.add('hidden');
            resetToast();
        }, 5000);
    });
}

function setToastError() {
    DOM.toastText.textContent = 'Something went wrong. Please try again or email me directly.';
    DOM.toast.classList.remove('bg-emerald-100', 'border-emerald-300', 'text-emerald-800');
    DOM.toast.classList.add('bg-red-100', 'border-red-300', 'text-red-800');
}

function resetToast() {
    DOM.toast.classList.add('bg-emerald-100', 'border-emerald-300', 'text-emerald-800');
    DOM.toast.classList.remove('bg-red-100', 'border-red-300', 'text-red-800');
}

/* ----------------------------------------------------
 * 6. Navbar Scroll Effect
 * ---------------------------------------------------- */
window.addEventListener('scroll', () => {
    if (!DOM.navbar) return;
    // The coffee navbar is already glass; add a subtle shadow on scroll
    DOM.navbar.classList.toggle('shadow-lg', window.scrollY > 20);
});

/* ----------------------------------------------------
 * 7. Active Navigation Link on Scroll
 * ---------------------------------------------------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-link');

function updateActiveNavLink() {
    const scrollPos = window.scrollY + 160; // offset for navbar height

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });

    mobileNavLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveNavLink);
});

/* ----------------------------------------------------
 * 8. Skill Bars — Animate on Scroll
 * ---------------------------------------------------- */
if ('IntersectionObserver' in window) {
    const skillBars = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width || '0%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => {
        bar.dataset.width = bar.style.width;
        bar.style.width = '0%';
        skillObserver.observe(bar);
    });
}

/* ----------------------------------------------------
 * Init
 * ---------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    if (DOM.typewriterElement) {
        setTimeout(typeWriter, 500);
    }
    updateActiveNavLink();
});
// (legacy load-more / resume / contact / observer logic removed for coffee theme)