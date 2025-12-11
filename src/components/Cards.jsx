import React, { useState } from 'react'
import puma from "../assets/img/puma.png"
const Cards = () => {
    const [card, setCard] = useState({
        title: 'Мои работы',
        items: [...Array(9)].map((item, i) => ({
            id: i + 1,
            cardTitle: 'Чиланзар',
            cardDesc:
                'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году',
            cardBtn: 'Посмотреть'
        }))
    })

    return (
        <div className='works'>
            <div className="container">
                <h2 className='works__title'>{card?.title}</h2>
                <div className="works__wrap">
                    {card?.items?.map((item) => (
                        <div className="works__card" key={item.id}>
                            <div className="works__card-img">
                                <img src={puma} alt="" />
                            </div>
                            <div className="works__card-desc">
                                <h3 className='works__card-desc_title'>{item.cardTitle}</h3>
                                <p className='works__card-desc_text'>
                                    {item.cardDesc}
                                </p>
                                <a href="#" className='works__card-desc_link'>
                                    {item.cardBtn}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Cards