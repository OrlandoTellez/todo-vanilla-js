const themeToggle = document.querySelector("#theme-toggle")
const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

let currentTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light")
document.documentElement.setAttribute("data-theme", currentTheme)

function actualizarIconoTheme(){
    const icon = themeToggle.querySelector("i")
    icon.className = currentTheme === "light" ? "fas fa-moon" : "fas fa-sun"
}

themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ?"dark" : "light"
    document.documentElement.setAttribute("data-theme", currentTheme)
    localStorage.setItem("theme", currentTheme)
    actualizarIconoTheme()
})

actualizarIconoTheme()

