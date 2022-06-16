import './Navbar.css';

function Navbar() {
  return (
        <header className="container-header">
            <nav className="container-header-nav">
                <div className="container-header-nav__logo">
                    <a href="#b"><i class="fa-solid fa-pepper-hot"></i></a>
                </div>
                <ul className="container-header-nav__list">
                    <li><a href="#b">Home</a></li>
                    <li><a href="#b">Store</a></li>
                    <li><a href="#b">Support</a></li>
                    <li><a href="#b">Contact</a></li>
                </ul>
                <div>
                    <div className="container-header-nav__search">
                        <a href="#b">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
  );
}

export default Navbar;