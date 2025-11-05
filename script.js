// BHAD Garment Website - Main Script
// Note: i18n.js handles its own DOMContentLoaded

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            navMenu.classList.remove('active');
        }));
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background based on scroll position
        if (scrollTop > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-card, .capacity-card, .product-item, .client-item, .cert-card, .stat-item, .contact-item, .breakdown-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString();
            }
        }, 16);
    }

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElements = entry.target.querySelectorAll('.stat h3, .stat-item h3');
                statElements.forEach(statEl => {
                    const text = statEl.textContent.replace(/[^\d]/g, '');
                    const number = parseInt(text);
                    if (!isNaN(number) && number > 0) {
                        animateCounter(statEl, number);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    const teamStats = document.querySelector('.team-stats');
    
    if (heroStats) statsObserver.observe(heroStats);
    if (teamStats) statsObserver.observe(teamStats);

    // CTA Button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.about-card, .capacity-card, .cert-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add image gallery functionality for showcase images
    const showcaseImages = document.querySelectorAll('.showcase-image');
    showcaseImages.forEach(image => {
        image.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            openImageModal(imgSrc, imgAlt);
        });

        // Add loading animation
        const img = image.querySelector('img');
        if (img) {
            img.addEventListener('load', function() {
                image.classList.add('loaded');
            });
        }
    });

    // Team image interactivity
    const teamImage = document.querySelector('.team-image');
    if (teamImage) {
        const teamImg = teamImage.querySelector('img');
        if (teamImg) {
            teamImg.addEventListener('load', function() {
                teamImage.classList.add('loaded');
            });

            // Add click effect
            teamImage.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const imgAlt = this.querySelector('img').alt;
                openImageModal(imgSrc, imgAlt);
            });
        }
    }

    // Equipment preview interactivity
    const equipmentPreviews = document.querySelectorAll('.equipment-preview');
    equipmentPreviews.forEach(preview => {
        const img = preview.querySelector('img');
        if (img) {
            img.addEventListener('load', function() {
                preview.classList.add('loaded');
            });

            preview.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const imgAlt = this.querySelector('img').alt;
                openImageModal(imgSrc, imgAlt);
            });
        }
    });

    // Equipment preview image interactivity
    const equipmentPreviewImages = document.querySelectorAll('.equipment-preview-image');
    equipmentPreviewImages.forEach(image => {
        const img = image.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                const imgSrc = this.src;
                const imgAlt = this.alt;
                openImageModal(imgSrc, imgAlt);
            });
        }
    });

    // Management image interactivity
    const managementImages = document.querySelectorAll('.management-image');
    managementImages.forEach(image => {
        const img = image.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                const imgSrc = this.src;
                const imgAlt = this.alt;
                openImageModal(imgSrc, imgAlt);
            });
        }
    });

    // Capacity image interactivity
    const capacityImages = document.querySelectorAll('.capacity-image');
    capacityImages.forEach(image => {
        const img = image.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                const imgSrc = this.src;
                const imgAlt = this.alt;
                openImageModal(imgSrc, imgAlt);
            });
        }
    });

    // Production gallery interactivity
    const productionItems = document.querySelectorAll('.production-item');
    productionItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                openImageModal(img.src, img.alt);
            }
        });
    });

    // Process step interactivity
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        const img = step.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                openImageModal(this.src, this.alt);
            });
            
            // Add hover effect
            step.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            step.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        }
    });

    // Quality control images interactivity
    const qualityItems = document.querySelectorAll('.quality-item');
    qualityItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                openImageModal(this.src, this.alt);
            });
            
            // Add hover effect
            item.addEventListener('mouseenter', function() {
                const badge = this.querySelector('.quality-badge');
                if (badge) {
                    badge.style.transform = 'scale(1.1)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const badge = this.querySelector('.quality-badge');
                if (badge) {
                    badge.style.transform = 'scale(1)';
                }
            });
        }
    });

    // Add click effect to client logos
    const clientItems = document.querySelectorAll('.client-item');
    clientItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            clientItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show a simple alert with client info
            const clientName = this.textContent;
            console.log(`Selected client: ${clientName}`);
            
            // You could replace this with a modal or more sophisticated interaction
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Fade in hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'all 1s ease-out';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
    });

    // Add scroll progress indicator
    function updateScrollProgress() {
        const scrollProgress = document.createElement('div');
        scrollProgress.className = 'scroll-progress';
        scrollProgress.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(scrollProgress);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });
    }

    updateScrollProgress();

    // Add floating action button for contact
    function createFloatingContactButton() {
        const fab = document.createElement('div');
        fab.className = 'floating-contact';
        fab.innerHTML = `
            <button class="fab-button" onclick="window.open('tel:+842373730333')">
                <i class="fas fa-phone"></i>
            </button>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .floating-contact {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 1000;
            }
            
            .fab-button {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .fab-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
            }
            
            @media (max-width: 768px) {
                .floating-contact {
                    bottom: 20px;
                    right: 20px;
                }
                
                .fab-button {
                    width: 50px;
                    height: 50px;
                    font-size: 1.2rem;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(fab);
    }

    createFloatingContactButton();

    // Add print functionality for certificates
    function addPrintButton() {
        const certSection = document.querySelector('#certificates');
        if (certSection) {
            const printBtn = document.createElement('button');
            printBtn.innerHTML = '<i class="fas fa-print"></i> In Chứng Nhận';
            printBtn.className = 'print-btn';
            printBtn.onclick = () => window.print();
            
            const btnStyle = document.createElement('style');
            btnStyle.textContent = `
                .print-btn {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    margin: 2rem auto;
                    display: block;
                    transition: all 0.3s ease;
                }
                
                .print-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                }
                
                @media print {
                    .print-btn, .floating-contact, .scroll-progress {
                        display: none !important;
                    }
                }
            `;
            document.head.appendChild(btnStyle);
            document.body.appendChild(printBtn);
        }
    }

    addPrintButton();

    // Image modal functionality
    function openImageModal(src, alt) {
        // Create modal if it doesn't exist
        let modal = document.querySelector('.image-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-overlay">
                    <div class="modal-content">
                        <button class="modal-close">&times;</button>
                        <img class="modal-image" alt="">
                        <p class="modal-caption"></p>
                    </div>
                </div>
            `;
            
            // Add modal styles
            const modalStyle = document.createElement('style');
            modalStyle.textContent = `
                .image-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .image-modal.active {
                    opacity: 1;
                }
                
                .modal-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    cursor: pointer;
                }
                
                .modal-content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                    z-index: 2;
                }
                
                .modal-image {
                    width: 100%;
                    height: auto;
                    max-height: 80vh;
                    object-fit: contain;
                    border-radius: 8px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                }
                
                .modal-close {
                    position: absolute;
                    top: -15px;
                    right: -15px;
                    width: 40px;
                    height: 40px;
                    background: #fff;
                    border: none;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    z-index: 3;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s ease;
                }
                
                .modal-close:hover {
                    transform: scale(1.1);
                }
                
                .modal-caption {
                    color: white;
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 1.1rem;
                }
            `;
            document.head.appendChild(modalStyle);
            document.body.appendChild(modal);
        }

        // Populate modal
        const modalImg = modal.querySelector('.modal-image');
        const modalCaption = modal.querySelector('.modal-caption');
        modalImg.src = src;
        modalImg.alt = alt;
        modalCaption.textContent = alt;

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Close modal functionality
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        modal.querySelector('.modal-close').onclick = closeModal;
        modal.querySelector('.modal-overlay').onclick = closeModal;

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    console.log('BHAD Garment website loaded successfully!');
    console.log('Company Profile - Professional Manufacturing Company');
});

// Utility functions
function formatNumber(num) {
    return new Intl.NumberFormat('vi-VN').format(num);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Gallery Lightbox Functionality
class GalleryLightbox {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;
        this.lightbox = null;
        this.init();
    }

    init() {
        this.createLightbox();
        this.bindEvents();
    }

    createLightbox() {
        const lightboxHTML = `
            <div class="lightbox" id="gallery-lightbox">
                <div class="lightbox-content">
                    <button class="lightbox-close" id="lightbox-close">
                        <i class="fas fa-times"></i>
                    </button>
                    <button class="lightbox-nav lightbox-prev" id="lightbox-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="lightbox-nav lightbox-next" id="lightbox-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <img class="lightbox-image" id="lightbox-image" alt="" />
                    <div class="lightbox-info">
                        <h3 id="lightbox-title"></h3>
                        <p id="lightbox-description"></p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        this.lightbox = document.getElementById('gallery-lightbox');
    }

    bindEvents() {
        // Gallery item click events
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openLightbox(index);
            });
        });

        // Lightbox controls
        const closeBtn = document.getElementById('lightbox-close');
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');

        closeBtn.addEventListener('click', () => this.closeLightbox());
        prevBtn.addEventListener('click', () => this.navigate(-1));
        nextBtn.addEventListener('click', () => this.navigate(1));

        // Close on background click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.lightbox.classList.contains('active')) {
                switch(e.key) {
                    case 'Escape':
                        this.closeLightbox();
                        break;
                    case 'ArrowLeft':
                        this.navigate(-1);
                        break;
                    case 'ArrowRight':
                        this.navigate(1);
                        break;
                }
            }
        });
    }

    openLightbox(index) {
        this.currentIndex = index;
        this.updateLightboxContent();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    navigate(direction) {
        this.currentIndex += direction;
        
        // Loop around if at boundaries
        if (this.currentIndex >= this.galleryItems.length) {
            this.currentIndex = 0;
        } else if (this.currentIndex < 0) {
            this.currentIndex = this.galleryItems.length - 1;
        }
        
        this.updateLightboxContent();
    }

    updateLightboxContent() {
        const item = this.galleryItems[this.currentIndex];
        const image = item.querySelector('img');
        const titleKey = item.getAttribute('data-title');
        const descKey = item.getAttribute('data-desc');
        
        const imageElement = document.getElementById('lightbox-image');
        const titleElement = document.getElementById('lightbox-title');
        const descElement = document.getElementById('lightbox-description');
        
        // Update image
        imageElement.src = item.getAttribute('data-image');
        imageElement.alt = image.alt;
        
        // Update text content with i18n support
        if (window.i18n && window.i18n.translations) {
            titleElement.textContent = window.i18n.getTranslation(titleKey);
            descElement.textContent = window.i18n.getTranslation(descKey);
        } else {
            titleElement.textContent = item.querySelector('h4').textContent;
            descElement.textContent = item.querySelector('p').textContent;
        }
    }
}

// Initialize gallery when DOM is ready and i18n is loaded
function initGallery() {
    if (document.querySelector('.gallery-item')) {
        new GalleryLightbox();
    }
}

// Initialize gallery after a short delay to ensure i18n is loaded
setTimeout(initGallery, 100);

// Performance optimization for scroll events
const debouncedScroll = debounce(() => {
    // Additional scroll-based functionality can be added here
}, 10);

window.addEventListener('scroll', debouncedScroll);

window.addEventListener('scroll', debouncedScroll);