// Courses functionality
document.addEventListener('DOMContentLoaded', function() {
    // Course enrollment functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && e.target.textContent === 'Learn More') {
            e.preventDefault();
            const courseCard = e.target.closest('.course-card');
            const courseTitle = courseCard.querySelector('h4').textContent;
            
            // Check if user is logged in
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            
            if (!isLoggedIn) {
                alert('Please login to enroll in this course');
                document.getElementById('login-modal').style.display = 'block';
                return;
            }
            
            // In a real app, you would add this to the user's enrolled courses in a database
            // For demo, we'll just show an alert
            alert(`You have successfully enrolled in "${courseTitle}"`);
            
            // Update the button to show "Continue" instead of "Learn More"
            e.target.textContent = 'Continue';
        }
    });
    
    // Course progress tracking
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && (e.target.textContent === 'Continue' || e.target.textContent === 'View Certificate')) {
            e.preventDefault();
            const courseCard = e.target.closest('.course-card');
            const courseTitle = courseCard.querySelector('h4').textContent;
            
            // In a real app, this would open the course content
            alert(`Opening "${courseTitle}"`);
        }
    });
});