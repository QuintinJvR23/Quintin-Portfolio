document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling to section anchors
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }
        // Code to submit the form data could be added here
        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Function to validate email address
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
