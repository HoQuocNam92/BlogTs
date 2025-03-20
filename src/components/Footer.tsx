import React from 'react';
import '../style/style.css'
import '../style/responsive.css'
import { useEffect } from "react";
import AOS from "aos";
const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian hiệu ứng (ms)
            offset: 100, // Khoảng cách bắt đầu hiệu ứng
            once: true, // Hiệu ứng chỉ chạy 1 lần
        });
    }, []);
    return (

        <div id='footer'>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-widget">
                            <h3>About Us</h3>
                            <p>Welcome to our restaurant! We take pride in serving delicious meals made with the finest
                                ingredients. Our commitment to quality and service makes us a preferred dining destination.
                            </p>
                            <div className="footer-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <h3>Quick Links</h3>
                            <div className="footer-links">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Reservations</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <h3>Opening Hours</h3>
                            <div className="footer-links">
                                <ul>
                                    <li>Monday - Friday</li>
                                    <li>9:00 AM - 10:00 PM</li>
                                    <li>Saturday - Sunday</li>
                                    <li>10:00 AM - 11:00 PM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <h3>Contact Info</h3>
                            <div className="footer-contact">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>123 Restaurant Street, City, Country</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>+1 234 567 890</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <span>info@restaurant.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Restaurant. All rights reserved | Designed by <a href="#">Your Name</a></p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;