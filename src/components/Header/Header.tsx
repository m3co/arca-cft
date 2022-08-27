import React, { useState } from 'react';
import '../../App.css';
import Logo from '../../images/logo.svg';
import { addContract } from './HeaderService';

interface Props {
    getContracts: () => void;
    isActiveFormAdd: boolean;
    setActiveFormAdd: Function;
}

const Header: React.FC<Props> = ({
    getContracts,
    isActiveFormAdd,
    setActiveFormAdd
}) => {
    const [nameContract, setNameContract] = useState('');

    const add = () => {
        const body = {
            ContractType: nameContract,
        };
        addContract(JSON.stringify(body))
        .then(() => getContracts())
        setActiveFormAdd(!isActiveFormAdd);
        setNameContract('');
    };

    return (
        <>
            <div className='header'>
                <a href="/" className="header__logo">
                    <img src={Logo} alt='logo'/>
                </a>
                <div className="header__wrp-info">
                    <div className="header__wrp-titles">
                        <h1>CFT Admin</h1>
                        <h2>Manage the contract-template details</h2>
                    </div>
                    <div className="header__wrp-options" onClick={() => setActiveFormAdd(!isActiveFormAdd)}>
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
            <div id="modal_add" className={isActiveFormAdd ? 'modal-window show' : 'modal-window'}>
                <div className="modal-window__title">
                    <button type="button" className="modal-close btn-close" onClick={() => setActiveFormAdd(!isActiveFormAdd)}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6464 15.648C16.1157 15.1787 16.1157 14.4178 15.6464 13.9485L9.69939 8.00082L15.648 2.05155C16.1173 1.58223 16.1173 0.821313 15.648 0.351993C15.1788 -0.117327 14.4179 -0.117327 13.9487 0.351992L8 6.30126L2.05134 0.35199C1.58207 -0.11733 0.821226 -0.11733 0.351954 0.35199C-0.117318 0.82131 -0.117318 1.58223 0.351954 2.05155L6.30061 8.00082L0.353586 13.9485C-0.115686 14.4178 -0.115686 15.1787 0.353586 15.648C0.822858 16.1173 1.5837 16.1173 2.05297 15.648L8 9.70038L13.947 15.648C14.4163 16.1173 15.1771 16.1173 15.6464 15.648Z" fill="#A2A2A2"/>
                        </svg>
                    </button>
                    <div className="modal-title">Add new Contract</div>
                    <div className="modal-comment">Please, enter the name of contract</div>
                    <form id="addContract">
                        <div className="input-box">
                            <input type="text" 
                            className="input-style" 
                            required 
                            placeholder="Enter the name of contract" 
                            value={nameContract}
                            onChange={(e) => setNameContract(e.target.value)}
                            />
                        </div>
                        <div className="modal-buttons">
                            <button type="button" 
                            className="btn btn-primary modal-close" 
                            onClick={() => setActiveFormAdd(!isActiveFormAdd)}>
                                Cancel
                            </button>
                            <button 
                            type="button" 
                            className="btn btn-secondary modal-close"
                            disabled={nameContract === ''}
                            onClick={add}
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Header;
