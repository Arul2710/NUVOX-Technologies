const HEADER_OFFSET = -88

export function scrollToId(id: string, offset = HEADER_OFFSET) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function scrollToSection(hash: string) {
  scrollToId(hash.replace('#', ''))
}

export function scrollToTop(immediate = true) {
  window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}
