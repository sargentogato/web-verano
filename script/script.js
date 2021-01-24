const toggleButton = document.getElementById("toggleButton")
// const menu = document.getElementById("menu")
const menuItems = document.querySelector("ul")
let itemMenu = document.getElementsByClassName("menu-link")
const menu = document.getElementById("menu")
/* Listing Clicks */
// document.addEventListener("click", menuLinkHandler)
toggleButton.addEventListener("click", menuVisibility)
document.addEventListener("scroll", scrollSpy)

for (let iterator of itemMenu) {
  iterator.addEventListener("click", menuLinkHandler)
}

function menuLinkHandler() {
  menuItems.classList.toggle("menu-hidden")
  toggleButton.classList.toggle("active")
}

function menuVisibility() {
  menuItems.classList.toggle("menu-visible")
  menuItems.classList.toggle("menu-hidden")
}

function menuColor() {
  document.documentElement.style.setProperty("--menu-color", "#e9c009")
}

function scrollSpy() {
  const section = document.querySelectorAll("header[data-scroll-spy]")
  // const section = document.querySelectorAll("section[data-scroll-spy]")

  function callback(entries) {
    entries.forEach((entry) => {
      const elementoObserver = entry.target.getAttribute("id")
      if (elementoObserver === "howToUse") {
        console.log(elementoObserver)
      }
    })
    // console.log(entries)
  }

  const observer = new IntersectionObserver(callback, {})

  section.forEach((element) => observer.observe(element))
}
