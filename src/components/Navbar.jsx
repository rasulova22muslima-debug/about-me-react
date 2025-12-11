import { useState } from "react"


const Navbar = () => {
    const [ulLink, setUlLink ] = useState([
          { id: 1, name: 'Обо мне' },
          { id: 2, name: 'Мои работы' },
          { id: 3, name: 'Контакты' },
        ])
    return (
        <header className="header">
            <div className="container header__nav">
                <a href="#" className="header__logo">
                    PROWEB
                </a>
                <ul className="list">{ulLink.map((item) => (
                    <li className="list__item" key={item.id}>
                        <a href="#" className="link">{item.name}</a>
                    </li>
                ))}

                </ul>
            </div>
        </header>
    )
}

export default Navbar
