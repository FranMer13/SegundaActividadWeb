let isTextVisible = false;

function toggleText() {
  const additionalText = document.querySelector(".additional");
  const toggleLink = document.querySelector("a");

  if (isTextVisible) {
    additionalText.classList.remove("visible");
    additionalText.classList.add("hidden");
    toggleLink.textContent = "Seguir leyendo";
  } else {
    additionalText.classList.remove("hidden");
    additionalText.classList.add("visible"); 
    toggleLink.textContent = "Ocultar exceso de texto";
  }

  isTextVisible = !isTextVisible;
}
