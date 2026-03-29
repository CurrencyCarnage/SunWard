import { useState } from 'react'
import {
  modelBenefits,
  modelContact,
  modelGallery,
  modelHero,
  modelOverview,
  modelSpecs,
  modelTabs,
} from '../content/modelContent'
import { ROUTES } from '../routes'

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ModelPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('specs')
  const [activeImage, setActiveImage] = useState(modelGallery[0])

  return (
    <main className="model-page">
      <section className="model-page__hero">
        <div className="model-page__hero-overlay layout-shell">
          <h1>{modelHero.title}</h1>
        </div>
      </section>

      <section className="model-page__body layout-shell">
        <nav className="model-page__breadcrumbs" aria-label="Breadcrumb">
          {modelHero.breadcrumbItems.map((item, index) => (
            <span key={item.label}>
              {item.href ? (
                <a href={item.href} onClick={onNavigate(item.href)}>
                  {item.label}
                </a>
              ) : (
                <strong>{item.label}</strong>
              )}
              {index < modelHero.breadcrumbItems.length - 1 ? <span> / </span> : null}
            </span>
          ))}
        </nav>

        <section className="model-page__overview">
          <div className="model-gallery">
            <div className="model-gallery__main">
              <img src={activeImage.image} alt={activeImage.alt} />
            </div>
            <div className="model-gallery__thumbs" aria-label="Product gallery">
              {modelGallery.map((item) => (
                <button
                  key={item.image}
                  className={`model-gallery__thumb${activeImage.image === item.image ? ' is-active' : ''}`}
                  type="button"
                  onClick={() => setActiveImage(item)}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="model-summary">
            <h2>{modelOverview.title}</h2>
            <p>{modelOverview.description}</p>

            <dl className="model-summary__highlights">
              {modelOverview.highlights.map((item) => (
                <div key={item.label} className="model-summary__row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <button className="button button--primary model-summary__cta" type="button">
              {modelOverview.primaryCta} <ArrowRight />
            </button>
          </div>
        </section>

        <section className="model-tabs" aria-label="Product information tabs">
          {modelTabs.map((tab) => (
            <button
              key={tab.id}
              className={`model-tabs__button${activeTab === tab.id ? ' is-active' : ''}`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </section>

        <section className="model-page__panel">
          {(activeTab === 'specs' || activeTab === 'download' || activeTab === 'video') && (
            <div className="model-specs">
              <h2>{modelOverview.title}</h2>
              <div className="model-specs__grid">
                {modelSpecs.map((group) => (
                  <article key={group.title} className="model-specs__group">
                    <h3>{group.title}</h3>
                    <dl>
                      {group.rows.map((row) => (
                        <div key={row.label} className="model-specs__item">
                          <dt>{row.label}</dt>
                          <dd>{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>

              {activeTab === 'video' ? (
                <p className="model-page__note">ვიდეოს ბლოკი მზად არის შემდგომი შევსებისთვის.</p>
              ) : null}
              {activeTab === 'download' ? (
                <p className="model-page__note">ჩამოტვირთვის ღილაკი შეგვიძლია შემდეგ ეტაპზე დავუკავშიროთ რეალურ ფაილს.</p>
              ) : null}
            </div>
          )}

          {activeTab === 'features' ? (
            <div className="model-features">
              <h2>{modelOverview.title}</h2>
              <div className="model-features__grid">
                {modelBenefits.map((item) => (
                  <article key={item} className="model-features__item">
                    <span className="model-features__check" aria-hidden="true">
                      ✓
                    </span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <section className="model-contact">
          <div className="model-contact__intro">
            <h2>{modelContact.title}</h2>
            <p>{modelContact.description}</p>
          </div>

          <form className="model-contact__form" onSubmit={(event) => event.preventDefault()}>
            <div className="model-contact__grid">
              <label className="model-contact__field">
                <input type="text" placeholder="თქვენი სახელი*" />
              </label>
              <label className="model-contact__field">
                <input type="tel" placeholder="თქვენი ტელეფონი*" />
              </label>
              <label className="model-contact__field">
                <input type="text" placeholder="საინტერესო ტექნიკა*" defaultValue={modelOverview.title} />
              </label>
              <label className="model-contact__field">
                <input type="text" placeholder="რომელი ქალაქიდან ხართ?*" />
              </label>
              <label className="model-contact__field model-contact__field--wide">
                <textarea rows="5" placeholder="შეიყვანეთ შეტყობინება*" />
              </label>
            </div>

            <div className="model-contact__footer">
              <label className="model-contact__consent">
                <input type="checkbox" />
                <span aria-hidden="true" />
                <small>{modelContact.consent}</small>
              </label>

              <button className="button button--primary model-contact__submit" type="submit">
                {modelContact.submit} <ArrowRight />
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  )
}
