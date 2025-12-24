import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Cards from './components/Cards'
import Footer from './components/Footer'
import puma from "./assets/img/puma.png"
import Jamal from "./assets/img/jamal.png"

const App = () => {

  const navLinks = [
    { id: 1, name: 'Обо мне' },
    { id: 2, name: 'Мои работы' },
    { id: 3, name: 'Контакты' },
  ]

  const aboutData = {
    title: 'Обо мне',
    textTitle: 'Зубенко Михаил Петрович',
    textDesc:
      'Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа.'
  }

  const cardsData = {
    title: 'Мои работы',
    items: [...Array(9)].map((item, i) => ({
      id: i + 1,
      cardTitle: 'Чиланзар',
      cardDesc:
        'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году',
      cardBtn: 'Посмотреть'
    }))
  }

  return (
    <div>
      <Navbar links={navLinks} />
      <Banner />
      <About data={aboutData} img={Jamal} />
      <Cards data={cardsData} img={puma} />
      <Footer />
    </div>
  )
}

export default App