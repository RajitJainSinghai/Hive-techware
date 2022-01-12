import React from 'react';
import { useHistory } from 'react-router';
import search from '../../../assets/img/searchbar.svg';
import cart from '../../../assets/img/cart-img.svg';

function Header() {
    let user = JSON.parse(localStorage.getItem('HIVE_LOGIN_USER_KEY'));
    const history = useHistory();
    function logOut() {
        localStorage.clear();
        history.push('/SignIn');
    }
    return (
        <>
            <section className="navbar">
                <h4>
                    <a href="/">
                        Hive
                        <br />
                        <span>Techwear</span>
                    </a>
                </h4>
                <div className="navitem">
                    <form>
                        <input type="search" name="search" placeholder="Search" className="search" />
                        <button type="submit">
                            <img src={search} />
                        </button>
                    </form>
                    {localStorage.getItem('HIVE_LOGIN_USER_KEY') ? null : (
                        <>
                            <a href="SignUp">Sign Up</a>
                            <a href="SignIn">Sign In</a>
                        </>
                    )}
                    <a href="Cart">
                        <img src={cart} alt="cart-image" />
                    </a>

                    {localStorage.getItem('HIVE_LOGIN_USER_KEY') ? <button onClick={logOut}>LogOut </button> : null}
                </div>
            </section>
        </>
    );
}

export default Header;
