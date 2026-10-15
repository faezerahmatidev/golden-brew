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
const openNavBtn = document.querySelector("#open-nav");

if (navSidebar && cartSidebar && sidebarOverlay && openNavBtn) {
  const closeSidebars = () => {
    navSidebar.classList.add("translate-x-full");
    cartSidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("opacity-0", "invisible");
    openNavBtn.setAttribute("aria-expanded", "false");
  };

  const openSidebar = (sidebar) => {
    closeSidebars();
    sidebar.classList.remove("translate-x-full", "-translate-x-full");
    sidebarOverlay.classList.remove("opacity-0", "invisible");
    if (sidebar === navSidebar) {
      openNavBtn.setAttribute("aria-expanded", "true");
    }
  };

  openNavBtn.addEventListener("click", () => {
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebars();
    }
  });
}

document.querySelector("#mobile-theme").addEventListener("click", () => {
  toggleThemeBtn.click();
});

// Compact sticky header on scroll (desktop)
const siteHeader = document.querySelector("#top");
if (siteHeader) {
  const onScroll = () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
