import { catalogHero, catalogSections } from '../content/catalogContent'
import { ROUTES } from '../routes'

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function CatalogPage({ onNavigate }) {
  return (
    <main className="catalog-page">
      <section className="catalog-page__hero">
        <div className="catalog-page__hero-overlay layout-shell">
          <h1>{catalogHero.title}</h1>
        </div>
      </section>

      <section className="catalog-page__body layout-shell">
        <nav className="catalog-page__breadcrumbs" aria-label="Breadcrumb">
          <a href={ROUTES.home} onClick={onNavigate(ROUTES.home)}>
            მთავარი
          </a>
          <span>/</span>
          <strong>{catalogHero.breadcrumbCurrent}</strong>
        </nav>

        <div className="catalog-page__sections">
          {catalogSections.map((section) => (
            <article
              key={section.title}
              className={`catalog-feature${section.align === 'left' ? ' catalog-feature--image-left' : ''}`}
            >
              <div className="catalog-feature__copy">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <a className="button button--primary" href="#!">
                  ტექნიკის ნახვა <ArrowRight />
                </a>
              </div>

              <div className="catalog-feature__media">
                <img src={section.image} alt={section.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
