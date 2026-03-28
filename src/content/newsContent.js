import { ROUTES } from '../routes'

export const shareChannels = [
  { label: 'VK', href: '#!' },
  { label: 'OK', href: '#!' },
  { label: 'TG', href: '#!' },
  { label: 'WA', href: '#!' },
]

export const featuredNewsArticle = {
  title: '«Global Service Journey» - SUNWARD-ის სერვისული ტური რუსეთის ქალაქებსა და რეგიონებში',
  date: '19.09.2024',
  articleDate: '19 სექტემბერი 2024',
  image: '/assets/news-service-poster.png',
  alt: 'Global Service Journey poster',
  excerpt:
    'სექტემბერი დაიწყო SUNWARD-ის გლობალური სერვისული პროგრამით «Global Service Journey», რომელიც რუსეთის სხვადასხვა ქალაქსა და რეგიონში მიმდინარეობს.',
  route: ROUTES.newsArticle,
}

export const newsPageCards = [
  {
    title: 'SUNWARD-ის სპეცტექნიკა საერთაშორისო გამოფენა-ფორუმზე «Eurasian Construction Technology 2024»',
    date: '16.09.2024',
    image: '/assets/news-exhibition-card.png',
    alt: 'SUNWARD equipment at the exhibition in Saint Petersburg',
    excerpt:
      'სანკტ-პეტერბურგში გაიმართა გამოფენა იმპორტიორთა და სპეცტექნიკის მწარმოებელთა ასოციაციის მხარდაჭერით.',
  },
  {
    title: 'SUNWARD-ის ახალი როტორული საბურღი დანადგარი M-12 ტრასის მშენებლობაზე თათრეთში',
    date: '07.08.2024',
    image: '/assets/news-drill-card.png',
    alt: 'SUNWARD rotary drilling machine',
    excerpt:
      'ჩვენი დილერის სერვისულმა ინჟინრებმა რუსეთში პირველი SWDM300H საბურღი დანადგარის მონტაჟი და ექსპლუატაციაში გაშვება განახორციელეს.',
  },
  {
    title: 'ზაფხულის საგამოფენო სეზონის პიკი SUNWARD-ის ტექნიკის მონაწილეობით',
    date: '26.07.2024',
    image: '/assets/news-summer-exhibitions-card.png',
    alt: 'SUNWARD equipment at July exhibitions',
    excerpt:
      'ზაფხული, როგორც ყოველთვის, მდიდარია აგროსექტორის საგამოფენო ღონისძიებებით და ივლისში მათი რაოდენობა განსაკუთრებით გაიზარდა.',
  },
  {
    title: 'SUNWARD-ის ტექნიკა დაეხმარა ახალი საინჟინრო საოცრების შექმნას - საზღვაო გვირაბებისა და ხიდების სისტემას',
    date: '16.09.2024',
    image: '/assets/news-bridge-card.png',
    alt: 'Long sea bridge',
    excerpt:
      'ჩინეთში გაიხსნა 24-კილომეტრიანი საზღვაო მაგისტრალი, რომელმაც China Global Television Network-ის ინფორმაციით 10 მსოფლიო რეკორდი მოხსნა.',
  },
  {
    title: 'СТТ Expo 2024-ის შედეგები: SUNWARD-ის მაკრატელა ამწე კონკურსის გამარჯვებულია',
    date: '31.05.2024',
    image: '/assets/news-award-card.png',
    alt: 'SUNWARD award and model lift',
    excerpt:
      'კონკურსში «ინოვაციები სამშენებლო ტექნიკაში რუსეთში 2024» ნომინაციაში «წლის მაკრატელა ამწე» SUNWARD SWSL1823RT გამარჯვებული გახდა.',
  },
  {
    title: 'გეპატიჟებით გამოფენაზე «СТТ Expo 2024» და ინოვაციური ტექნიკის გასაცნობად',
    date: '20.05.2024',
    image: '/assets/news-stt-expo-card.png',
    alt: 'STT Expo 2024 invitation',
    excerpt:
      'მოახლოვდა სამშენებლო ტექნიკისა და ტექნოლოგიების მთავარი გამოფენა რუსეთში, რომელიც მაისის ბოლოს მოსკოვში გაიმართება.',
  },
].map((item) => ({ ...item, route: ROUTES.newsArticle }))

export const newsArticleContent = {
  ...featuredNewsArticle,
  paragraphs: [
    '2024 წლის 7 სექტემბერს დაიწყო სერვისული პროგრამა «Global Service Journey», რომელსაც ატარებს SUNWARD INTELLIGENT EQUIPMENT CO., LTD.',
    'ამ პროგრამის ფარგლებში ჩვენი სერვისული სამსახურის ინჟინრებმა საბურღი დანადგარების დილერთან, შპს «ბურღვის აღჭურვილობის ცენტრთან» ერთად, მოინახულეს ის კლიენტები, რომლებიც SUNWARD-ის როტორულ საბურღ ტექნიკას იყენებენ.',
    'სამარა, პერმი, მოსკოვი და მოსკოვის ოლქი მხოლოდ დასაწყისია იმ ტურისა, რომელიც ჩვენი სერვისული ჯგუფის წინაშეა ქვეყნის მასშტაბით.',
    'ტექნიკის მუდმივ გაუმჯობესებასთან ერთად, SUNWARD პრიორიტეტს ანიჭებს ხარისხიან სერვისულ მომსახურებას. კომპანიის ინჟინრები უსმენენ კლიენტებს, აგროვებენ და აანალიზებენ უკუკავშირს და ქმნიან საბოლოო მომხმარებელთან საიმედო საკომუნიკაციო არხებს. ეს მიდგომა მიმართულია სტაბილური სერვისული მხარდაჭერისა და ტექნიკის შესაძლებლობების გაფართოებისკენ.',
  ],
  gallery: [
    {
      image: '/assets/news-article-perm.png',
      alt: 'Global Service Journey in Perm',
    },
    {
      image: '/assets/news-article-samara.png',
      alt: 'Global Service Journey in Samara',
    },
  ],
}
