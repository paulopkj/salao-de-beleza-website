      // Loader animation
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.getElementById("loader").classList.add("hide");
        }, 600); // loader stays for 0.6s
      });

      // Fade-in animation for sections
      document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        function revealSections() {
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
              section.classList.add("visible");
            }
          });
        }
        window.addEventListener("scroll", revealSections);
        revealSections();
      });