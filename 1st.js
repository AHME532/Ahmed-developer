// ==================== WAIT FOR DOM TO LOAD ====================
document.addEventListener('DOMContentLoaded', function() {

    // ========== 1. TYPEWRITER EFFECT ==========
    const texts = ['Web Developer', 'Programmer', 'Freelancer', 'Cricketer', 'Student'];
    let count = 0;
    let index = 0;
    let currentText = '';
    
    (function type() {
        if (count === texts.length) count = 0;
        currentText = texts[count];
        let letter = currentText.slice(0, ++index);
        const typerElement = document.querySelector('.typer-text');
        if (typerElement) typerElement.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }());

    // ========== 2. SMOOTH SCROLL FOR NAVIGATION ==========
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
            // Update active class
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ========== 3. SOCIAL MEDIA LINKS ==========
    const socialLinks = {
        instagram: "https://www.instagram.com/56_b_a_b_a_r_56/",
        github: "https://github.com/AHME532",
        twitter: "https://x.com/Ahmed_Tariq56",
        facebook: "https://www.facebook.com/Muhammad Tariq",
        linkedin: "https://www.linkedin.com/in/ahmed-tariq-5608b8339/"
    };
    
    document.querySelectorAll('.instagram-link').forEach(el => {
        el.addEventListener('click', (e) => { e.preventDefault(); window.open(socialLinks.instagram, "_blank"); });
    });
    document.querySelectorAll('.github-link').forEach(el => {
        el.addEventListener('click', (e) => { e.preventDefault(); window.open(socialLinks.github, "_blank"); });
    });
    document.querySelectorAll('.twitter-link').forEach(el => {
        el.addEventListener('click', (e) => { e.preventDefault(); window.open(socialLinks.twitter, "_blank"); });
    });
    document.querySelectorAll('.facebook-link').forEach(el => {
        el.addEventListener('click', (e) => { e.preventDefault(); window.open(socialLinks.facebook, "_blank"); });
    });
    document.querySelectorAll('.linkedin-link').forEach(el => {
        el.addEventListener('click', (e) => { e.preventDefault(); window.open(socialLinks.linkedin, "_blank"); });
    });

    // ========== 4. WHATSAPP LINK ==========
    const phoneNumber = "923246610748";
    const whatsappText = "Assalam-o-Alaikum! How can I help you?";
    document.querySelectorAll('.whatsapp-link').forEach(el => {
        el.addEventListener("click", function(e) {
            e.preventDefault();
            const text = encodeURIComponent(whatsappText);
            window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
        });
    });

    // ========== 5. SKILLS PROGRESS BAR ANIMATION (ON SCROLL) ==========
    const progressBars = document.querySelectorAll('.progress-bar');
    let skillsAnimated = false;
    
    function animateProgressBars() {
        if (skillsAnimated) return;
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            if (targetWidth) {
                bar.style.width = targetWidth + '%';
            }
        });
        skillsAnimated = true;
    }
    
    const skillsSection = document.querySelector('#skills');
    if (skillsSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !skillsAnimated) {
                    animateProgressBars();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(skillsSection);
    } else if (skillsSection) {
        // Fallback for older browsers
        window.addEventListener('scroll', function checkSkills() {
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && !skillsAnimated) {
                animateProgressBars();
                window.removeEventListener('scroll', checkSkills);
            }
        });
    }

    // ========== 6. CERTIFICATE WINDOW (openCode) ==========
    const openCodeBtn = document.getElementById('openCode');
    if (openCodeBtn) {
        openCodeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const certWindow = window.open();
            certWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head><title>My Certificates</title>
                <style>
                    body { font-family: Arial; text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                    h2 { color: white; }
                    img { width: 80%; max-width: 500px; margin: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
                </style>
                </head>
                <body>
                    <h2>My Certificates</h2>
                    <img src="CV.png" alt="CV"><br>
                    <img src="certificate.jpeg" alt="Certificate">
                </body>
                </html>
            `);
            certWindow.document.close();
        });
    }

    // ========== 7. PORTFOLIO WEBSITES WINDOW (openweb) ==========
    const openwebBtn = document.getElementById('openweb');
    if (openwebBtn) {
        openwebBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const webWindow = window.open();
            webWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head><title>My Portfolio Websites</title>
                <style>
                    body { font-family: Arial; text-align: center; padding: 40px; background: #1a1a2e; color: white; }
                    h1 { color: #00b4d8; }
                    .project { margin: 30px; padding: 20px; background: #16213e; border-radius: 10px; }
                    a { color: #00b4d8; text-decoration: none; font-size: 20px; }
                    a:hover { text-decoration: underline; }
                </style>
                </head>
                <body>
                    <h1>My Website Projects</h1>
                    <div class="project">
                        <h3>Clothing Store Website</h3>
                        <p>Modern responsive e-commerce design</p>
                    </div>
                    <div class="project">
                        <h3>Restaurant Website</h3>
                        <p>Interactive food ordering interface</p>
                    </div>
                    <p>More projects coming soon!</p>
                </body>
                </html>
            `);
            webWindow.document.close();
        });
    }

    // ========== 8. CONTACT FORM ALERT ==========
    const sendBtn = document.getElementById('sendMessageBtn');
    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            const name = document.getElementById('userName')?.value || '';
            if (name.trim() === '') {
                alert('Please enter your name!');
            } else {
                alert(`Thank you ${name}! Your message has been forwarded. I will contact you soon.`);
                document.getElementById('contactForm')?.reset();
            }
        });
    }

    // ========== 9. ACTIVE LINK HIGHLIGHT ON SCROLL ==========
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

});
