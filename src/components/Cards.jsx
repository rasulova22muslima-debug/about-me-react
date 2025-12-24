import React from 'react'

const Cards = ({ data, img }) => {
  return (
    <div className='works'>
      <div className="container">
        <h2 className='works__title'>{data.title}</h2>

        <div className="works__wrap">
          {data.items.map(item => (
            <div className="works__card" key={item.id}>
              <div className="works__card-img">
                <img src={img} alt="" />
              </div>

              <div className="works__card-desc">
                <h3 className='works__card-desc_title'>
                  {item.cardTitle}
                </h3>
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