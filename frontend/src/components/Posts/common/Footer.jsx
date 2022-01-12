import React from 'react';
import facebook from '../../../assets/img/facebooklogo.svg';
import instagram from '../../../assets/img/instagramlogo.svg';

function Footer() {
    return (
        <>
            <section className="footer">
                <table className="quicklinks">
                    <tr>
                        <th>Shop and Learn</th>
                        <th>Support</th>
                    </tr>
                    <tr>
                        <td>Sign Up</td>
                        <td>Contact Us</td>
                    </tr>
                    <tr>
                        <td>Sign In</td>
                    </tr>
                    <tr>
                        <td>Item Lists</td>
                    </tr>
                </table>
                <div className="logo">
                    <a href="www.facebook.com">
                        <img src={facebook} />
                    </a>
                    <a href="www.instagram.com">
                        <img src={instagram} />
                    </a>
                </div>
                <hr />
                <p>
                    Copyright © 2021 HIVE Techwear. All rights reserved. Privacy Policy Terms of Use Sales Policy Legal
                    Site Map
                </p>
            </section>
        </>
    );
}

export default Footer;
