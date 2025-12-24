const Navbar = ({ links }) => {
  return (
    <header className="header">
      <div className="container header__nav">
        <a href="#" className="header__logo">PROWEB</a>
        <ul className="list">
          {links.map(item => (
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
