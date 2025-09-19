// Theme switcher functionality
function initThemeSwitcher() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update active button
    themeButtons.forEach(btn => {
        if (btn.getAttribute('data-theme') === savedTheme) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Add click handlers
    themeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Update theme
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('portfolio-theme', theme);
            
            // Update active button
            themeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Add transition effect
            document.body.style.transition = 'all 0.3s ease';
        });
    });
}

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme switcher
    initThemeSwitcher();
    
    // Add smooth scrolling to navigation links only (not project buttons)
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.profile-card, .recent-work-card, .mission-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .contact-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social icons hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });



    // PROJECT FILTER FUNCTIONALITY
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    console.log('Found filter buttons:', filterButtons.length);
    console.log('Found project cards:', projectCards.length);

    // Initialize with "All" active
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
        console.log('All button activated');
    }

    // Function to filter projects
    function filterProjects(filterValue) {
        console.log('Filtering by:', filterValue);
        
        projectCards.forEach((card, index) => {
            const categories = card.getAttribute('data-category').split(' ');
            console.log(`Card ${index + 1} categories:`, categories);
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                // Show card
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.95)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            } else {
                // Hide card
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px) scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Button clicked:', this.textContent);
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            console.log('Filter value:', filter);
            
            // Apply filter
            filterProjects(filter);
        });
    });

    // Project data
    const projectData = {
        'data-analytics-madhav-sales': {
            title: 'MADHAV E-COMMERCE SALES DASHBOARD',
            description: [
                'Developed an interactive Power BI sales dashboard for Madhav Sales',
                'Utilized data cleaning and data modeling techniques for accurate reporting',
                'Implemented slicer panels for dynamic filtering and data exploration',
                'Enabled users to make informed decisions through comprehensive insights',
                'Created a user-friendly interface for sales performance tracking'
            ],
            features: [
                'Interactive Power BI dashboard development',
                'Data cleaning and data modeling',
                'Dynamic filtering with slicer panels',
                'Sales performance tracking',
                'Comprehensive reporting system'
            ],
            techStack: ['Power BI', 'Data Visualization', 'Data Analysis', 'Data Cleaning', 'Data Modeling'],
            outcomes: [
                'Enhanced data exploration capabilities',
                'Improved decision-making process',
                'Streamlined sales performance tracking',
                'User-friendly interface design'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: 'dashboard-images/madhav-dashboard.png'
        },
        'data-analytics-blink-it': {
            title: 'Blink It Sales Dashboard',
            description: [
                'Developed a sales data report dashboard for Blink It using Power BI',
                'Performed extensive data transformation and data cleaning for accuracy',
                'Designed interactive dashboards to visualize key sales metrics',
                'Implemented tracking for sales trends and product performance',
                'Created regional distribution analysis and reporting'
            ],
            features: [
                'Sales data report dashboard',
                'Extensive data transformation',
                'Data cleaning and validation',
                'Interactive visualizations',
                'Key metrics tracking'
            ],
            techStack: ['Microsoft Power BI', 'Data Analysis', 'Data Cleaning', 'Data Transformation', 'Data Visualization'],
            outcomes: [
                'Improved data accuracy and consistency',
                'Enhanced sales trend analysis',
                'Better product performance insights',
                'Regional distribution optimization'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: 'dashboard-images/blinkit-dashboard.png'
        },
        'data-analytics-techno-edge': {
            title: 'Techno-edge Learning Sales Report Dashboard',
            description: [
                'Developed a comprehensive sales report dashboard for Techno-edge Learning Services',
                'Utilized Python for data analysis and visualization with Pandas, Matplotlib, and Seaborn',
                'Provided real-time insights into key sales metrics and performance indicators',
                'Implemented revenue growth tracking and customer segmentation analysis',
                'Created regional sales distribution reporting and visualization'
            ],
            features: [
                'Comprehensive sales report dashboard',
                'Python data analysis and visualization',
                'Real-time insights and metrics',
                'Customer segmentation analysis',
                'Regional sales distribution tracking'
            ],
            techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis', 'Data Visualization'],
            outcomes: [
                'Enhanced revenue growth tracking',
                'Improved customer segmentation insights',
                'Better regional sales analysis',
                'Streamlined reporting processes'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: 'dashboard-images/techno-edge-sales-report.png'
        },
        'data-analytics-coffee-shop': {
            title: 'Coffee Shop Sales Dashboard',
            description: [
                'Developed a data report dashboard for a coffee shop using Power BI',
                'Utilized SQL for data extraction, transformation, and loading (ETL) processes',
                'Designed interactive visualizations to track key performance indicators',
                'Implemented daily sales tracking and product popularity analysis',
                'Created customer demographics analysis and reporting'
            ],
            features: [
                'Data report dashboard development',
                'SQL ETL processes',
                'Interactive visualizations',
                'KPI tracking and monitoring',
                'Customer demographics analysis'
            ],
            techStack: ['Microsoft Power BI', 'SQL', 'Data Transformation', 'ETL Processes', 'Data Visualization'],
            outcomes: [
                'Improved daily sales tracking',
                'Enhanced product popularity insights',
                'Better customer demographics understanding',
                'Optimized business decision making'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: 'dashboard-images/coffee-shop-dashboard.png'
        },
        'data-analytics-hotel-booking': {
            title: 'Data Analysis of Hotel Booking',
            description: [
                'Conducted comprehensive data analysis of hotel booking data using Python',
                'Utilized multiple libraries including Seaborn, Pandas, Matplotlib, and NumPy',
                'Performed extensive data cleaning and preprocessing for accurate analysis',
                'Created detailed data visualizations to understand guest behavior patterns',
                'Provided in-depth insights related to guests and their booking actions'
            ],
            features: [
                'Data cleaning and preprocessing',
                'Comprehensive data visualization',
                'Guest behavior pattern analysis',
                'Statistical analysis and insights',
                'Interactive dashboard creation'
            ],
            techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NumPy', 'Data Analysis', 'Data Visualization', 'Data Cleaning'],
            outcomes: [
                'Enhanced understanding of hotel booking patterns',
                'Improved data-driven decision making for hospitality',
                'Comprehensive guest behavior insights',
                'Optimized booking process recommendations'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: null,
            showDashboard: false
        },
        'machine-learning-sentimental-analysis': {
            title: 'Sentimental Analysis',
            description: [
                'Developed a sentiment analysis project using web scraping techniques',
                'Extracted data from various websites and article texts using BeautifulSoup4',
                'Implemented comprehensive text analysis with multiple scoring metrics',
                'Calculated positive/negative scores, polarity, subjectivity, and readability indices',
                'Analyzed text complexity, word patterns, and linguistic features'
            ],
            features: [
                'Web scraping and data extraction',
                'Sentiment analysis and scoring',
                'Text complexity analysis',
                'Readability index calculation',
                'Natural language processing'
            ],
            techStack: ['Python', 'BeautifulSoup4', 'Natural Language Toolkit', 'Web Scraping', 'Sentiment Analysis', 'NLP'],
            outcomes: [
                'Automated sentiment analysis from web sources',
                'Comprehensive text analysis capabilities',
                'Improved understanding of text sentiment patterns',
                'Enhanced text processing and analysis tools'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: null,
            showDashboard: false
        },
        'data-analytics-sql-music': {
            title: 'SQL Music Store Analysis',
            description: [
                'Designed and executed comprehensive SQL queries to analyze music store database',
                'Performed data extraction, cleaning, and transformation of complex datasets',
                'Implemented statistical data analysis for business insights and decision making',
                'Created data models and optimized database queries for performance',
                'Developed communication strategies to present findings to stakeholders'
            ],
            features: [
                'Comprehensive SQL query development',
                'Data extraction and cleaning processes',
                'Statistical data analysis implementation',
                'Data modeling and optimization',
                'Business insights and reporting'
            ],
            techStack: ['SQL', 'Data Analysis', 'Data Cleaning', 'Data Modeling', 'Statistical Analysis', 'Communication'],
            outcomes: [
                'Enhanced database query performance and efficiency',
                'Improved data-driven decision making for music store',
                'Streamlined data extraction and transformation processes',
                'Better understanding of business metrics and trends'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: null,
            showDashboard: false
        },
        'machine-learning-dog-predictor': {
            title: 'Dog Predictor App',
            description: [
                'Developed a mobile application using machine learning to predict dog breeds from images',
                'Trained a comprehensive machine learning model on a large dataset of dog images',
                'Implemented image preprocessing and feature extraction techniques for accurate predictions',
                'Created an intuitive mobile interface with camera and gallery integration',
                'Built a robust prediction system that identifies dog breeds with high accuracy'
            ],
            features: [
                'Machine learning model development and training',
                'Image preprocessing and feature extraction',
                'Mobile application with camera integration',
                'Gallery image selection functionality',
                'Real-time breed prediction and information display'
            ],
            techStack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'Mobile Development', 'Machine Learning', 'Image Processing', 'Deep Learning'],
            outcomes: [
                'Accurate dog breed prediction from images',
                'User-friendly mobile application interface',
                'Robust machine learning model deployment',
                'Enhanced understanding of computer vision applications',
                'Practical implementation of deep learning in mobile apps'
            ],
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: 'dashboard-images/WhatsApp Image 2025-08-23 at 01.31.53_363f3a48.jpg',
            showDashboard: true
        },
        'data-science-resume-screener': {
            title: 'Resume Screener AI',
            description: [
                'Developed a live web application using artificial intelligence for resume screening and analysis',
                'Implemented AI-powered algorithms to analyze resumes for job matching and candidate evaluation',
                'Created an intelligent system that processes and evaluates candidate qualifications automatically',
                'Built a user-friendly web interface for HR professionals and recruiters to streamline hiring processes',
                'Deployed the application live on the internet for real-world usage and testing'
            ],
            features: [
                'AI-powered resume analysis and screening',
                'Automated candidate evaluation and job matching',
                'Web-based application with live deployment',
                'Intelligent qualification assessment',
                'Streamlined hiring process automation'
            ],
            techStack: ['Python', 'Machine Learning', 'Natural Language Processing', 'Web Development', 'AI/ML', 'Data Science', 'Deployment'],
            outcomes: [
                'Automated resume screening process for HR teams',
                'Improved candidate evaluation efficiency and accuracy',
                'Reduced manual screening time and human bias',
                'Enhanced job matching capabilities through AI analysis',
                'Successfully deployed live application for real-world use'
            ],
            demoLink: 'https://resumescreenerai.com/',
            githubLink: 'https://github.com/aadi9082',
            dashboardImage: 'dashboard-images/resumescreenerai.com.png',
            showDashboard: true
        }
    };

    // Modal elements
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDashboardImage = document.getElementById('modalDashboardImage');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalTechStack = document.getElementById('modalTechStack');
    const modalOutcomes = document.getElementById('modalOutcomes');
    const modalDemoLink = document.getElementById('modalDemoLink');
    const modalGithubLink = document.getElementById('modalGithubLink');
    const closeModal = document.querySelector('.close-modal');
    
    // Debug modal elements
    console.log('Modal elements found:', {
        modal: !!modal,
        modalDemoLink: !!modalDemoLink,
        modalGithubLink: !!modalGithubLink
    });
    
    // Full size modal elements
    const fullsizeModal = document.getElementById('fullsizeModal');
    const fullsizeImage = document.getElementById('fullsizeImage');
    const closeFullsize = document.querySelector('.close-fullsize');
    
    // Debug fullsize modal elements
    console.log('Fullsize modal elements found:', {
        fullsizeModal: !!fullsizeModal,
        fullsizeImage: !!fullsizeImage,
        closeFullsize: !!closeFullsize
    });

    // Add click handlers for project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('project-link')) {
                e.preventDefault();
                const projectId = e.target.getAttribute('data-project');
                
                if (projectData[projectId]) {
                    showProjectModal(projectData[projectId]);
                } else {
                    console.log('Project not found:', projectId);
                }
            }
        });
    });

    // Show project modal
    function showProjectModal(project) {
        modalTitle.textContent = project.title;
        
        // Populate description as bulleted points
        modalDescription.innerHTML = '';
        if (Array.isArray(project.description)) {
            project.description.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                modalDescription.appendChild(li);
            });
        } else {
            // Fallback for string descriptions
            const li = document.createElement('li');
            li.textContent = project.description;
            modalDescription.appendChild(li);
        }
        
        // Set dashboard image and section visibility
        const dashboardPreviewSection = document.querySelector('.dashboard-preview');
        if (project.dashboardImage && project.showDashboard !== false) {
            modalDashboardImage.src = project.dashboardImage;
            modalDashboardImage.style.display = 'block';
            modalDashboardImage.onerror = function() {
                console.log('Dashboard image failed to load:', project.dashboardImage);
                this.style.display = 'none';
            };
            dashboardPreviewSection.style.display = 'block';
        } else {
            dashboardPreviewSection.style.display = 'none';
        }
        
        // Populate features
        modalFeatures.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });
        
        // Populate tech stack
        modalTechStack.innerHTML = '';
        project.techStack.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            modalTechStack.appendChild(tag);
        });
        
        // Populate outcomes
        modalOutcomes.innerHTML = '';
        project.outcomes.forEach(outcome => {
            const div = document.createElement('div');
            div.className = 'outcome-item';
            div.innerHTML = `<i class="fas fa-check-circle"></i> ${outcome}`;
            modalOutcomes.appendChild(div);
        });
        
        // Set GitHub link
        modalGithubLink.href = project.githubLink;
        
        // Set demo link if available
        console.log('Project demo link:', project.demoLink);
        console.log('Modal demo link element:', modalDemoLink);
        if (project.demoLink && project.demoLink !== '#') {
            modalDemoLink.href = project.demoLink;
            modalDemoLink.style.display = 'inline-flex';
            console.log('Demo button href set to:', modalDemoLink.href);
            console.log('Demo button display set to:', modalDemoLink.style.display);
            console.log('Demo button should be visible');
        } else {
            modalDemoLink.style.display = 'none';
            console.log('Demo button hidden');
        }
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.key === 'Escape' && fullsizeModal.style.display === 'block') {
            fullsizeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Dashboard preview click handler - more robust approach
    document.addEventListener('click', function(e) {
        console.log('Click detected on:', e.target);
        
        // Check if clicked element is dashboard image
        if (e.target.classList.contains('dashboard-image')) {
            console.log('Dashboard image clicked');
            e.preventDefault();
            e.stopPropagation();
            const imgSrc = e.target.src;
            console.log('Image source:', imgSrc);
            if (imgSrc && fullsizeModal && fullsizeImage) {
                fullsizeImage.src = imgSrc;
                fullsizeModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                console.log('Fullsize modal opened');
            }
        }
        // Check if clicked inside preview container
        else if (e.target.closest('.preview-container')) {
            console.log('Preview container clicked');
            e.preventDefault();
            e.stopPropagation();
            const previewContainer = e.target.closest('.preview-container');
            const dashboardImg = previewContainer.querySelector('.dashboard-image');
            if (dashboardImg && dashboardImg.src && fullsizeModal && fullsizeImage) {
                console.log('Opening fullsize modal for:', dashboardImg.src);
                fullsizeImage.src = dashboardImg.src;
                fullsizeModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
    });

    // Close fullsize modal
    if (closeFullsize) {
        closeFullsize.addEventListener('click', function() {
            fullsizeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close fullsize modal when clicking outside
    if (fullsizeModal) {
        fullsizeModal.addEventListener('click', function(e) {
            if (e.target === fullsizeModal) {
                fullsizeModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Add keyboard support for closing modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullsizeModal && fullsizeModal.style.display === 'block') {
            fullsizeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Debug demo button click
    if (modalDemoLink) {
        modalDemoLink.addEventListener('click', function(e) {
            console.log('Demo button clicked!');
            console.log('Button href:', this.href);
            console.log('Button target:', this.target);
            // Prevent any interference with the button's default behavior
            e.stopPropagation();
        });
    }

    // CONTACT FORM FUNCTIONALITY
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields to transmit your message.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            
            // Show loading state
            submitBtn.querySelector('.btn-text').textContent = 'TRANSMITTING...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                alert(`Message transmitted successfully!\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nYour message has been received and will be processed shortly.`);
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Add form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // QR Code Functionality
    const qrCode = document.querySelector('.qr-code');
    if (qrCode) {
        qrCode.addEventListener('click', function() {
            // You can replace this URL with your actual resume link
            const resumeUrl = 'https://drive.google.com/file/d/YOUR_RESUME_ID/view'; // Replace with your actual resume URL
            
            // For now, show an alert with instructions
            alert('QR Code clicked! Please provide your resume URL to make this functional.\n\nCurrent placeholder URL: ' + resumeUrl);
            
            // Uncomment the line below when you have your actual resume URL
            // window.open(resumeUrl, '_blank');
        });
    }

    // Add typing effect to the main headline
    const headline = document.querySelector('.main-headline');
    if (headline) {
        const text = "Hii I am a Data Scientist";
        headline.textContent = ''; // Clear existing content
        headline.style.borderRight = '2px solid #1a1a1a';
        headline.style.opacity = '1';
        headline.style.visibility = 'visible';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                headline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                headline.style.borderRight = 'none';
            }
        };
        
        // Start typing effect immediately
        typeWriter();
    }

    // Add parallax effect to the mission section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const missionSection = document.querySelector('.mission-section');
        if (missionSection) {
            const rate = scrolled * -0.5;
            missionSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.8s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        // Add subtle animation to profile card
        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            profileCard.style.transition = 'all 0.3s ease';
        }
        
        // Add pulse animation to status dot
        const statusDot = document.querySelector('.status-dot');
        if (statusDot) {
            statusDot.style.animation = 'pulse 2s infinite';
        }
    });
});

    // Add mobile menu functionality if needed
    function toggleMobileMenu() {
        const nav = document.querySelector('.header');
        nav.classList.toggle('mobile-open');
    }



// Add form validation for contact form (if you add one later)
function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name')) {
        errors.push('Name is required');
    }
    
    if (!formData.get('email')) {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('Please enter a valid email');
    }
    
    if (!formData.get('message')) {
        errors.push('Message is required');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add analytics tracking (if needed)
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
}

// Web Development Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const webDevContactForm = document.getElementById('webDevContactForm');
    
    if (webDevContactForm) {
        webDevContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(webDevContactForm);
            const formObject = Object.fromEntries(formData);
            
            // Validate form
            const errors = validateWebDevForm(formObject);
            
            if (errors.length > 0) {
                alert('Please fix the following errors:\n' + errors.join('\n'));
                return;
            }
            
            // Simulate form submission
            const submitBtn = webDevContactForm.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            
            // Show loading state
            submitBtn.querySelector('.btn-text').textContent = 'SENDING...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                alert('Thank you for your inquiry! I will get back to you within 24 hours.\n\nProject Details:\n' + 
                      'Name: ' + formObject.clientName + '\n' +
                      'Email: ' + formObject.clientEmail + '\n' +
                      'Project Type: ' + formObject.projectType + '\n' +
                      'Budget: ' + formObject.budget + '\n' +
                      'Timeline: ' + formObject.timeline);
                
                // Reset form
                webDevContactForm.reset();
                
                // Reset button
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.disabled = false;
                
                // Track form submission
                trackEvent('web_dev_inquiry_submitted', {
                    projectType: formObject.projectType,
                    budget: formObject.budget,
                    timeline: formObject.timeline
                });
                
            }, 2000);
        });
        
        // Add input animations
        const inputs = webDevContactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
});

// Validate web development form
function validateWebDevForm(formData) {
    const errors = [];
    
    if (!formData.clientName || formData.clientName.trim() === '') {
        errors.push('Client name is required');
    }
    
    if (!formData.clientEmail || formData.clientEmail.trim() === '') {
        errors.push('Email address is required');
    } else if (!isValidEmail(formData.clientEmail)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.projectType || formData.projectType === '') {
        errors.push('Please select a project type');
    }
    
    if (!formData.budget || formData.budget === '') {
        errors.push('Please select a budget range');
    }
    
    if (!formData.timeline || formData.timeline === '') {
        errors.push('Please select a project timeline');
    }
    
    if (!formData.projectDescription || formData.projectDescription.trim() === '') {
        errors.push('Project description is required');
    } else if (formData.projectDescription.trim().length < 50) {
        errors.push('Project description should be at least 50 characters long');
    }
    
    return errors;
}

// Export functions for potential use in other scripts
window.portfolioUtils = {
    trackEvent,
    validateForm,
    isValidEmail,
    validateWebDevForm
};
