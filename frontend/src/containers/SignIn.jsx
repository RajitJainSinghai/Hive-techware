import React from 'react';
import Footer from '../components/Posts/common/Footer';
import Header from '../components/Posts/common/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';

const SignIn = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = event => {
        event.preventDefault();
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Header />
            <section className="sign">
                <div className="Heading">
                    <h2>SIGN IN</h2>
                </div>
                <div className="signupform">
                    <ul>
                        <li>
                            <label for="email">Email Adress</label>
                        </li>
                        <li>
                            <input type="email" placeholder="Enter Email" value={email} onChange={inputEmail} />
                        </li>
                        <br />
                        <li>
                            <label for="password"> Password</label>
                        </li>
                        <li>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={inputPassword}
                            />
                        </li>
                        <br />
                        <li>
                            <button className="submit" onClick={signInButton}>
                                SIGN IN
                            </button>
                        </li>
                        <br />
                        <li>
                            <a href="/SignUp">New Customer? Register</a>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SignIn;
