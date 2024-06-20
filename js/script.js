document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".section");
  const burgerMenu = document.getElementById("burger-menu");
  const menu = document.getElementById("menu");

  sections.forEach((section) => {
    if (!section.classList.contains("active")) {
      section.style.display = "none";
      section.style.transform = "scale(0.5) translate(-150%, -50%)";
    }
  });

  const homeSection = document.getElementById("home");
  homeSection.style.display = "block";
  homeSection.style.transform = "scale(1) translate(0, 0)";
  homeSection.style.transition = "transform 0.5s ease-in-out";

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const activeSection = document.querySelector(".section.active");
      const targetSection = document.getElementById(this.dataset.section);

      if (activeSection && targetSection && activeSection !== targetSection) {
        menuItems.forEach((mi) => mi.classList.remove("active"));
        this.classList.add("active");

        activeSection.classList.remove("active");
        activeSection.style.transform = "scale(0.5) translate(-50%, -50%)";
        activeSection.style.transition = "transform 0.5s ease-in-out";

        setTimeout(() => {
          activeSection.style.transform = "scale(0.5) translate(-200%, -50%)";
          activeSection.style.transition = "transform 0.5s ease-in-out";

          setTimeout(() => {
            activeSection.style.display = "none";
            targetSection.style.display = "block";
            targetSection.style.transform = "scale(0.5) translate(150%, -50%)";
            targetSection.style.transition = "transform 0.75s ease-in-out";

            setTimeout(() => {
              targetSection.style.transform =
                "scale(0.5) translate(-50%, -50%)";

              setTimeout(() => {
                targetSection.style.transform = "scale(1) translate(0, 0)";
                targetSection.classList.add("active");
              }, 750);
            }, 1);
          }, 750);
        }, 750);
      }

      if (window.innerWidth < 768) {
        menu.classList.remove("active");
      }
    });
  });

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

//-----------------------------------------

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
