// Initialize Lucide Icons
lucide.createIcons();

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const loadMoreBtn = document.getElementById('load-more');
const contactForm = document.getElementById('contact-form');
const downloadResumeBtn = document.getElementById('download-resume');

// Resume file path
const RESUME_PATH = 'assets/cs_resume.pdf';

// Loading Animation
function showLoadingAnimation() {
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    document.body.appendChild(loadingBar);
    
    setTimeout(() => {
        loadingBar.remove();
    }, 2000);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('glass', 'shadow-lg', 'border-white/10');
        navbar.classList.remove('border-transparent');
    } else {
        navbar.classList.remove('glass', 'shadow-lg', 'border-white/10');
        navbar.classList.add('border-transparent');
    }
});

// Mobile Menu Toggle
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
    } else {
        icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileBtn.querySelector('i').setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Typewriter Effect
class Typewriter {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.textContent = this.txt;

        let delta = 150 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

// Initialize Typewriter
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const toRotate = [
        "Web Developer",
        "Software Developer",
        "Computer Engineering Student",
        "UI/UX Enthusiast",
        "Problem Solver",
        "Tech Innovator"
    ];
    
    if (typewriterElement) {
        new Typewriter(typewriterElement, toRotate, 2000);
    }

    // Add hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Load More Projects - Show 2 hidden projects
if (loadMoreBtn) {
    let projectsLoaded = 3; // Initially showing 3 projects
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let projectsToShow = 2; // Show 2 more projects when clicked
    
    loadMoreBtn.addEventListener('click', () => {
        showLoadingAnimation();
        
        // Simulate loading
        setTimeout(() => {
            // Show next 2 hidden projects
            for (let i = projectsLoaded; i < projectsLoaded + projectsToShow; i++) {
                if (hiddenProjects[i - 3]) {
                    hiddenProjects[i - 3].classList.remove('hidden');
                    hiddenProjects[i - 3].classList.add('show');
                }
            }
            
            projectsLoaded += projectsToShow;
            
            // Update button text or hide if all projects are shown
            if (projectsLoaded >= hiddenProjects.length + 3) {
                loadMoreBtn.innerHTML = `
                    <span>All Projects Loaded</span>
                    <i data-lucide="check" class="w-5 h-5"></i>
                `;
                loadMoreBtn.disabled = true;
                loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                loadMoreBtn.innerHTML = `
                    <span>Load More Projects (${hiddenProjects.length + 3 - projectsLoaded} remaining)</span>
                    <i data-lucide="chevron-down" class="w-5 h-5 group-hover:animate-bounce"></i>
                `;
            }
            
            // Re-initialize icons
            lucide.createIcons();
            
            // Scroll to newly loaded projects
            if (projectsLoaded > 3) {
                const lastLoadedProject = document.querySelector('.hidden-project.show:last-child');
                if (lastLoadedProject) {
                    lastLoadedProject.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        }, 1000);
    });
    
    // Initialize button text
    loadMoreBtn.innerHTML = `
        <span>Load More Projects (${hiddenProjects.length} remaining)</span>
        <i data-lucide="chevron-down" class="w-5 h-5 group-hover:animate-bounce"></i>
    `;
}

// Download Resume Button
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show loading animation
        const originalText = downloadResumeBtn.innerHTML;
        downloadResumeBtn.innerHTML = `
            <i data-lucide="loader" class="w-5 h-5 animate-spin"></i>
            Downloading...
        `;
        downloadResumeBtn.disabled = true;
        
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = RESUME_PATH;
        link.download = 'cs_resume.pdf';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Check if the file exists
        fetch(RESUME_PATH)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Resume file not found');
                }
                
                // Show success message
                downloadResumeBtn.innerHTML = `
                    <i data-lucide="check" class="w-5 h-5"></i>
                    Resume Downloaded!
                `;
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    downloadResumeBtn.innerHTML = originalText;
                    downloadResumeBtn.disabled = false;
                    lucide.createIcons();
                }, 3000);
            })
            .catch(error => {
                console.error('Error downloading resume:', error);
                
                // Show error message
                downloadResumeBtn.innerHTML = `
                    <i data-lucide="alert-circle" class="w-5 h-5"></i>
                    File Not Found
                `;
                downloadResumeBtn.classList.add('text-red-400');
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    downloadResumeBtn.innerHTML = originalText;
                    downloadResumeBtn.disabled = false;
                    downloadResumeBtn.classList.remove('text-red-400');
                    lucide.createIcons();
                }, 3000);
                
                // Show alert to user
                alert('Resume file not found. Please try again later.');
            });
    });
}

// Contact Form Handler
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending (in a real application, this would send to a server)
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Log the form data (for demo purposes)
            console.log('Contact Form Submission:', {
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString()
            });
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(135deg, #4ade80, #60a5fa)';
            }, 3000);
        }, 1500);
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.glass-card, h2, h3, .skill-tag').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations if not already present
if (!document.querySelector('#animation-styles')) {
    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
        .animate-spin {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}