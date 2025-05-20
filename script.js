function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
// pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode add oculos
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se nao tiver deixa normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
