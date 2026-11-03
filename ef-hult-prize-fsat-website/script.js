// Shared interactions used on every page.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

// Toggle the mobile navigation menu.
menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Close the mobile menu after selecting a page.
navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

// Display the current year in the footer.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Hide a broken remote logo instead of showing a broken-image symbol.
document.querySelectorAll(".brand-logo, .footer-brand img").forEach((logo) => {
  logo.addEventListener("error", () => { logo.style.display = "none"; });
});
