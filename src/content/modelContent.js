import { ROUTES } from '../routes'

export const modelHero = {
  title: 'მინი-დამტვირთველი SWL3220',
  breadcrumbItems: [
    { label: 'მთავარი', href: ROUTES.home },
    { label: 'ტექნიკის კატალოგი', href: ROUTES.catalog },
    { label: 'მინი-დამტვირთველები ბორტული მოხვევით', href: ROUTES.miniLoaders },
    { label: 'მინი-დამტვირთველი SWL3220' },
  ],
}

export const modelGallery = [
  {
    image: '/assets/model-swl3220-main.png',
    alt: 'SUNWARD SWL3220 mini loader front view',
  },
  {
    image: '/assets/model-swl3220-thumb-1.png',
    alt: 'SUNWARD SWL3220 parked on a concrete yard',
  },
  {
    image: '/assets/model-swl3220-thumb-2.png',
    alt: 'SUNWARD SWL3220 with raised attachment',
  },
  {
    image: '/assets/model-swl3220-thumb-3.png',
    alt: 'SUNWARD SWL3220 in an urban setting',
  },
]

export const modelOverview = {
  title: 'მინი-დამტვირთველი SWL3220',
  description:
    'SUNWARD SWL3220 ბორტული მოხვევის მინი-დამტვირთველი გამოირჩევა უნივერსალურობითა და კომპაქტურობით, რაც მას მცირე სივრცეებში თავისუფლად მანევრირების საშუალებას აძლევს. მიუხედავად ზომისა, მოდელი შთამბეჭდავია თავისი ტვირთამწეობით. Kubota ან YUCHAI ძრავები გამოირჩევა მაღალი წარმადობით, საიმედოობითა და ხანგრძლივი ექსპლუატაციის რესურსით. დამატებითი დანართები მნიშვნელოვნად აფართოებს მანქანის ფუნქციონალს.',
  primaryCta: 'ფასის გაგება',
  highlights: [
    { label: 'ზოგადი პარამეტრები', value: 'KUBOTA // YUCHAI' },
    { label: 'სიმძლავრე, კვტ/ბრ/წთ', value: '54,6/2600 // 55,8/2600' },
    { label: 'მანქანის წონა, კგ', value: '3500' },
    { label: 'ტვირთამწეობა, კგ', value: '1200' },
    { label: 'გაბარიტები, მმ', value: '3727 x 1830 x 2068' },
  ],
}

export const modelTabs = [
  { id: 'specs', label: 'ტექნიკური მახასიათებლები' },
  { id: 'features', label: 'თავისებურებები და უპირატესობები' },
  { id: 'video', label: 'ვიდეო' },
  { id: 'download', label: 'მონაცემების ჩამოტვირთვა' },
]

export const modelSpecs = [
  {
    title: 'ძრავა',
    rows: [
      { label: 'ბრენდი', value: 'KUBOTA // YUCHAI' },
      { label: 'მოდელი', value: 'V3307-T // YCF3075-T301' },
      { label: 'ტიპი', value: 'დიზელი, 4 ცილინდრი' },
      { label: 'სიმძლავრე, კვტ/ბრ/წთ', value: '54,6/2600 // 55,8/2600' },
    ],
  },
  {
    title: 'ჰიდრავლიკური სისტემა',
    rows: [
      { label: 'სისტემის ტიპი', value: 'დროსელური' },
      { label: 'მაქს. სამუშაო წნევა, ბარი', value: '210' },
    ],
  },
  {
    title: 'ძირითადი მახასიათებლები',
    rows: [
      { label: 'ტვირთამწეობა, კგ', value: '1200' },
      { label: 'მანქანის წონა, კგ', value: '3500' },
      { label: 'გადაბრუნების დატვირთვა, კგ', value: '2200' },
      { label: 'ვედროს მოცულობა, მ³', value: '0,53' },
    ],
  },
  {
    title: 'სვლა და ტევადობები',
    rows: [
      { label: 'მაქს. მოძრაობის სიჩქარე, კმ/სთ', value: '12,6' },
      { label: 'საწვავის ავზი, ლ', value: '110' },
      { label: 'ჰიდრავლიკური ზეთის ავზი, ლ', value: '33' },
      { label: 'საბურავების ზომა', value: '12-16,5' },
    ],
  },
]

export const modelBenefits = [
  'ავტომატური ორი სიჩქარეანი გადაცემა',
  'ვერტიკალური ამწევის კინემატიკა',
  'მძლავრი საწევი და ბიძგის მაჩვენებლები',
  'ფართო არჩევანი დამატებითი დანართებისთვის',
]

export const modelContact = {
  title: 'მოგვწერეთ',
  description: 'აქ შეგიძლიათ დატოვოთ თქვენი კომენტარები და შეთავაზებები, ჩვენ ოპერატიულად გიპასუხებთ.',
  consent: 'ვეთანხმები პერსონალური მონაცემების დამუშავებას',
  submit: 'გაგზავნა',
}
