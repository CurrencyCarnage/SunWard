export const ROUTES = {
  home: '/',
  catalog: '/catalog',
  miniLoaders: '/catalog/mini-loaders',
  model: '/catalog/mini-loaders/swl3220',
  financing: '/financing',
  news: '/news',
  newsArticle: '/news/global-service-journey',
  contacts: '/contacts',
}

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return ROUTES.home
  }

  const normalized = pathname.replace(/\/+$/, '')

  if (
    normalized === ROUTES.catalog ||
    normalized === ROUTES.miniLoaders ||
    normalized === ROUTES.model ||
    normalized === ROUTES.financing ||
    normalized === ROUTES.news ||
    normalized === ROUTES.newsArticle ||
    normalized === ROUTES.contacts
  ) {
    return normalized
  }

  return ROUTES.home
}

export function getCurrentPath() {
  if (typeof window === 'undefined') {
    return ROUTES.home
  }

  return normalizePath(window.location.pathname)
}

export function isNewsPath(pathname) {
  const normalized = normalizePath(pathname)
  return normalized === ROUTES.news || normalized === ROUTES.newsArticle
}
