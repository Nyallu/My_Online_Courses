// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real app, you would send this to a server
            // For demo purposes, we'll just simulate a successful login
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify({
                name: 'Alex Nyallu',
                email: email
            }));
            
            // Close modal and update UI
            document.getElementById('login-modal').style.display = 'none';
            checkAuthStatus();
            
            // Redirect to profile or home page
            window.location.href = 'profile.html';
        });
    }
    
    // Register form submission
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
            
            // Validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }
            
            // In a real app, you would send this to a server
            // For demo purposes, we'll just simulate a successful registration
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify({
                name: name,
                email: email
            }));
            
            // Close modal and update UI
            document.getElementById('register-modal').style.display = 'none';
            checkAuthStatus();
            
            // Redirect to profile page
            window.location.href = 'profile.html';
        });
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userData');
            checkAuthStatus();
            window.location.href = 'index.html';
        });
    }
    
    // Profile form submission
    const personalInfoForm = document.getElementById('personal-info-form');
    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Update user data
            const userData = JSON.parse(localStorage.getItem('userData'));
            userData.name = name;
            userData.email = email;
            userData.phone = phone;
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Update displayed name
            document.getElementById('user-name').textContent = name;
            document.getElementById('user-email').textContent = email;
            
            alert('Profile updated successfully!');
        });
    }
    
    // Password change form submission
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Validation
            if (!currentPassword || !newPassword || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                alert('New passwords do not match');
                return;
            }
            
            if (newPassword.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }
            
            // In a real app, you would verify current password with server
            // For demo, we'll just show a success message
            alert('Password changed successfully!');
            this.reset();
        });
    }
});