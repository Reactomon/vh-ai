document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll behavior
  const navbar = document.querySelector(".navbar");

  // Enhanced parallax effect for hero section
  const hero = document.querySelector(".hero");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    // Navbar behavior
    if (window.scrollY > 50) {
      navbar.style.padding = "0.5rem 0";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.padding = "1rem 0";
      navbar.style.boxShadow = "none";
    }

    // Enhanced parallax effect
    if (hero) {
      // Calculate how far down the page we've scrolled
      const scrollY = window.scrollY;
      // Move the background at a slower rate than the scroll (0.5 = half speed)
      const yPos = -(scrollY * 0.5);
      // Set the background position
      hero.style.backgroundPosition = `center ${yPos}px`;

      lastScrollY = scrollY;
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Add active class to nav items based on current page
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    } else if (link.classList.contains("active") && linkPage !== currentPage) {
      link.classList.remove("active");
    }
  });

  // Initialize tooltips if Bootstrap is available
  if (typeof bootstrap !== "undefined" && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Add animation to cards on scroll
  const animateOnScroll = function () {
    const cards = document.querySelectorAll(
      ".feature-card, .step-card, .testimonial-card, .tech-card, .benefit-card, .vision-card, .value-card"
    );

    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect();
      // Check if card is in viewport
      if (cardPosition.top < window.innerHeight && cardPosition.bottom > 0) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for cards
  const cards = document.querySelectorAll(
    ".feature-card, .step-card, .testimonial-card, .tech-card, .benefit-card, .vision-card, .value-card"
  );
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Run animation on load and scroll
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);

  // FAQ accordion behavior enhancement
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Scroll the clicked accordion item into view if it's not already visible
      setTimeout(() => {
        const accordionItem = this.closest(".accordion-item");
        const itemPosition = accordionItem.getBoundingClientRect();

        if (itemPosition.top < 0 || itemPosition.bottom > window.innerHeight) {
          window.scrollTo({
            top: window.scrollY + itemPosition.top - 100,
            behavior: "smooth",
          });
        }
      }, 300);
    });
  });
});

const toggleBtn = document.getElementById("toggleBtn");
const toggleBtnHide = document.getElementById("toggleBtnHide");
const moreText = document.getElementById("moreText");

toggleBtn.addEventListener("click", function () {
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    toggleBtn.style.display = "none";
    toggleBtnHide.style.display = "inline";
    moreText.style.display = 'inline';
  } else {
    moreText.style.display = "none";
    toggleBtn.textContent = "Show More";
    toggleBtn.classList.remove("show-more");
    toggleBtnHide.style.display = "none";
    moreText.style.display = 'block';
  }
});

toggleBtnHide.addEventListener("click", function () {
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    toggleBtn.style.display = "none";
    toggleBtnHide.style.display = "inline";
    moreText.style.display = 'inline';
  } else {
    moreText.style.display = "none";
    toggleBtn.style.display = "inline";
    toggleBtnHide.style.display = "none";
    moreText.style.display = 'none';
  }
});

const toggleBtnHideRobert = document.getElementById("toggleBtnHideRobert");
const toggleBtnRobert = document.getElementById("toggleBtnRobert");
const moreTextRobert = document.getElementById("more-description-robert");

toggleBtnRobert.addEventListener("click", function () {
  if (moreTextRobert.style.display === "none" || moreTextRobert.style.display === "") {
    moreTextRobert.style.display = "inline";
    toggleBtnRobert.style.display = "none";
    toggleBtnHideRobert.style.display = "inline";
    moreTextRobert.style.display = 'inline';
  } else {
    moreTextRobert.style.display = "none";
    toggleBtnRobert.textContent = "Show More";
    toggleBtnRobert.classList.remove("show-more");
    toggleBtnHideRobert.style.display = "none";
    moreTextRobert.style.display = 'block';
  }
});

toggleBtnHideRobert.addEventListener("click", function () {
  if (moreTextRobert.style.display === "none" || moreTextRobert.style.display === "") {
    moreTextRobert.style.display = "inline";
    toggleBtnRobert.style.display = "none";
    toggleBtnHideRobert.style.display = "inline";
    moreTextRobert.style.display = 'inline';
  } else {
    moreTextRobert.style.display = "none";
    toggleBtnRobert.style.display = "inline";
    toggleBtnHideRobert.style.display = "none";
    moreTextRobert.style.display = 'none';
  }
});











// const toggleBtnRobert = document.getElementById("toggleBtnRobert");
// const moreTextRobert = document.getElementById("more-description-robert");

// toggleBtnRobert.addEventListener("click", function () {
//   if (
//     moreTextRobert.style.display === "none" ||
//     moreTextRobert.style.display === ""
//   ) {
//     moreTextRobert.style.display = "inline";
//     toggleBtnRobert.textContent = "Show Less";
//     toggleBtnRobert.classList.add(".show-more");
//   } else {
//     moreTextRobert.style.display = "none";
//     toggleBtnRobert.textContent = "Show More";
//     toggleBtnRobert.classList.remove("show-more");
//   }
// });
