// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Copy contract address functionality
function copyContract() {
    const contractAddress = '5SV77JbGtNeWdJuzF3Xmiy4sMCkFz1SmGXxQko1DWgaT';
    navigator.clipboard.writeText(contractAddress).then(() => {
        // Visual feedback for copy action
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.style.color = '#4CAF50';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.color = '#ff6ba8';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = contractAddress;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show feedback
        alert('Contract address copied to clipboard!');
    });
}

// Floating hearts animation
function createFloatingHeart() {
    const heartsContainer = document.getElementById('floatingHearts');
    const hearts = ['💖', '💕', '💗', '✨', '💫', '🌟'];
    
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Mobile navigation toggle
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.getElementById('navToggle');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Intersection Observer for fade-in animations
function setupFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements
    const elementsToAnimate = document.querySelectorAll('.feature-card, .story-item, .nft-card, .step-card, .roadmap-item, .social-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Progress bar animations
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.style.width;
                progress.style.width = '0%';
                setTimeout(() => {
                    progress.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });
}

// NFT card hover effects
function setupNFTCardEffects() {
    const nftCards = document.querySelectorAll('.nft-card');
    
    nftCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const heart = card.querySelector('.nft-heart');
            heart.style.animation = 'heartbeat 0.5s ease-in-out';
        });
        
        card.addEventListener('mouseleave', () => {
            const heart = card.querySelector('.nft-heart');
            heart.style.animation = 'heartbeat 2s infinite';
        });
    });
}

// Video placeholder click handler
function setupVideoPlayer() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const playBtn = document.querySelector('.play-btn');
    
    if (videoPlaceholder && playBtn) {
        videoPlaceholder.addEventListener('click', () => {
            // Placeholder for video functionality
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            
            // Create a simple visual feedback
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 107, 168, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ff6ba8;
                font-size: 1.2rem;
                font-weight: 600;
                z-index: 10;
            `;
            overlay.innerHTML = 'Video Coming Soon! 💖';
            videoPlaceholder.appendChild(overlay);
            
            setTimeout(() => {
                overlay.remove();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }, 3000);
        });
    }
}

// Add floating emojis to hero section
function animateHeroEmojis() {
    const heroEmojis = document.querySelectorAll('.hero-emojis .floating-emoji');
    
    heroEmojis.forEach((emoji, index) => {
        emoji.addEventListener('mouseenter', () => {
            emoji.style.transform = 'translateY(-10px) scale(1.2)';
        });
        
        emoji.addEventListener('mouseleave', () => {
            emoji.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Setup navigation
    toggleMobileNav();
    setupNavbarScroll();
    
    // Setup animations
    setupFadeInAnimations();
    animateProgressBars();
    animateHeroEmojis();
    
    // Setup interactive elements
    setupNFTCardEffects();
    setupVideoPlayer();
    
    // Start floating hearts animation
    setInterval(createFloatingHeart, 2000);
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add click handlers for CTA buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (btn.textContent.includes('Buy $VALANI')) {
            btn.addEventListener('click', () => scrollToSection('buy'));
        }
    });
    
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        if (btn.textContent.includes('Read Love Story')) {
            btn.addEventListener('click', () => scrollToSection('story'));
        }
    });
    
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to gradient orbs
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const orbs = document.querySelectorAll('.gradient-orb');
        
        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.title-main');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a small delay
        setTimeout(typeWriter, 1000);
    }
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Adjust elements for mobile view
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Mobile-specific adjustments
        document.querySelectorAll('.floating-emoji').forEach(emoji => {
            emoji.style.fontSize = '20px';
            emoji.style.margin = '0 10px';
        });
    } else {
        // Desktop adjustments
        document.querySelectorAll('.floating-emoji').forEach(emoji => {
            emoji.style.fontSize = '30px';
            emoji.style.margin = '0 20px';
        });
    }
});

// Performance optimization: throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-dependent animations go here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Add loading state management
window.addEventListener('load', () => {
    // Hide loading spinner if it exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Start animations after everything is loaded
    document.body.classList.add('loaded');
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.opacity = '0.5';
        this.alt = 'Image failed to load';
    });
});

// Social media link handlers (add your actual links here)
function setupSocialLinks() {
    const socialLinks = {
        telegram: '#', // Add your Telegram link
        twitter: '#',  // Add your Twitter link
        discord: '#',  // Add your Discord link
        dexscreener: 'https://dexscreener.com/solana/5SV77JbGtNeWdJuzF3Xmiy4sMCkFz1SmGXxQko1DWgaT'
    };
    
    // You can update these links as needed
    document.querySelectorAll('.social-card').forEach(card => {
        if (card.classList.contains('telegram')) {
            card.href = socialLinks.telegram;
        } else if (card.classList.contains('twitter')) {
            card.href = socialLinks.twitter;
        } else if (card.classList.contains('discord')) {
            card.href = socialLinks.discord;
        } else if (card.classList.contains('dexscreener')) {
            card.href = socialLinks.dexscreener;
        }
    });
}

// Initialize social links
setupSocialLinks();
