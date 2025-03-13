// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// Services Data
const services = [
    {
        icon: 'fas fa-wifi',
        title: 'High-Speed Internet',
        description: 'Experience lightning-fast internet with our premium fiber connection.'
    },
    {
        icon: 'fas fa-print',
        title: 'Printing Services',
        description: 'Professional printing services for documents, photos, and more.'
    },
    {
        icon: 'fas fa-desktop',
        title: 'Gaming PCs',
        description: 'High-performance gaming PCs with latest titles installed.'
    },
    {
        icon: 'fas fa-scanner',
        title: 'Scanning',
        description: 'High-quality document and photo scanning services.'
    },
    {
        icon: 'fas fa-headset',
        title: 'Technical Support',
        description: 'Expert assistance for all your digital needs.'
    },
    {
        icon: 'fas fa-coffee',
        title: 'Refreshments',
        description: 'Complimentary coffee and snacks for our valued customers.'
    }
];

// Render Services
const servicesContainer = document.querySelector('#services .grid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg';
    serviceCard.innerHTML = `
        <div class="text-4xl text-blue-600 mb-4">
            <i class="${service.icon}"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">${service.title}</h3>
        <p class="text-gray-600 dark:text-gray-300">${service.description}</p>
    `;
    servicesContainer.appendChild(serviceCard);
});

// Pricing Plans Data
const pricingPlans = [
    {
        name: 'Basic',
        price: '₹50',
        duration: 'per hour',
        features: [
            'High-speed internet access',
            'Basic printing (10 pages)',
            'Standard PC access',
            'Complimentary coffee'
        ],
        popular: false
    },
    {
        name: 'Premium',
        price: '₹200',
        duration: 'per day',
        features: [
            'Unlimited high-speed internet',
            'Unlimited printing',
            'Gaming PC access',
            'Priority support',
            'Free snacks & beverages'
        ],
        popular: true
    },
    {
        name: 'Monthly',
        price: '₹2000',
        duration: 'per month',
        features: [
            'All Premium features',
            'Dedicated PC access',
            'Special member discounts',
            'Free technical support',
            'Exclusive events access'
        ],
        popular: false
    }
];

// Render Pricing Plans
const pricingContainer = document.querySelector('#pricing .grid');
pricingPlans.forEach(plan => {
    const pricingCard = document.createElement('div');
    pricingCard.className = `pricing-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative ${
        plan.popular ? 'border-2 border-blue-600' : ''
    }`;
    
    if (plan.popular) {
        pricingCard.innerHTML = `
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                </span>
            </div>
        `;
    }
    
    pricingCard.innerHTML += `
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">${plan.name}</h3>
        <div class="mb-6">
            <span class="text-4xl font-bold text-blue-600">${plan.price}</span>
            <span class="text-gray-600 dark:text-gray-400">/${plan.duration}</span>
        </div>
        <ul class="space-y-3 mb-8">
            ${plan.features.map(feature => `
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-check text-green-500 mr-2"></i>
                    ${feature}
                </li>
            `).join('')}
        </ul>
        <button class="w-full btn-primary py-3 rounded-lg text-white font-semibold">
            Choose Plan
        </button>
    `;
    pricingContainer.appendChild(pricingCard);
});

// Booking Form
const bookingForm = document.getElementById('bookingForm');
const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
];

// Generate time slots
const timeSlotSelect = document.getElementById('timeSlot');
timeSlots.forEach(slot => {
    const option = document.createElement('option');
    option.value = slot;
    option.textContent = slot;
    timeSlotSelect.appendChild(option);
});

// Form submission with loading animation
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    
    setTimeout(() => {
        alert('Booking submitted successfully! We will contact you shortly.');
        bookingForm.reset();
        submitBtn.classList.remove('loading');
    }, 1500);
});

// Testimonials Data
const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'Student',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        text: 'Best cyber cafe in the area! Fast internet and friendly staff.'
    },
    {
        name: 'Priya Patel',
        role: 'Professional',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        text: 'Great place to work remotely. Quiet and comfortable environment.'
    },
    {
        name: 'Amit Kumar',
        role: 'Gamer',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        text: 'Awesome gaming PCs and high-speed internet. Perfect for gaming!'
    }
];

// Render Testimonials
const testimonialsContainer = document.querySelector('#testimonials .grid');
testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card p-6 rounded-xl shadow-lg';
    testimonialCard.innerHTML = `
        <div class="flex items-center mb-4">
            <img src="${testimonial.image}" alt="${testimonial.name}" 
                class="w-12 h-12 rounded-full mr-4">
            <div>
                <h4 class="font-semibold text-gray-800 dark:text-white">${testimonial.name}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm">${testimonial.role}</p>
            </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300">${testimonial.text}</p>
    `;
    testimonialsContainer.appendChild(testimonialCard);
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Navigation Toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-gray-800 dark:text-white"></i>';

const mobileMenu = document.createElement('div');
mobileMenu.className = 'fixed inset-0 bg-white dark:bg-gray-900 z-40 transform translate-x-full transition-transform duration-300';
mobileMenu.innerHTML = `
    <div class="flex flex-col items-center justify-center h-full space-y-8">
        <a href="#home" class="text-2xl font-semibold text-gray-800 dark:text-white">Home</a>
        <a href="#services" class="text-2xl font-semibold text-gray-800 dark:text-white">Services</a>
        <a href="#pricing" class="text-2xl font-semibold text-gray-800 dark:text-white">Pricing</a>
        <a href="#booking" class="text-2xl font-semibold text-gray-800 dark:text-white">Book Now</a>
        <a href="#testimonials" class="text-2xl font-semibold text-gray-800 dark:text-white">Testimonials</a>
        <a href="#contact" class="text-2xl font-semibold text-gray-800 dark:text-white">Contact</a>
    </div>
`;

document.body.appendChild(mobileMenuBtn);
document.body.appendChild(mobileMenu);

let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(100%)';
    mobileMenuBtn.innerHTML = isMenuOpen ? 
        '<i class="fas fa-times text-gray-800 dark:text-white"></i>' : 
        '<i class="fas fa-bars text-gray-800 dark:text-white"></i>';
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.style.transform = 'translateX(100%)';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-gray-800 dark:text-white"></i>';
    });
});

// Scroll Reveal Animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Initial check

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    
    setTimeout(() => {
        alert('Message sent successfully! We will get back to you soon.');
        contactForm.reset();
        submitBtn.classList.remove('loading');
    }, 1500);
});

// Newsletter Subscription
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    
    setTimeout(() => {
        alert(`Thank you for subscribing with: ${email}`);
        newsletterForm.reset();
        submitBtn.classList.remove('loading');
    }, 1500);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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