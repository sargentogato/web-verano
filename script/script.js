const toggleButton = document.getElementById("toggleButton") // SVG
const menuUl = document.querySelector("ul")
let itemMenu = document.getElementsByClassName("menu__link")

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
