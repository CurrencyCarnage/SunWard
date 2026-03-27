const navigation = ['ტექნიკა', 'სერვისი', 'სათადარიგო ნაწილები', 'აქციები', 'დაფინანსება', 'სიახლეები', 'კონტაქტები']

const benefits = [
  {
    title: 'სარგებელი მფლობელებისთვის',
    description:
      'სიმძლავრისა და საწვავის ხარჯის ოპტიმალური ბალანსი ამცირებს დანახარჯებს და ამოკლებს ამონაგების ვადას.',
    icon: 'LP',
  },
  {
    title: 'უნივერსალურობა',
    description: 'კიდევ უფრო მეტი უნივერსალურობა დანართი მოწყობილობების ფართო სპექტრის გამოყენებისას.',
    icon: 'HOOK',
  },
  {
    title: 'ერგონომიკა და სიმარტივე',
    description: 'გააზრებული დიზაინი და მართვის სიმარტივე თქვენი ოპერატორების მაღალი ეფექტიანობის საფუძველია.',
    icon: 'PIN',
  },
]

const catalogCards = [
  {
    title: 'ექსკავატორები',
    count: '25 მოდელი',
    image: '/assets/catalog-excavator.png',
    alt: 'SUNWARD excavator',
  },
  {
    title: 'ბორტული მოხვევის მინი-დამტვირთველები',
    count: '6 მოდელი',
    image: '/assets/catalog-loader.png',
    alt: 'SUNWARD skid-steer loader',
  },
  {
    title: 'ნახვა',
    count: '5 მოდელი',
    image: '/assets/catalog-telehandler.png',
    alt: 'SUNWARD telehandler',
    featured: true,
  },
]

const newsCards = [
  {
    title: '«Global Service Journey» - SUNWARD-ის სერვისული ტური რუსეთის ქალაქებსა და რეგიონებში',
    date: '19.09.2024',
    image: '/assets/news-service.png',
    alt: 'Global Service Journey poster',
    excerpt:
      'სექტემბერი აღინიშნა SUNWARD-ის გლობალური სერვისული ტურის «Global Service Journey» დაწყებით რუსეთის სხვადასხვა ქალაქსა და რეგიონში.',
  },
  {
    title: 'SUNWARD-ის სპეცტექნიკა საერთაშორისო გამოფენა-ფორუმზე «Eurasian Construction Technology 2024»',
    date: '16.09.2024',
    image: '/assets/news-exhibition.png',
    alt: 'SUNWARD equipment at the exhibition',
    excerpt:
      'სანკტ-პეტერბურგში გაიმართა გამოფენა იმპორტიორთა და სპეცტექნიკის მწარმოებელთა ასოციაციის მხარდაჭერით.',
  },
  {
    title: 'SUNWARD-ის ახალი როტორული საბურღი დანადგარი «M-12» ტრასის მშენებლობაზე თათრეთში',
    date: '07.08.2024',
    image: '/assets/news-drill.png',
    alt: 'SUNWARD rotary drilling machine in Russia',
    excerpt:
      'ჩვენი დილერის «ЦБО» სერვისულმა ინჟინრებმა რუსეთში პირველი SWDM300H საბურღი დანადგარის მონტაჟი და გაშვება განახორციელეს.',
  },
]

const equipmentLinks = [
  'ექსკავატორები',
  'ბორტული მოხვევის მინი-დამტვირთველები',
  'ფრონტალური დამტვირთველები',
  'ტელესკოპური დამტვირთველები',
  'მაკრატელა ამწეები',
  'გვირაბის საბურღი დანადგარები',
  'დამსხვრევი და დამახარისხებელი მოწყობილობა',
  'კარიერული თვითმცლელები',
  'ბულდოზერები',
  'სახსრიანი ამწეები',
  'ტელესკოპური ამწეები',
  'ნავთობისა და გაზის კომპლექსის ტექნიკა',
  'როტორული საბურღი დანადგარები',
  'წყობის ჩამჭედი დანადგარები',
  'ამწე-კრანები',
  'ზედაპირიდან ბურღვის დანადგარები',
]

const serviceLinks = ['სერვისი', 'სათადარიგო ნაწილები', 'აქციები', 'დაფინანსება', 'სიახლეები']
const socialLabels = ['VK', 'R', 'OK', 'TG', 'YT']

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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

function ContactIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  )
}

function BenefitIcon({ type }) {
  if (type === 'HOOK') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M17 12h24l6 5v15c0 7-5 12-12 12h-3v-7h3c3 0 5-2 5-5V24H26l-4 11-6-2 5-16c1-3 4-5 7-5Zm17 24c0 5 4 9 9 9s9-4 9-9-4-9-9-9v5c2 0 4 2 4 4s-2 4-4 4-4-2-4-4h-5Z" />
      </svg>
    )
  }

  if (type === 'PIN') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8c6 0 11 5 11 11s-5 11-11 11-11-5-11-11S26 8 32 8Zm-6 24h12a8 8 0 0 1 8 8v7H18v-7a8 8 0 0 1 8-8Zm-8 18h28v8H18Z" />
      </svg>
    )
  }

  return (
    <div className="lp-icon" aria-hidden="true">
      <span className="lp-large">L</span>
      <span className="lp-small">P</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar__inner layout-shell">
          <a className="brand" href="#home" aria-label="Sunward home">
            <img src="/assets/sunward-logo.png" alt="SUNWARD" />
          </a>

          <nav className="topbar__nav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item} href="#!">
                {item}
              </a>
            ))}
          </nav>

          <div className="topbar__actions">
            <a className="topbar__phone" href="tel:88000000000">
              8 (800) 000-00-00
            </a>
            <button className="icon-button" type="button" aria-label="Search">
              <SearchIcon />
            </button>
            <div className="dealer-badge">
              <div className="dealer-badge__box">დილერის ლოგო</div>
              <span>ოფიციალური დილერი შპს «დილერი»</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__copy">
            <div className="hero__copy-inner">
              <h1>
                ინოვაციური
                <br />
                სპეცტექნიკა
                <br />
                SUNWARD
              </h1>
              <a className="button button--primary" href="#catalog">
                აირჩიეთ ტექნიკა <ArrowRight />
              </a>
              <div className="slider-hint" aria-hidden="true">
                <button className="slider-arrow" type="button">
                  <ArrowLeft />
                </button>
                <div className="slider-dots">
                  <span className="is-active" />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <button className="slider-arrow slider-arrow--accent" type="button">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="hero__media">
            <img src="/assets/hero-machines.png" alt="SUNWARD machinery lineup" />
          </div>
        </section>

        <section className="benefits layout-shell">
          <div className="benefit-grid">
            {benefits.map((item) => (
              <article key={item.title} className="benefit-card">
                <div className="benefit-card__icon">
                  <BenefitIcon type={item.icon} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="catalog layout-shell" id="catalog">
          <div className="section-heading">
            <h2>სპეცტექნიკის კატალოგი</h2>
            <div className="slider-dots slider-dots--compact" aria-hidden="true">
              <span className="is-active" />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="catalog__carousel">
            <button className="side-arrow" type="button" aria-label="Previous category">
              <ArrowLeft />
            </button>
            <div className="catalog-grid">
              {catalogCards.map((card) => (
                <article key={card.title + card.count} className={`catalog-card${card.featured ? ' catalog-card--featured' : ''}`}>
                  <div className="catalog-card__copy">
                    <h3>{card.title}</h3>
                    <span>{card.count}</span>
                  </div>
                  <img src={card.image} alt={card.alt} />
                </article>
              ))}
            </div>
            <button className="side-arrow" type="button" aria-label="Next category">
              <ArrowRight />
            </button>
          </div>

          <div className="catalog__footer-row">
            <p>SUNWARD-ის სპეცტექნიკის ასორტიმენტი ძალიან ფართოა და მუდმივად ახლდება</p>
            <a className="button button--primary" href="#!">
              სრული კატალოგის ნახვა <ArrowRight />
            </a>
          </div>
        </section>

        <section className="about layout-shell">
          <div className="about__media">
            <img src="/assets/about-sunward.png" alt="SUNWARD campus" />
            <a className="button button--primary button--overlay" href="#!">
              ფილმის ნახვა <ArrowRight />
            </a>
          </div>
          <div className="about__copy">
            <h2>ინფორმაცია SUNWARD-ის შესახებ</h2>
            <p>
              კომპანია «Sunward» არის ჩინური სპეცტექნიკის მწარმოებელი სხვადასხვა სფეროსთვის და დაარსდა 1999 წელს.
              Sunward-ის დამფუძნებელია ბატონი ხე ცინხუა, ცენტრალურ-სამხრეთის უნივერსიტეტის პროფესორი ქალაქ ჩანშადან, ჩინეთიდან.
              კომპანიის შტაბ-ბინაც ამავე ქალაქში მდებარეობს.
            </p>
            <p>
              ბრუნვის სწრაფი ზრდის ფონზე SUNWARD Equipment Co., Ltd. ჩამოყალიბდა გავლენიან საერთაშორისო კორპორაციად,
              რომელსაც საკუთარი თანამედროვე სამრეწველო და ტექნიკური ბაზა აქვს.
            </p>
            <p>
              ძირითადი სპეციალიზაციაა საბურღი, სამთო, სამშენებლო და სატვირთო ტექნიკის, ასევე სპეციალური დანიშნულების
              მანქანების წარმოება.
            </p>
          </div>
        </section>

        <section className="contacts-band">
          <div className="contacts-band__panel">
            <div className="contacts-band__content">
              <h2>შპს «დილერი»</h2>
              <ul>
                <li>
                  <ContactIcon path="M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z" />
                  <span>ოფისი: ქ. დასახელება, ქუჩა დასახელება, სახლი X</span>
                </li>
                <li>
                  <ContactIcon path="M6.6 10.8c1.7 3.3 4.3 5.9 7.6 7.6l2.5-2.5c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V22c0 .6-.4 1-1 1C10.6 23 1 13.4 1 2c0-.6.4-1 1-1h4.8c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.5 1.9Z" />
                  <a href="tel:88000000000">8-800-000-00-00</a>
                </li>
                <li>
                  <ContactIcon path="M2 5h20v14H2V5Zm10 7 8-5H4l8 5Z" />
                  <a href="mailto:name@mail.ru">name@mail.ru</a>
                </li>
                <li>
                  <ContactIcon path="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.9 9h-3.2a15.5 15.5 0 0 0-1.2-5A8 8 0 0 1 18.9 11Zm-6.9 9c-1.2 0-2.8-2-3.4-5h6.8c-.6 3-2.2 5-3.4 5Zm-3.8-7a19 19 0 0 1 0-2h7.6a19 19 0 0 1 0 2Zm.4-7A15.5 15.5 0 0 0 7.3 11H4.1a8 8 0 0 1 4.5-5Zm-4.5 7h3.2a15.5 15.5 0 0 0 1.2 5A8 8 0 0 1 4.1 13Zm10.4 5a15.5 15.5 0 0 0 1.2-5h3.2a8 8 0 0 1-4.4 5Z" />
                  <a href="https://website.ru">website.ru</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contacts-band__map">
            <img src="/assets/map-section.png" alt="დილერის მდებარეობის რუკა" />
          </div>
        </section>

        <section className="news layout-shell">
          <div className="section-heading">
            <h2>სიახლეები</h2>
            <div className="slider-dots slider-dots--compact" aria-hidden="true">
              <span className="is-active" />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="news__track">
            <button className="side-arrow" type="button" aria-label="Previous news">
              <ArrowLeft />
            </button>
            <div className="news-grid">
              {newsCards.map((item) => (
                <article key={item.title} className="news-card">
                  <img src={item.image} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <div className="news-card__meta">
                    <span className="news-card__clock">
                      <ClockIcon />
                    </span>
                    <time>{item.date}</time>
                  </div>
                  <p>{item.excerpt}</p>
                  <a href="#!">
                    სრულად წაკითხვა <ArrowRight />
                  </a>
                </article>
              ))}
            </div>
            <button className="side-arrow" type="button" aria-label="Next news">
              <ArrowRight />
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner layout-shell">
          <div className="site-footer__brand">
            <img src="/assets/sunward-logo.png" alt="SUNWARD" />
            <h2>შპს «დილერი»</h2>
            <p>
              მენიუში წარმოდგენილი პროდუქციის კომპლექტაცია და ვიზუალური სახე დაფუძნებულია რეალურ აღჭურვილობაზე.
              SUNWARD Intelligent Equipment Group უფლებას იტოვებს პროდუქციის სპეციფიკაციაში ცვლილებების შეტანისთვის
              დამატებითი შეტყობინების გარეშე.
            </p>
          </div>

          <div className="site-footer__equipment">
            <h3>ტექნიკა</h3>
            <ul>
              {equipmentLinks.map((item) => (
                <li key={item}>
                  <a href="#!">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__services">
            <ul>
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#!">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__contacts">
            <h3>კონტაქტები</h3>
            <a className="footer-phone" href="tel:88000000000">
              8 (800) 000-00-00
            </a>
            <a href="#!">პერსონალური მონაცემების დამუშავების შესახებ</a>
            <a href="#!">კონფიდენციალურობის პოლიტიკა</a>
            <div className="social-row" aria-label="Social links">
              {socialLabels.map((item) => (
                <a key={item} href="#!" aria-label={item}>
                  {item}
                </a>
              ))}
            </div>
            <p>როსკომნადზორი: საიტი youtube.com არღვევს რუსეთის ფედერაციის კანონს</p>
            <span>საიტი შექმნა და უჭერს მხარს</span>
            <strong>VERSALITY</strong>
          </div>
        </div>
      </footer>
    </div>
  )
}