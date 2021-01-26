window.screen.lockOrientation("portrait")
const toggleButton = document.getElementById("toggleButton") // SVG
const menuUl = document.querySelector("ul")
let itemMenu = document.getElementsByClassName("menu__link")
const sections = document.querySelectorAll("header[data-scroll-spy], section[data-scroll-spy]")

/*
 * Listening the clicks
 */
toggleButton.addEventListener("click", menuVisibility)

/*
 * Menu
 */
for (let iterator of itemMenu) {
  iterator.addEventListener("click", menuLinkHandler)
}

function menuLinkHandler() {
  menuUl.classList.toggle("menu-hidden")
  toggleButton.classList.toggle("active")
}

function menuVisibility() {
  menuUl.classList.toggle("menu-visible")
  menuUl.classList.toggle("menu-hidden")
}

/* egg */
let position = 0
const egg = document.getElementById("egg")
function setTime() {
  console.log("Función llamada")
  for (let index = 1; index <= 7; index++) {
    position = positionGenerator()
    document.documentElement.style.setProperty(`--n${index}`, `${position}%`)
    console.log(position)
    console.log("variable:", index)
  }
  document.documentElement.style.setProperty("--egg", "display")
  setTimeout(() => {
    document.documentElement.style.setProperty("--egg", "none")
  }, 10000)
}

egg.addEventListener("click", setTime)

function positionGenerator() {
  let counter = 0
  console.log("llamda de la función ", counter++)
  return Math.floor(Math.random() * 60)
}
