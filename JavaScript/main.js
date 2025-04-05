// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tab functionality
    initTabs();
    
    // Check authentication status
    checkAuthStatus();
    
    // Initialize modals
    initModals();
    
    // Load courses if on courses page
    if (document.querySelector('.course-grid')) {
        loadCourses();
    }
    
    // Load enrolled courses if on my-courses page
    if (document.querySelector('.enrolled-courses .course-grid')) {
        loadEnrolledCourses();
    }
});

// Tab functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all course categories
            document.querySelectorAll('.course-category').forEach(category => {
                category.classList.remove('active');
            });
            
            // Show selected category
            const categoryId = this.getAttribute('data-category') + '-courses';
            document.getElementById(categoryId).classList.add('active');
        });
    });
}

// Authentication status check
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const profileLink = document.getElementById('profile-link');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (isLoggedIn) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (profileLink) profileLink.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'block';
        
        // Set user name if on profile page
        if (document.getElementById('user-name')) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (userData) {
                document.getElementById('user-name').textContent = userData.name;
                document.getElementById('user-email').textContent = userData.email;
            }
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (registerBtn) registerBtn.style.display = 'block';
        if (profileLink) profileLink.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// Modal functionality
function initModals() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeButtons = document.querySelectorAll('.close');
    
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'block';
        });
    }
    
    if (registerBtn && registerModal) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'block';
        });
    }
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Load courses
function loadCourses() {
    // Excel courses
    const excelCourses = [
        {
            title: "Excel Basics",
            description: "Learn the fundamentals of Excel including navigation, data entry, and basic formulas.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Data Analysis with Excel",
            description: "Master pivot tables, charts, and data visualization techniques.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Advanced Excel Formulas",
            description: "Deep dive into VLOOKUP, INDEX-MATCH, and array formulas.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Excel for Financial Modeling",
            description: "Learn to build financial models and perform business forecasting.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Excel Macros & VBA",
            description: "Automate repetitive tasks with macros and Visual Basic for Applications.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Excel Power Query",
            description: "Transform and clean data with Excel's Power Query tool.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Excel Dashboard Creation",
            description: "Design interactive dashboards to visualize key metrics.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Excel for Project Management",
            description: "Use Excel for project planning, tracking, and resource management.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Statistical Analysis with Excel",
            description: "Perform statistical tests and analysis using Excel functions.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Excel Power User",
            description: "Advanced techniques for power users to maximize productivity.",
            image: "images/course-placeholder.jpg"
        }
    ];
    
    // Software Engineering courses
    const softwareCourses = [
        {
            title: "Introduction to Programming",
            description: "Learn programming fundamentals with Python.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Web Development Fundamentals",
            description: "HTML, CSS, and JavaScript for beginners.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Object-Oriented Programming",
            description: "Master OOP concepts with Java.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Database Design & SQL",
            description: "Learn to design databases and write SQL queries.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Algorithms & Data Structures",
            description: "Essential computer science concepts for developers.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Software Development Lifecycle",
            description: "Understand the complete process of building software.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Version Control with Git",
            description: "Learn to use Git for source code management.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Software Testing Fundamentals",
            description: "Learn different testing methodologies and techniques.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Agile Development Practices",
            description: "Implement Agile methodologies in your projects.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Software Architecture",
            description: "Design scalable and maintainable software systems.",
            image: "images/course-placeholder.jpg"
        }
    ];
    
    // Literature courses
    const literatureCourses = [
        {
            title: "Classic Literature",
            description: "Study of classic novels from the 19th and 20th centuries.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Creative Writing",
            description: "Develop your writing skills for fiction and non-fiction.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Shakespeare Studies",
            description: "In-depth analysis of Shakespeare's major works.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Modern Poetry",
            description: "Exploration of 20th century poetry movements.",
            image: "images/course-placeholder.jpg"
        },
        {
            title: "Literary Analysis",
            description: "Learn techniques for analyzing and interpreting literature.",
            image: "images/course-placeholder.jpg"
        }
    ];
    
    // Function to create course cards
    function createCourseCard(course) {
        return `
            <div class="course-card">
                <img src="${course.image}" alt="${course.title}">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <a href="#" class="btn">Learn More</a>
            </div>
        `;
    }
    
    // Populate Excel courses
    const excelGrid = document.querySelector('#excel-courses .course-grid');
    if (excelGrid) {
        excelGrid.innerHTML = excelCourses.map(createCourseCard).join('');
    }
    
    // Populate Software courses
    const softwareGrid = document.querySelector('#software-courses .course-grid');
    if (softwareGrid) {
        softwareGrid.innerHTML = softwareCourses.map(createCourseCard).join('');
    }
    
    // Populate Literature courses
    const literatureGrid = document.querySelector('#literature-courses .course-grid');
    if (literatureGrid) {
        literatureGrid.innerHTML = literatureCourses.map(createCourseCard).join('');
    }
}

// Load enrolled courses
function loadEnrolledCourses() {
    const enrolledCourses = [
        {
            title: "Excel Basics",
            description: "Learn the fundamentals of Excel including navigation, data entry, and basic formulas.",
            image: "images/course-placeholder.jpg",
            progress: 75
        },
        {
            title: "Data Analysis with Excel",
            description: "Master pivot tables, charts, and data visualization techniques.",
            image: "images/course-placeholder.jpg",
            progress: 30
        }
    ];
    
    const completedCourses = [
        {
            title: "Introduction to Programming",
            description: "Learn programming fundamentals with Python.",
            image: "images/course-placeholder.jpg"
        }
    ];
    
    // Function to create enrolled course card
    function createEnrolledCourseCard(course) {
        return `
            <div class="course-card">
                <img src="${course.image}" alt="${course.title}">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${course.progress}%;"></div>
                </div>
                <p>${course.progress}% Complete</p>
                <a href="#" class="btn">Continue</a>
            </div>
        `;
    }
    
    // Function to create completed course card
    function createCompletedCourseCard(course) {
        return `
            <div class="course-card">
                <img src="${course.image}" alt="${course.title}">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 100%;"></div>
                </div>
                <p>Completed</p>
                <a href="#" class="btn">View Certificate</a>
            </div>
        `;
    }
    
    // Populate enrolled courses
    const enrolledGrid = document.querySelector('.enrolled-courses .course-grid');
    if (enrolledGrid) {
        enrolledGrid.innerHTML = enrolledCourses.map(createEnrolledCourseCard).join('');
    }
    
    // Populate completed courses
    const completedGrid = document.querySelector('.completed-courses .course-grid');
    if (completedGrid) {
        completedGrid.innerHTML = completedCourses.map(createCompletedCourseCard).join('');
    }
}