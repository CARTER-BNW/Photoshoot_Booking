// Main JavaScript File for Photoshoot Booking

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    console.log('Photoshoot Booking App Initialized');
    
    // Form submission handler
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Apply dark theme on page load
    applyDarkTheme();
});

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value
    };
    
    console.log('Booking submitted:', formData);
    alert(`Thank you, ${formData.name}! Your booking request has been received. We'll contact you soon at ${formData.email}`);
    
    // Reset form
    this.reset();
}

// Setup smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Apply dark theme
function applyDarkTheme() {
    const darkCss = document.createElement('link');
    darkCss.rel = 'stylesheet';
    darkCss.href = 'styles/dark.css';
    document.head.appendChild(darkCss);
}

// Utility function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
