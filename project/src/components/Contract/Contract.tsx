import React, { useEffect, useState, useRef } from 'react';
import '../../App.css';
import SearchSelectBuiltIn from '../commons/SeacrhSelectBuiltIn';
import SelectConstraint from '../commons/SelectConstraint';
import SelectKeynote from '../commons/SelectKeynote';
import SelectQuantity from '../commons/SelectQuantity';
import SelectReportType from '../commons/SelectReportType';

type Props = any

const Contract: React.FC<Props> = ({
    reportType,
    contractType,
    BuiltInCategory,
    ConstraintField,
    QuantityField,
    KeynoteField,
    obj
}) => {

    return (
        <div className="table__row">
            <div className="table__row-part" data-name="Contract1">
                <div className="name">{contractType}</div>
                <span>
                    <svg className="svg" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </div>
            <SelectReportType value5={reportType} obj={obj}/>
            <SearchSelectBuiltIn value5={BuiltInCategory} obj={obj}/>
            <SelectKeynote value5={KeynoteField} obj={obj}/>
            <SelectConstraint value5={ConstraintField} obj={obj}/>
            <SelectQuantity value5={QuantityField} obj={obj}/>
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
