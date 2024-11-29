const products = [
  {
    image: process.env.BASE_URL + '/commend-0.jpg',
    discount: '35%',
    price: 29800,
    market: '모디무드',
    content: '핏보장 남성 슬랙스'
  },
  {
    image: process.env.BASE_URL + '/commend-1.jpg',
    discount: '47%',
    price: 59900,
    market: '오카시',
    content: '따뜻한 여자 패딩자켓'
  },
  {
    image: process.env.BASE_URL + '/commend-2.jpg',
    discount: '12%',
    price: 12000,
    market: '헤드델리',
    content: '얼굴 작아보이는 모자'
  },
  {
    image: process.env.BASE_URL + '/commend-3.jpg',
    discount: '29%',
    price: 87900,
    market: '블랙업',
    content: '남녀노소 워너비 신발'
  },
  {
    image: process.env.BASE_URL + '/commend-4.jpg',
    discount: '44%',
    price: 35200,
    market: '노이즈',
    content: '레더 미니어처 키링'
  },
  {
    image: process.env.BASE_URL + '/commend-5.jpg',
    discount: '5%',
    price: 1963000,
    market: 'BURBERRY',
    content: '체크 벨티드 트렌치 코트'
  },
]

const shoppingCategory = [
  {
    image: process.env.BASE_URL + '/shopping-0.png',
    title: '의류'
  },
  {
    image: process.env.BASE_URL + '/shopping-1.png',
    title: '주얼리'
  },
  {
    image: process.env.BASE_URL + '/shopping-2.png',
    title: '디지털'
  },
  {
    image: process.env.BASE_URL + '/shopping-3.png',
    title: '신발'
  },
  {
    image: process.env.BASE_URL + '/shopping-4.png',
    title: '모자'
  },
  {
    image: process.env.BASE_URL + '/shopping-5.png',
    title: '가방'
  },
  {
    image: process.env.BASE_URL + '/shopping-6.png',
    title: '화장품'
  },
  {
    image: process.env.BASE_URL + '/shopping-7.png',
    title: '라이프'
  },
]

const visual = [
  {
    image: process.env.BASE_URL + '/visual-0.jpg'
  },
  {
    image: process.env.BASE_URL + '/visual-1.jpg'
  },
  {
    image: process.env.BASE_URL + '/visual-2.jpg'
  },
  {
    image: process.env.BASE_URL + '/visual-3.jpg'
  },
  {
    image: process.env.BASE_URL + '/visual-4.jpg'
  },
  {
    image: process.env.BASE_URL + '/visual-5.jpg'
  },
]

export { products, shoppingCategory, visual }