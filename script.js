// Mobile Navigation Toggle - SAFE VERSION
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
    
    // Quote Form Submission - SAFE CHECK
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values safely
            const nameInput = this.querySelector('input[type="text"]');
            const phoneInput = this.querySelector('input[type="tel"]');
            const serviceSelect = this.querySelector('select');
            
            if (nameInput && phoneInput && serviceSelect) {
                const name = nameInput.value.trim();
                const phone = phoneInput.value.trim();
                const serviceType = serviceSelect.value;
                
                if (name && phone && serviceType) {
                    // Format service type for display
                    const serviceTypes = {
                        'car-wash': 'Car Wash',
                        'upholstery': 'Upholstery Cleaning',
                        'both': 'Both Services'
                    };
                    
                    const serviceName = serviceTypes[serviceType] || serviceType;
                    
                    // Show confirmation message
                    const message = ✅ Thank you ${name}!\n\nYour quote request for ${serviceName} has been received.\n\nWe will contact you at ${phone} within 24 hours.\n\n📞 For urgent inquiries, call: +264 85 302 9593;
                    
                    alert(message);
                    
                    // Reset form
                    this.reset();
                    
                    // Scroll to top for better UX
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    alert('⚠ Please fill in all required fields');
                }
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for # links
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            
            const targetId = href;
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Account for fixed navbar
                const navbarHeight = document.querySelector('.navbar') ? 80 : 0;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, href);
            }
        });
    });
    
    // Price table row highlight
    document.querySelectorAll('tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'background-color 0.3s ease';
            this.style.backgroundColor = '#f8f9fa';
        });
        
        row.addEventListener('mouseleave', function() {
            if (!this.classList.contains('highlight-row')) {
                this.style.backgroundColor = '';
            }
        });
    });
    
    // Form input validation with visual feedback
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#dc3545';
                this.style.boxShadow = '0 0 0 2px rgba(220, 53, 69, 0.1)';
            } else {
                this.style.borderColor = '#00a86b';
                this.style.boxShadow = '0 0 0 2px rgba(0, 168, 107, 0.1)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#0056b3';
            this.style.boxShadow = '0 0 0 3px rgba(0, 86, 179, 0.2)';
        });
    });
    
    // WhatsApp button click tracking
    document.querySelectorAll('.btn-whatsapp, .whatsapp-float').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Optional: Add analytics here
            console.log('WhatsApp inquiry from website');
            
            // You can add:
            // 1. Google Analytics event
            // 2. Facebook Pixel event
            // 3. Simple log to your server
            
            // Small delay to ensure WhatsApp opens
            setTimeout(() => {
                // WhatsApp window should open
            }, 100);
        });
    });
    
    // Call button enhancement
    document.querySelectorAll('a[href^="tel:"]').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Phone call initiated from website');
            // You can track calls if needed
        });
    });
    
    // Auto-update copyright year
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    copyrightElements.forEach(element => {
        const currentYear = new Date().getFullYear();
        const text = element.innerHTML;
        
        // Replace 2023 with current year
        if (text.includes('2023')) {
            element.innerHTML = text.replace('2023', currentYear);
        } else if (text.includes('©')) {
            // Add current year if not present
            element.innerHTML = text.replace('©', © ${currentYear});
        }
    });
    
    // Make price cells more noticeable on click
    document.querySelectorAll('.price-cell').forEach(priceCell => {
        priceCell.addEventListener('click', function() {
            const originalColor = this.style.color;
            const originalBg = this.style.backgroundColor;
            
            this.style.backgroundColor = '#e3f2fd';
            this.style.color = '#0056b3';
            this.style.fontWeight = 'bold';
            this.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                this.style.backgroundColor = originalBg;
                this.style.color = originalColor;
                this.style.fontWeight = '';
            }, 1000);
        });
        
        // Add tooltip hint
        priceCell.title = "Click to highlight price";
    });
    
    // Make notice box more interactive
    const noticeBox = document.querySelector('.notice-box');
    if (noticeBox) {
        noticeBox.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
    
    // Add loading animation to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            // Only for form submit buttons
            if (this.type === 'submit' || this.getAttribute('type') === 'submit') {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                this.disabled = true;
                
                // Reset after 3 seconds (in case form doesn't submit)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 3000);
            }
        });
    });
    
    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            // Browser's native tooltip is enough
        });
    });
    
    // Log page load for debugging
    console.log('✅ Supreme Car Wash website loaded successfully');
    console.log('📱 WhatsApp: +264 85 302 9593');
    console.log('📧 Email: feizhoujurentrading@gmail.com');
});

// Fallback for older browsers
if (!window.addEventListener) {
    // Simple fallback for very old browsers
    console.log('Browser support: Using basic functionality');
}

// WhatsApp integration helper
function sendWhatsAppMessage(message) {
    const phone = '264853029593';
    const encodedMessage = encodeURIComponent(message);
    const url = https://wa.me/${phone}?text=${encodedMessage};
    window.open(url, '_blank');
}

// Quick quote function (optional)
function quickQuote(service, price) {
    const message = Hello! I'm interested in ${service} (${price}). Please contact me.;
    sendWhatsAppMessage(message);
}
