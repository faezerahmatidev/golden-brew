const toggleThemeBtn = document.querySelector("#toggle-theme");

toggleThemeBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});

// Mobile sidebars (nav slides from right, cart slides from left)
const navSidebar = document.querySelector("#nav-sidebar");
const cartSidebar = document.querySelector("#cart-sidebar");
const sidebarOverlay = document.querySelector("#sidebar-overlay");

const closeSidebars = () => {
  navSidebar.classList.add("translate-x-full");
  cartSidebar.classList.add("-translate-x-full");
  sidebarOverlay.classList.add("opacity-0", "invisible");
};

const openSidebar = (sidebar) => {
  closeSidebars();
  sidebar.classList.remove("translate-x-full", "-translate-x-full");
  sidebarOverlay.classList.remove("opacity-0", "invisible");
};

document.querySelector("#open-nav").addEventListener("click", () => {
  openSidebar(navSidebar);
});

document.querySelector("#open-cart").addEventListener("click", () => {
  openSidebar(cartSidebar);
});

document.querySelector("#open-cart-nav").addEventListener("click", () => {
  openSidebar(cartSidebar);
});

document.querySelector("#close-nav").addEventListener("click", closeSidebars);
document.querySelector("#close-cart").addEventListener("click", closeSidebars);
sidebarOverlay.addEventListener("click", closeSidebars);

document.querySelector("#mobile-theme").addEventListener("click", () => {
  toggleThemeBtn.click();
});
