// ==================== STATS COUNTER ANIMATION ====================
document.addEventListener('DOMContentLoaded', function() {
    
    // Counter animation function
    function animateCounter(counterElement) {
        const target = parseInt(counterElement.getAttribute('data-target'));
        let current = 0;
        const increment = target / 80; // Smooth animation
        const duration = 2000; // 2 seconds
        const stepTime = duration / 80;
        
        // Don't animate if already at target
        if (parseInt(counterElement.innerText) === target) {
            return;
        }
        
        const updateCounter = setInterval(() => {
            current += increment;
            if (current >= target) {
                counterElement.innerText = target;
                clearInterval(updateCounter);
            } else {
                counterElement.innerText = Math.floor(current);
            }
        }, stepTime);
    }
    
    // Start counter on hover
    const statBoxes = document.querySelectorAll('.stat-box');
    let countersStarted = false;
    
    statBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            const counter = this.querySelector('.counter-num');
            if (counter && parseInt(counter.innerText) === 0) {
                animateCounter(counter);
            }
        });
    });
    
    // Also trigger when section comes into view (optional)
    const statsSection = document.querySelector('.stats-section');
    let countersAnimated = false;
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: "0px"
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                const counters = document.querySelectorAll('.counter-num');
                counters.forEach(counter => {
                    if (parseInt(counter.innerText) === 0) {
                        animateCounter(counter);
                    }
                });
            }
        });
    }, observerOptions);
    
    if (statsSection) {
        observer.observe(statsSection);
    }
});
// ==================== TYPEWRITER EFFECT ====================
document.addEventListener('DOMContentLoaded', function() {
    const texts = ['Web Developer', 'Programmer', 'Freelancer', 'Cricketer', 'Student'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        const typerElement = document.querySelector('.typer-text');
        if (typerElement) {
            typerElement.textContent = letter;
        }
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }());
});

// ==================== SERVICES SCROLL ====================
const servicesLink = document.querySelector('.nav-link[href="#services"]');
const servicesSection = document.querySelector('#services');
if (servicesLink && servicesSection) {
    servicesLink.addEventListener('click', function (e) {
        e.preventDefault(); 
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });
}

// ==================== PORTFOLIO SCROLL ====================
const portfolioLink = document.querySelector('.nav-link[href="#portfolio"]');
const portfolioSection = document.querySelector('#Portfolio');
if (portfolioLink && portfolioSection) {
    portfolioLink.addEventListener('click', function (e) {
        e.preventDefault(); 
        portfolioSection.scrollIntoView({ behavior: "smooth" });
    });
}

// ==================== SKILLS SCROLL ====================
const skillLink = document.querySelector('.nav-link[href="#skills"]');
const skillSection = document.querySelector('.skills-section');
if (skillLink && skillSection) {
    skillLink.addEventListener('click', function (e) {
        e.preventDefault(); 
        skillSection.scrollIntoView({ behavior: "smooth" });
    });
}

// ==================== INSTAGRAM LINK ====================
const instaIcon = document.querySelector('.fa-instagram');
if (instaIcon) {
    instaIcon.addEventListener('click', function(e) {
        e.preventDefault(); 
        window.open("https://www.instagram.com/56_b_a_b_a_r_56/", "_blank"); 
    });
}

// ==================== GITHUB LINK ====================
const githubIcon = document.querySelector('.fa-github');
if (githubIcon) {
    githubIcon.addEventListener('click', function(e) {
        e.preventDefault(); 
        window.open("https://github.com/AHME532", "_blank"); 
    });
}

// ==================== TWITTER LINK ====================
const twitterIcon = document.querySelector('.fa-x-twitter');
if (twitterIcon) {
    twitterIcon.addEventListener('click', function(e) {
        e.preventDefault(); 
        window.open("https://x.com/Ahmed_Tariq56", "_blank");             
    });
}

// ==================== FACEBOOK LINK ====================
const faceicon = document.querySelector('.fa-facebook');
if (faceicon) {
    faceicon.addEventListener('click', function(e) {
        e.preventDefault(); 
        window.open("https://www.facebook.com/Muhammad Tariq", "_blank"); 
    });
}

// ==================== WHATSAPP LINK ====================
const phoneNumber = "923246610748"; 
const prefilledText = "Assalam-o-Alaikum! How can I help you ?";

function showalert() {
    alert("Your message has been forwaded!");
}

const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const text = encodeURIComponent(prefilledText);
        const waLink = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(waLink, "_blank");
    });
}

// ==================== SKILLS PROGRESS BAR ANIMATION ====================
document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute("data-width");
                if (targetWidth) {
                    bar.style.width = targetWidth;
                }
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => {
        observer.observe(bar);
    });
});

// ==================== CERTIFICATE WINDOW ====================
document.addEventListener("DOMContentLoaded", function () {
    const openCode = document.getElementById("openCode");
    if (openCode) {
        openCode.addEventListener("click", function (e) {
            e.preventDefault();
            const newTabContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Certificates Section</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(-45deg, #3c0272, #1b477d, #6c6c6f, #3c0272);
      background-size: 400% 400%;
      animation: gradientBG 6s ease infinite;
    }
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    h2 {
      font-size: 1.3rem;
      text-align: center;
      margin-top: 10px;
      color: white;      
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      display: block;
      margin: auto;
    }
    .section {
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <div class="container-fluid py-4">
    <div class="row justify-content-center section">
      <div class="col-md-6 col-lg-4 text-center">
        <h2>This is my CV:</h2>
        <img src="CV.png" alt="CV">
      </div>
    </div>
    <div class="row justify-content-center section">
      <div class="col-md-6 col-lg-4 text-center">
        <h2>This is my Data Entry certificate:</h2>
        <img src="DE c.jpeg" alt="Data Entry Certificate">
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <h2>This is my Verfication Letter:</h2>
        <img src="VL DE.png" alt="VL DE Certificate">
      </div>
    </div>
    <div class="row justify-content-center section">
      <div class="col-md-6 col-lg-4 text-center">
        <h2>This is my Partner Graphic Design certificate:</h2>
        <img src="GD certi.jpeg" alt="Graphic Design Certificate">
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <h2>This is my Web Development Certificate:</h2>
        <img src="certificate.jpeg" alt="Another Certificate">
      </div>
    </div>
  </div>
</body>
</html>
            `;
            const newTab = window.open();
            if (newTab) {
                newTab.document.open();
                newTab.document.write(newTabContent);
                newTab.document.close();
            }
        });
    }
});

// ==================== PORTFOLIO WEBSITES WINDOW ====================
document.addEventListener("DOMContentLoaded", function () {
    const openweb = document.getElementById("openweb");
    if (openweb) {
        openweb.addEventListener("click", function (e) {
            e.preventDefault();
            const newTabContent2 = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AHMED</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      *{box-sizing:border-box}
      .slider-wrapper {
        width:100%;
        overflow:hidden;
        white-space:nowrap;
        background:#f5f5f5;
        padding:20px 0;
      }
      .slider {
        display:inline-block;
        padding-left:100%;
        animation:scroll-left 15s linear infinite;
      }
      .slider header {
        display:inline-block;
        text-align:center;
        margin:0 50px;
      }
      @keyframes scroll-left {
        0%{transform:translateX(0);}
        100%{transform:translateX(-100%);}
      }
      .w3-bar{width:100%;overflow:hidden}
      .w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}
      .w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}
      .w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
      .w3-container{padding:0.01em 16px}
      .w3-padding{padding:8px 16px!important}
      .w3-right{float:right!important}
      .w3-col{float:left;width:100%}
      .w3-display-container{position:relative}
      .w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);}
      .w3-padding-large{padding:12px 24px!important}
      .w3-image{max-width:100%;height:auto}
      .w3-text-white{color:#fff!important}
      .w3-jumbo{font-size:64px!important}
      .w3-hide-small{display:none!important}
      @media (min-width:601px){.w3-hide-small{display:block!important}}
    </style>
  </head>
  <body>
    <div class="w3-bar w3-black">
      <a href="#" class="w3-bar-item w3-button"><i class="fa-brands fa-facebook"></i></a>
      <a href="#" class="w3-bar-item w3-button"><i class="fa-brands fa-instagram"></i></a>
      <a href="#" class="w3-bar-item w3-button"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <div class="slider-wrapper">
      <div class="slider">
        <header class="w3-container w3-center w3-padding-48 w3-white" style="display:inline-block">
          <h1><b>JANE BLOGLIFE</b></h1>
          <h6>Welcome to the blog of <span class="w3-tag">Jane's world</span></h6>
        </header>
        <header class="w3-container w3-center w3-padding-48 w3-white" style="display:inline-block">
          <h1><b>JANE LOVELIFE</b></h1>
          <h6>Welcome to the love of <span class="w3-tag">Jane's world</span></h6>
        </header>
      </div>
    </div>
    <section class="w3-display-container w3-wide">
        <img class="w3-image" src="jan.jpg" alt="Fashion Blog" width="1600" height="1060">
        <div class="w3-display-left w3-padding-large">
          <h1 class="w3-text-white">Jane's</h1>
          <h1 class="w3-jumbo w3-text-white w3-hide-small"><b>FASHION BLOG</b></h1>
        </div>
    </section>
    <footer class="w3-container w3-dark-grey" style="padding:32px">
      <a href="#" class="w3-button w3-black w3-padding-large w3-margin-bottom">To the top</a>
      <p>Powered by w3.css</p>
    </footer>
  </body>
</html>
            `;
            const newTab = window.open();
            if (newTab) {
                newTab.document.open();
                newTab.document.write(newTabContent2);
                newTab.document.close();
            }
        });
    }
});
