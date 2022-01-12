import React from 'react';
import Header from '../components/Posts/common/Header';
import Footer from '../components/Posts/common/Footer';
import bottom_background from '../assets/img/bottom-background.png';
import tshirt_background from '../assets/img/tshirt-background.png';
import filter from '../assets/img/filter.png';
import plus from '../assets/img/plus.svg';
import hats_background from '../assets/img/hats-background.png';
import shirts_background from '../assets/img/shirts-background.png';
import offer_tshirt from '../assets/img/offer-tshirt.png';
import offer_bottom from '../assets/img/offer-bottom.png';
import offer_hats from '../assets/img/offer-hats.png';
import offer_shirts from '../assets/img/offer-shirts.png';
import main from '../assets/img/Main-Front.png';

const Home = () => {
    return (
        <>
            <Header />
            <div className="first-view">
                <img src={main} />
                <p>
                    Clothing Divine getting
                    <br />
                    Everyone’s Favourite <br />
                    <span> This Season’s most - loved Styles </span>
                </p>
            </div>
            <section className="middle">
                <p>
                    Get Up To 50% off
                    <br />
                    On all products and brands
                </p>
                <ul>
                    <li>
                        <a href="#" className="shopwomen">
                            Shop Women’s
                        </a>
                    </li>
                    <li>
                        <a href="#" className="shopmen">
                            Shop men’s
                        </a>
                    </li>
                </ul>
            </section>
            <section className="categories">
                <h2>Category</h2>
                <div className="cgrid">
                    <div className="row">
                        <div className="column">
                            <img src={tshirt_background} />
                            <div className="Tshirts">
                                <img src={filter} />
                                <i>
                                    <a href="Items">
                                        <img src={plus} />
                                    </a>
                                </i>
                                <p>T-shirts</p>
                            </div>
                            <img src={shirts_background} />
                            <div className="Shirts-cat">
                                <img src={filter} />
                                <i>
                                    <img src={plus} />
                                </i>
                                <p>Shirts</p>
                            </div>
                        </div>
                        <div className="column">
                            <img src={bottom_background} />
                            <div className="Bottoms">
                                <img src={filter} />
                                <i>
                                    <img src={plus} />
                                </i>
                                <p>Bottoms</p>
                            </div>
                            <img src={hats_background} />
                            <div className="Hats-cat">
                                <img src={filter} />
                                <i>
                                    <img src={plus} />
                                </i>
                                <p>Hats</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offers">
                <h2>Offers</h2>
                <div className="grid">
                    <div className="row">
                        <div className="column">
                            <img src={offer_tshirt} />
                            <div className="tshirt">
                                <span>UP TO 50% off</span>
                                <p>
                                    On all the <br />
                                    Tshirts brands
                                </p>
                                <button>GET NOW</button>
                            </div>
                            <img src={offer_bottom} />
                            <div className="bottom">
                                <span>UP TO 50% off</span>
                                <p>
                                    On all the <br />
                                    Bottom brands
                                </p>
                                <button className="get" id="get">
                                    GET NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src={offer_hats} />
                            <div className="hats">
                                <span>UP TO 25% off</span>
                                <p>On all the Hats brands</p>
                                <button>GET NOW</button>
                            </div>
                            <img src={offer_shirts} />
                            <div className="shirts">
                                <span>UP TO 30% off</span>
                                <p>On all the Shirts brands</p>
                                <button>GET NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
