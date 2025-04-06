// auth.js - Complete Authentication System with Simulation
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutBtn = document.getElementById('logout-btn');
    const personalInfoForm = document.getElementById('personal-info-form');
    const passwordForm = document.getElementById('password-form');
    
    // Demo User Database (Simulation)
    const demoUsers = [
        {
            email: "student@excelmastery.com",
            password: "Excel123!",
            name: "Alex Nyallu",
            phone: "+1234567890",
            enrolledCourses: [1, 3] // Course IDs
        }
    ];

    // Initialize authentication state
    checkAuthStatus();

    // --------------------------
    // 1. LOGIN FUNCTIONALITY
    // --------------------------
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            // Validation
            if (!email || !password) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate server authentication
            const user = demoUsers.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Successful login simulation
                const userData = {
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    enrolledCourses: user.enrolledCourses || []
                };
                
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userData', JSON.stringify(userData));
                
                // UI Updates
                if (document.getElementById('login-modal')) {
                    document.getElementById('login-modal').style.display = 'none';
                }
                checkAuthStatus();
                showAlert('Login successful!', 'success');
                
                // Redirect logic
                const redirectTo = window.location.pathname.includes('login.html') ? 'profile.html' : window.location.href;
                setTimeout(() => window.location.href = redirectTo, 1000);
            } else {
                showAlert('Invalid email or password', 'error');
            }
        });
    }

    // --------------------------
    // 2. REGISTRATION FUNCTIONALITY
    // --------------------------
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
            
            // Validation
            if (!name || !email || !password || !confirmPassword) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showAlert('Passwords do not match', 'error');
                return;
            }
            
            if (password.length < 6) {
                showAlert('Password must be at least 6 characters', 'error');
                return;
            }
            
            // Check if user already exists (simulation)
            if (demoUsers.some(u => u.email === email)) {
                showAlert('Email already registered', 'error');
                return;
            }
            
            // Simulate registration
            const newUser = {
                email,
                password,
                name,
                phone: "",
                enrolledCourses: []
            };
            
            demoUsers.push(newUser); // In a real app, this would be a server call
            
            // Store user data
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify({
                name,
                email,
                phone: "",
                enrolledCourses: []
            }));
            
            // UI Updates
            if (document.getElementById('register-modal')) {
                document.getElementById('register-modal').style.display = 'none';
            }
            checkAuthStatus();
            showAlert('Registration successful!', 'success');
            
            // Redirect
            setTimeout(() => window.location.href = 'profile.html', 1000);
        });
    }

    // --------------------------
    // 3. LOGOUT FUNCTIONALITY
    // --------------------------
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userData');
            checkAuthStatus();
            showAlert('You have been logged out', 'success');
            setTimeout(() => window.location.href = 'index.html', 1000);
        });
    }

    // --------------------------
    // 4. PROFILE MANAGEMENT
    // --------------------------
    if (personalInfoForm) {
        // Load profile data
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            document.getElementById('full-name').value = userData.name || '';
            document.getElementById('email').value = userData.email || '';
            document.getElementById('phone').value = userData.phone || '';
        }
        
        // Update profile
        personalInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Validation
            if (!name || !email) {
                showAlert('Name and email are required', 'error');
                return;
            }
            
            // Update user data
            const userData = JSON.parse(localStorage.getItem('userData')) || {};
            userData.name = name;
            userData.email = email;
            userData.phone = phone;
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Update demo user (simulation)
            const demoUser = demoUsers.find(u => u.email === userData.email);
            if (demoUser) {
                demoUser.name = name;
                demoUser.phone = phone;
            }
            
            // UI Updates
            document.getElementById('user-name').textContent = name;
            document.getElementById('user-email').textContent = email;
            showAlert('Profile updated successfully!', 'success');
        });
    }

    // --------------------------
    // 5. PASSWORD MANAGEMENT
    // --------------------------
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Validation
            if (!currentPassword || !newPassword || !confirmPassword) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                showAlert('New passwords do not match', 'error');
                return;
            }
            
            if (newPassword.length < 6) {
                showAlert('Password must be at least 6 characters', 'error');
                return;
            }
            
            // Verify current password (simulation)
            const userData = JSON.parse(localStorage.getItem('userData'));
            const demoUser = demoUsers.find(u => u.email === userData.email);
            
            if (!demoUser || demoUser.password !== currentPassword) {
                showAlert('Current password is incorrect', 'error');
                return;
            }
            
            // Update password (simulation)
            demoUser.password = newPassword;
            showAlert('Password changed successfully!', 'success');
            this.reset();
        });
    }

    // --------------------------
    // HELPER FUNCTIONS
    // --------------------------
    
    // Check authentication state
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
            
            // Update profile info if on profile page
            if (document.getElementById('user-name')) {
                const userData = JSON.parse(localStorage.getItem('userData'));
                if (userData) {
                    document.getElementById('user-name').textContent = userData.name;
                    document.getElementById('user-email').textContent = userData.email;
                    
                    // Update enrolled courses count
                    if (document.getElementById('enrolled-count')) {
                        document.getElementById('enrolled-count').textContent = 
                            userData.enrolledCourses ? userData.enrolledCourses.length : 0;
                    }
                }
            }
        } else {
            if (loginBtn) loginBtn.style.display = 'block';
            if (registerBtn) registerBtn.style.display = 'block';
            if (profileLink) profileLink.style.display = 'none';
            if (logoutBtn) logoutBtn.style.display = 'none';
        }
    }
    
    // Show alert messages
    function showAlert(message, type) {
        // Remove existing alerts
        const existingAlert = document.querySelector('.alert-message');
        if (existingAlert) existingAlert.remove();
        
        // Create alert element
        const alertEl = document.createElement('div');
        alertEl.className = `alert-message ${type}`;
        alertEl.textContent = message;
        
        // Add to DOM
        document.body.appendChild(alertEl);
        
        // Auto-remove after 3 seconds
        setTimeout(() => alertEl.remove(), 3000);
    }
});

// Add this CSS for alerts (in your style.css)
/*
.alert-message {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    z-index: 1000;
    animation: slideIn 0.5s, fadeOut 0.5s 2.5s;
}
.alert-message.success { background: #28a745; }
.alert-message.error { background: #dc3545; }
@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
*/