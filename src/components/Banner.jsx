import React from 'react'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner__wrap'>
                    <h1 className='banner__title'>
                        Добро пожаловать на мой сайт
                    </h1>
                    <a href="tel:+998999999999" className='banner__call'>Позвонить</a>
                </div>
            </div>
        </div>
    )
}

export default Banner