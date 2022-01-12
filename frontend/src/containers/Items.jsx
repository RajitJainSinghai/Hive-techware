import React from 'react';
import Footer from '../components/Posts/common/Footer';
import Header from '../components/Posts/common/Header';
import dropdown from '../assets/img/dropdown.svg';
import adidas_yeeze_tshirt_1 from '../assets/img/Adidas-yezee-tshirt 1.png';
import adidas_yeeze_tshirt_2 from '../assets/img/Adidas-yezee-tshirt 2.png';
import adidas_yeeze_tshirt_3 from '../assets/img/Adidas-yezee-tshirt 3.png';
import adidas_yeeze_tshirt_4 from '../assets/img/Adidas-yeeze-tshirt 4.png';
import adidas_yeeze_tshirt_5 from '../assets/img/Adidas-yezee-tshirt 5.png';
import adidas_yeeze_tshirt_6 from '../assets/img/Adidas-yezee-tshirt 6.png';
import adidas_yeeze_women_1 from '../assets/img/Adidas-yezee-women 1.png';
import adidas_yeeze_women_2 from '../assets/img/Adidas-yezee-women 2.png';
import adidas_yeeze_women_3 from '../assets/img/Adidas-yezee-women 3.png';

function Items() {
    return (
        <>
            <Header />
            <section className="main-heading">
                <div className="gender-filter">
                    <select>
                        <option>FILTER BY GENDER</option>
                        <option value="Mens">Men's</option>
                        <option value="womens">Women's</option>
                    </select>
                    <h2 className="text">T-shirts</h2>
                </div>
            </section>
            <section className="category-list">
                <div className="sidenav">
                    <h2>Category Lists</h2>
                    <h2>Men's</h2>
                </div>
                <div className="flex-main">
                    <div className="sidenav-content">
                        <div className="shirts-nav">
                            <h2>Shirts</h2>
                            <img src={dropdown} />
                        </div>
                        <div className="bottoms-nav">
                            <h2>Bottoms</h2>
                            <img src={dropdown} />
                        </div>
                        <div className="hats-nav">
                            <h2>Hats</h2>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                    <div className="item-tshirts">
                        <div className="yezee-tshirt-1">
                            <img src={adidas_yeeze_tshirt_1} />
                            <p>
                                <span>Adidas Yeezy</span>
                                <br />
                                Adidas originals men
                            </p>
                            <p>
                                $1500 <button>Add+</button>
                            </p>
                        </div>
                        <div className="yezee-tshirt-2">
                            <img src={adidas_yeeze_tshirt_2} />
                            <p>
                                <span>Adidas Yeezy</span>
                                <br />
                                Adidas originals men
                            </p>
                            <p>
                                $1500 <button>Add+</button>
                            </p>
                        </div>
                        <div className="yezee-tshirt-3">
                            <img src={adidas_yeeze_tshirt_3} />
                            <p>
                                <span>Adidas Yeezy</span>
                                <br />
                                Adidas originals men
                            </p>
                            <p>
                                $1500 <button>Add+</button>
                            </p>
                        </div>
                        <div className="yezee-tshirt-4">
                            <img src={adidas_yeeze_tshirt_4} />
                            <p>
                                <span>Adidas Yeezy</span>
                                <br />
                                Adidas originals men
                            </p>
                            <p>
                                $1500 <button>Add+</button>
                            </p>
                        </div>
                        <div className="yezee-tshirt-5">
                            <img src={adidas_yeeze_tshirt_5} />
                            <p>
                                <span>Adidas Yeezy</span>
                                <br />
                                Adidas originals men
                            </p>
                            <p>
                                $1500 <button>Add+</button>
                            </p>
                        </div>
                        <div className="yezee-tshirt-6">
                            <img src={adidas_yeeze_tshirt_6} />
                            <p>
                                <span>Adidas Yeezy</span>
                                <br />
                                Adidas originals men
                            </p>
                            <p>
                                $1500 <button>Add+</button>
                            </p>
                        </div>
                        <div className="women-heading">
                            <h2>Women's</h2>
                        </div>
                        <div className="yezee-women">
                            <div className="yezee-women-1">
                                <img src={adidas_yeeze_women_1} />
                                <p>
                                    <span>Adidas Yeezy</span>
                                    <br />
                                    Adidas originals men
                                </p>
                                <p>
                                    $1500 <button>Add+</button>
                                </p>
                            </div>
                            <div className="yezee-women-2">
                                <img src={adidas_yeeze_women_2} />
                                <p>
                                    <span>Adidas Yeezy</span>
                                    <br />
                                    Adidas originals men
                                </p>
                                <p>
                                    $1500 <button>Add+</button>
                                </p>
                            </div>
                            <div className="yezee-women-3">
                                <img src={adidas_yeeze_women_3} />
                                <p>
                                    <span>Adidas Yeezy</span>
                                    <br />
                                    Adidas originals men
                                </p>
                                <p>
                                    $1500 <button>Add+</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-numbers">
                <div className="pages">
                    <a href="#" className="page1">
                        1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">...</a>
                    <a href="#">8</a>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Items;
