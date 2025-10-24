 // Simple typewriter effec
    document.addEventListener('DOMContentLoaded', function() {
        const texts = ['Web Developer', 'Programmer', 'Freelancer', 'Graphic designer', 'Student'];
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
            
            document.querySelector('.typer-text').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000);
            } else {
                setTimeout(type, 100);
            }
        }());
    });
     // Services ka scroll!
  const servicesLink = document.querySelector('.nav-link[href="#services"]');
  const servicesSection = document.querySelector('#services');
  servicesLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    servicesSection.scrollIntoView({ behavior: "smooth" });
  });
  //skill ka scroll
    const skillLink = document.querySelector('.nav-link[href="#skills"]');
  const skillSection = document.querySelector('.skills-section');
  skillLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    skillSection.scrollIntoView({ behavior: "smooth" });
  });
  // github ky liyeh yeh hy
    const githubLink = "https://github.com/AHME532";
  const githubIcon = document.querySelector('.fa-github');
   githubIcon.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.open("https://github.com/AHME532", "_blank"); 
  });
  // mare instagram id 
  const instagramLink = "https://www.instagram.com/ahmed_b0ss47/";
  const instaIcon = document.querySelector('.fa-instagram');
   instaIcon.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.open("https://www.instagram.com/ahmed_b0ss47/", "_blank"); 
  });
    // mare twitter id 
  const twitterLink = "https://x.com/Ahmed_Tariq56"; 
  const twitterIcon = document.querySelector('.fa-x-twitter');
  twitterIcon.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.open(twitterLink, "_blank");             
  });
  // ywh facebook ka hy
  const facebookLink = "https://www.facebook.com/Muhammad Tariq";
  const faceicon = document.querySelector('.fa-facebook');
  faceicon.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.open(facebookLink, "_blank"); 
  });
  const phoneNumber = "923246610748"; 
  const prefilledText = "Assalamualaikum! Mujhe aapki service ke baare mein maloomat chahiye.";
  document.getElementById("whatsappBtn").addEventListener("click", function (e) {
    e.preventDefault();

    // Encode message for URL
    const text = encodeURIComponent(prefilledText);

    // Construct wa.me link (works both on mobile and desktop; desktop opens web.whatsapp.com)
    const waLink = `https://wa.me/${phoneNumber}?text=${text}`;

    // Open in new tab/window
    window.open(waLink, "_blank");

  });

