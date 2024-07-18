// ------------------------transition sections---------------------
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".section");
  const burgerMenu = document.getElementById("burger-menu");
  const menu = document.getElementById("menu");
  const mainContent = document.getElementById("main-content");

  // Inițial, ascundem toate secțiunile în afară de cea activă
  sections.forEach((section) => {
    if (!section.classList.contains("active")) {
      section.classList.add("animate__animated", "animate__zoomOut");
      section.style.display = "none";
    }
  });

  const homeSection = document.getElementById("home");
  homeSection.style.display = "block";
  homeSection.classList.add("animate__animated", "animate__zoomIn");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const activeSection = document.querySelector(".section.active");
      const targetSection = document.getElementById(this.dataset.section);

      if (activeSection && targetSection && activeSection !== targetSection) {
        menuItems.forEach((mi) => mi.classList.remove("active"));
        this.classList.add("active");

        activeSection.classList.remove("active");
        activeSection.classList.remove("animate__zoomIn");
        activeSection.classList.add("animate__zoomOut");

        setTimeout(() => {
          activeSection.style.display = "none";
          targetSection.style.display = "block";
          targetSection.classList.remove("animate__zoomOut");
          targetSection.classList.add("animate__zoomIn");
          targetSection.classList.add("active");

          // Set scroll position to top
          window.scrollTo(0, 0);
        }, 500); // Durata animației zoomOut
      }

      if (window.innerWidth < 768) {
        menu.classList.remove("active");
        mainContent.classList.remove("blur");
      }
    });
  });

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
    mainContent.classList.toggle("blur");
  });

  // Portfolio item hover and click behavior
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    const video = item.querySelector(".portfolio-video");

    item.addEventListener("mouseover", () => {
      video.play();
    });

    item.addEventListener("mouseout", () => {
      video.pause();
      video.currentTime = 0; // Reset video to start
    });

    item.addEventListener("click", () => {
      const url = item.dataset.url;
      window.open(url, "_blank");
    });
  });
});

// ------------------------ header scroll------------------
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      if (!header.classList.contains("scrolled")) {
        header.classList.add("scrolled");
      }
    } else {
      if (header.classList.contains("scrolled")) {
        header.classList.remove("scrolled");
      }
    }
  });
});

//-----------------------------------------title animation------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const animatedText1 = document.querySelector(".animatedText");
  const animatedText2 = document.querySelector(".animatedText2");

  function animateText(element, from, to, duration, callback) {
    element.style.transition = `opacity ${duration}s, transform ${duration}s`;
    element.style.opacity = from.opacity;
    element.style.transform = from.transform;

    setTimeout(() => {
      element.style.opacity = to.opacity;
      element.style.transform = to.transform;

      if (callback) {
        setTimeout(callback, duration * 500);
      }
    }, 100);
  }

  function startAnimations() {
    animateText(
      animatedText1,
      { opacity: 0, transform: "translateX(-50%)" },
      { opacity: 1, transform: "translateX(0)" },
      2,
      () => {
        setTimeout(() => {
          animateText(
            animatedText1,
            { opacity: 1, transform: "translateX(0)" },
            { opacity: 0, transform: "translateX(-50%)" },
            2,
            () => {
              animateText(
                animatedText2,
                { opacity: 0, transform: "translateX(50%)" },
                { opacity: 1, transform: "translateX(0)" },
                2,
                () => {
                  setTimeout(() => {
                    animateText(
                      animatedText2,
                      { opacity: 1, transform: "translateX(0)" },
                      { opacity: 0, transform: "translateX(50%)" },
                      2,
                      () => {
                        setTimeout(startAnimations, 100);
                      }
                    );
                  }, 1000);
                }
              );
            }
          );
        }, 1000);
      }
    );
  }

  startAnimations();
});

//-----------------------------------------Portfolio------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    const video = item.querySelector(".portfolio-video");
    const description = item.querySelector(".portfolio-description");

    // Asigură redarea video-ului la încărcare
    video.play();

    item.addEventListener("mouseenter", () => {
      description.style.transform = "translateY(0)";
    });

    item.addEventListener("mouseleave", () => {
      description.style.transform = "translateY(100%)";
      // Asigură continuarea redării video-ului dacă este întrerupt
      video.play();
    });
  });
});

function copyPhoneNumber() {
  const phoneNumber = "0772098607";
  const tempInput = document.createElement("input");
  tempInput.value = phoneNumber;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Phone number copied to clipboard: " + phoneNumber);
}
