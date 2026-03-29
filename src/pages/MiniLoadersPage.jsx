import {
  miniLoaderCards,
  miniLoaderCategories,
  miniLoadersEditorial,
  miniLoadersEnvironment,
  miniLoadersFeatures,
  miniLoadersHero,
  miniLoadersService,
} from '../content/miniLoadersContent'

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MiniLoadersPage({ onNavigate }) {
  return (
    <main className="mini-loaders-page">
      <section className="mini-loaders-page__hero">
        <div className="mini-loaders-page__hero-overlay layout-shell">
          <h1>{miniLoadersHero.title}</h1>
        </div>
      </section>

      <section className="mini-loaders-page__body layout-shell">
        <nav className="mini-loaders-page__breadcrumbs" aria-label="Breadcrumb">
          {miniLoadersHero.breadcrumbItems.map((item, index) => (
            <span key={item.label}>
              {item.href ? (
                <a href={item.href} onClick={onNavigate(item.href)}>
                  {item.label}
                </a>
              ) : (
                <strong>{item.label}</strong>
              )}
              {index < miniLoadersHero.breadcrumbItems.length - 1 ? <span> / </span> : null}
            </span>
          ))}
        </nav>

        <section className="mini-loaders-page__catalog">
          <aside className="mini-loaders-sidebar">
            <span className="mini-loaders-sidebar__label">კატეგორია</span>
            <ul>
              {miniLoaderCategories.map((item) => (
                <li key={item.label}>
                  <button className={item.active ? 'is-active' : undefined} type="button">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mini-loaders-grid">
            {miniLoaderCards.map((item) => (
              <article key={item.model} className="mini-loader-card">
                <span className={`mini-loader-card__badge${item.badge === 'ჰიტი' ? ' mini-loader-card__badge--hit' : ''}`}>
                  {item.badge}
                </span>
                <div className="mini-loader-card__image">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <div className="mini-loader-card__copy">
                  <p>{item.category}</p>
                  <h2>{item.model}</h2>
                  <dl>
                    <div>
                      <dt>ძრავა</dt>
                      <dd>{item.engine}</dd>
                    </div>
                    <div>
                      <dt>სიმძლავრე, კვტ/ბრ/წთ</dt>
                      <dd>{item.power}</dd>
                    </div>
                    <div>
                      <dt>{item.weightLabel}</dt>
                      <dd>{item.weight}</dd>
                    </div>
                    <div>
                      <dt>ტვირთამწეობა, კგ</dt>
                      <dd>{item.payload}</dd>
                    </div>
                    <div>
                      <dt>გაბარიტები, მმ</dt>
                      <dd>{item.dimensions}</dd>
                    </div>
                  </dl>
                  <a href={item.route ?? '#!'} onClick={item.route ? onNavigate(item.route) : undefined}>
                    დეტალურად <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mini-loaders-editorial">
          <div className="mini-loaders-editorial__copy">
            <h2>{miniLoadersEditorial.title}</h2>
            {miniLoadersEditorial.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <button className="button button--primary" type="button">
              {miniLoadersEditorial.cta} <ArrowRight />
            </button>
          </div>

          <div className="mini-loaders-editorial__media">
            <img src={miniLoadersEditorial.image} alt={miniLoadersEditorial.alt} loading="lazy" />
          </div>
        </section>

        <section className="mini-loaders-features">
          <h2>პროდუქციის თავისებურებები</h2>
          <div className="mini-loaders-features__grid">
            {miniLoadersFeatures.map((item) => (
              <article key={item} className="mini-loaders-features__item">
                <span aria-hidden="true">✦</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mini-loaders-service">
          <div className="mini-loaders-service__copy">
            <h2>{miniLoadersService.title}</h2>
            <p>{miniLoadersService.intro}</p>
            <ul>
              {miniLoadersService.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mini-loaders-service__details">
              {miniLoadersService.sections.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mini-loaders-service__media">
            <img src={miniLoadersService.image} alt={miniLoadersService.alt} loading="lazy" />
          </div>
        </section>

        <section className="mini-loaders-environment">
          <div className="mini-loaders-environment__copy">
            <h2>{miniLoadersEnvironment.title}</h2>
            <p>{miniLoadersEnvironment.description}</p>
            <div className="mini-loaders-environment__stats">
              {miniLoadersEnvironment.stats.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="mini-loaders-environment__media">
            <img src={miniLoadersEnvironment.image} alt={miniLoadersEnvironment.alt} loading="lazy" />
          </div>
        </section>
      </section>
    </main>
  )
}
