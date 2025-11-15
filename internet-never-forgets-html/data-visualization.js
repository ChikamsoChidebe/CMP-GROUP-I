// Data Visualization Components
class DataVisualizationEngine {
    constructor() {
        this.charts = {};
        this.animations = {};
        this.init();
    }

    init() {
        this.createVisualizationSection();
        this.setupInteractiveCharts();
        this.createRealTimeDataFlow();
        this.setupDataBreachTimeline();
    }

    createVisualizationSection() {
        const vizSection = document.createElement('section');
        vizSection.id = 'data-visualization';
        vizSection.className = 'visualization-section';
        vizSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Data <span class="highlight">Visualization</span></h2>
                <p class="section-subtitle">Interactive charts showing digital footprint patterns and privacy trends</p>
                
                <div class="viz-grid">
                    <div class="chart-container">
                        <h3>Digital Footprint Growth</h3>
                        <div class="chart-wrapper">
                            <canvas id="footprintChart" width="400" height="300"></canvas>
                            <div class="chart-controls">
                                <button class="chart-btn" onclick="dataViz.updateFootprintChart('daily')">Daily</button>
                                <button class="chart-btn active" onclick="dataViz.updateFootprintChart('monthly')">Monthly</button>
                                <button class="chart-btn" onclick="dataViz.updateFootprintChart('yearly')">Yearly</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chart-container">
                        <h3>Privacy Risk Distribution</h3>
                        <div class="chart-wrapper">
                            <div id="riskPieChart" class="pie-chart"></div>
                            <div class="risk-legend">
                                <div class="legend-item">
                                    <span class="legend-color low"></span>
                                    <span>Low Risk (${this.generateRandomPercentage()}%)</span>
                                </div>
                                <div class="legend-item">
                                    <span class="legend-color medium"></span>
                                    <span>Medium Risk (${this.generateRandomPercentage()}%)</span>
                                </div>
                                <div class="legend-item">
                                    <span class="legend-color high"></span>
                                    <span>High Risk (${this.generateRandomPercentage()}%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chart-container full-width">
                        <h3>Data Breach Timeline</h3>
                        <div class="timeline-chart" id="breachTimeline">
                            <!-- Timeline will be populated by JavaScript -->
                        </div>
                    </div>
                    
                    <div class="chart-container">
                        <h3>Platform Usage Statistics</h3>
                        <div class="bar-chart" id="platformChart">
                            <!-- Bar chart will be populated by JavaScript -->
                        </div>
                    </div>
                    
                    <div class="chart-container">
                        <h3>Real-time Data Flow</h3>
                        <div class="flow-visualization" id="dataFlow">
                            <div class="flow-nodes">
                                <div class="flow-node source">
                                    <i class="fas fa-user"></i>
                                    <span>Users</span>
                                    <div class="node-counter" id="userCounter">0</div>
                                </div>
                                <div class="flow-node processing">
                                    <i class="fas fa-cogs"></i>
                                    <span>Processing</span>
                                    <div class="node-counter" id="processingCounter">0</div>
                                </div>
                                <div class="flow-node storage">
                                    <i class="fas fa-database"></i>
                                    <span>Storage</span>
                                    <div class="node-counter" id="storageCounter">0</div>
                                </div>
                                <div class="flow-node archive">
                                    <i class="fas fa-archive"></i>
                                    <span>Archive</span>
                                    <div class="node-counter" id="archiveCounter">0</div>
                                </div>
                            </div>
                            <div class="flow-particles" id="flowParticles"></div>
                        </div>
                    </div>
                </div>
                
                <div class="interactive-stats">
                    <h3>Interactive Statistics</h3>
                    <div class="stats-grid">
                        <div class="stat-card" data-stat="posts">
                            <div class="stat-icon">
                                <i class="fas fa-edit"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number" id="postsCount">0</div>
                                <div class="stat-label">Posts Created Today</div>
                                <div class="stat-change positive">+12.5%</div>
                            </div>
                        </div>
                        
                        <div class="stat-card" data-stat="searches">
                            <div class="stat-icon">
                                <i class="fas fa-search"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number" id="searchesCount">0</div>
                                <div class="stat-label">Searches Performed</div>
                                <div class="stat-change negative">-3.2%</div>
                            </div>
                        </div>
                        
                        <div class="stat-card" data-stat="data">
                            <div class="stat-icon">
                                <i class="fas fa-hdd"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number" id="dataCount">0</div>
                                <div class="stat-label">GB Data Stored</div>
                                <div class="stat-change positive">+8.7%</div>
                            </div>
                        </div>
                        
                        <div class="stat-card" data-stat="breaches">
                            <div class="stat-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number" id="breachesCount">0</div>
                                <div class="stat-label">Security Incidents</div>
                                <div class="stat-change negative">-15.3%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert after education section
        const educationSection = document.getElementById('education');
        educationSection.parentNode.insertBefore(vizSection, educationSection.nextSibling);
    }

    setupInteractiveCharts() {
        this.createFootprintChart();
        this.createRiskPieChart();
        this.createPlatformBarChart();
        this.animateStatCards();
    }

    createFootprintChart() {
        const canvas = document.getElementById('footprintChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const data = this.generateFootprintData('monthly');
        
        this.drawLineChart(ctx, data, canvas.width, canvas.height);
    }

    generateFootprintData(period) {
        const dataPoints = period === 'daily' ? 30 : period === 'monthly' ? 12 : 5;
        const data = [];
        
        for (let i = 0; i < dataPoints; i++) {
            data.push({
                label: period === 'daily' ? `Day ${i + 1}` : 
                       period === 'monthly' ? `Month ${i + 1}` : 
                       `Year ${2019 + i}`,
                value: Math.floor(Math.random() * 100) + 20
            });
        }
        
        return data;
    }

    drawLineChart(ctx, data, width, height) {
        const padding = 40;
        const chartWidth = width - 2 * padding;
        const chartHeight = height - 2 * padding;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Set styles
        ctx.strokeStyle = '#00ffff';
        ctx.fillStyle = '#00ffff';
        ctx.lineWidth = 3;
        ctx.font = '12px Orbitron';
        
        // Draw grid
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i <= 5; i++) {
            const y = padding + (chartHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }
        
        // Draw data line
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (chartWidth / (data.length - 1)) * index;
            const y = height - padding - (point.value / 120) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            // Draw data points
            ctx.fillStyle = '#00ffff';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
        
        ctx.stroke();
        
        // Add glow effect
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
    }

    updateFootprintChart(period) {
        // Update active button
        document.querySelectorAll('.chart-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        // Regenerate and redraw chart
        const canvas = document.getElementById('footprintChart');
        const ctx = canvas.getContext('2d');
        const data = this.generateFootprintData(period);
        
        this.drawLineChart(ctx, data, canvas.width, canvas.height);
    }

    createRiskPieChart() {
        const pieChart = document.getElementById('riskPieChart');
        if (!pieChart) return;
        
        const data = [
            { label: 'Low Risk', value: 45, color: '#00ff00' },
            { label: 'Medium Risk', value: 35, color: '#ffff00' },
            { label: 'High Risk', value: 20, color: '#ff0000' }
        ];
        
        let currentAngle = 0;
        const radius = 80;
        const centerX = 100;
        const centerY = 100;
        
        pieChart.innerHTML = `
            <svg width="200" height="200" viewBox="0 0 200 200">
                ${data.map(segment => {
                    const angle = (segment.value / 100) * 2 * Math.PI;
                    const x1 = centerX + radius * Math.cos(currentAngle);
                    const y1 = centerY + radius * Math.sin(currentAngle);
                    const x2 = centerX + radius * Math.cos(currentAngle + angle);
                    const y2 = centerY + radius * Math.sin(currentAngle + angle);
                    
                    const largeArcFlag = angle > Math.PI ? 1 : 0;
                    
                    const pathData = [
                        `M ${centerX} ${centerY}`,
                        `L ${x1} ${y1}`,
                        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                        'Z'
                    ].join(' ');
                    
                    currentAngle += angle;
                    
                    return `<path d="${pathData}" fill="${segment.color}" opacity="0.8" stroke="#000" stroke-width="2"/>`;
                }).join('')}
            </svg>
        `;
    }

    createPlatformBarChart() {
        const barChart = document.getElementById('platformChart');
        if (!barChart) return;
        
        const platforms = [
            { name: 'Facebook', usage: 85, color: '#1877f2' },
            { name: 'Instagram', usage: 72, color: '#e4405f' },
            { name: 'Twitter', usage: 58, color: '#1da1f2' },
            { name: 'LinkedIn', usage: 45, color: '#0077b5' },
            { name: 'TikTok', usage: 67, color: '#000000' },
            { name: 'YouTube', usage: 91, color: '#ff0000' }
        ];
        
        barChart.innerHTML = platforms.map(platform => `
            <div class="bar-item">
                <div class="bar-label">${platform.name}</div>
                <div class="bar-container">
                    <div class="bar-fill" style="width: ${platform.usage}%; background: ${platform.color};">
                        <span class="bar-value">${platform.usage}%</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setupDataBreachTimeline() {
        const timeline = document.getElementById('breachTimeline');
        if (!timeline) return;
        
        const breaches = [
            { year: 2019, company: 'Facebook', records: '540M', severity: 'high' },
            { year: 2020, company: 'Twitter', records: '130', severity: 'medium' },
            { year: 2021, company: 'LinkedIn', records: '700M', severity: 'critical' },
            { year: 2022, company: 'Uber', records: '57M', severity: 'high' },
            { year: 2023, company: 'LastPass', records: '30M', severity: 'critical' },
            { year: 2024, company: 'AT&T', records: '73M', severity: 'high' }
        ];
        
        timeline.innerHTML = `
            <div class="breach-timeline">
                ${breaches.map(breach => `
                    <div class="breach-item ${breach.severity}">
                        <div class="breach-year">${breach.year}</div>
                        <div class="breach-details">
                            <div class="breach-company">${breach.company}</div>
                            <div class="breach-records">${breach.records} records</div>
                        </div>
                        <div class="breach-severity ${breach.severity}">
                            ${breach.severity.toUpperCase()}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    createRealTimeDataFlow() {
        const flowParticles = document.getElementById('flowParticles');
        if (!flowParticles) return;
        
        setInterval(() => {
            this.createFlowParticle();
            this.updateCounters();
        }, 1000);
    }

    createFlowParticle() {
        const flowParticles = document.getElementById('flowParticles');
        if (!flowParticles) return;
        
        const particle = document.createElement('div');
        particle.className = 'flow-particle';
        particle.style.left = '0%';
        particle.style.top = '50%';
        
        flowParticles.appendChild(particle);
        
        // Animate particle movement
        setTimeout(() => {
            particle.style.left = '100%';
        }, 100);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 4000);
    }

    updateCounters() {
        const counters = {
            userCounter: Math.floor(Math.random() * 1000) + 5000,
            processingCounter: Math.floor(Math.random() * 500) + 1000,
            storageCounter: Math.floor(Math.random() * 200) + 800,
            archiveCounter: Math.floor(Math.random() * 100) + 300
        };
        
        Object.keys(counters).forEach(counterId => {
            const counter = document.getElementById(counterId);
            if (counter) {
                this.animateCounter(counter, counters[counterId]);
            }
        });
    }

    animateCounter(element, targetValue) {
        const currentValue = parseInt(element.textContent) || 0;
        const increment = Math.ceil((targetValue - currentValue) / 20);
        
        if (currentValue < targetValue) {
            element.textContent = currentValue + increment;
            setTimeout(() => this.animateCounter(element, targetValue), 50);
        } else {
            element.textContent = targetValue;
        }
    }

    animateStatCards() {
        const statNumbers = {
            postsCount: { target: 1247, current: 0 },
            searchesCount: { target: 8934, current: 0 },
            dataCount: { target: 156.7, current: 0 },
            breachesCount: { target: 23, current: 0 }
        };
        
        // Animate stat cards on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Object.keys(statNumbers).forEach(statId => {
                        const element = document.getElementById(statId);
                        if (element) {
                            this.animateStatNumber(element, statNumbers[statId].target);
                        }
                    });
                }
            });
        }, { threshold: 0.5 });
        
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            observer.observe(statsGrid);
        }
    }

    animateStatNumber(element, target) {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.id === 'dataCount') {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, duration / steps);
    }

    generateRandomPercentage() {
        return Math.floor(Math.random() * 40) + 20;
    }
}

// Heatmap Visualization
class HeatmapVisualization {
    constructor() {
        this.data = [];
        this.init();
    }

    init() {
        this.createHeatmapSection();
        this.generateHeatmapData();
        this.renderHeatmap();
    }

    createHeatmapSection() {
        const heatmapSection = document.createElement('div');
        heatmapSection.className = 'heatmap-section';
        heatmapSection.innerHTML = `
            <h3>Privacy Risk Heatmap</h3>
            <div class="heatmap-container">
                <div class="heatmap-grid" id="heatmapGrid"></div>
                <div class="heatmap-legend">
                    <span class="legend-label">Low Risk</span>
                    <div class="legend-gradient"></div>
                    <span class="legend-label">High Risk</span>
                </div>
            </div>
        `;
        
        const vizSection = document.getElementById('data-visualization');
        if (vizSection) {
            vizSection.querySelector('.container').appendChild(heatmapSection);
        }
    }

    generateHeatmapData() {
        const categories = ['Social Media', 'Email', 'Shopping', 'Banking', 'Health', 'Work'];
        const timeSlots = ['Morning', 'Afternoon', 'Evening', 'Night'];
        
        this.data = categories.map(category => 
            timeSlots.map(time => ({
                category,
                time,
                risk: Math.random() * 100
            }))
        ).flat();
    }

    renderHeatmap() {
        const grid = document.getElementById('heatmapGrid');
        if (!grid) return;
        
        const categories = [...new Set(this.data.map(d => d.category))];
        const timeSlots = [...new Set(this.data.map(d => d.time))];
        
        grid.style.gridTemplateColumns = `repeat(${timeSlots.length}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${categories.length}, 1fr)`;
        
        this.data.forEach(item => {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            cell.style.backgroundColor = this.getRiskColor(item.risk);
            cell.title = `${item.category} - ${item.time}: ${item.risk.toFixed(1)}% risk`;
            
            cell.addEventListener('mouseenter', () => {
                this.showTooltip(cell, item);
            });
            
            grid.appendChild(cell);
        });
    }

    getRiskColor(risk) {
        const intensity = risk / 100;
        const red = Math.floor(255 * intensity);
        const green = Math.floor(255 * (1 - intensity));
        return `rgba(${red}, ${green}, 0, 0.7)`;
    }

    showTooltip(cell, data) {
        const tooltip = document.createElement('div');
        tooltip.className = 'heatmap-tooltip';
        tooltip.innerHTML = `
            <strong>${data.category}</strong><br>
            ${data.time}<br>
            Risk Level: ${data.risk.toFixed(1)}%
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = cell.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
            }
        }, 3000);
    }
}

// Initialize data visualization
let dataViz;
let heatmapViz;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        dataViz = new DataVisualizationEngine();
        heatmapViz = new HeatmapVisualization();
    }, 3000);
});