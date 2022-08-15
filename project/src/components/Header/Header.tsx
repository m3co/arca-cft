import React, { useEffect, useState } from 'react';
import '../../App.css';
import Logo from '../../images/logo.svg';

type Props = any

const Header: React.FC<Props> = () => {
    const [value, setValue] = useState("")

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
            <div className="search">
                <div className="search__line">
                    <form id="search" className="search__form">
                        <div className="input-box">
                            <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                    stroke="#A1A1A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 14L11.1 11.1" stroke="#A1A1A1" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                            <input type="text" className="input-style" required placeholder="Search by invoice number, name, amount..." value={value} />
                            <button type="submit" className="btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Header;
