let tituloAnterior = document.title

// Código que se ejecuta cuando cambia de pestaña
window.addEventListener('blur', () => {
  tituloAnterior = document.title
  document.title = "¡Vuelve pronto! 😉"
}) 

window.addEventListener('focus', () => {
    document.title = tituloAnterior
})