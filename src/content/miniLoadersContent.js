import { ROUTES } from '../routes'

export const miniLoadersHero = {
  title: 'მინი-დამტვირთველები ბორტული მოხვევით',
  breadcrumbItems: [
    { label: 'მთავარი', href: ROUTES.home },
    { label: 'ტექნიკის კატალოგი', href: ROUTES.catalog },
    { label: 'მინი-დამტვირთველები ბორტული მოხვევით' },
  ],
}

export const miniLoaderCategories = [
  { label: 'ბორბლებიანი დამტვირთველები', active: true },
  { label: 'მუხლუხებიანი დამტვირთველები' },
  { label: 'დისტანციური მართვით' },
]

export const miniLoaderCards = [
  {
    category: 'მინი-დამტვირთველი',
    model: 'SWL2820RC',
    badge: 'სიახლე',
    image: '/assets/mini-loader-swl2820rc.png',
    alt: 'SUNWARD SWL2820RC mini loader',
    engine: 'KUBOTA',
    power: '36/2600',
    weightLabel: 'მანქანის წონა, კგ',
    weight: '2830',
    payload: '800',
    dimensions: '3318 x 1600 x 2014',
  },
  {
    category: 'მინი-დამტვირთველი',
    model: 'SWL3220RC-1',
    badge: 'სიახლე',
    image: '/assets/mini-loader-swl3220rc1.png',
    alt: 'SUNWARD SWL3220RC-1 mini loader',
    engine: 'KUBOTA',
    power: '54,6/2600',
    weightLabel: 'მანქანის წონა, კგ',
    weight: '3080',
    payload: '700',
    dimensions: '3727 x 1830 x 1771',
  },
  {
    category: 'მინი-დამტვირთველი',
    model: 'SWL2820',
    badge: 'სიახლე',
    image: '/assets/mini-loader-swl2820.png',
    alt: 'SUNWARD SWL2820 mini loader',
    engine: 'KUBOTA // XINCHAI',
    power: '36/2600 // 36,7/2500',
    weightLabel: 'სამუშაო წონა, კგ',
    weight: '2830',
    payload: '800',
    dimensions: '3318 x 1600 x 2014',
  },
  {
    category: 'მინი-დამტვირთველი',
    model: 'SWL3220',
    badge: 'ჰიტი',
    image: '/assets/mini-loader-swl3220.png',
    alt: 'SUNWARD SWL3220 mini loader',
    engine: 'KUBOTA // YUCHAI',
    power: '54,6/2600 // 55,8/2600',
    weightLabel: 'მანქანის წონა, კგ',
    weight: '3500',
    payload: '1200',
    dimensions: '3727 x 1830 x 2068',
    route: ROUTES.model,
  },
  {
    category: 'მუხლუხებიანი დამტვირთველი',
    model: 'SWTL4528',
    badge: 'სიახლე',
    image: '/assets/mini-loader-swtl4528.png',
    alt: 'SUNWARD SWTL4528 compact track loader',
    engine: 'KUBOTA',
    power: '54,6/2600',
    weightLabel: 'მანქანის წონა, კგ',
    weight: '4600',
    payload: '1200',
    dimensions: '3735 x 2015 x 2071',
  },
  {
    category: 'მინი-დამტვირთველი',
    model: 'SWL4028',
    badge: 'ჰიტი',
    image: '/assets/mini-loader-swl4028.png',
    alt: 'SUNWARD SWL4028 mini loader',
    engine: 'KUBOTA // YUCHAI',
    power: '54,6/2600 // 73,5/2400',
    weightLabel: 'სამუშაო წონა, კგ',
    weight: '3750',
    payload: '1400',
    dimensions: '3763 x 2015 x 2068',
  },
]

export const miniLoadersEditorial = {
  title: 'Lorem Ipsum - ტექსტი-შაბლონი, რომელიც ხშირად გამოიყენება ბეჭდვასა და ვებდიზაინში',
  paragraphs: [
    'Lorem Ipsum არის კლასიკური placeholder ტექსტი, რომელიც ვიზუალური მაკეტის შესავსებად გამოიყენება. ამ ბლოკში დაცულია PDF-ის კომპოზიცია, თუმცა რუსულენოვანი აღწერები ქართულად არის გადმოტანილი.',
    'SUNWARD-ის მინი-დამტვირთველები გამოირჩევა კომპაქტური ზომით, მოქნილი მართვით და დანართების ფართო არჩევანით. ამიტომ ტექნიკა ეფექტურად მუშაობს როგორც ვიწრო ურბანულ სივრცეებში, ისე საწყობისა და სამშენებლო ობიექტებზე.',
  ],
  image: '/assets/mini-loaders-editorial.png',
  alt: 'SUNWARD mini loader in an urban setting',
  cta: 'დეტალურად',
}

export const miniLoadersFeatures = [
  'კომპაქტურობა და მოქნილობა',
  'დანართების დიდი არჩევანი',
  'უსაფრთხოება და კომფორტი',
  'მარტივი მომსახურება',
]

export const miniLoadersService = {
  title: 'შესანიშნავი მოვლა და მომსახურება!',
  intro:
    'SUNWARD-ის მინი-დამტვირთველების ტექნიკური მომსახურება მაქსიმალურად გამარტივებულია: ძირითადი კვანძები სწრაფად მისადგომია, ხოლო ყოველდღიური შემოწმებები დიდ დროს არ საჭიროებს.',
  bullets: [
    'უკანა კარი 90°-ით იხსნება',
    'ძრავის საფარი 60°-ით იწევა',
    'კაბინა 30°-ით იხრება წინ',
    'რადიატორის წყლის ავზი 60°-ით იხსნება',
  ],
  sections: [
    {
      title: 'სამუშაო რეჟიმის არჩევა',
      description:
        'დატვირთვის მიხედვით ბრუნვის სიჩქარის ავტომატური ზრდა და შემცირება ამცირებს საწვავის ხარჯს უქმი მუშაობის პერიოდში და ოპერატორს რესურსის უკეთ მართვაში ეხმარება.',
    },
    {
      title: 'ინოვაციები საქმეში',
      description:
        'ჯოისტიკით მართვა და ორმაგი დროსელის სისტემა საშუალებას გაძლევთ გამოიყენოთ როგორც მუდმივი სიმძლავრის რეჟიმი, ისე ზუსტი ფეხით კონტროლი ვედროს მოძრაობისთვის.',
    },
  ],
  image: '/assets/mini-loaders-service.png',
  alt: 'SUNWARD mini loader with raised service access',
}

export const miniLoadersEnvironment = {
  title: 'ვუფრთხილდებით გარემოს',
  description:
    'მაღალი სიმძლავრე, საიმედოობა, დაბალი ხმაურის დონე, ენერგოეფექტიანობა და გარემოს დაცვაზე ორიენტირებული კონსტრუქცია პასუხობს სხვადასხვა ქვეყნისა და რეგიონის მოთხოვნებს.',
  stats: [
    { value: '4.6', label: 'წონა, ტ' },
    { value: '1200', label: 'ტვირთამწეობა, კგ' },
    { value: '0.6', label: 'ვედრო, მ³' },
  ],
  image: '/assets/mini-loaders-environment-direct.png',
  alt: 'SUNWARD mini loader on teal diagonal background',
}
