const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Keep project cards compact: only the selected project expands.
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("toggle", () => {
    if (card.open) {
      document.querySelectorAll(".project-card").forEach((other) => {
        if (other !== card) other.open = false;
      });
    }
  });
});
