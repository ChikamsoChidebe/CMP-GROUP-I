// Global Variables
let currentSlide = 0;
const totalSlides = 4;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupNavigation();
    setupScrollAnimations();
    setupTimelineAnimations();
    setupSearchSimulation();
    setupCarousel();
    setupSmoothScrolling();
    createBinaryRain();
    setupIntersectionObserver();
}

// Navigation Setup
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active nav link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Timeline Animations
function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger animation for the specific step
                const step = entry.target.getAttribute('data-step');
                animateTimelineStep(step);
            }
        });
    }, {
        threshold: 0.3
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Animate Timeline Steps
function animateTimelineStep(step) {
    const animations = {
        '1': animateDataFlow,
        '2': animateServerRack,
        '3': animateCloudSync,
        '4': animateSpiderWeb,
        '5': animateArchiveBox
    };
    
    if (animations[step]) {
        animations[step]();
    }
}

function animateDataFlow() {
    const dataFlow = document.querySelector('.data-flow');
    if (dataFlow) {
        dataFlow.style.animation = 'flow 3s linear infinite';
    }
}

function animateServerRack() {
    const serverRack = document.querySelector('.server-rack');
    if (serverRack) {
        serverRack.style.animation = 'flow 3s linear infinite';
        serverRack.style.background = '#00ff00';
    }
}

function animateCloudSync() {
    const cloudSync = document.querySelector('.cloud-sync');
    if (cloudSync) {
        cloudSync.style.animation = 'flow 3s linear infinite';
        cloudSync.style.background = '#ffff00';
    }
}

function animateSpiderWeb() {
    const spiderWeb = document.querySelector('.spider-web');
    if (spiderWeb) {
        spiderWeb.style.animation = 'flow 3s linear infinite';
        spiderWeb.style.background = '#ff00ff';
    }
}

function animateArchiveBox() {
    const archiveBox = document.querySelector('.archive-box');
    if (archiveBox) {
        archiveBox.style.animation = 'flow 3s linear infinite';
        archiveBox.style.background = '#ff0000';
    }
}

// Enhanced Search Simulation
function setupSearchSimulation() {
    const searchBtn = document.getElementById('searchBtn');
    const advancedBtn = document.getElementById('advancedBtn');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchSuggestions = document.getElementById('searchSuggestions');

    searchBtn.addEventListener('click', performEnhancedSearch);
    advancedBtn.addEventListener('click', toggleAdvancedAnalytics);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performEnhancedSearch();
        }
    });
    
    searchInput.addEventListener('input', showSearchSuggestions);
    searchInput.addEventListener('focus', showSearchSuggestions);
    searchInput.addEventListener('blur', () => {
        setTimeout(() => hideSuggestions(), 200);
    });
    
    setupFilterTabs();
}

function performEnhancedSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) {
        showError('Please enter a name to search');
        return;
    }

    // Start search process visualization
    startSearchProcess();
    
    // Show loading with enhanced animation
    searchResults.innerHTML = `
        <div class="search-loading">
            <div class="loading-animation">
                <div class="search-radar"></div>
                <div class="loading-text">
                    <h4>Deep Scanning Digital Footprint...</h4>
                    <p id="loadingStatus">Initializing search algorithms...</p>
                </div>
            </div>
        </div>
    `;

    // Simulate comprehensive search process
    simulateSearchProcess(searchTerm);
}

function displayEnhancedSearchResults(searchTerm, results) {
    const searchResults = document.getElementById('searchResults');
    const searchTime = document.getElementById('searchTime');
    const resultCount = document.getElementById('resultCount');
    
    // Update search stats
    const time = (Math.random() * 0.5 + 0.1).toFixed(2);
    searchTime.textContent = `${time} seconds`;
    resultCount.textContent = `${results.length.toLocaleString()} results`;
    
    searchResults.innerHTML = '';
    
    // Create results with enhanced information
    results.forEach((result, index) => {
        const resultElement = createEnhancedSearchResult(result, index);
        searchResults.appendChild(resultElement);
    });
    
    // Update privacy risk assessment
    updatePrivacyRiskMeter(results);
    
    // Show analytics if advanced mode is active
    if (document.getElementById('analyticsPanel').classList.contains('active')) {
        updateAnalytics(results);
    }
}

function generateMockResults(name) {
    const platforms = ['Facebook', 'LinkedIn', 'Twitter', 'Instagram', 'TikTok', 'YouTube'];
    const resultTypes = ['Profile', 'Post', 'Comment', 'Photo', 'Video', 'Article'];
    const sources = ['Current', 'Cached', 'Archived'];
    
    const results = [];
    
    for (let i = 0; i < 8; i++) {
        const platform = platforms[Math.floor(Math.random() * platforms.length)];
        const type = resultTypes[Math.floor(Math.random() * resultTypes.length)];
        const source = sources[Math.floor(Math.random() * sources.length)];
        const year = 2015 + Math.floor(Math.random() * 9);
        
        results.push({
            title: `${name} - ${platform} ${type}`,
            url: `https://${platform.toLowerCase()}.com/${name.toLowerCase().replace(' ', '')}`,
            description: generateDescription(name, platform, type, year),
            source: source,
            year: year,
            tags: generateTags(platform, type, source)
        });
    }
    
    return results;
}

function generateDescription(name, platform, type, year) {
    const descriptions = {
        'Profile': `Public profile of ${name} on ${platform}. Contains personal information, photos, and activity history from ${year}.`,
        'Post': `${type} by ${name} on ${platform} from ${year}. Contains personal opinions and potentially sensitive information.`,
        'Comment': `Comment made by ${name} on ${platform} in ${year}. Shows interaction with controversial or sensitive topics.`,
        'Photo': `Photo uploaded by ${name} to ${platform} in ${year}. May contain location data and personal information.`,
        'Video': `Video content featuring ${name} on ${platform} from ${year}. Includes audio and visual personal data.`,
        'Article': `Article or blog post mentioning ${name} published in ${year}. Contains biographical and personal details.`
    };
    
    return descriptions[type] || `Content related to ${name} found on ${platform} from ${year}.`;
}

function generateTags(platform, type, source) {
    const baseTags = [platform, type];
    
    if (source === 'Cached') {
        baseTags.push('Cached Version', 'May be outdated');
    } else if (source === 'Archived') {
        baseTags.push('Wayback Machine', 'Permanent Record');
    } else {
        baseTags.push('Current', 'Live Content');
    }
    
    const additionalTags = ['Personal Info', 'Public Record', 'Social Media', 'Digital Footprint'];
    baseTags.push(additionalTags[Math.floor(Math.random() * additionalTags.length)]);
    
    return baseTags;
}

function createSearchResult(result, index) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'search-result';
    resultDiv.style.animationDelay = `${index * 0.1}s`;
    
    const sourceClass = result.source.toLowerCase();
    resultDiv.classList.add(sourceClass);
    
    resultDiv.innerHTML = `
        <h4>${result.title}</h4>
        <div class="url">${result.url}</div>
        <div class="description">${result.description}</div>
        <div class="tags">
            ${result.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    return resultDiv;
}

function showError(message) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
        </div>
    `;
}

// Carousel Setup
function setupCarousel() {
    showSlide(currentSlide);
    updateIndicators();
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
    updateIndicators();
}

function currentSlide(n) {
    currentSlide = n - 1;
    showSlide(currentSlide);
    updateIndicators();
}

function showSlide(n) {
    const slides = document.querySelectorAll('.tip-card');
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (slides[n]) {
        slides[n].classList.add('active');
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

// Auto-advance carousel
setInterval(() => {
    changeSlide(1);
}, 8000);

// Binary Rain Effect
function createBinaryRain() {
    const binaryRain = document.querySelector('.binary-rain');
    if (!binaryRain) return;
    
    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.position = 'absolute';
        column.style.left = `${i * 20}px`;
        column.style.top = '0';
        column.style.color = 'rgba(0, 255, 255, 0.3)';
        column.style.fontSize = '14px';
        column.style.fontFamily = 'monospace';
        column.style.animation = `rain ${5 + Math.random() * 5}s linear infinite`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        
        let text = '';
        for (let j = 0; j < 50; j++) {
            text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
        }
        column.innerHTML = text;
        
        binaryRain.appendChild(column);
    }
}

// Intersection Observer for Retrieval Steps
function setupIntersectionObserver() {
    const stepItems = document.querySelectorAll('.step-item');
    
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3
    });

    stepItems.forEach(item => {
        stepObserver.observe(item);
    });
}

// Glitch Effect for Hero Title
function createGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    if (!glitchElement) return;
    
    setInterval(() => {
        glitchElement.style.textShadow = `
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #ff00ff,
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #00ffff,
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #ffff00
        `;
        
        setTimeout(() => {
            glitchElement.style.textShadow = '0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 40px var(--primary-color)';
        }, 100);
    }, 3000);
}

// Particle System for Background
function createParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-system';
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '1';
    
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(0, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${10 + Math.random() * 20}s linear infinite`;
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, (10 + Math.random() * 20) * 1000);
}

// Typing Effect for Search Input
function setupTypingEffect() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const placeholderTexts = [
        'Enter a name to search...',
        'Try "John Smith"...',
        'Search "Jane Doe"...',
        'Type any name...'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = placeholderTexts[currentTextIndex];
        
        if (isDeleting) {
            searchInput.placeholder = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            searchInput.placeholder = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        if (!isDeleting && currentCharIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % placeholderTexts.length;
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start typing effect after a delay
    setTimeout(typeEffect, 2000);
}

// Data Visualization
function createDataVisualization() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            section.classList.add('in-view');
        }
    });
}

// Scroll Progress Indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, #00ffff, #ff00ff)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize additional effects
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createGlitchEffect();
        createParticleSystem();
        setupTypingEffect();
        createScrollProgress();
        
        // Update search simulation setup
        if (typeof performEnhancedSearch !== 'undefined') {
            setupSearchSimulation();
        }
    }, 1000);
});

// Window resize handler
window.addEventListener('resize', () => {
    // Recreate binary rain on resize
    const binaryRain = document.querySelector('.binary-rain');
    if (binaryRain) {
        binaryRain.innerHTML = '';
        createBinaryRain();
    }
});

// Performance optimization
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    createDataVisualization();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    document.body.style.filter = 'hue-rotate(180deg)';
    
    const message = document.createElement('div');
    message.innerHTML = '🎉 You found the easter egg! The matrix has been inverted! 🎉';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'rgba(0, 0, 0, 0.9)';
    message.style.color = '#00ffff';
    message.style.padding = '2rem';
    message.style.borderRadius = '10px';
    message.style.border = '2px solid #00ffff';
    message.style.zIndex = '10000';
    message.style.textAlign = 'center';
    message.style.fontSize = '1.2rem';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        document.body.removeChild(message);
        document.body.style.filter = 'none';
    }, 3000);
}