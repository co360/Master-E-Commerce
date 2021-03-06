import React from 'react';
import {Link} from 'react-router-dom';

import { auth } from '../../firebase/firebase';

import './Header.scss';

export default function Header({ currentUser }) {
    return (
        <div className="header">
            <Link className="logo" to="/">
                HOME
            </Link>
            <div className="menu">
                <Link className="menu-link" to="/shop">Shop</Link>
                <Link className="menu-link" to="/contact">Contact</Link>
                {
                    currentUser?
                    <div className="menu-link" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="menu-link" to="/signin">Sign In</Link>
                }
                
            </div>
        </div>
    )
}
