import { ROUTES } from '../routes'

const financingSections = [
  {
    title: 'Lorem Ipsum',
    lead: 'მის პოპულარიზაციას ახალ დროში ხელი შეუწყო Letraset-ის ფურცლების გამოქვეყნებამ.',
    paragraphs: [
      'მის პოპულარიზაციას ახალ დროში ხელი შეუწყო Letraset-ის ფურცლების გამოქვეყნებამ Lorem Ipsum-ის ნიმუშებით, ხოლო მოგვიანებით - ელექტრონული მაკეტირების პროგრამებმა Aldus PageMaker-ის ტიპის შაბლონებით, რომლებშიც სწორედ Lorem Ipsum გამოიყენებოდა.',
      'ტექნიკის მომხმარებელზე ორიენტირებული ეს მიდგომა ემსახურება საიმედო სერვისული მხარდაჭერის უზრუნველყოფას და ტექნიკის შესაძლებლობების გაფართოებას.',
    ],
  },
  {
    title: 'Lorem Ipsum',
    lead: 'Lorem Ipsum არის ე.წ. ტექსტი-"თევზი", რომელსაც ხშირად იყენებენ ბეჭდვასა და ვებ-დიზაინში.',
    paragraphs: [
      'Lorem Ipsum ითვლება ლათინური ტექსტების სტანდარტულ ნიმუშად XVI საუკუნიდან. სწორედ მაშინ ერთმა უცნობმა მბეჭდავმა ასოების სხვადასხვა ზომისა და ფორმის ნიმუშები შექმნა და მათ დასაბეჭდად Lorem Ipsum გამოიყენა.',
      'მის პოპულარიზაციას ახალ დროში ხელი შეუწყო Letraset-ის ფურცლების გამოქვეყნებამ 1960-იან წლებში, მოგვიანებით კი Aldus PageMaker-ის მსგავსი ელექტრონული მაკეტირების პროგრამებმა, რომელთა შაბლონებშიც სწორედ Lorem Ipsum გამოიყენებოდა. ტექნიკის მომხმარებელზე ორიენტირებული ეს მიდგომა ემსახურება საიმედო სერვისული მხარდაჭერის უზრუნველყოფას და ტექნიკის შესაძლებლობების გაფართოებას.',
    ],
  },
]

export default function FinancingPage({ onNavigate }) {
  return (
    <main className="financing-page">
      <section className="financing-hero">
        <div className="financing-hero__overlay">
          <h1>დაფინანსება</h1>
        </div>
      </section>

      <section className="financing-page__body layout-shell">
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <a href={ROUTES.home} onClick={onNavigate(ROUTES.home)}>
            მთავარი
          </a>
          <span>/</span>
          <strong>დაფინანსება</strong>
        </nav>

        <div className="financing-page__content">
          {financingSections.map((section) => (
            <section key={section.title + section.lead} className="financing-copy-block">
              <h2>{section.title}</h2>
              <p className="financing-copy-block__lead">{section.lead}</p>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="financing-logo-tile" aria-hidden="true">
            <img src="/assets/sunward-logo-transparent.png" alt="SUNWARD" />
          </div>
        </div>
      </section>
    </main>
  )
}
