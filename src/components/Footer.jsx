import React from 'react'
import fbIcon from "../assets/img/fb.svg"
import instIcon from "../assets/img/inst.svg"
import tgIcon from "../assets/img/tg.svg"
import emIcon from "../assets/img/em.svg"
import tIcon from "../assets/img/t.svg"
const Footer = () => {
    const icons = [fbIcon, instIcon, tgIcon, emIcon, tIcon]
    return (
        <div className='footer'>
            <div className="container footer__wrap">
                <h2 className="footer__title">
                    Связаться со мной
                </h2>
                <ul className='footer__contacts'>
                    {icons.map((icon) => (
                        <li className='footer__contacs-item' key={icon}>
                            <a href="#" className='footer__contacs-item_link'>
                                <img src={icon} alt="" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
