import React, { useEffect, useState, useRef } from 'react';
import '../../App.css';
import SelectSearch, { fuzzySearch } from "react-select-search";

type Props = any

const Contract: React.FC<Props> = ({
    reportType,
    contractType,
    BuiltInCategory,
    ConstraintField,
    QuantityField,
    KeynoteField
}) => {
    const searchInputBuiltIn = useRef(null);
    const options = [
           { name: "Workshop Three", value: "1" },
           { name: "Workshop Two", value: "2" },
           { name: "Workshop Three", value: "3" },
          { name: "Workshop Four", value: "4" },
           { name: "Workshop Five", value: "5" }
         ];
         const handleChange = (e:any) => {
            console.log(e.target.value)
          };
          const [value, setValue] = useState(BuiltInCategory);
    return (

        <div className="table__row">
                    <div className="table__row-part" data-name="Contract1">
                        <div className="name">{contractType}</div>
                        <span>
                        <svg className="svg" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    </div>
                    <div className="table__row-part" data-name="Report">
                        <div className="select_wrapper">
                            <div data-select="1" tabIndex={0} className="select-header" data-value="">
                                <div className="select-header__text_wrapper">
                                    <div className="select__text">{reportType}</div>
                                </div>
                                <svg className="select__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div data-droplist="1" className="droplist">
                                <div className="select-dropdown__inner">
                                    <div tabIndex={0} data-dropitem="1" className="item">
                                        Schedule
                                    </div>
                                    <div tabIndex={0} data-dropitem="1" className="item">
                                        MaterialTakeoff
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table__row-part" data-name="BuiltIn">
                        <div className="select_wrapper">
                            <div data-select="2" tabIndex={0} className="select-header" data-value="">
                                <div className="select-header__text_wrapper">
                                    <div className="select__text">{BuiltInCategory}</div>
                                </div>
                                <svg className="select__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div data-droplist="2" className="droplist">
                                <div className="select-dropdown__inner">
                                    <div tabIndex={0} data-dropitem="2" className="item">
                                        BIC 1
                                    </div>
                                    <div tabIndex={0} data-dropitem="2" className="item">
                                        BIC 2
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
                 {/*}   <SelectSearch
                    options={options}
                    value={value}
                    onChange={setValue}
                    search
                    filterOptions={fuzzySearch}
                    placeholder="Search something"
                    
/>*/}
                    <div className="table__row-part" data-name="Keynote">
                        <div className="select_wrapper">
                            <div data-select="3" tabIndex={0} className="select-header" data-value="">
                                <div className="select-header__text_wrapper">
                                    <div className="select__text">{KeynoteField}</div>
                                </div>
                                <svg className="select__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div data-droplist="3" className="droplist">
                                <div className="select-dropdown__inner">
                                    <div tabIndex={0} data-dropitem="3" className="item">
                                        Key 1
                                    </div>
                                    <div tabIndex={0} data-dropitem="3" className="item">
                                        Key 2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table__row-part" data-name="Constraint">
                        <div className="select_wrapper">
                            <div data-select="4" tabIndex={0} className="select-header" data-value="">
                                <div className="select-header__text_wrapper">
                                    <div className="select__text">{ConstraintField}</div>
                                </div>
                                <svg className="select__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div data-droplist="4" className="droplist">
                                <div className="select-dropdown__inner">
                                    <div tabIndex={0} data-dropitem="4" className="item">
                                        Constraint 1
                                    </div>
                                    <div tabIndex={0} data-dropitem="4" className="item">
                                        Constraint 2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table__row-part" data-name="Quantity">
                        <div className="select_wrapper">
                            <div data-select="5" tabIndex={0} className="select-header" data-value="">
                                <div className="select-header__text_wrapper">
                                    <div className="select__text">{QuantityField}</div>
                                </div>
                                <svg className="select__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div data-droplist="5" className="droplist">
                                <div className="select-dropdown__inner">
                                    <div tabIndex={0} data-dropitem="5" className="item">
                                        Quantity 1
                                    </div>
                                    <div tabIndex={0} data-dropitem="5" className="item">
                                        Quantity 2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table__row-part-end" data-name="func">
                        <button type="button" className="btn-remove js-modal" data-modal="#modal_remove">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6464 15.648C16.1157 15.1787 16.1157 14.4178 15.6464 13.9485L9.69939 8.00082L15.648 2.05155C16.1173 1.58223 16.1173 0.821313 15.648 0.351993C15.1788 -0.117327 14.4179 -0.117327 13.9487 0.351992L8 6.30126L2.05134 0.35199C1.58207 -0.11733 0.821226 -0.11733 0.351954 0.35199C-0.117318 0.82131 -0.117318 1.58223 0.351954 2.05155L6.30061 8.00082L0.353586 13.9485C-0.115686 14.4178 -0.115686 15.1787 0.353586 15.648C0.822858 16.1173 1.5837 16.1173 2.05297 15.648L8 9.70038L13.947 15.648C14.4163 16.1173 15.1771 16.1173 15.6464 15.648Z" fill="#A2A2A2"/>
                            </svg>
                        </button>
                    </div>
                </div>

);
}

export default Contract;
