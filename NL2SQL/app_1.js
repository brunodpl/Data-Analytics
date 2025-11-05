// Application data
const appData = {
  "tools": [
    {
      "Tool Name": "Seek AI",
      "Enterprise Usage Score": 95,
      "Accuracy Score (%)": 90.5,
      "Category": "Dedicated NL2SQL Platform",
      "Enterprise Features Score": 95,
      "Market Presence Score": 85,
      "Composite Score": 91.9,
      "Description": "Enterprise-grade NL2SQL with SOC 2 Type II compliance, 90% accuracy on Spider benchmark, and proprietary SEEKER-1 model"
    },
    {
      "Tool Name": "Galaxy",
      "Enterprise Usage Score": 85,
      "Accuracy Score (%)": 87.0,
      "Category": "SQL IDE with AI",
      "Enterprise Features Score": 90,
      "Market Presence Score": 75,
      "Composite Score": 84.8,
      "Description": "Modern SQL IDE with AI copilot, collaboration tools, and 300+ weekly enterprise users"
    },
    {
      "Tool Name": "Vanna AI",
      "Enterprise Usage Score": 75,
      "Accuracy Score (%)": 85.0,
      "Category": "Open Source Framework",
      "Enterprise Features Score": 80,
      "Market Presence Score": 70,
      "Composite Score": 77.8,
      "Description": "Open-source Python RAG framework with enterprise cloud tier, $330K revenue in 2025"
    },
    {
      "Tool Name": "AI2SQL",
      "Enterprise Usage Score": 70,
      "Accuracy Score (%)": 74.0,
      "Category": "Multi-Database Platform",
      "Enterprise Features Score": 75,
      "Market Presence Score": 65,
      "Composite Score": 71.2,
      "Description": "Multi-database support with drag-and-drop UI and enterprise deployment options"
    },
    {
      "Tool Name": "Timbr",
      "Enterprise Usage Score": 80,
      "Accuracy Score (%)": 88.0,
      "Category": "Knowledge Graph Platform",
      "Enterprise Features Score": 92,
      "Market Presence Score": 60,
      "Composite Score": 81.0,
      "Description": "SQL-native ontologies with knowledge graph for regulated industries and financial reporting"
    },
    {
      "Tool Name": "Dataherald",
      "Enterprise Usage Score": 65,
      "Accuracy Score (%)": 85.0,
      "Category": "API Service",
      "Enterprise Features Score": 70,
      "Market Presence Score": 55,
      "Composite Score": 69.2,
      "Description": "API service for embedding NL2SQL into customer-facing products"
    },
    {
      "Tool Name": "Oracle Select AI",
      "Enterprise Usage Score": 90,
      "Accuracy Score (%)": 85.0,
      "Category": "Database-Native AI",
      "Enterprise Features Score": 88,
      "Market Presence Score": 95,
      "Composite Score": 89.2,
      "Description": "Voice-activated, real-time natural language querying integrated with Oracle Autonomous Database"
    },
    {
      "Tool Name": "Google BigQuery + Gemini",
      "Enterprise Usage Score": 88,
      "Accuracy Score (%)": 82.0,
      "Category": "Cloud Platform Integration",
      "Enterprise Features Score": 85,
      "Market Presence Score": 90,
      "Composite Score": 86.2,
      "Description": "NL2SQL integration with BigQuery using Gemini AI models"
    },
    {
      "Tool Name": "Microsoft Semantic Kernel",
      "Enterprise Usage Score": 83,
      "Accuracy Score (%)": 80.0,
      "Category": "Development Framework",
      "Enterprise Features Score": 82,
      "Market Presence Score": 88,
      "Composite Score": 83.0,
      "Description": "Intelligent data agents framework for NL2SQL with Microsoft enterprise integration"
    },
    {
      "Tool Name": "OpenAI GPT-4",
      "Enterprise Usage Score": 85,
      "Accuracy Score (%)": 77.1,
      "Category": "General LLM",
      "Enterprise Features Score": 75,
      "Market Presence Score": 95,
      "Composite Score": 82.5,
      "Description": "General-purpose LLM with strong enterprise adoption for NL2SQL tasks"
    },
    {
      "Tool Name": "Anthropic Claude",
      "Enterprise Usage Score": 82,
      "Accuracy Score (%)": 75.0,
      "Category": "General LLM",
      "Enterprise Features Score": 78,
      "Market Presence Score": 80,
      "Composite Score": 78.8,
      "Description": "General-purpose LLM with growing enterprise adoption for data analytics"
    },
    {
      "Tool Name": "Meta Llama 3.1",
      "Enterprise Usage Score": 60,
      "Accuracy Score (%)": 62.9,
      "Category": "General LLM",
      "Enterprise Features Score": 65,
      "Market Presence Score": 75,
      "Composite Score": 65.0,
      "Description": "Open-source LLM with focus on customization and on-premises deployment"
    }
  ],
  "benchmarks": [
    {"Benchmark": "Spider", "Best_Accuracy": 91.2, "Difficulty_Level": "Medium", "Year": 2023},
    {"Benchmark": "BIRD", "Best_Accuracy": 76.0, "Difficulty_Level": "Hard", "Year": 2025},
    {"Benchmark": "Enterprise (LinkedIn)", "Best_Accuracy": 53.0, "Difficulty_Level": "Very Hard", "Year": 2024},
    {"Benchmark": "Enterprise (Real-world)", "Best_Accuracy": 40.0, "Difficulty_Level": "Very Hard", "Year": 2024},
    {"Benchmark": "ScienceBenchmark", "Best_Accuracy": 85.0, "Difficulty_Level": "Hard", "Year": 2023}
  ],
  "categories": [
    "Dedicated NL2SQL Platform",
    "SQL IDE with AI", 
    "Open Source Framework",
    "Multi-Database Platform",
    "Knowledge Graph Platform",
    "API Service",
    "Database-Native AI",
    "Cloud Platform Integration",
    "Development Framework",
    "General LLM"
  ]
};

// Chart colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Global variables
let currentData = [...appData.tools];
let charts = {};
let currentSort = { column: null, direction: 'asc' };

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupEventListeners();
    renderOverviewStats();
    renderScatterChart();
    renderTable();
    populateFilters();
});

function initializeDashboard() {
    // Set initial view
    showView('scatter');
}

function setupEventListeners() {
    // View toggle buttons
    document.querySelectorAll('[data-view]').forEach(button => {
        button.addEventListener('click', function() {
            const view = this.dataset.view;
            showView(view);
            
            // Update active button
            document.querySelectorAll('[data-view]').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    document.getElementById('search-input').addEventListener('input', function() {
        filterData();
    });

    // Category filter
    document.getElementById('category-filter').addEventListener('change', function() {
        filterData();
    });

    // Table sorting
    document.querySelectorAll('th[data-sort]').forEach(header => {
        header.addEventListener('click', function() {
            const sortBy = this.dataset.sort;
            sortTable(sortBy, this);
        });
    });

    // Modal functionality
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
}

function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show selected view
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
    }
    
    // Initialize charts for the view
    setTimeout(() => {
        if (viewName === 'scatter') {
            renderScatterChart();
        } else if (viewName === 'performance') {
            renderCategoryChart();
            renderCompositeChart();
        } else if (viewName === 'benchmarks') {
            renderBenchmarksChart();
        }
    }, 100);
}

function renderOverviewStats() {
    const tools = appData.tools;
    const totalTools = tools.length;
    const avgEnterpriseScore = (tools.reduce((sum, tool) => sum + tool['Enterprise Usage Score'], 0) / totalTools).toFixed(1);
    const avgAccuracy = (tools.reduce((sum, tool) => sum + tool['Accuracy Score (%)'], 0) / totalTools).toFixed(1);
    const topPerformer = tools.sort((a, b) => b['Composite Score'] - a['Composite Score'])[0]['Tool Name'];

    document.getElementById('total-tools').textContent = totalTools;
    document.getElementById('avg-enterprise-score').textContent = avgEnterpriseScore;
    document.getElementById('avg-accuracy').textContent = avgAccuracy + '%';
    document.getElementById('top-performer').textContent = topPerformer;
}

function renderScatterChart() {
    const ctx = document.getElementById('scatterChart');
    if (!ctx) return;
    
    if (charts.scatter) {
        charts.scatter.destroy();
    }

    const scatterData = currentData.map((tool, index) => ({
        x: tool['Enterprise Usage Score'],
        y: tool['Accuracy Score (%)'],
        r: tool['Market Presence Score'] / 5,
        tool: tool,
        backgroundColor: chartColors[index % chartColors.length] + '80',
        borderColor: chartColors[index % chartColors.length],
        borderWidth: 2
    }));

    charts.scatter = new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'NL2SQL Tools',
                data: scatterData
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return context[0].raw.tool['Tool Name'];
                        },
                        label: function(context) {
                            const tool = context.raw.tool;
                            return [
                                `Enterprise Score: ${tool['Enterprise Usage Score']}`,
                                `Accuracy: ${tool['Accuracy Score (%)']}%`,
                                `Market Presence: ${tool['Market Presence Score']}`,
                                `Category: ${tool['Category']}`
                            ];
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Enterprise Usage Score',
                        color: '#f5f5f5'
                    },
                    min: 50,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f5f5f5'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Accuracy Score (%)',
                        color: '#f5f5f5'
                    },
                    min: 60,
                    max: 95,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f5f5f5'
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const tool = scatterData[elements[0].index].tool;
                    showToolDetails(tool);
                }
            }
        }
    });
}

function renderCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    if (charts.category) {
        charts.category.destroy();
    }

    const categoryCounts = {};
    currentData.forEach(tool => {
        categoryCounts[tool.Category] = (categoryCounts[tool.Category] || 0) + 1;
    });

    charts.category = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryCounts),
            datasets: [{
                data: Object.values(categoryCounts),
                backgroundColor: chartColors,
                borderColor: chartColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#f5f5f5',
                        boxWidth: 12
                    }
                }
            }
        }
    });
}

function renderCompositeChart() {
    const ctx = document.getElementById('compositeChart');
    if (!ctx) return;
    
    if (charts.composite) {
        charts.composite.destroy();
    }

    const sortedTools = [...currentData]
        .sort((a, b) => b['Composite Score'] - a['Composite Score'])
        .slice(0, 10);

    charts.composite = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedTools.map(tool => tool['Tool Name']),
            datasets: [{
                label: 'Composite Score',
                data: sortedTools.map(tool => tool['Composite Score']),
                backgroundColor: chartColors[0] + '80',
                borderColor: chartColors[0],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Composite Score',
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f5f5f5'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f5f5f5'
                    }
                }
            }
        }
    });
}

function renderBenchmarksChart() {
    const ctx = document.getElementById('benchmarksChart');
    if (!ctx) return;
    
    if (charts.benchmarks) {
        charts.benchmarks.destroy();
    }

    const benchmarks = appData.benchmarks;

    charts.benchmarks = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: benchmarks.map(b => b.Benchmark),
            datasets: [{
                label: 'Best Accuracy (%)',
                data: benchmarks.map(b => b.Best_Accuracy),
                backgroundColor: benchmarks.map((_, i) => chartColors[i % chartColors.length] + '80'),
                borderColor: benchmarks.map((_, i) => chartColors[i % chartColors.length]),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const benchmark = benchmarks[context.dataIndex];
                            return [
                                `Difficulty: ${benchmark.Difficulty_Level}`,
                                `Year: ${benchmark.Year}`
                            ];
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f5f5f5'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Accuracy (%)',
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f5f5f5'
                    }
                }
            }
        }
    });
}

function renderTable() {
    const tableBody = document.getElementById('tools-table-body');
    tableBody.innerHTML = '';

    currentData.forEach((tool, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${tool['Tool Name']}</strong></td>
            <td><span class="category-badge">${tool['Category']}</span></td>
            <td>${tool['Enterprise Usage Score']}</td>
            <td>${tool['Accuracy Score (%)']}%</td>
            <td>${tool['Market Presence Score']}</td>
            <td><span class="score-badge ${getScoreBadgeClass(tool['Composite Score'])}">${tool['Composite Score']}</span></td>
            <td><button class="action-btn" data-tool-index="${index}">View Details</button></td>
        `;
        
        // Add event listener to the View Details button
        const detailsButton = row.querySelector('.action-btn');
        detailsButton.addEventListener('click', function() {
            showToolDetails(tool);
        });
        
        tableBody.appendChild(row);
    });
}

function getScoreBadgeClass(score) {
    if (score >= 85) return 'excellent';
    if (score >= 75) return 'good';
    if (score >= 65) return 'fair';
    return 'poor';
}

function populateFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const categories = [...new Set(appData.tools.map(tool => tool.Category))];
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterData() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;

    currentData = appData.tools.filter(tool => {
        const matchesSearch = tool['Tool Name'].toLowerCase().includes(searchTerm) ||
                             tool['Category'].toLowerCase().includes(searchTerm) ||
                             tool['Description'].toLowerCase().includes(searchTerm);
        
        const matchesCategory = !selectedCategory || tool['Category'] === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    renderTable();
    updateCharts();
}

function updateCharts() {
    const activeView = document.querySelector('.view-panel.active');
    if (!activeView) return;
    
    const viewId = activeView.id;
    
    if (viewId === 'scatter-view') {
        renderScatterChart();
    } else if (viewId === 'performance-view') {
        renderCategoryChart();
        renderCompositeChart();
    } else if (viewId === 'benchmarks-view') {
        renderBenchmarksChart();
    }
}

function sortTable(sortBy, headerElement) {
    // Clear previous sort indicators
    document.querySelectorAll('th[data-sort]').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
    });

    // Determine sort direction
    let isAscending = true;
    if (currentSort.column === sortBy && currentSort.direction === 'asc') {
        isAscending = false;
    }
    
    currentSort = { column: sortBy, direction: isAscending ? 'asc' : 'desc' };
    
    currentData.sort((a, b) => {
        let aVal, bVal;
        
        switch(sortBy) {
            case 'name':
                aVal = a['Tool Name'];
                bVal = b['Tool Name'];
                break;
            case 'category':
                aVal = a['Category'];
                bVal = b['Category'];
                break;
            case 'enterprise':
                aVal = a['Enterprise Usage Score'];
                bVal = b['Enterprise Usage Score'];
                break;
            case 'accuracy':
                aVal = a['Accuracy Score (%)'];
                bVal = b['Accuracy Score (%)'];
                break;
            case 'market':
                aVal = a['Market Presence Score'];
                bVal = b['Market Presence Score'];
                break;
            case 'composite':
                aVal = a['Composite Score'];
                bVal = b['Composite Score'];
                break;
            default:
                return 0;
        }

        if (typeof aVal === 'string') {
            return isAscending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        } else {
            return isAscending ? aVal - bVal : bVal - aVal;
        }
    });

    headerElement.classList.add(isAscending ? 'sort-asc' : 'sort-desc');
    renderTable();
}

function showToolDetails(tool) {
    document.getElementById('modal-title').textContent = tool['Tool Name'];
    document.getElementById('modal-category').textContent = tool['Category'];
    document.getElementById('modal-enterprise').textContent = tool['Enterprise Usage Score'];
    document.getElementById('modal-accuracy').textContent = tool['Accuracy Score (%)'] + '%';
    document.getElementById('modal-market').textContent = tool['Market Presence Score'];
    document.getElementById('modal-composite').textContent = tool['Composite Score'];
    document.getElementById('modal-description').textContent = tool['Description'];
    
    document.getElementById('tool-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('tool-modal').classList.add('hidden');
}