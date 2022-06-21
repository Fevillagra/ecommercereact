import './Footer.css'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content--main">
                    <h3>Pepper ©</h3>
                    <p>Software And Hardware.</p>
                </div>
                <div className="footer__content--store">
                    <h3>Store</h3>
                    <ul>
                        <li><a>Phone</a></li>
                        <li><a>Pc</a></li>
                        <li><a>Tv And Home</a></li>
                        <li><a>Watch</a></li>
                        <li><a>Accesories</a></li>
                        <li><a>GiftCards</a></li>
                        <li><a>Components</a></li>
                    </ul>
                </div>
                <div>Support</div>
                <div>Contact</div>
            </div>
        </footer>
    )
}

export default Footer;