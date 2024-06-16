// --------------------Swich the Window--------------------
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu button");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetSectionId = this.getAttribute("data-section");
      const targetSection = document.getElementById(targetSectionId);

      sections.forEach((section) => {
        if (section.classList.contains("active")) {
          section.classList.remove("active");
          setTimeout(() => {
            section.style.opacity = "0";
            section.style.transform = "translateX(100%)";
          }, 500);
        }
      });

      setTimeout(() => {
        targetSection.classList.add("active");
        targetSection.style.opacity = "1";
        targetSection.style.transform = "translateX(0)";
      }, 500);
    });
  });
});

// -----------------------Animation Text homepage-----------------------
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
                  }, 1000); // Păstrează textul 2 vizibil timp de 3 secunde
                }
              );
            }
          );
        }, 1000); // Păstrează textul 1 vizibil timp de 3 secunde
      }
    );
  }

  startAnimations(); // Pornește animațiile
});

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu button");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetSectionId = this.getAttribute("data-section");
      const targetSection = document.getElementById(targetSectionId);

      sections.forEach((section) => {
        if (section.classList.contains("active")) {
          section.classList.remove("active");
          setTimeout(() => {
            section.style.opacity = "0";
            section.style.transform = "translateX(100%)";
          }, 500);
        }
      });

      setTimeout(() => {
        targetSection.classList.add("active");
        targetSection.style.opacity = "1";
        targetSection.style.transform = "translateX(0)";
      }, 500);

      menuItems.forEach((button) => {
        button.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // Set the initial active button based on the initial active section
  const initialActiveSection = document.querySelector(".section.active");
  if (initialActiveSection) {
    const initialButton = document.querySelector(
      `.menu button[data-section="${initialActiveSection.id}"]`
    );
    if (initialButton) {
      initialButton.classList.add("active");
    }
  }
});
