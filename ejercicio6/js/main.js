document.addEventListener("DOMContentLoaded", function() {
    const toggleLinks = document.querySelectorAll(".toggle-link");
    toggleLinks.forEach(link => {
      const paragraph = link.previousElementSibling;
  
      paragraph.style.display = "block";
  
      link.addEventListener("click", function(event) {
        event.preventDefault();

        if (paragraph.style.display === "none" || paragraph.style.display === "") {
          paragraph.style.display = "block";
          this.textContent = "Ocultar contenidos";
        } else {
          paragraph.style.display = "none";
          this.textContent = "Mostrar contenidos";
        }
      });
    });
  });
  