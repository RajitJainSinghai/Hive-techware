import React from 'react';
import Footer from '../components/Posts/common/Footer';
import Header from '../components/Posts/common/Header';
import adidas_yeeze_1 from '../assets/img/Adidas-yeeze 1.png';
import adidas_yeeze_2 from '../assets/img/Adidas-yeeze 2.png';
import adidas_yeeze_3 from '../assets/img/Adidas-yeeze 3.png';
import adidas_yeeze_4 from '../assets/img/Adidas-yeeze 4.png';
import adidas_yeeze_5 from '../assets/img/Adidas-yeeze 5.png';

function Cart() {
    return (
        <>
            <Header />
            <section className="my-cart">
                <h2>My Cart</h2>
                <section className="cart-details">
                    <div className="adidas-hat">
                        <img src={adidas_yeeze_1} alt="Hat" />
                        <p>
                            <span>Adidas Yeezy</span>
                            <br />
                            Adidas originals men
                        </p>
                        <p>
                            $50{' '}
                            <span>
                                <a>Remove</a>
                            </span>
                        </p>
                    </div>
                    <div className="adidas-bottom">
                        <img src={adidas_yeeze_2} alt="bottom" />
                        <p>
                            <span>Adidas Yeezy</span>
                            <br />
                            Adidas originals men
                        </p>
                        <p>
                            $50{' '}
                            <span>
                                <a>Remove</a>
                            </span>
                        </p>
                    </div>
                    <div className="adidas-shirt">
                        <img src={adidas_yeeze_3} alt="shirt" />
                        <p>
                            <span>Adidas Yeezy</span>
                            <br />
                            Adidas originals men
                        </p>
                        <p>
                            $50{' '}
                            <span>
                                <a>Remove</a>
                            </span>
                        </p>
                    </div>
                    <div className="adidas-shoe">
                        <img src={adidas_yeeze_4} alt="shoe" />
                        <p>
                            <span>Adidas Yeezy</span>
                            <br />
                            Adidas originals men
                        </p>
                        <p>
                            $50{' '}
                            <span>
                                <a>Remove</a>
                            </span>
                        </p>
                    </div>
                    <div className="adidas-tshirt">
                        <img src={adidas_yeeze_5} alt="tshirt" />
                        <p>
                            <span>Adidas Yeezy</span>
                            <br />
                            Adidas originals men
                        </p>
                        <p>
                            $50{' '}
                            <span>
                                <a>Remove</a>
                            </span>
                        </p>
                    </div>
                </section>
                <div className="subtotal">
                    <p>
                        SUBTOTAL: <span>$3050</span>
                    </p>
                    <br />
                    <h4>5 - ITEMS</h4>
                    <br />
                    <button className="button-subtotal">PROCEED TO CHECKOUT</button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Cart;
