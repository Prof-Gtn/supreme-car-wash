// Supreme Car Wash Website - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚗 Supreme Car Wash website loaded successfully');
    console.log('📱 WhatsApp: +264 85 302 9593');
    console.log('📧 Email: feizhoujurentrading@gmail.com');
    console.log('💻 Website developed by Prof-Gtn');
    
    // ===== MOBILE NAVIGATION TOGGLE =====
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
    
    // ===== QUOTE FORM SUBMISSION =====
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value.trim();
            const phone = this.querySelector('#phone').value.trim();
            const service = this.querySelector('#service').value;
            
            // Validation
            if (!name || !phone || !service) {
                showAlert('⚠ Please fill in all required fields', 'warning');
                return;
            }
            
            // Service type mapping
            const serviceTypes = {
                'car-wash': 'Car Wash',
                'upholstery': 'Upholstery Cleaning',
                'both': 'Both Services'
            };
            
            const serviceName = serviceTypes[service] || service;
            
            // Create success message
            const message = `
✅ <strong>Thank you, ${name}!</strong><br><br>
Your quote request for <strong>${serviceName}</strong> has been received.<br><br>
We will contact you at <strong>${phone}</strong> within 24 hours.<br><br>
📞 For urgent inquiries, call: <strong>+264 85 302 9593</strong>
            `;
            
            // Show success message
            showAlert(message, 'success');
            
            // Reset form
            this.reset();
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Optional: Send data to server or analytics
            logQuoteRequest(name, serviceName);
        });
    }
    
    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty or invalid hrefs
            if (href === '#' || href === '#!' || href === '#disclaimer' || href === '#terms' || href === '#privacy') {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar') ? 80 : 0;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL
                history.pushState(null, null, href);
            }
        });
    });
    
    // ===== BACK TO TOP BUTTON =====
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== PRICE TABLE INTERACTIVITY =====
    document.querySelectorAll('tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.backgroundColor = '#f8fafc';
        });
        
        row.addEventListener('mouseleave', function() {
            if (!this.classList.contains('highlight-row') && !this.classList.contains('special-row')) {
                this.style.backgroundColor = '';
            }
        });
        
        // Add click effect for price cells
        const priceCell = this.querySelector('.price-cell');
        if (priceCell) {
            priceCell.addEventListener('click', function() {
                const originalColor = this.style.color;
                const originalBg = this.style.backgroundColor;
                
                this.style.backgroundColor = '#e3f2fd';
                this.style.color = '#0056b3';
                this.style.fontWeight = 'bold';
                
                setTimeout(() => {
                    this.style.backgroundColor = originalBg;
                    this.style.color = originalColor;
                    this.style.fontWeight = '';
                }, 1000);
            });
            
            // Add tooltip
            priceCell.title = "Click to highlight price";
        }
    });
    
    // ===== FORM VALIDATION =====
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
    
    // ===== WHATSAPP BUTTON TRACKING =====
    document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-full, .whatsapp-float').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Track WhatsApp click
            console.log('WhatsApp inquiry initiated');
            
            // You can add Google Analytics or other tracking here
            // Example: gtag('event', 'whatsapp_click', { 'event_category': 'Contact' });
            
            // Optional: Add a small delay for better UX
            setTimeout(() => {
                // WhatsApp window should open
            }, 100);
        });
    });
    
    // ===== PHONE BUTTON TRACKING =====
    document.querySelectorAll('a[href^="tel:"]').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Phone call initiated');
            // Track call events if needed
        });
    });
    
    // ===== UPDATE COPYRIGHT YEAR =====
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // ===== ANIMATE ELEMENTS ON SCROLL =====
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.price-card, .service-item, .contact-card, .form-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.price-card, .service-item, .contact-card, .form-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // ===== NOTICE BOX INTERACTIVITY =====
    const noticeBox = document.querySelector('.notice-box');
    if (noticeBox) {
        noticeBox.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
    
    // ===== LOADING ANIMATIONS FOR BUTTONS =====
    document.querySelectorAll('.btn-submit, .btn-book').forEach(button => {
        button.addEventListener('click', function(e) {
            // Only show loading if it's a submit button
            if (this.type === 'submit' || this.classList.contains('btn-submit')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                this.disabled = true;
                
                // Reset after 5 seconds (safety)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 5000);
            }
        });
    });
    
    // ===== DEVELOPER CREDIT ANIMATION =====
    const developerCredit = document.querySelector('.developer');
    if (developerCredit) {
        developerCredit.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        developerCredit.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Click animation
        developerCredit.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'glow 2s ease-in-out infinite alternate';
            }, 10);
        });
    }
    
    // ===== HELPER FUNCTIONS =====
    
    // Show custom alert
    function showAlert(message, type = 'info') {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = custom-alert ${type};
        alertDiv.innerHTML = `
            <div class="alert-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
                <div class="alert-message">${message}</div>
                <button class="alert-close">&times;</button>
            </div>
        `;
        
        // Add styles
        alertDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 9999;
            min-width: 300px;
            max-width: 400px;
            border-left: 4px solid ${type === 'success' ? '#28a745' : '#ffc107'};
            animation: slideIn 0.3s ease;
        `;
        
        const alertContent = alertDiv.querySelector('.alert-content');
        alertContent.style.cssText = `
            padding: 20px;
            display: flex;
            align-items: flex-start;
            gap: 15px;
        `;
        
        const icon = alertDiv.querySelector('i');
        icon.style.cssText = `
            font-size: 1.5rem;
            color: ${type === 'success' ? '#28a745' : '#ffc107'};
            margin-top: 2px;
        `;
        
        const alertMessage = alertDiv.querySelector('.alert-message');
        alertMessage.style.cssText = `
            flex: 1;
            font-size: 0.95rem;
            color: #333;
        `;
        
        const closeBtn = alertDiv.querySelector('.alert-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
            padding: 0;
            margin: 0;
            line-height: 1;
        `;
        
        closeBtn.addEventListener('click', () => {
            alertDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.parentNode.removeChild(alertDiv);
                }
            }, 300);
        });
        
        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(alertDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.parentNode.removeChild(alertDiv);
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Log quote request (for analytics)
    function logQuoteRequest(name, service) {
        console.log(📝 Quote Request: ${name} - ${service});
        // Here you can send data to your analytics service
        // Example: fetch('/api/quotes', { method: 'POST', body: JSON.stringify({name, service}) });
    }
    
    // ===== INITIALIZE TOOLTIPS =====
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            // Browser's native tooltip is enough for now
        });
    });
    
    // ===== FINAL INITIALIZATION MESSAGE =====
    console.log('🎉 Supreme Car Wash website initialized successfully!');
    console.log('👨‍💻 Developed with ❤ by Prof-Gtn');
});
