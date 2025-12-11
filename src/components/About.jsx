import React, { useState } from 'react'
import Jamal from "../assets/img/jamal.png"
const About = () => {
    const [about, setAbout] = useState({
        title: 'Обо мне',
        textTitle: 'Зубенко Михаил Петрович',
        textDesc:
            'Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа.'
    })
    return (
        <div className='about'>
            <div className="container">
                <h2 className='about__title'>
                    {about?.title}
                </h2>
                <div className="about__wrap">
                    <div className="about__left">
                        <img src={Jamal} alt="" />
                    </div>
                    <div className="about__right">
                        <h3 className='about__right-name'>{about?.textTitle}</h3>
                        <p className='about__right-desc'>
                            {about?.textDesc}
                        </p>
                    </div>

                </div>
            </div>

        </div>

    )

}

export default About


