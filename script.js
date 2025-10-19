// التنقل المتنقل
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// التمرير السلس
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

// إظهار العناصر عند التمرير
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// تطبيق الأنيميشن على العناصر
document.querySelectorAll('.timeline-item, .player-card, .achievement-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// نموذج الاتصال
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // هنا يمكنك إضافة كود إرسال النموذج
        const formData = new FormData(this);
        
        // عرض رسالة نجاح
        alert('شكراً لك! تم استلام رسالتك وسيتم الرد عليك قريباً.');
        this.reset();
    });
}

// تغيير لون شريط التنقل عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// تحميل الصور (يمكنك إضافة المزيد من الصور هنا)
const imageSources = {
    logo: 'https://via.placeholder.com/40x40/1a5276/ffffff?text=ZZ',
    teamPhoto: 'https://via.placeholder.com/500x300/1a5276/ffffff?text=فريق+الزمالة',
    player1: 'https://via.placeholder.com/300x250/1a5276/ffffff?text=لاعب+1',
    player2: 'https://via.placeholder.com/300x250/1a5276/ffffff?text=لاعب+2', 
    player3: 'https://via.placeholder.com/300x250/1a5276/ffffff?text=لاعب+3',
    gallery1: 'https://via.placeholder.com/300x250/1a5276/ffffff?text=صورة+1',
    gallery2: 'https://via.placeholder.com/300x250/1a5276/ffffff?text=صورة+2',
    gallery3: 'https://via.placeholder.com/300x250/1a5276/ffffff?text=صورة+3',
    gallery4: 'https://via.placeholder.com/300x250/1a5276/ffffff?text=صورة+4',
    heroBg: 'https://via.placeholder.com/1920x1080/1a5276/ffffff?text=نادي+الزمالة'
};

// تعيين الصور الافتراضية
document.addEventListener('DOMContentLoaded', function() {
    // يمكنك إضافة كود لتحميل الصور الحقيقية هنا
    console.log('موقع نادي الزمالة جاهز للعمل!');
});
