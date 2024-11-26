document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            let isValid = true;

            // Basic validation
            if (nameInput.value.trim().length < 2) {
                showError(nameInput, 'Please enter a valid name');
                isValid = false;
            }

            if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email');
                isValid = false;
            }

            if (messageInput.value.trim().length < 10) {
                showError(messageInput, 'Message must be at least 10 characters');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Testimonial auto-rotation
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    if (testimonialItems.length > 1) {
        let currentTestimonial = 0;

        function rotateTestimonials() {
            testimonialItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
            });

            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            
            testimonialItems[currentTestimonial].style.opacity = '1';
            testimonialItems[currentTestimonial].style.transform = 'translateX(0)';
        }

        // Rotate every 5 seconds
        setInterval(rotateTestimonials, 5000);
    }

    // Image lazy loading
    const lazyImages = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Utility functions
    function showError(input, message) {
        input.classList.add('error');
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.textContent = message;
        
        // Remove any existing error messages
        const existingError = input.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }
        
        input.after(errorSpan);
    }

    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});

// Snow effect (optional fun addition)
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Create snow effect
setInterval(createSnowflake, 200);