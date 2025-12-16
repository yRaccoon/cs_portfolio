// Initialize Lucide Icons
lucide.createIcons();

// DOM Elements
const DOM = {
    navbar: document.getElementById('navbar'),
    mobileBtn: document.getElementById('mobile-menu-btn'),
    mobileMenu: document.getElementById('mobile-menu'),
    loadMoreBtn: document.getElementById('load-more'),
    contactForm: document.querySelector('contact-form'),
    downloadResumeBtn: document.getElementById('download-resume'),
    typewriterElement: document.getElementById('typewriter')
};

// Constants
const RESUME_PATH = 'assets/cs_resume.pdf';
const PROJECTS_PER_LOAD = 3;
let projectsLoaded = 3;

// Typewriter Effect
class Typewriter {
    constructor(el, phrases, delay = 1500) {
        this.el = el;
        this.phrases = phrases;
        this.delay = delay;
        this.currentPhrase = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.timeout = null;
        this.isRunning = true;
        
        this.type();
    }

    type() {
        if (!this.isRunning || !this.el) return;
        
        const fullText = this.phrases[this.currentPhrase];
        
        if (this.isDeleting) {
            // Delete one character
            this.el.textContent = fullText.substring(0, this.currentChar - 1);
            this.currentChar--;
        } else {
            // Add one character
            this.el.textContent = fullText.substring(0, this.currentChar + 1);
            this.currentChar++;
        }

        let typeSpeed = this.isDeleting ? 50 : 100;

        // If we've reached the end of the current phrase
        if (!this.isDeleting && this.currentChar === fullText.length) {
            typeSpeed = this.delay; // Pause at full phrase
            this.isDeleting = true;
        } 
        // If we've deleted everything
        else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
            typeSpeed = 500; // Pause before starting next phrase
        }

        this.timeout = setTimeout(() => this.type(), typeSpeed);
    }

    destroy() {
        this.isRunning = false;
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    let typewriter;
    if (DOM.typewriterElement) {
        typewriter = new Typewriter(DOM.typewriterElement, [
            "Web Developer",
            "Software Developer", 
            "Computer Engineering Student",
            "UI/UX Enthusiast",
            "Problem Solver",
            "Tech Innovator"
        ], 1500);
    }
    
    // Project hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize observers
    initializeEventListeners();
    
    // Cleanup when page unloads
    window.addEventListener('beforeunload', () => {
        if (typewriter) typewriter.destroy();
        observer.disconnect();
    });
});

// Loading Animation
function showLoadingAnimation() {
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    document.body.appendChild(loadingBar);
    
    setTimeout(() => {
        loadingBar.remove();
    }, 2000);
}

// Initialize all event listeners
function initializeEventListeners() {
    // Navbar Scroll Effect with Throttle
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;
        
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 50) {
                DOM.navbar.classList.add('glass', 'shadow-lg', 'border-white/10');
                DOM.navbar.classList.remove('border-transparent');
            } else {
                DOM.navbar.classList.remove('glass', 'shadow-lg', 'border-white/10');
                DOM.navbar.classList.add('border-transparent');
            }
            scrollTimeout = null;
        }, 100);
    });

    // Mobile Menu Toggle
    if (DOM.mobileBtn && DOM.mobileMenu) {
        DOM.mobileBtn.addEventListener('click', () => {
            DOM.mobileMenu.classList.toggle('hidden');
            const icon = DOM.mobileBtn.querySelector('i');
            icon.setAttribute('data-lucide', DOM.mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
            lucide.createIcons();
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                DOM.mobileMenu.classList.add('hidden');
                DOM.mobileBtn.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }

    // Smooth Scrolling
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor || anchor.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(anchor.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });

    // Load More Projects with Enhanced Animations
    if (DOM.loadMoreBtn) {
        const hiddenProjects = Array.from(document.querySelectorAll('.hidden-project'));
        
        // Create ripple effect
        function createRipple(event) {
            const button = event.currentTarget;
            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
            circle.classList.add("ripple");
            
            const ripple = button.getElementsByClassName("ripple")[0];
            if (ripple) {
                ripple.remove();
            }
            
            button.appendChild(circle);
        }
        
        const updateButtonText = () => {
            const remaining = hiddenProjects.length - (projectsLoaded - 3);
            if (remaining <= 0) {
                DOM.loadMoreBtn.innerHTML = `
                    <span>All Projects Loaded</span>
                    <i data-lucide="check" class="w-5 h-5"></i>
                `;
                DOM.loadMoreBtn.disabled = true;
                DOM.loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
                DOM.loadMoreBtn.classList.remove('pulse-glow');
            } else {
                DOM.loadMoreBtn.innerHTML = `
                    <span>Load More Projects (${remaining} remaining)</span>
                    <i data-lucide="chevron-down" class="w-5 h-5 group-hover:animate-bounce"></i>
                `;
                // Add subtle pulse animation to button
                DOM.loadMoreBtn.classList.add('pulse-glow');
            }
            lucide.createIcons();
        };

        // Add click animation to button
        DOM.loadMoreBtn.addEventListener('click', function(e) {
            createRipple(e);
            
            // Button click animation
            DOM.loadMoreBtn.classList.add('button-click');
            setTimeout(() => {
                DOM.loadMoreBtn.classList.remove('button-click');
            }, 300);
            
            // Add loading state
            const originalHTML = DOM.loadMoreBtn.innerHTML;
            DOM.loadMoreBtn.innerHTML = `
                <i data-lucide="loader" class="w-5 h-5 animate-spin"></i>
                Loading Projects...
            `;
            DOM.loadMoreBtn.disabled = true;
            DOM.loadMoreBtn.classList.add('load-more-loading');
            
            // Show loading animation
            showLoadingAnimation();
            
            // Simulate loading delay
            setTimeout(() => {
                const toShow = hiddenProjects.slice(projectsLoaded - 3, projectsLoaded - 3 + PROJECTS_PER_LOAD);
                
                // Animate each project sequentially
                toShow.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.remove('hidden');
                        project.classList.add('show', 'project-reveal');
                        
                        // Add subtle stagger effect
                        project.style.animationDelay = `${index * 0.1}s`;
                        
                        // Add a subtle glow effect on reveal
                        const cardContent = project.querySelector('.glass-card');
                        if (cardContent) {
                            cardContent.style.boxShadow = '0 0 30px rgba(74, 222, 128, 0.3)';
                            setTimeout(() => {
                                cardContent.style.boxShadow = '';
                            }, 1000);
                        }
                    }, index * 150);
                });
                
                projectsLoaded += toShow.length;
                updateButtonText();
                
                // Remove loading state
                DOM.loadMoreBtn.classList.remove('load-more-loading');
                
                // Scroll to newly loaded projects with delay
                if (toShow.length > 0) {
                    setTimeout(() => {
                        toShow[toShow.length - 1].scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest',
                            inline: 'nearest'
                        });
                        
                        // Add a subtle highlight effect to the last project
                        toShow[toShow.length - 1].classList.add('highlight-new');
                        setTimeout(() => {
                            toShow[toShow.length - 1].classList.remove('highlight-new');
                        }, 2000);
                    }, toShow.length * 150 + 300);
                }
            }, 1200);
        });
        
        // Add hover effect to button
        DOM.loadMoreBtn.addEventListener('mouseenter', () => {
            if (!DOM.loadMoreBtn.disabled) {
                DOM.loadMoreBtn.style.transform = 'translateY(-2px)';
                DOM.loadMoreBtn.style.boxShadow = '0 10px 25px rgba(74, 222, 128, 0.3)';
            }
        });
        
        DOM.loadMoreBtn.addEventListener('mouseleave', () => {
            if (!DOM.loadMoreBtn.disabled) {
                DOM.loadMoreBtn.style.transform = 'translateY(0)';
                DOM.loadMoreBtn.style.boxShadow = '';
            }
        });
        
        updateButtonText();
    }

    // Download Resume
    if (DOM.downloadResumeBtn) {
        DOM.downloadResumeBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const originalHTML = DOM.downloadResumeBtn.innerHTML;
            DOM.downloadResumeBtn.innerHTML = `
                <i data-lucide="loader" class="w-5 h-5 animate-spin"></i>
                Downloading...
            `;
            DOM.downloadResumeBtn.disabled = true;
            
            try {
                // Check if file exists
                const response = await fetch(RESUME_PATH);
                if (!response.ok) throw new Error('File not found');
                
                // Trigger download
                const link = document.createElement('a');
                link.href = RESUME_PATH;
                link.download = 'Clarence_Sioson_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Success state
                DOM.downloadResumeBtn.innerHTML = `
                    <i data-lucide="check" class="w-5 h-5"></i>
                    Resume Downloaded!
                `;
                
                setTimeout(() => {
                    DOM.downloadResumeBtn.innerHTML = originalHTML;
                    DOM.downloadResumeBtn.disabled = false;
                    lucide.createIcons();
                }, 2000);
                
            } catch (error) {
                console.error('Download error:', error);
                DOM.downloadResumeBtn.innerHTML = `
                    <i data-lucide="alert-circle" class="w-5 h-5"></i>
                    File Not Found
                `;
                DOM.downloadResumeBtn.classList.add('text-red-400');
                
                setTimeout(() => {
                    DOM.downloadResumeBtn.innerHTML = originalHTML;
                    DOM.downloadResumeBtn.disabled = false;
                    DOM.downloadResumeBtn.classList.remove('text-red-400');
                    lucide.createIcons();
                }, 2000);
                
                alert('Resume file not found. Please try again later.');
            }
        });
    }

    // Contact Form
    if (DOM.contactForm) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        DOM.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending
            setTimeout(() => {
                console.log('Contact Form Submission:', {
                    name, email, subject, message,
                    timestamp: new Date().toISOString()
                });
                
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                DOM.contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(135deg, #4ade80, #60a5fa)';
                }, 2000);
            }, 1500);
        });
    }

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe elements
    document.querySelectorAll('h2, h3, .skill-tag').forEach(el => observer.observe(el));
}