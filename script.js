// Gallery data with real images
const galleryData = [
    {
        id: 1,
        title: "Mountain Sunrise",
        category: "scenery",
        description: "A breathtaking view of mountains bathed in golden morning light.",
        image: "https://github.com/sivadevireddy89-afk/rightdistractions.github.io/blob/e76e0bc615f11e66cfc663d5285a44b8b4a86f0e/Images/WhatsApp%20Image%202026-03-24%20at%2011.22.43%20(1).jpeg?fit=crop"
    },
    {
        id: 2,
        title: "City Skyline", 
        category: "location",
        description: "Urban architecture capturing the essence of modern city life.",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "Elderly Gentleman",
        category: "portrait", 
        description: "A character study capturing wisdom and life experience.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    },
    {
        id: 4,
        title: "Coastal Sunset",
        category: "scenery",
        description: "Vibrant colors of the setting sun over ocean waves.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
    },
    {
        id: 5,
        title: "Historic Town Square",
        category: "location",
        description: "Charming European town square with centuries of history.",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
    },
    {
        id: 6,
        title: "Young Artist",
        category: "portrait",
        description: "Capturing the creative spirit and dreams of youth.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop"
    },
    {
        id: 7,
        title: "Forest Path",
        category: "scenery",
        description: "A mystical journey through an ancient woodland.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
    },
    {
        id: 8,
        title: "Venice Canals",
        category: "location",
        description: "Romantic waterways of the floating city.",
        image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&h=600&fit=crop"
    },
    {
        id: 9,
        title: "Mother and Child",
        category: "portrait",
        description: "The timeless bond between mother and child.",
        image: "https://images.unsplash.com/photo-1573496359142-b3d406da852c?w=800&h=600&fit=crop"
    },
    {
        id: 10,
        title: "Desert Landscape",
        category: "scenery",
        description: "The stark beauty of endless sand dunes.",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop"
    },
    {
        id: 11,
        title: "Paris Street Cafe",
        category: "location",
        description: "The quintessential Parisian dining experience.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop"
    },
    {
        id: 12,
        title: "Musician at Work",
        category: "portrait",
        description: "The passion and concentration of a musical artist.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    }
];

// DOM elements
const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize gallery
function initGallery() {
    renderGallery('all');
    setupEventListeners();
    setupScrollEffects();
}

// Render gallery items with smooth animations
function renderGallery(filter) {
    galleryGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);
    
    filteredData.forEach((item, index) => {
        const galleryItem = createGalleryItem(item);
        galleryItem.style.opacity = '0';
        galleryItem.style.transform = 'translateY(20px)';
        galleryGrid.appendChild(galleryItem);
        
        // Stagger animation
        setTimeout(() => {
            galleryItem.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            galleryItem.style.opacity = '1';
            galleryItem.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Create gallery item element
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.category = item.category;
    
    div.innerHTML = `
        <div class="gallery-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;">
        </div>
        <div class="gallery-info">
            <h3 class="gallery-title">${item.title}</h3>
            <span class="gallery-category">${item.category}</span>
            <p class="gallery-description">${item.description}</p>
        </div>
    `;
    
    div.addEventListener('click', () => openModal(item));
    
    return div;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons with smooth transitions
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Render filtered gallery
            renderGallery(filter);
        });
    });
    
    // Modal close
    closeModal.addEventListener('click', closeModalFunc);
    
    // Modal click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // Mobile menu toggle with animation
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Add body lock when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 52;
                
                // Smooth scroll with easing
                const startPosition = window.pageYOffset;
                const distance = offsetTop - startPosition;
                const duration = 800;
                let start = null;
                
                function easeInOutCubic(t) {
                    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                }
                
                function animateScroll(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }
                
                requestAnimationFrame(animateScroll);
            }
            
            // Close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunc();
        }
    });
}

// Setup scroll effects
function setupScrollEffects() {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        const header = document.querySelector('.header');
        
        // Header hide/show on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        // Header background opacity
        if (currentScrollY > 50) {
            header.style.background = 'rgba(251, 251, 253, 0.95)';
        } else {
            header.style.background = 'rgba(251, 251, 253, 0.8)';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Enhanced smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 52;
            
            // Smooth scroll with easing
            const startPosition = window.pageYOffset;
            const distance = offsetTop - startPosition;
            const duration = 800;
            let start = null;
            
            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
            
            function animateScroll(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                
                window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animateScroll);
                }
            }
            
            requestAnimationFrame(animateScroll);
        }
        
        // Close mobile menu
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Open modal with smooth animation
function openModal(item) {
    modal.style.display = 'block';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    
    modalImage.style.backgroundImage = `url('${item.image}')`;
    modalImage.style.backgroundSize = 'cover';
    modalImage.style.backgroundPosition = 'center';
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    
    // Animate modal in
    setTimeout(() => {
        modal.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

// Close modal with smooth animation
function closeModalFunc() {
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);
}

// Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! I will get back to you soon.', 'success');
    e.target.reset();
}

// Show notification with smooth animation
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#34c759' : '#ff3b30'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 15px;
        font-weight: 400;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Intersection Observer for scroll animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.gallery-item, .about-text, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    setupIntersectionObserver();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
