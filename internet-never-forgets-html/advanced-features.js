// Advanced Features and Enhancements
class DigitalFootprintAnalyzer {
    constructor() {
        this.footprintData = [];
        this.riskScore = 0;
        this.init();
    }

    init() {
        this.createFootprintTracker();
        this.setupRealTimeAnalysis();
        this.createDataVisualization();
        this.setupPrivacyScanner();
    }

    createFootprintTracker() {
        const trackerSection = document.createElement('section');
        trackerSection.id = 'footprint-tracker';
        trackerSection.className = 'footprint-section';
        trackerSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Your Digital <span class="highlight">Footprint</span> Analyzer</h2>
                <div class="footprint-dashboard">
                    <div class="risk-meter">
                        <div class="meter-container">
                            <div class="meter-fill" id="riskMeter"></div>
                            <div class="meter-label">Risk Level</div>
                            <div class="meter-value" id="riskValue">0%</div>
                        </div>
                    </div>
                    <div class="footprint-categories">
                        <div class="category-card" data-category="social">
                            <i class="fab fa-facebook"></i>
                            <h3>Social Media</h3>
                            <div class="category-score" id="socialScore">0</div>
                            <div class="category-details">
                                <span class="detail-item">Public Posts: <span id="publicPosts">0</span></span>
                                <span class="detail-item">Tagged Photos: <span id="taggedPhotos">0</span></span>
                                <span class="detail-item">Check-ins: <span id="checkins">0</span></span>
                            </div>
                        </div>
                        <div class="category-card" data-category="professional">
                            <i class="fab fa-linkedin"></i>
                            <h3>Professional</h3>
                            <div class="category-score" id="professionalScore">0</div>
                            <div class="category-details">
                                <span class="detail-item">LinkedIn Profile: <span id="linkedinProfile">Hidden</span></span>
                                <span class="detail-item">Work History: <span id="workHistory">0 years</span></span>
                                <span class="detail-item">Recommendations: <span id="recommendations">0</span></span>
                            </div>
                        </div>
                        <div class="category-card" data-category="digital">
                            <i class="fas fa-globe"></i>
                            <h3>Digital Presence</h3>
                            <div class="category-score" id="digitalScore">0</div>
                            <div class="category-details">
                                <span class="detail-item">Search Results: <span id="searchResults">0</span></span>
                                <span class="detail-item">Cached Pages: <span id="cachedPages">0</span></span>
                                <span class="detail-item">Archive Entries: <span id="archiveEntries">0</span></span>
                            </div>
                        </div>
                        <div class="category-card" data-category="privacy">
                            <i class="fas fa-user-secret"></i>
                            <h3>Privacy Score</h3>
                            <div class="category-score" id="privacyScore">0</div>
                            <div class="category-details">
                                <span class="detail-item">Private Settings: <span id="privateSettings">0%</span></span>
                                <span class="detail-item">Data Sharing: <span id="dataSharing">High</span></span>
                                <span class="detail-item">Tracking: <span id="tracking">Enabled</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="analysis-controls">
                    <button class="analyze-btn" onclick="digitalAnalyzer.runAnalysis()">
                        <i class="fas fa-search"></i>
                        Analyze My Digital Footprint
                    </button>
                    <button class="generate-report-btn" onclick="digitalAnalyzer.generateReport()">
                        <i class="fas fa-file-alt"></i>
                        Generate Privacy Report
                    </button>
                </div>
            </div>
        `;
        
        // Insert after simulation section
        const simulationSection = document.getElementById('simulation');
        simulationSection.parentNode.insertBefore(trackerSection, simulationSection.nextSibling);
    }

    runAnalysis() {
        const analyzeBtn = document.querySelector('.analyze-btn');
        analyzeBtn.innerHTML = '<div class="loading"></div> Analyzing...';
        analyzeBtn.disabled = true;

        // Simulate analysis process
        setTimeout(() => {
            this.simulateFootprintData();
            this.updateDashboard();
            this.animateResults();
            
            analyzeBtn.innerHTML = '<i class="fas fa-search"></i> Analyze My Digital Footprint';
            analyzeBtn.disabled = false;
        }, 3000);
    }

    simulateFootprintData() {
        this.footprintData = {
            social: {
                score: Math.floor(Math.random() * 100),
                publicPosts: Math.floor(Math.random() * 500),
                taggedPhotos: Math.floor(Math.random() * 200),
                checkins: Math.floor(Math.random() * 100)
            },
            professional: {
                score: Math.floor(Math.random() * 100),
                linkedinProfile: Math.random() > 0.5 ? 'Public' : 'Private',
                workHistory: Math.floor(Math.random() * 15),
                recommendations: Math.floor(Math.random() * 20)
            },
            digital: {
                score: Math.floor(Math.random() * 100),
                searchResults: Math.floor(Math.random() * 1000),
                cachedPages: Math.floor(Math.random() * 50),
                archiveEntries: Math.floor(Math.random() * 25)
            },
            privacy: {
                score: Math.floor(Math.random() * 100),
                privateSettings: Math.floor(Math.random() * 100),
                dataSharing: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
                tracking: Math.random() > 0.5 ? 'Enabled' : 'Disabled'
            }
        };

        this.riskScore = Math.floor(
            (this.footprintData.social.score + 
             this.footprintData.digital.score + 
             (100 - this.footprintData.privacy.score)) / 3
        );
    }

    updateDashboard() {
        // Update risk meter
        const riskMeter = document.getElementById('riskMeter');
        const riskValue = document.getElementById('riskValue');
        riskMeter.style.width = this.riskScore + '%';
        riskValue.textContent = this.riskScore + '%';

        // Update category scores
        Object.keys(this.footprintData).forEach(category => {
            const scoreElement = document.getElementById(category + 'Score');
            if (scoreElement) {
                scoreElement.textContent = this.footprintData[category].score;
            }
        });

        // Update detailed metrics
        document.getElementById('publicPosts').textContent = this.footprintData.social.publicPosts;
        document.getElementById('taggedPhotos').textContent = this.footprintData.social.taggedPhotos;
        document.getElementById('checkins').textContent = this.footprintData.social.checkins;
        document.getElementById('linkedinProfile').textContent = this.footprintData.professional.linkedinProfile;
        document.getElementById('workHistory').textContent = this.footprintData.professional.workHistory + ' years';
        document.getElementById('recommendations').textContent = this.footprintData.professional.recommendations;
        document.getElementById('searchResults').textContent = this.footprintData.digital.searchResults;
        document.getElementById('cachedPages').textContent = this.footprintData.digital.cachedPages;
        document.getElementById('archiveEntries').textContent = this.footprintData.digital.archiveEntries;
        document.getElementById('privateSettings').textContent = this.footprintData.privacy.privateSettings + '%';
        document.getElementById('dataSharing').textContent = this.footprintData.privacy.dataSharing;
        document.getElementById('tracking').textContent = this.footprintData.privacy.tracking;
    }

    animateResults() {
        const cards = document.querySelectorAll('.category-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 200);
        });
    }

    generateReport() {
        const reportData = {
            timestamp: new Date().toISOString(),
            riskScore: this.riskScore,
            footprintData: this.footprintData,
            recommendations: this.generateRecommendations()
        };

        this.displayReport(reportData);
    }

    generateRecommendations() {
        const recommendations = [];
        
        if (this.footprintData.social.score > 70) {
            recommendations.push({
                category: 'Social Media',
                priority: 'High',
                action: 'Review and limit public posts visibility',
                impact: 'Reduces exposure of personal information'
            });
        }

        if (this.footprintData.privacy.score < 50) {
            recommendations.push({
                category: 'Privacy Settings',
                priority: 'Critical',
                action: 'Enable maximum privacy settings on all platforms',
                impact: 'Significantly improves data protection'
            });
        }

        if (this.footprintData.digital.searchResults > 500) {
            recommendations.push({
                category: 'Search Presence',
                priority: 'Medium',
                action: 'Request removal of outdated search results',
                impact: 'Reduces digital footprint visibility'
            });
        }

        return recommendations;
    }

    displayReport(reportData) {
        const modal = document.createElement('div');
        modal.className = 'report-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Digital Privacy Report</h2>
                    <button class="close-modal" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="report-summary">
                        <div class="summary-item">
                            <h3>Overall Risk Score</h3>
                            <div class="risk-indicator ${this.getRiskLevel(reportData.riskScore)}">
                                ${reportData.riskScore}%
                            </div>
                        </div>
                        <div class="summary-item">
                            <h3>Generated</h3>
                            <p>${new Date(reportData.timestamp).toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="recommendations-section">
                        <h3>Recommendations</h3>
                        ${reportData.recommendations.map(rec => `
                            <div class="recommendation-item ${rec.priority.toLowerCase()}">
                                <div class="rec-header">
                                    <span class="rec-category">${rec.category}</span>
                                    <span class="rec-priority">${rec.priority}</span>
                                </div>
                                <div class="rec-action">${rec.action}</div>
                                <div class="rec-impact">${rec.impact}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="report-actions">
                        <button class="download-btn" onclick="digitalAnalyzer.downloadReport()">
                            <i class="fas fa-download"></i>
                            Download Report
                        </button>
                        <button class="share-btn" onclick="digitalAnalyzer.shareReport()">
                            <i class="fas fa-share"></i>
                            Share Report
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 100);
    }

    getRiskLevel(score) {
        if (score < 30) return 'low';
        if (score < 70) return 'medium';
        return 'high';
    }

    downloadReport() {
        const reportContent = JSON.stringify(this.footprintData, null, 2);
        const blob = new Blob([reportContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'digital-privacy-report.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    shareReport() {
        if (navigator.share) {
            navigator.share({
                title: 'Digital Privacy Report',
                text: `My digital privacy risk score is ${this.riskScore}%. Check your own digital footprint!`,
                url: window.location.href
            });
        } else {
            // Fallback for browsers without Web Share API
            const shareText = `My digital privacy risk score is ${this.riskScore}%. Check your own digital footprint at ${window.location.href}`;
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Report link copied to clipboard!');
            });
        }
    }

    setupRealTimeAnalysis() {
        // Simulate real-time data updates
        setInterval(() => {
            this.updateRealTimeMetrics();
        }, 5000);
    }

    updateRealTimeMetrics() {
        const metrics = document.querySelectorAll('.real-time-metric');
        metrics.forEach(metric => {
            const currentValue = parseInt(metric.textContent);
            const change = Math.floor(Math.random() * 10) - 5;
            const newValue = Math.max(0, currentValue + change);
            metric.textContent = newValue;
            
            if (change > 0) {
                metric.classList.add('increasing');
            } else if (change < 0) {
                metric.classList.add('decreasing');
            }
            
            setTimeout(() => {
                metric.classList.remove('increasing', 'decreasing');
            }, 1000);
        });
    }

    createDataVisualization() {
        // Create a simple data visualization using CSS and JavaScript
        const vizSection = document.createElement('div');
        vizSection.className = 'data-visualization';
        vizSection.innerHTML = `
            <h3>Data Flow Visualization</h3>
            <div class="data-flow-chart">
                <div class="flow-node user">
                    <i class="fas fa-user"></i>
                    <span>You</span>
                </div>
                <div class="flow-arrow"></div>
                <div class="flow-node platform">
                    <i class="fas fa-globe"></i>
                    <span>Platforms</span>
                </div>
                <div class="flow-arrow"></div>
                <div class="flow-node storage">
                    <i class="fas fa-database"></i>
                    <span>Storage</span>
                </div>
                <div class="flow-arrow"></div>
                <div class="flow-node archive">
                    <i class="fas fa-archive"></i>
                    <span>Archives</span>
                </div>
            </div>
        `;
        
        const footprintSection = document.getElementById('footprint-tracker');
        if (footprintSection) {
            footprintSection.querySelector('.container').appendChild(vizSection);
        }
    }

    setupPrivacyScanner() {
        // Add privacy scanning functionality
        const scannerSection = document.createElement('div');
        scannerSection.className = 'privacy-scanner';
        scannerSection.innerHTML = `
            <h3>Privacy Vulnerability Scanner</h3>
            <div class="scanner-controls">
                <button class="scan-btn" onclick="digitalAnalyzer.runPrivacyScan()">
                    <i class="fas fa-shield-alt"></i>
                    Scan for Vulnerabilities
                </button>
            </div>
            <div class="scan-results" id="scanResults"></div>
        `;
        
        const footprintSection = document.getElementById('footprint-tracker');
        if (footprintSection) {
            footprintSection.querySelector('.container').appendChild(scannerSection);
        }
    }

    runPrivacyScan() {
        const scanResults = document.getElementById('scanResults');
        const scanBtn = document.querySelector('.scan-btn');
        
        scanBtn.innerHTML = '<div class="loading"></div> Scanning...';
        scanBtn.disabled = true;
        
        scanResults.innerHTML = '<div class="scanning-animation">Scanning for privacy vulnerabilities...</div>';
        
        setTimeout(() => {
            const vulnerabilities = this.generateVulnerabilities();
            this.displayVulnerabilities(vulnerabilities);
            
            scanBtn.innerHTML = '<i class="fas fa-shield-alt"></i> Scan for Vulnerabilities';
            scanBtn.disabled = false;
        }, 4000);
    }

    generateVulnerabilities() {
        const possibleVulnerabilities = [
            {
                type: 'Public Email',
                severity: 'Medium',
                description: 'Your email address is publicly visible on social media profiles',
                solution: 'Update privacy settings to hide email address'
            },
            {
                type: 'Location Tracking',
                severity: 'High',
                description: 'Location data is being shared with third-party applications',
                solution: 'Disable location sharing in app settings'
            },
            {
                type: 'Weak Privacy Settings',
                severity: 'High',
                description: 'Default privacy settings allow broad data sharing',
                solution: 'Review and strengthen privacy settings on all platforms'
            },
            {
                type: 'Data Broker Presence',
                severity: 'Critical',
                description: 'Your information appears on data broker websites',
                solution: 'Request removal from data broker databases'
            },
            {
                type: 'Cached Content',
                severity: 'Medium',
                description: 'Deleted content still appears in search engine caches',
                solution: 'Request cache removal from search engines'
            }
        ];
        
        // Return random subset of vulnerabilities
        const numVulns = Math.floor(Math.random() * 4) + 1;
        return possibleVulnerabilities
            .sort(() => 0.5 - Math.random())
            .slice(0, numVulns);
    }

    displayVulnerabilities(vulnerabilities) {
        const scanResults = document.getElementById('scanResults');
        
        if (vulnerabilities.length === 0) {
            scanResults.innerHTML = `
                <div class="no-vulnerabilities">
                    <i class="fas fa-check-circle"></i>
                    <h4>No Critical Vulnerabilities Found</h4>
                    <p>Your privacy settings appear to be well configured.</p>
                </div>
            `;
            return;
        }
        
        scanResults.innerHTML = `
            <div class="vulnerabilities-list">
                <h4>Found ${vulnerabilities.length} Privacy Vulnerabilities</h4>
                ${vulnerabilities.map(vuln => `
                    <div class="vulnerability-item ${vuln.severity.toLowerCase()}">
                        <div class="vuln-header">
                            <span class="vuln-type">${vuln.type}</span>
                            <span class="vuln-severity ${vuln.severity.toLowerCase()}">${vuln.severity}</span>
                        </div>
                        <div class="vuln-description">${vuln.description}</div>
                        <div class="vuln-solution">
                            <strong>Solution:</strong> ${vuln.solution}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Interactive Timeline Enhancement
class InteractiveTimeline {
    constructor() {
        this.currentStep = 0;
        this.steps = [];
        this.init();
    }

    init() {
        this.enhanceExistingTimeline();
        this.addInteractiveControls();
        this.setupStepNavigation();
    }

    enhanceExistingTimeline() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.classList.add('interactive-timeline');
        
        // Add progress indicator
        const progressBar = document.createElement('div');
        progressBar.className = 'timeline-progress';
        progressBar.innerHTML = '<div class="progress-fill"></div>';
        timeline.insertBefore(progressBar, timeline.firstChild);

        // Add step counter
        const stepCounter = document.createElement('div');
        stepCounter.className = 'step-counter';
        stepCounter.innerHTML = 'Step <span id="currentStepNum">1</span> of <span id="totalSteps">5</span>';
        timeline.insertBefore(stepCounter, timeline.firstChild);
    }

    addInteractiveControls() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        const controls = document.createElement('div');
        controls.className = 'timeline-controls';
        controls.innerHTML = `
            <button class="timeline-btn prev" onclick="interactiveTimeline.previousStep()">
                <i class="fas fa-chevron-left"></i>
                Previous
            </button>
            <button class="timeline-btn play" onclick="interactiveTimeline.playTimeline()">
                <i class="fas fa-play"></i>
                Play Timeline
            </button>
            <button class="timeline-btn next" onclick="interactiveTimeline.nextStep()">
                Next
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        timeline.parentNode.insertBefore(controls, timeline.nextSibling);
    }

    setupStepNavigation() {
        this.steps = document.querySelectorAll('.timeline-item');
        this.updateStepDisplay();
    }

    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.updateStepDisplay();
            this.animateToStep(this.currentStep);
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.updateStepDisplay();
            this.animateToStep(this.currentStep);
        }
    }

    playTimeline() {
        const playBtn = document.querySelector('.timeline-btn.play');
        playBtn.innerHTML = '<i class="fas fa-pause"></i> Playing...';
        playBtn.disabled = true;

        this.currentStep = 0;
        this.playNextStep();
    }

    playNextStep() {
        if (this.currentStep < this.steps.length) {
            this.animateToStep(this.currentStep);
            this.updateStepDisplay();
            this.currentStep++;
            
            setTimeout(() => {
                this.playNextStep();
            }, 2000);
        } else {
            const playBtn = document.querySelector('.timeline-btn.play');
            playBtn.innerHTML = '<i class="fas fa-play"></i> Play Timeline';
            playBtn.disabled = false;
            this.currentStep = this.steps.length - 1;
        }
    }

    animateToStep(stepIndex) {
        // Remove active class from all steps
        this.steps.forEach(step => step.classList.remove('active'));
        
        // Add active class to current and previous steps
        for (let i = 0; i <= stepIndex; i++) {
            this.steps[i].classList.add('active');
            this.steps[i].classList.add('animate');
        }

        // Update progress bar
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            const progress = ((stepIndex + 1) / this.steps.length) * 100;
            progressFill.style.width = progress + '%';
        }

        // Scroll to current step
        this.steps[stepIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    updateStepDisplay() {
        const currentStepNum = document.getElementById('currentStepNum');
        const totalSteps = document.getElementById('totalSteps');
        
        if (currentStepNum) currentStepNum.textContent = this.currentStep + 1;
        if (totalSteps) totalSteps.textContent = this.steps.length;

        // Update button states
        const prevBtn = document.querySelector('.timeline-btn.prev');
        const nextBtn = document.querySelector('.timeline-btn.next');
        
        if (prevBtn) prevBtn.disabled = this.currentStep === 0;
        if (nextBtn) nextBtn.disabled = this.currentStep === this.steps.length - 1;
    }
}

// Initialize advanced features
let digitalAnalyzer;
let interactiveTimeline;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        digitalAnalyzer = new DigitalFootprintAnalyzer();
        interactiveTimeline = new InteractiveTimeline();
    }, 2000);
});