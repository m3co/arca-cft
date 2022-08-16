import React, { useEffect, useState } from 'react';
import '../../App.css';
import Logo from '../../images/logo.svg';

type Props = any

const Header: React.FC<Props> = () => {
    return (
        <>
            <div className='header'>
                <a href="/" className="header__logo">
                    <img src={Logo} />
                </a>
                <div className="header__wrp-info">
                    <div className="header__wrp-titles">
                        <h1>CFT Admin</h1>
                        <h2>Manage the contract-template details</h2>
                    </div>
                    <div className="header__wrp-options">
                        <div className="btn-primary js-modal" data-modal="#modal_add">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M3.33325 8H12.6666" stroke="white" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                            Add
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
