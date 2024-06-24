document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll reveal animations
  const scrollElements = document.querySelectorAll(".scroll-reveal");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Hover effect for course cards
  const courseCards = document.querySelectorAll(".course");
  courseCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseout", () => {
      card.classList.remove("hovered");
    });
  });

  // Horizontal scroll for course list
  const courseList = document.querySelector(".course-list");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  arrowLeft.addEventListener("click", () => {
    courseList.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  arrowRight.addEventListener("click", () => {
    courseList.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });

  // Theme toggle
  const themeIcon = document.getElementById("theme-icon");
  themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeIcon.name = document.body.classList.contains("dark-mode") ? "moon-outline" : "sunny-outline";
  });

  // Toggle forms
  const overlay = document.getElementById("overlay");
  const formContainer = document.getElementById("form-container");

  window.toggleForm = (formType) => {
    overlay.style.display = "block";
    formContainer.style.display = "block";
    document.getElementById("login-form").style.display = formType === "login" ? "block" : "none";
    document.getElementById("signup-form").style.display = formType === "signup" ? "block" : "none";
  };

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    formContainer.style.display = "none";
  });

  // Menu show/hide for mobile
  const navToggle = document.getElementById('nav-toggle');
  const navContent = document.getElementById('nav-content');
  const search = document.getElementById('search');
  const auth = document.getElementById('auth');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('active');
      if (navbar.classList.contains('active')) {
        search.style.display = 'none';
        auth.style.display = 'none';
      } else {
        search.style.display = 'flex';
        auth.style.display = 'flex';
      }
    });
  }

  // Close menu when link is clicked (mobile)
  const navLinks = document.querySelectorAll('.menu ul li a');
  if (navLinks) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('active');
        // auth.style.display = 'flex';
      });
    });
    
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 480) {
      search.style.display = 'none';
      auth.style.display = 'none';
    }
  });

  // Reset search and auth button visibility on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      search.style.display = 'flex';
      auth.style.display = 'flex';
    }
  });

  // Scroll sections active link
  const sections = document.querySelectorAll("section[id]");
  function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(".menu ul li a[href*=" + sectionId + "]");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add("active");
      } else {
        if (navLink) navLink.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);

  // Scroll reveal animation
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });

  sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
  sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
  sr.reveal(".home__social-icon", { interval: 200 });
  sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
});
