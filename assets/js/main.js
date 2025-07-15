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
