// Función para que el scroll del hashLink se posicione on top
export const handleHashLink = (el) => {
  const yOffset = -100
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
}
