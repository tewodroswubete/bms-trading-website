// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to handle API requests
async function apiRequest(endpoint, method = 'GET', data = null) {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (data && method !== 'GET') {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'API request failed');
        }

        return result;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Contact Form Handler
async function submitContactForm(formData) {
    try {
        const result = await apiRequest('/contact', 'POST', formData);
        return result;
    } catch (error) {
        throw new Error('Failed to submit contact form: ' + error.message);
    }
}

// Quote Request Handler
async function submitQuoteRequest(quoteData) {
    try {
        const result = await apiRequest('/quote', 'POST', quoteData);
        return result;
    } catch (error) {
        throw new Error('Failed to submit quote request: ' + error.message);
    }
}

// Newsletter Subscription Handler
async function subscribeToNewsletter(email) {
    try {
        const result = await apiRequest('/newsletter', 'POST', { email });
        return result;
    } catch (error) {
        throw new Error('Failed to subscribe to newsletter: ' + error.message);
    }
}

// Initialize form handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            const formData = {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                subject: this.subject.value,
                message: this.message.value
            };

            try {
                const result = await submitContactForm(formData);

                // Show success message
                showNotification('success', 'Your message has been sent successfully!');

                // Reset form
                this.reset();
            } catch (error) {
                // Show error message
                showNotification('error', 'Failed to send message. Please try again.');
                console.error('Contact form error:', error);
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // Quote Form Handler
    const quoteForm = document.getElementById('quoteWizardForm');
    if (quoteForm) {
        // This will be integrated with the existing wizard logic
        window.submitQuoteToAPI = async function(formData) {
            try {
                const result = await submitQuoteRequest(formData);
                showNotification('success', `Quote request submitted successfully! Your quote number is: ${result.quoteNumber}`);
                return result;
            } catch (error) {
                showNotification('error', 'Failed to submit quote request. Please try again.');
                throw error;
            }
        };
    }

    // Newsletter Forms Handler
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;

            try {
                const result = await subscribeToNewsletter(emailInput.value);
                showNotification('success', 'Successfully subscribed to newsletter!');
                emailInput.value = '';
            } catch (error) {
                if (error.message.includes('already subscribed')) {
                    showNotification('info', 'This email is already subscribed to our newsletter.');
                } else {
                    showNotification('error', 'Failed to subscribe. Please try again.');
                }
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    });
});

// Notification System
function showNotification(type, message) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification-toast');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification-toast fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;

    // Set color based on type
    const colors = {
        success: 'bg-green-600 text-white',
        error: 'bg-red-600 text-white',
        info: 'bg-blue-600 text-white',
        warning: 'bg-yellow-600 text-white'
    };

    notification.className += ` ${colors[type] || colors.info}`;

    // Set icon based on type
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };

    notification.innerHTML = `
        <div class="flex items-center">
            <i class="${icons[type] || icons.info} mr-3 text-xl"></i>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add to document
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Export functions for use in other scripts
window.bmsTradingAPI = {
    submitContactForm,
    submitQuoteRequest,
    subscribeToNewsletter,
    showNotification
};