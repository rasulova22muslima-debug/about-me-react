import React from 'react'

const About = ({data, img}) => {
    return (
        <div className='about'>
            <div className="container">
                <h2 className='about__title'>
                    {data.title}
                </h2>
                <div className="about__wrap">
                    <div className="about__left">
                        <img src={img} alt="" />
                    </div>
                    <div className="about__right">
                        <h3 className='about__right-name'>{data.textTitle}</h3>
                        <p className='about__right-desc'>
                            {data.textDesc}
                        </p>
                    </div>

                </div>
            </div>

        </div>

    )

}

export default About


