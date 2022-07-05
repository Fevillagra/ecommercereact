import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

export const Navbar = () => {
  return (
        <header className="container-header">
            <nav className="container-header-nav">
                <div className="container-header-nav__logo">
                    <a href="#b"><i className="fa-solid fa-pepper-hot"></i></a>
                </div>
                <ul className="container-header-nav__list">
                    <li><a href="#b">Home</a></li>
                    <li><a href="#b">Store</a></li>
                    <li><a href="#b">Support</a></li>
                    <li><a href="#b">Contact</a></li>
                </ul>
                <div className="container-header-nav__cart">
                    <CartWidget/>
                </div>
            </nav>
        </header>
  );
}