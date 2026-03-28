import { newsArticleContent, shareChannels } from '../content/newsContent'
import { ROUTES } from '../routes'

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function NewsArticlePage({ onNavigate }) {
  return (
    <main className="news-article-page">
      <section className="news-article-page__body layout-shell">
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <a href={ROUTES.home} onClick={onNavigate(ROUTES.home)}>
            მთავარი
          </a>
          <span>/</span>
          <a href={ROUTES.news} onClick={onNavigate(ROUTES.news)}>
            სიახლეები
          </a>
        </nav>

        <div className="news-article-page__top">
          <article className="news-article-page__copy">
            <h1>{newsArticleContent.title}</h1>
            <div className="news-article-page__meta">
              <span className="news-article-page__clock">
                <ClockIcon />
              </span>
              <time>{newsArticleContent.articleDate}</time>
            </div>

            {newsArticleContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className="news-article-page__side">
            <div className="share-links share-links--article">
              <span>გააზიარეთ:</span>
              <div className="share-links__items">
                {shareChannels.map((channel) => (
                  <a key={channel.label} href={channel.href} aria-label={channel.label}>
                    {channel.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="news-article-page__poster">
              <img src={newsArticleContent.image} alt={newsArticleContent.alt} />
            </div>
          </aside>
        </div>

        <div className="news-article-page__gallery">
          {newsArticleContent.gallery.map((item) => (
            <figure key={item.image} className="news-article-page__gallery-card">
              <img src={item.image} alt={item.alt} />
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}
