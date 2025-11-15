// Enhanced Search Functions
function startSearchProcess() {
    const searchProcess = document.getElementById('searchProcess');
    searchProcess.classList.add('active');
    
    const steps = searchProcess.querySelectorAll('.process-step');
    steps.forEach(step => {
        step.classList.remove('active', 'completed');
    });
}

function simulateSearchProcess(searchTerm) {
    const steps = document.querySelectorAll('.process-step');
    const loadingStatus = document.getElementById('loadingStatus');
    
    const statusMessages = [
        'Crawling social media platforms...',
        'Scanning cached web pages...',
        'Accessing archived data...',
        'Searching deep web databases...',
        'Analyzing digital patterns...',
        'Compiling comprehensive report...'
    ];
    
    let currentStep = 0;
    
    const processStep = () => {
        if (currentStep > 0) {
            steps[currentStep - 1].classList.remove('active');
            steps[currentStep - 1].classList.add('completed');
        }
        
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            if (loadingStatus) {
                loadingStatus.textContent = statusMessages[currentStep];
            }
            currentStep++;
            setTimeout(processStep, 1000);
        } else {
            // Search complete
            const results = generateEnhancedResults(searchTerm);
            displayEnhancedSearchResults(searchTerm, results);
        }
    };
    
    setTimeout(processStep, 500);
}

function generateEnhancedResults(name) {
    const platforms = [
        { name: 'Facebook', icon: 'fab fa-facebook', risk: 'high' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', risk: 'medium' },
        { name: 'Twitter', icon: 'fab fa-twitter', risk: 'high' },
        { name: 'Instagram', icon: 'fab fa-instagram', risk: 'medium' },
        { name: 'TikTok', icon: 'fab fa-tiktok', risk: 'critical' },
        { name: 'YouTube', icon: 'fab fa-youtube', risk: 'low' }
    ];
    
    const contentTypes = ['Profile', 'Post', 'Comment', 'Photo', 'Video', 'Article', 'Review'];
    const sources = ['Current', 'Cached', 'Archived'];
    const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018];
    
    const results = [];
    
    for (let i = 0; i < 12; i++) {
        const platform = platforms[Math.floor(Math.random() * platforms.length)];
        const type = contentTypes[Math.floor(Math.random() * contentTypes.length)];
        const source = sources[Math.floor(Math.random() * sources.length)];
        const year = years[Math.floor(Math.random() * years.length)];
        
        results.push({
            title: `${name} - ${platform.name} ${type}`,
            url: `https://${platform.name.toLowerCase()}.com/${name.toLowerCase().replace(' ', '')}`,
            description: generateDetailedDescription(name, platform.name, type, year),
            platform: platform.name,
            platformIcon: platform.icon,
            source: source,
            year: year,
            risk: platform.risk,
            contentType: type,
            tags: generateAdvancedTags(platform.name, type, source, platform.risk),
            metadata: generateMetadata(platform.name, type, year)
        });
    }
    
    return results.sort((a, b) => b.year - a.year);
}

function generateDetailedDescription(name, platform, type, year) {
    const descriptions = {
        'Profile': `Comprehensive ${platform} profile for ${name} created in ${year}. Contains personal information, contact details, employment history, and extensive photo gallery. Privacy settings appear to be minimal.`,
        'Post': `Public ${type.toLowerCase()} by ${name} on ${platform} from ${year}. Content includes personal opinions, location data, and potentially compromising information that could affect professional reputation.`,
        'Comment': `${type} thread participation by ${name} on ${platform} in ${year}. Shows engagement with controversial topics and reveals personal beliefs and political affiliations.`,
        'Photo': `Image content uploaded by ${name} to ${platform} in ${year}. Contains EXIF metadata with location coordinates, device information, and facial recognition data.`,
        'Video': `Video content featuring ${name} on ${platform} from ${year}. Includes audio analysis, background location identification, and behavioral pattern recognition.`,
        'Article': `Published article or blog post mentioning ${name} from ${year}. Contains biographical details, professional information, and personal anecdotes from interviews.`,
        'Review': `Product or service review by ${name} on ${platform} from ${year}. Reveals purchasing patterns, location preferences, and personal lifestyle choices.`
    };
    
    return descriptions[type] || `Content related to ${name} found on ${platform} from ${year}. Contains personal information and digital footprint data.`;
}

function generateAdvancedTags(platform, type, source, risk) {
    const baseTags = [platform, type];
    
    const riskTags = {
        'critical': ['High Risk', 'Personal Data', 'Privacy Concern'],
        'high': ['Medium Risk', 'Public Record', 'Searchable'],
        'medium': ['Low Risk', 'Limited Exposure', 'Restricted'],
        'low': ['Minimal Risk', 'Professional', 'Controlled']
    };
    
    baseTags.push(...riskTags[risk]);
    
    if (source === 'Cached') {
        baseTags.push('Cached Version', 'Google Cache', 'May be outdated');
    } else if (source === 'Archived') {
        baseTags.push('Wayback Machine', 'Permanent Record', 'Cannot be deleted');
    } else {
        baseTags.push('Live Content', 'Current', 'Recently indexed');
    }
    
    return baseTags;
}

function generateMetadata(platform, type, year) {
    return {
        indexed: `${Math.floor(Math.random() * 30) + 1} days ago`,
        cached: Math.random() > 0.5 ? 'Available' : 'Not cached',
        archived: Math.random() > 0.3 ? 'Archived' : 'Not archived',
        shares: Math.floor(Math.random() * 1000),
        views: Math.floor(Math.random() * 10000) + 100,
        engagement: Math.floor(Math.random() * 100) + '%'
    };
}

function createEnhancedSearchResult(result, index) {
    const resultDiv = document.createElement('div');
    resultDiv.className = `search-result enhanced ${result.source.toLowerCase()} ${result.risk}`;
    resultDiv.style.animationDelay = `${index * 0.1}s`;
    
    resultDiv.innerHTML = `
        <div class="result-header">
            <div class="result-platform">
                <i class="${result.platformIcon}"></i>
                <span>${result.platform}</span>
            </div>
            <div class="result-risk ${result.risk}">
                ${result.risk.toUpperCase()} RISK
            </div>
        </div>
        <h4 class="result-title">${result.title}</h4>
        <div class="result-url">${result.url}</div>
        <div class="result-description">${result.description}</div>
        <div class="result-metadata">
            <span class="metadata-item">
                <i class="fas fa-calendar"></i>
                ${result.year}
            </span>
            <span class="metadata-item">
                <i class="fas fa-eye"></i>
                ${result.metadata.views} views
            </span>
            <span class="metadata-item">
                <i class="fas fa-share"></i>
                ${result.metadata.shares} shares
            </span>
            <span class="metadata-item">
                <i class="fas fa-clock"></i>
                Indexed ${result.metadata.indexed}
            </span>
        </div>
        <div class="result-tags">
            ${result.tags.map(tag => `<span class="tag ${result.risk}">${tag}</span>`).join('')}
        </div>
        <div class="result-actions">
            <button class="action-btn view" onclick="viewResult('${result.url}')">
                <i class="fas fa-external-link-alt"></i>
                View Original
            </button>
            <button class="action-btn cache" onclick="viewCached('${result.url}')">
                <i class="fas fa-archive"></i>
                View Cached
            </button>
            <button class="action-btn analyze" onclick="analyzeResult(${index})">
                <i class="fas fa-chart-line"></i>
                Deep Analysis
            </button>
        </div>
    `;
    
    return resultDiv;
}

function updatePrivacyRiskMeter(results) {
    const riskScore = calculateRiskScore(results);
    const riskGauge = document.getElementById('riskGauge');
    const riskNeedle = document.getElementById('riskNeedle');
    const riskScoreElement = document.getElementById('riskScore');
    const riskFactors = document.getElementById('riskFactors');
    
    // Update risk score
    riskScoreElement.textContent = riskScore + '%';
    
    // Update needle position (0-180 degrees)
    const needleAngle = (riskScore / 100) * 180 - 90;
    riskNeedle.style.transform = `translateX(-50%) rotate(${needleAngle}deg)`;
    
    // Generate risk factors
    const factors = generateRiskFactors(results);
    riskFactors.innerHTML = factors.map(factor => `
        <div class="risk-factor">
            <h5>${factor.title}</h5>
            <p>${factor.description}</p>
        </div>
    `).join('');
}

function calculateRiskScore(results) {
    const riskWeights = { critical: 25, high: 15, medium: 8, low: 3 };
    let totalRisk = 0;
    
    results.forEach(result => {
        totalRisk += riskWeights[result.risk] || 0;
    });
    
    return Math.min(Math.floor(totalRisk / results.length * 4), 100);
}

function generateRiskFactors(results) {
    const factors = [];
    const platforms = [...new Set(results.map(r => r.platform))];
    const highRiskCount = results.filter(r => r.risk === 'critical' || r.risk === 'high').length;
    
    if (platforms.length > 3) {
        factors.push({
            title: 'Multi-Platform Exposure',
            description: `Presence detected across ${platforms.length} different platforms increases visibility and data correlation risks.`
        });
    }
    
    if (highRiskCount > 5) {
        factors.push({
            title: 'High-Risk Content',
            description: `${highRiskCount} high-risk items found that could impact reputation or privacy.`
        });
    }
    
    const archivedCount = results.filter(r => r.source === 'Archived').length;
    if (archivedCount > 0) {
        factors.push({
            title: 'Permanent Archive Records',
            description: `${archivedCount} items permanently archived and cannot be deleted or modified.`
        });
    }
    
    return factors;
}

function showSearchSuggestions() {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    const value = input.value.trim();
    
    if (value.length < 2) {
        suggestions.style.display = 'none';
        return;
    }
    
    const mockSuggestions = [
        'John Smith',
        'Jane Doe',
        'Michael Johnson',
        'Sarah Wilson',
        'David Brown',
        'Emily Davis'
    ].filter(name => name.toLowerCase().includes(value.toLowerCase()));
    
    if (mockSuggestions.length > 0) {
        suggestions.innerHTML = mockSuggestions.map(suggestion => 
            `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
        ).join('');
        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
}

function selectSuggestion(suggestion) {
    document.getElementById('searchInput').value = suggestion;
    hideSuggestions();
}

function hideSuggestions() {
    document.getElementById('searchSuggestions').style.display = 'none';
}

function setupFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.dataset.filter;
            filterResults(filter);
        });
    });
}

function filterResults(filter) {
    const results = document.querySelectorAll('.search-result');
    
    results.forEach(result => {
        if (filter === 'all') {
            result.style.display = 'block';
        } else {
            const shouldShow = result.classList.contains(filter) || 
                             result.querySelector('.result-platform span').textContent.toLowerCase().includes(filter);
            result.style.display = shouldShow ? 'block' : 'none';
        }
    });
}

function toggleAdvancedAnalytics() {
    const analyticsPanel = document.getElementById('analyticsPanel');
    analyticsPanel.classList.toggle('active');
    
    if (analyticsPanel.classList.contains('active')) {
        // Generate analytics if results exist
        const results = document.querySelectorAll('.search-result');
        if (results.length > 0) {
            generateAnalytics();
        }
    }
}

function generateAnalytics() {
    // This would generate advanced analytics visualizations
    console.log('Generating advanced analytics...');
}

function viewResult(url) {
    window.open(url, '_blank');
}

function viewCached(url) {
    const cachedUrl = `https://webcache.googleusercontent.com/search?q=cache:${encodeURIComponent(url)}`;
    window.open(cachedUrl, '_blank');
}

function analyzeResult(index) {
    alert(`Deep analysis for result ${index + 1} would be performed here.`);
}