import { featuredNewsArticle, newsPageCards, shareChannels } from '../content/newsContent'
import { ROUTES } from '../routes'

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function NewsPage({ onNavigate }) {
  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="news-hero__overlay">
          <h1>კომპანიის სიახლეები</h1>
        </div>
      </section>

      <section className="news-page__body layout-shell">
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <a href={ROUTES.home} onClick={onNavigate(ROUTES.home)}>
            მთავარი
          </a>
          <span>/</span>
          <strong>სიახლეები</strong>
        </nav>

        <article className="featured-news-card">
          <div className="featured-news-card__poster">
            <img src={featuredNewsArticle.image} alt={featuredNewsArticle.alt} />
          </div>

          <div className="featured-news-card__content">
            <h2>{featuredNewsArticle.title}</h2>
            <div className="featured-news-card__meta">
              <span className="featured-news-card__clock">
                <ClockIcon />
              </span>
              <time>{featuredNewsArticle.date}</time>
            </div>
            <p>{featuredNewsArticle.excerpt}</p>

            <div className="featured-news-card__footer">
              <a className="button button--primary" href={featuredNewsArticle.route} onClick={onNavigate(featuredNewsArticle.route)}>
                სრულად წაკითხვა <ArrowRight />
              </a>

              <div className="share-links">
                <span>გააზიარეთ:</span>
                <div className="share-links__items">
                  {shareChannels.map((channel) => (
                    <a key={channel.label} href={channel.href} aria-label={channel.label}>
                      {channel.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="news-page__grid">
          {newsPageCards.map((item) => (
            <article key={item.title} className="news-list-card">
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
              <div className="news-list-card__meta">
                <span className="news-list-card__clock">
                  <ClockIcon />
                </span>
                <time>{item.date}</time>
              </div>
              <p>{item.excerpt}</p>
              <a href={item.route} onClick={onNavigate(item.route)}>
                სრულად წაკითხვა <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
