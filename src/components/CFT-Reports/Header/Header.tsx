import React, { useState } from 'react';
import '../../../App.css';
import Logo from '../../../images/logo.svg';
import { addContract } from './HeaderService';


const Header: React.FC = ({

}) => {

    return (
        <div className='headerReports' style={{marginBottom: 30}}>
            <a href="/" className="header__logo">
                <img src={Logo} alt='logo'/>
            </a>
            <div className="header__wrp-info">
                <div className="header__wrp-titles">
                    <h1>CFT Reports</h1>
                    <h2>Manage the contract-template details</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
