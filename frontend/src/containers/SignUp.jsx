import React from 'react';
import Footer from '../components/Posts/common/Footer';
import Header from '../components/Posts/common/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';

export default function SignUp() {
    const dispatch = useDispatch();
    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const SignUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Header />
            <section class="sign">
                <div class="Heading">
                    <h2>SIGN UP</h2>
                </div>
                <div class="signupform">
                    <ul>
                        <li>
                            <label for="name">Name</label>
                        </li>
                        <li>
                            <input type="text" placeholder="Enter Name" value={user_name} onChange={inputUserName} />
                        </li>
                        <br />
                        <li>
                            <label for="email">Enter Email</label>
                        </li>
                        <li>
                            <input type="email" placeholder="Enter Email" value={email} onChange={inputEmail} />
                        </li>
                        <br />
                        <li>
                            <label for="password">Password</label>
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
                            <label for="confirm-password">Confirm Password</label>
                        </li>
                        <li>
                            <input type="password" placeholder="Confirm Password" />
                        </li>
                        <br />
                        <li>
                            <button type="submit" className="submit" onClick={SignUpButton}>
                                SIGN UP
                            </button>
                        </li>
                        <br />
                        <li>
                            <a href="/SignIn">Have an Account? Sign In</a>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}
