import './Footer.css'

export const Footer = () => {
    return(
        <footer className="footer" id="f">
            <div className="footer__content">
                <div className="footer__content--main">
                    <h3>Pepper ©</h3>
                    <p>Software And Hardware.</p>
                </div>
                <div className="footer__content--divlist">
                    <h3>Store</h3>
                    <ul>
                        <li><a href="#f">Phone</a></li>
                        <li><a href="#f">Pc</a></li>
                        <li><a href="#f">Tv And Home</a></li>
                        <li><a href="#f">Watch</a></li>
                        <li><a href="#f">Accesories</a></li>
                        <li><a href="#f">GiftCards</a></li>
                        <li><a href="#f">Components</a></li>
                    </ul>
                </div>
                <div className="footer__content--divlist">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#f">Pepper Music</a></li>
                        <li><a href="#f">Pepper TV+</a></li>
                        <li><a href="#f">Pepper Books</a></li>
                        <li><a href="#f">Pepper Arcade</a></li>
                        <li><a href="#f">Pepper Card</a></li>
                        <li><a href="#f">Pepper Podcast</a></li>
                    </ul>
                </div>
                
                <div className="footer__content--divlist">
                    <h3>Us</h3>
                    <ul>
                        <li><a href="#f">About Us</a></li>
                        <li><a href="#f">Contact Us</a></li>
                        <li><a href="#f">Affiliates</a></li>
                        <li><a href="#f">Resources</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__media">
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-facebook-f"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-twitter"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-youtube"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-instagram"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-linkedin-in"></i></a></div>
            </div>
            <div className="footer__copy">
                <p>©Copyright. All rights reserved.</p>
            </div>
        </footer>
    )
}