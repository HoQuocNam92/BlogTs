import '../style/style.css'
import '../style/responsive.css'
import { useEffect } from "react";
import AOS from "aos";
const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian hiệu ứng (ms)
            offset: 100, // Khoảng cách bắt đầu hiệu ứng
            once: true, // Hiệu ứng chỉ chạy 1 lần
        });
    }, []);
    return (
        <div>
            <div id="header">
                <div className="header-section">
                    <div className="header-top">
                        <div className="header-contact">
                            <div className="contact">
                                <a href="tel:+1234567890" className="tel special-header"><i className="fa fa-phone"
                                    aria-hidden="true"></i>+1234567890</a>
                                <a href="mailto:info@yourmail.com"><i className="fa fa-envelope"
                                    aria-hidden="true"></i>info@yourmail.com</a>
                            </div>

                        </div>
                        <div className="social-media">
                            <nav>
                                <a href="#" className="login"><i className="fa fa-user" aria-hidden="true"></i>Login</a>
                                <ul>
                                    <li className="special">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </li>
                                    <li className="special">
                                        <i className="fa-brands fa-twitter"></i>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-instagram"></i>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="logo">
                            <img src="/images/logo (1).png " alt="" />
                        </div>
                        <div className="menu-toggle">
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className="icons">
                            <a className="search-icon d-none d-md-block special-header " href="#"><i
                                className="fa fa-search"></i></a>
                            <a className="cart" href="#"><i className="fa fa-shopping-cart"></i></a>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;