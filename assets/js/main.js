document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("dark-mode-toggle");
  if (!toggle) return;

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.innerText = "☀️";
  } else {
    toggle.innerText = "🌙";
  }

  toggle.addEventListener("click", function () {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      toggle.innerText = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggle.innerText = "☀️";
    }
  });
});
// Apply dark/light mode to top navigation bar
.masthead, .masthead nav, .site-header {
  background-color: var(--bg-color) !important;
  color: var(--text-color) !important;
}

.masthead a,
.masthead .site-title,
.masthead .site-nav a {
  color: var(--text-color) !important;
}
