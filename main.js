const themeToggle = document.querySelector("#theme-toggle")
const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

let currentTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light")
document.documentElement.setAttribute("data-theme", currentTheme)
