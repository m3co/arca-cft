import React, { useEffect, useState } from 'react';
import '../../../App.css';
import InputCommand from '../commons/InputCommand';
import InputValue from '../commons/InputValue';
import SearchSelectBuiltIn from '../commons/SeacrhSelectBuiltIn';
import SelectComparator from '../commons/SelectComparator';
import SelectConstraint from '../commons/SelectConstraint';
import SelectFieldFilters from '../commons/SelectFieldFilters';
import SelectKeynote from '../commons/SelectKeynote';
import SelectQuantity from '../commons/SelectQuantity';
import SelectReportType from '../commons/SelectReportType';
import SelectValueType from '../commons/SelectValueType';
import { Filter, ReportType } from '../types';
import { deleteReport, updateReport, addDefinition } from './ReportService';

interface Props {
    reportType: string;
    contractType: string;
    BuiltInCategory: string;
    obj: ReportType;
    isActiveFormDel: ReportType | null;
    setActiveFormDel: Function;
    getReports: () => void;
}

const Report: React.FC<Props> = ({
    reportType,
    contractType,
    BuiltInCategory,
    obj,
    isActiveFormDel,
    setActiveFormDel,
    getReports,
}) => {
    const [isShow, setShow] = useState(false);
    const [valueKeynote, setValueKeynote] = useState({value: obj.KeynoteField, label: obj.KeynoteField});
    const [valueConstraint, setValueConstraint] = useState({value: obj.ConstraintField, label: obj.ConstraintField});
    const [valueQuantity, setValueQuantity] = useState({value: obj.QuantityField, label: obj.QuantityField});

    const deleteRep = () => {
        deleteReport(JSON.stringify(isActiveFormDel))
        .then(() => getReports());
        setActiveFormDel(null);
    }
   
    const postReport = () => {
        const body = {
            ...obj,
            KeynoteField: valueKeynote.value,
            ConstraintField: valueConstraint.value,
            QuantityField: valueQuantity.value,
            Processed: false,
        }
        obj.KeynoteField = valueKeynote.value;
        obj.ConstraintField = valueConstraint.value;
        obj.QuantityField = valueQuantity.value;

        addDefinition(JSON.stringify(obj))
        .then(() => getReports());
    } 

    return (
        <>
            <div className="table__row">
                <div className="table__row-part" data-name="Contract1">
                    <div className="name">{contractType}</div>
                    <span onClick={()=>setShow(!isShow)} style={{padding: 10}}>
                        <svg className={!isShow ? 'svg' : 'svg rotate'} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
                <SelectReportType valueField={reportType} obj={obj}/>
                <SearchSelectBuiltIn valueField={BuiltInCategory} obj={obj}/>
                <SelectKeynote obj={obj} valueKeynote={valueKeynote} setValueKeynote={setValueKeynote}/>
                <SelectConstraint obj={obj} valueConstraint={valueConstraint} setValueConstraint={setValueConstraint}/>
                <SelectQuantity obj={obj} valueQuantity={valueQuantity} setValueQuantity={setValueQuantity}/>
                <div className="table__row-part-end" data-name="func" onClick={() => setActiveFormDel(obj)}>
                    <button type="button" className="btn-remove js-modal" data-modal="#modal_remove">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6464 15.648C16.1157 15.1787 16.1157 14.4178 15.6464 13.9485L9.69939 8.00082L15.648 2.05155C16.1173 1.58223 16.1173 0.821313 15.648 0.351993C15.1788 -0.117327 14.4179 -0.117327 13.9487 0.351992L8 6.30126L2.05134 0.35199C1.58207 -0.11733 0.821226 -0.11733 0.351954 0.35199C-0.117318 0.82131 -0.117318 1.58223 0.351954 2.05155L6.30061 8.00082L0.353586 13.9485C-0.115686 14.4178 -0.115686 15.1787 0.353586 15.648C0.822858 16.1173 1.5837 16.1173 2.05297 15.648L8 9.70038L13.947 15.648C14.4163 16.1173 15.1771 16.1173 15.6464 15.648Z" fill="#A2A2A2"/>
                        </svg>
                    </button>
                </div>
                <button 
                className={valueKeynote.value === '' || valueConstraint.value === '' || valueQuantity.value === '' ? 'btn-primary disabled': 'btn-primary'}
                style={{height: 30, fontSize: 14}}
                onClick={postReport} 
                disabled={valueKeynote.value === '' || valueConstraint.value === '' || valueQuantity.value === ''}
                >
                    POST
                </button>
            </div>
            <div className={isShow ? "table__hidden-row open" : 'table__hidden-row'}>
                <div className="info-box">
                    <div className="name">Filters:</div>
                </div>
                <div className="hidden-table">
                    {obj.Filters.map((miniObj: Filter, index: number) => {
                        let keyValue = Date.now() + index;
                        return (
                            <div className="hidden-row" key={keyValue}>
                                <div className="hidden-cell">
                                    <InputCommand obj={obj} miniObj={miniObj}/>
                                </div>
                                <div className="hidden-cell">
                                    <SelectFieldFilters valueField={miniObj.Field} obj={obj} miniObj={miniObj}/>
                                </div>
                                <div className="hidden-cell">
                                   <SelectComparator valueField={miniObj.Comparator} obj={obj} miniObj={miniObj}/>
                                </div>
                                <div className="hidden-cell">
                                   <InputValue obj={obj} miniObj={miniObj}/>
                                </div>
                                <div className="hidden-cell">
                                    <SelectValueType  valueField={miniObj.ValueType} obj={obj} miniObj={miniObj}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={isActiveFormDel ? 'modal-window show' : 'modal-window'}>
                <div className="modal-window__title">
                    <button type="button" className="modal-close btn-close" onClick={() => setActiveFormDel(null)}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6464 15.648C16.1157 15.1787 16.1157 14.4178 15.6464 13.9485L9.69939 8.00082L15.648 2.05155C16.1173 1.58223 16.1173 0.821313 15.648 0.351993C15.1788 -0.117327 14.4179 -0.117327 13.9487 0.351992L8 6.30126L2.05134 0.35199C1.58207 -0.11733 0.821226 -0.11733 0.351954 0.35199C-0.117318 0.82131 -0.117318 1.58223 0.351954 2.05155L6.30061 8.00082L0.353586 13.9485C-0.115686 14.4178 -0.115686 15.1787 0.353586 15.648C0.822858 16.1173 1.5837 16.1173 2.05297 15.648L8 9.70038L13.947 15.648C14.4163 16.1173 15.1771 16.1173 15.6464 15.648Z" fill="#A2A2A2"/>
                        </svg>
                    </button>
                    <div className="modal-title">Delete</div>
                    <div className="modal-comment">Are you sure?</div>
                    <div className="modal-buttons">
                        <button type="button" className="btn btn-primary modal-close" onClick={() => setActiveFormDel(null)}>Cancel</button>
                        <button type="button" className="btn btn-secondary modal-close" onClick={deleteRep}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(Report);
