import '../style/style.css'
import '../style/responsive.css'
import { useEffect } from "react";
import AOS from "aos";
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian hiệu ứng (ms)
            offset: 100, // Khoảng cách bắt đầu hiệu ứng
            once: true, // Hiệu ứng chỉ chạy 1 lần
        });
    }, []);
    return (
        <div id='content-main'>
            <div id="hero">
                <div className="hero-container">
                </div>

                <div className="hero-section">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="hero-content">
                                    <h1 data-aos="fade-right" data-aos-delay="200">
                                        Creative<br /> Multipurpose Websites
                                    </h1>
                                    <p data-aos="fade-right" data-aos-delay="600">
                                        Crafted by innovative creators for expecting people's predefined dummy text
                                        chunks as necessary, making this the first.
                                    </p>
                                    <div className="hero-btns">
                                        <a data-aos="fade-right" data-aos-delay="900" href="#"
                                            className="btn btn-more btn-primary">See
                                            More</a>
                                        <a data-aos="fade-right" data-aos-delay="900" href="#"
                                            className="btn btn-now btn-primary">Get
                                            Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="hero-content">
                                    <h1 data-aos="fade-right" data-aos-delay="200">
                                        Modern<br /> Responsive Design
                                    </h1>
                                    <p data-aos="fade-right" data-aos-delay="600">
                                        Optimized for all devices with beautiful transitions and interactive elements.
                                    </p>
                                    <div className="hero-btns">
                                        <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">See
                                            More</a>
                                        <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Get
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="call-to-action" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                    <div className="text-action">
                        <h2>FOR BUILDING THE MODERN WEBSITE
                        </h2>
                        <p>Packed with all the goodies you can get, Kallyas is our flagship premium template.
                        </p>
                    </div>
                    <div className="btn-action">
                        <button>JOIN NEWSLETTER</button>
                    </div>
                </div>
                <div className="services">
                    <div className="services-section">
                        <div className="services-content">
                            <h6>Our Services</h6>
                            <h1>Why Choose Us
                            </h1>

                        </div>
                        <div className="services-container">
                            <div className="services-items">
                                <div className="items" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                                    <img src="/images/service1.png" alt="Web Development" />
                                    <div className="services-des">
                                        <h5>Web Development</h5>
                                        Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                    </div>
                                </div>
                            </div>
                            <div className="services-items">
                                <div className="items" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
                                    <img src="/images/service2.png" alt="Web Development" />
                                    <div className="services-des">
                                        <h5>Testing for perfection</h5>
                                        Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                    </div>
                                </div>
                            </div>
                            <div className="services-items">
                                <div className="items" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                                    <img src="/images/service3.png" alt="Web Development" />
                                    <div className="services-des">
                                        <h5>Discussion of the idea</h5>
                                        Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                    </div>
                                </div>
                            </div>
                            <div className="services-items">
                                <div className="items" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                                    <img src="/images/service4.png" alt="Web Development" />
                                    <div className="services-des">
                                        <h5>Modern style</h5>
                                        Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                    </div>
                                </div>
                            </div>
                            <div className="services-items">
                                <div className="items" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
                                    <img src="/images/service1.png" alt="Web Development" />
                                    <div className="services-des">
                                        <h5>Web Development</h5>
                                        Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                    </div>
                                </div>
                            </div>
                            <div className="services-items">
                                <div className="items" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                                    <img src="/images/service5.png" alt="Web Development" />
                                    <div className="services-des">
                                        <h5>Elaboration of the core</h5>
                                        Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="container">
                        <div className="about-content" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                            <h6 className="title-about">ABOUT TAMPLATE</h6>
                            <div className="about-text">
                                <h1 className="text-title">A RICH FEATURED, EPIC<br />& PREMIUM WORK.</h1>
                                <p className="text-desc">
                                    There are many variations of passages of available but the majority have suffered
                                    alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly
                                    believable. If you are going to use a passage of you need to be sure there isn't
                                    anything
                                    embarrassing hidden in the middle of text. All the generators on the Internet.
                                </p>
                                <div className="about-offers">
                                    <div className="offer-item">
                                        <div className="offer-icon">
                                            <i className="fa fa-edit"></i>
                                        </div>
                                        <div className="offer-content">
                                            <h5>ANY OFFER</h5>
                                            <span>New York, United States</span>
                                        </div>
                                    </div>
                                    <div className="offer-item">
                                        <div className="offer-icon">
                                            <i className="fa fa-edit"></i>
                                        </div>
                                        <div className="offer-content">
                                            <h5>ANY OFFER</h5>
                                            <span>New York, United States</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-btn">
                                    <a href="#" className="btn">SEE MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="about-images" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                            <div className="img-large">
                                <img src="./images/featured-img1.jpg" alt="Featured Image 1" />
                            </div>
                            <div className="img-small">
                                <img src="./images/featured-img2.jpg" alt="Featured Image 2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent">
                    <div className="container">
                        <div className="items-layout">
                            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="400" className="item">
                                <div className="item-text item-special">
                                    <time >15 Oct, 2019
                                    </time>
                                    <h3>
                                        <a href="">Proudly for us to build stylish</a>
                                    </h3>
                                    <p className="text-link">
                                        <a href="">Seanding</a>
                                        <a href="">Website</a>
                                        <a href="">E-commerce</a>
                                    </p>
                                    <div className="post-btn-special">
                                        <a className="post-btn" href="#">
                                            <i className="fa fa-arrow-right"></i>
                                        </a>
                                    </div>

                                </div>
                                <div className="item-img">
                                    <img src="/images/post1.jpg" alt="Recent Post 1" />
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="400" className="item">
                                <div className="item-img item-img-special">
                                    <img src="/images/post2.jpg" alt="Recent Post 1" />
                                </div>
                                <div className="item-text ">
                                    <time >15 Oct, 2019
                                    </time>
                                    <h3>
                                        <a href="">Proudly for us to build stylish</a>
                                    </h3>
                                    <p className="text-link">
                                        <a href="">Seanding</a>
                                        <a href="">Website</a>
                                        <a href="">E-commerce</a>
                                    </p >
                                    <a className="post-btn" href="#">
                                        <i className="fa fa-arrow-right"></i>
                                    </a>
                                </div>

                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="400" className="item">
                                <div className="item-text item-special">
                                    <time >15 Oct, 2019
                                    </time>
                                    <h3>
                                        <a href="">Proudly for us to build stylish</a>
                                    </h3>
                                    <p className="text-link">
                                        <a href="">Seanding</a>
                                        <a href="">Website</a>
                                        <a href="">E-commerce</a>
                                    </p>
                                    <div className="post-btn-special">
                                        <a className="post-btn" href="#">
                                            <i className="fa fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="item-img">
                                    <img src="/images/post3.jpg" alt="Recent Post 1" />
                                </div>

                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="400" className="item">
                                <div className="item-img item-img-special">
                                    <img src="/images/post4.jpg" alt="Recent Post 1" />
                                </div>
                                <div className="item-text">
                                    <time >15 Oct, 2019
                                    </time>
                                    <h3>
                                        <a href="">Proudly for us to build stylish</a>
                                    </h3>
                                    <p className="text-link">
                                        <a href="">Seanding</a>
                                        <a href="">Website</a>
                                        <a href="">E-commerce</a>
                                    </p>
                                    <a className="post-btn" href="#">
                                        <i className="fa fa-arrow-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="about-btn recent-center">
                        <a href="#" className="btn">See more</a>
                    </div>
                </div>
                <div className="trust">
                    <div className="container">
                        <div className="trust-section">
                            <div data-aos="fade-right" className="trust-text">
                                <h6 className="title-about">ABOUT TAMPLATE</h6>
                                <div className="about-text">
                                    <h1 className="text-title">A RICH FEATURED, EPIC<br />& PREMIUM WORK.</h1>
                                    <p className="text-desc">
                                        There are many variations of passages of available but the majority have suffered
                                        alteration
                                        in some form, by injected humour, or randomised words which don't look even slightly
                                        believable. If you are going to use a passage of you need to be sure there isn't
                                        anything
                                        embarrassing hidden in the middle of text. All the generators on the Internet.
                                    </p>
                                    <h5>Web Design & Development</h5>
                                    <ul className="list-unstyled">
                                        <li>Web Content</li>
                                        <li>Website other</li>
                                        <li>Fashion</li>
                                        <li>Mobile & Tablet</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="trust-image">
                                <div className="image-item">
                                    <a className="image" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                                        <img src="./images/gallery1.jpg" alt="Trust" />

                                    </a>
                                    <a className="image" data-aos="fade-up  " data-aos-delay="400" data-aos-duration="400">
                                        <img src="./images/gallery2.jpg" alt="Trust" />

                                    </a>
                                    <a className="image" data-aos="fade-up" data-aos-delay="400" data-aos-duration="400">
                                        <img src="./images/gallery3.jpg" alt="Trust" />

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="container-section">
                        <div className="text-table">
                            <h6>OUR PRICES</h6>
                            <h1>Price Table List</h1>
                        </div>
                        <div className="table-section">
                            <div className="table">
                                <div className="card" data-aos="fade-up" data-aos-delay="00">
                                    <span>Monthly</span>
                                    <h2>Starter</h2>
                                    <p className="desc">Here goes some description</p>
                                    <p className="price">$39.00</p>
                                    <p className="text-create">Create excepteur sint occaecat cupidatat non proident</p>
                                    <a href="#">BUY NOW</a>
                                    <svg viewBox="0 0 170 193">
                                        <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                            d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="table">
                                <div className="card" data-aos="fade-up" data-aos-delay="300">
                                    <span>Monthly</span>
                                    <h2>Starter</h2>
                                    <p className="desc">Here goes some description</p>
                                    <p className="price">$39.00</p>
                                    <p className="text-create">5GB Storage Space

                                    </p>
                                    <p className="text-create">20GB Monthly Bandwidth

                                    </p>
                                    <p className="text-create">My SQL Databases

                                    </p>
                                    <p className="text-create">100 Email Account

                                    </p>
                                    <a href="#">BUY NOW</a>

                                    <svg viewBox="0 0 170 193">
                                        <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                            d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="table">
                                <div className="card" data-aos="fade-up" data-aos-delay="600">
                                    <span>Monthly</span>
                                    <h2>Starter</h2>
                                    <p className="desc">Here goes some description</p>
                                    <p className="price">$39.00</p>
                                    <p className="text-create">Create excepteur sint occaecat cupidatat non proident</p>
                                    <a href="#">BUY NOW</a>
                                    <svg viewBox="0 0 170 193">
                                        <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                            d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="container">
                        <div className="swiper testimonial-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-section">
                                        <div className="test-img">
                                            <img src="images/test1.png" alt="Testimonial 1" />
                                        </div>
                                        <h5>John</h5>
                                        <span>UI/UX Designer</span>
                                        <p>
                                            Ash's tactics & books have helped me a lot in my understanding on how social
                                            media
                                            advertising works. I can say that he is one of the best development
                                            professionals I have
                                            dealt with so far. His experience is great & he is such a great & pleasant
                                            person to
                                            work with as he understands what you are
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-section">
                                        <div className="test-img">
                                            <img src="images/test1.png" alt="Testimonial 2" />
                                        </div>
                                        <h5>Sarah</h5>
                                        <span>Web Developer</span>
                                        <p>
                                            Ash's tactics & books have helped me a lot in my understanding on how social
                                            media
                                            advertising works. I can say that he is one of the best development
                                            professionals I have
                                            dealt with so far. His experience is great & he is such a great & pleasant
                                            person to
                                            work with as he understands what you are
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Home;