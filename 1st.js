 // Simple typewriter effect
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
  // mare instagram id 
  const instagramLink = "https://www.instagram.com/ahmed_b0ss47/";
  const instaIcon = document.querySelector('.fa-instagram');
   instaIcon.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.open("https://www.instagram.com/ahmed_b0ss47/", "_blank"); 
  });
  // github ky liyeh yeh hy
    const githubLink = "https://github.com/AHME532";
  const githubIcon = document.querySelector('.fa-github');
   githubIcon.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.open("https://github.com/AHME532", "_blank"); 
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
  const phoneNumber = "923246610364"; 
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
document.addEventListener("DOMContentLoaded", function () {
  const openCode = document.getElementById("openCode");

  openCode.addEventListener("click", function (e) {
    e.preventDefault();

    // Yeh HTML content nayi tab mein khulega
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

    <!-- CV Section -->
    <div class="row justify-content-center section">
      <div class="col-md-6 col-lg-4 text-center">
        <h2>This is my CV:</h2>
        <img src="CV.png" alt="CV">
      </div>
    </div>

    <!-- Data Entry + VL DE -->
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

    <!-- Graphic Design + Web Dev -->
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

    // Nayi tab open karo aur usme HTML likh do
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(newTabContent);
    newTab.document.close();
  });
});

