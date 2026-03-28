import { useEffect, useState } from 'react'

const ROUTES = {
  home: '/',
  contacts: '/contacts',
}

const navigation = [
  { label: 'ტექნიკა', href: '#!' },
  { label: 'სერვისი', href: '#!' },
  { label: 'სათადარიგო ნაწილები', href: '#!' },
  { label: 'აქციები', href: '#!' },
  { label: 'დაფინანსება', href: '#!' },
  { label: 'სიახლეები', href: '#!' },
  { label: 'კონტაქტები', href: ROUTES.contacts, route: ROUTES.contacts },
]

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

const contactIntro = [
  'Lorem Ipsum არის ე.წ. placeholder ტექსტი, რომელსაც ხშირად იყენებენ ბეჭდვასა და web-დიზაინში. Lorem Ipsum XVI საუკუნიდან ითვლება ლათინური ტექსტების სტანდარტულ შაბლონად. სწორედ მაშინ ერთმა უცნობმა მბეჭდავმა ასოების სხვადასხვა ზომისა და ფორმის სანიმუშო ფურცლების შესაქმნელად Lorem Ipsum გამოიყენა.',
  'Lorem Ipsum-მა ხუთი საუკუნე თითქმის უცვლელად გადაიტანა და შემდეგ ორგანულად გადავიდა ციფრულ დიზაინშიც. მის პოპულარიზაციას 1960-იან წლებში Letraset-ის ფურცლები შეუწყო ხელს, მოგვიანებით კი Aldus PageMaker-ის მსგავსი ელექტრონული მაკეტირების პროგრამები, რომელთა შაბლონებშიც სწორედ Lorem Ipsum გამოიყენებოდა.',
]

const primaryContactItems = [
  {
    icon: 'location',
    label: 'ცენტრალური ოფისის მისამართი:',
    value: 'ქ. დასახელება, ქ. დასახელება, N X',
  },
  {
    icon: 'phone',
    value: '8-000-000-00-00',
    href: 'tel:80000000000',
  },
  {
    icon: 'email',
    value: 'name@mail.ru',
    href: 'mailto:name@mail.ru',
  },
]

const branches = [
  {
    address: ['ქ. დასახელება, ქ. გრძელი', 'დასახელება, N X'],
    phone: '8-000-000-00-00',
    email: 'name@mail.ru',
    website: 'website.ru',
  },
  {
    address: ['ქ. დასახელება, ქ. გრძელი', 'დასახელება, N X'],
    phone: '8-000-000-00-00',
    email: 'name@mail.ru',
    website: 'website.ru',
  },
  {
    address: ['ქ. დასახელება, ქ. გრძელი', 'დასახელება ორ ან სამ სტრიქონში,', 'N X'],
    phone: '8-000-000-00-00',
    email: 'name@mail.ru',
    website: 'website.ru',
  },
  {
    address: ['ქ. დასახელება, ქ. გრძელი', 'დასახელება ორ ან სამ სტრიქონში,', 'N X'],
    phone: '8-000-000-00-00',
    email: 'name@mail.ru',
    website: 'website.ru',
  },
  {
    address: ['ქ. X, ქ. მოკლე დასახელება, N X'],
    phone: '8-000-000-00-00',
    email: 'name@mail.ru',
    website: 'website.ru',
  },
]

const equipmentOptions = [
  'ექსკავატორები',
  'მინი-დამტვირთველები',
  'ფრონტალური დამტვირთველები',
  'ტელესკოპური დამტვირთველები',
  'ბულდოზერები',
]

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return ROUTES.home
  }

  return pathname.replace(/\/+$/, '') === ROUTES.contacts ? ROUTES.contacts : ROUTES.home
}

function getCurrentPath() {
  if (typeof window === 'undefined') {
    return ROUTES.home
  }

  return normalizePath(window.location.pathname)
}

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

function CursorIcon() {
  return (
    <svg viewBox="0 0 33 44" aria-hidden="true">
      <path
        d="M4 1.8v32.7c0 .8 1 .9 1.4.3l7.3-9.8 6.4 15.8c.2.6.9.8 1.5.6l4.4-1.8c.6-.2.8-.9.6-1.5l-6.4-15.9 12.1-.5c.8 0 1.1-.9.5-1.4L5.5 1.2C5 .7 4 1.1 4 1.8Z"
        fill="currentColor"
      />
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

function getContactPath(type) {
  if (type === 'location') {
    return 'M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z'
  }

  if (type === 'phone') {
    return 'M6.6 10.8c1.7 3.3 4.3 5.9 7.6 7.6l2.5-2.5c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V22c0 .6-.4 1-1 1C10.6 23 1 13.4 1 2c0-.6.4-1 1-1h4.8c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.5 1.9Z'
  }

  if (type === 'email') {
    return 'M2 5h20v14H2V5Zm10 7 8-5H4l8 5Z'
  }

  return 'M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 2V18h14V7.5H5Zm0-2v1h14v-1a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm2.2 2.9a1 1 0 1 0 0 .1v-.1Zm2.8 0a1 1 0 1 0 0 .1v-.1Zm-2 4.1h8v1.7H8v-1.7Zm0 3.3h5.2v1.7H8v-1.7Z'
}

function SiteHeader({ pathname, onNavigate }) {
  return (
    <header className="topbar">
      <div className="topbar__inner layout-shell">
        <a className="brand" href={ROUTES.home} aria-label="Sunward home" onClick={onNavigate(ROUTES.home)}>
          <img src="/assets/sunward-logo-transparent.png" alt="SUNWARD" />
        </a>

        <nav className="topbar__nav" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={item.route ? onNavigate(item.route) : undefined}
              className={pathname === item.route ? 'is-active' : undefined}
            >
              {item.label}
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
            <div className="dealer-badge__box">ლოგოტიპი დილერის</div>
            <span>ოფიციალური დილერი შპს «დილერი»</span>
          </div>
        </div>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner layout-shell">
        <div className="site-footer__brand">
          <img src="/assets/sunward-logo-white.png" alt="SUNWARD" />
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
  )
}

function HomePage() {
  return (
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
            Sunward-ის დამფუძნებელია ბატონი ხე ცინხუა, ცენტრალურ-სამხრეთის უნივერსიტეტის პროფესორი ქალაქ ჩანშადან,
            ჩინეთიდან. კომპანიის შტაბ-ბინაც ამავე ქალაქში მდებარეობს.
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
                <ContactIcon path={getContactPath('location')} />
                <span>ოფისი: ქ. დასახელება, ქუჩა დასახელება, სახლი X</span>
              </li>
              <li>
                <ContactIcon path={getContactPath('phone')} />
                <a href="tel:88000000000">8-800-000-00-00</a>
              </li>
              <li>
                <ContactIcon path={getContactPath('email')} />
                <a href="mailto:name@mail.ru">name@mail.ru</a>
              </li>
              <li>
                <ContactIcon path={getContactPath('globe')} />
                <a href="https://website.ru">website.ru</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contacts-band__map">
          <img src="/assets/home-contact-map.png" alt="დილერის მდებარეობის რუკა" />
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
  )
}

function ContactsPage({ onNavigate }) {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__overlay">
          <h1>საკონტაქტო ინფორმაცია</h1>
        </div>
      </section>

      <section className="contact-page__body layout-shell">
        <nav className="contact-breadcrumbs" aria-label="Breadcrumb">
          <a href={ROUTES.home} onClick={onNavigate(ROUTES.home)}>
            მთავარი
          </a>
          <span>/</span>
          <strong>კონტაქტები</strong>
        </nav>

        <div className="contact-page__intro">
          <h2>Lorem Ipsum</h2>
          {contactIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="contact-page__lead">
          <div className="contact-page__content">
            <div className="contact-certificates" aria-label="Certificates">
              <article className="contact-certificate-card">
                <img src="/assets/contact-certificate.png" alt="დილერის სერტიფიკატი" />
              </article>
              <article className="contact-certificate-card contact-certificate-card--highlighted">
                <img src="/assets/contact-certificate.png" alt="დილერის სერტიფიკატი" />
                <span className="contact-certificate-card__zoom" aria-hidden="true">
                  <span>+</span>
                </span>
                <span className="contact-certificate-card__cursor" aria-hidden="true">
                  <CursorIcon />
                </span>
              </article>
            </div>

            <div className="contact-page__legal">
              <h3>რეკვიზიტები შპს «დილერი»:</h3>
              <p className="contact-page__legal-meta">საიდენტიფიკაციო ნომერი: 0000000000000 // საგადასახადო კოდი: 0000000000</p>
              <p className="contact-page__director">გენერალური დირექტორი: გვარი სახელი მამისსახელი</p>

              <ul className="contact-page__primary-list">
                {primaryContactItems.map((item) => (
                  <li key={item.value}>
                    <ContactIcon path={getContactPath(item.icon)} />
                    <div>
                      {item.label ? <strong>{item.label}</strong> : null}
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact-form-panel">
            <h2>მოგვწერეთ</h2>
            <p>
              აქ შეგიძლიათ დატოვოთ თქვენი მოთხოვნები, კომენტარები
              <br />
              და შეთავაზებები
            </p>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="contact-form__grid">
                <label className="contact-field">
                  <input type="text" placeholder="თქვენი სახელი*" />
                </label>
                <label className="contact-field">
                  <input type="tel" placeholder="თქვენი ტელეფონი*" />
                </label>
                <label className="contact-field contact-field--select">
                  <select defaultValue="">
                    <option value="" disabled>
                      სასურველი ტექნიკა*
                    </option>
                    {equipmentOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span className="contact-field__chevron" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </label>
                <label className="contact-field">
                  <input type="text" placeholder="რომელი ქალაქიდან ხართ?*" />
                </label>
                <label className="contact-field contact-field--textarea">
                  <textarea rows="6" placeholder="შეიყვანეთ შეტყობინება*" />
                </label>
              </div>

              <div className="contact-form__footer">
                <label className="contact-checkbox">
                  <input type="checkbox" />
                  <span aria-hidden="true" />
                  <small>ვეთანხმები პერსონალური მონაცემების დამუშავებას</small>
                </label>

                <button className="button button--primary contact-form__submit" type="submit">
                  გაგზავნა <ArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map-strip">
        <img src="/assets/contact-map.png" alt="დილერის ფილიალების რუკა" />
      </section>

      <section className="contact-branches layout-shell">
        <div className="contact-branches__title">
          <h2>
            შპს «დილერის»
            <br />
            ფილიალები
          </h2>
        </div>

        <div className="contact-branches__list">
          {branches.map((branch, index) => (
            <article key={`${branch.phone}-${index}`} className="branch-row">
              <div className="branch-row__cell branch-row__cell--address">
                <ContactIcon path={getContactPath('location')} />
                <div>
                  {branch.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>

              <div className="branch-row__cell branch-row__cell--stack">
                <div className="branch-row__line">
                  <ContactIcon path={getContactPath('phone')} />
                  <a href={`tel:${branch.phone.replaceAll('-', '')}`}>{branch.phone}</a>
                </div>
                <div className="branch-row__line">
                  <ContactIcon path={getContactPath('email')} />
                  <a href={`mailto:${branch.email}`}>{branch.email}</a>
                </div>
              </div>

              <div className="branch-row__cell branch-row__cell--link">
                <ContactIcon path={getContactPath('globe')} />
                <a href={`https://${branch.website}`}>{branch.website}</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const [pathname, setPathname] = useState(getCurrentPath)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPath())
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  const handleNavigate = (targetPath) => (event) => {
    event.preventDefault()

    const nextPath = normalizePath(targetPath)

    if (window.location.pathname !== nextPath || window.location.hash) {
      const historyMethod = window.location.pathname === nextPath ? 'replaceState' : 'pushState'
      window.history[historyMethod]({}, '', nextPath)
      setPathname(nextPath)
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }

  return (
    <div className="page-shell">
      <SiteHeader pathname={pathname} onNavigate={handleNavigate} />
      {pathname === ROUTES.contacts ? <ContactsPage onNavigate={handleNavigate} /> : <HomePage />}
      <SiteFooter />
    </div>
  )
}
