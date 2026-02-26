function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //se tiver a classe light, adicionar a imagem light, se não tiver, adicionar a imagem dark
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
