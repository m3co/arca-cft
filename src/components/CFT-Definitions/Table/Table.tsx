import React, { useEffect, useState } from 'react';
import '../../../App.css';
import Contract from '../Contract/Contract';
import { mainSearch } from './TableService';
import { ContractType } from '../types';

interface Props {
    getContracts: () => void;
    setAllContracts: Function;
    allContracts: {contracts: ContractType[] | null, isLoad: boolean};
    isActiveFormDel: ContractType | null;
    setActiveFormDel: Function;
    isActiveFormAddFilter: ContractType | null;
    setActiveFormAddFilter: Function;
    isActiveFormDelFilter: ContractType | null;
    setActiveFormDelFilter: Function;
}

const Table: React.FC<Props> = ({
    getContracts,
    setAllContracts,
    allContracts,
    isActiveFormDel,
    setActiveFormDel,
    isActiveFormAddFilter,
    setActiveFormAddFilter,
    isActiveFormDelFilter,
    setActiveFormDelFilter
}) => {
    const [value, setValue] = useState("");

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const click = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        mainSearch(value)
        .then(res => setAllContracts({ contracts: res, isLoad: true }))
        .catch(() => setAllContracts({ ...allContracts, isLoad: true }));
    }

    useEffect(() => {
        if(value === '') {
            getContracts();
        }
    }, [value]);

    return (
        <>
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
                            <input type="text" className="input-style" onChange={(e) => change(e)} required placeholder="Search by invoice number, name, amount..." value={value} />
                            <button className="btn-primary" onClick={(e)=>click(e)}>Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="table">
                <div className="table__wrp">
                    <div className="table__header">
                        <div className="table__part" data-name="Contract">
                            <div className="name">Contract Type</div>
                        </div>
                        <div className="table__part" data-name="Report">
                            <div className="name">Report Type</div>
                        </div>
                        <div className="table__part" data-name="BuiltIn">
                            <div className="name">BuiltIn Category</div>
                        </div>
                        <div className="table__part" data-name="Keynote">
                            <div className="name">Keynote Field</div>
                        </div>
                        <div className="table__part" data-name="Constraint">
                            <div className="name">Constraint Field</div>
                        </div>
                        <div className="table__part" data-name="Quantity">
                            <div className="name">Quantity Field</div>
                        </div>
                        <div className="table__part-end" data-name="func"></div>
                    </div>
                </div>
                {allContracts.contracts?.map((obj:ContractType) =>
                    <Contract reportType={obj.ReportType} key={obj.ID} contractType={obj.ContractType}
                    BuiltInCategory={obj.BuiltInCategory} ConstraintField={obj.ConstraintField}
                    QuantityField={obj.QuantityField} KeynoteField={obj.KeynoteField} obj={obj}
                    setActiveFormDel={setActiveFormDel} isActiveFormDel={isActiveFormDel}
                    getContracts={getContracts} setActiveFormAddFilter={setActiveFormAddFilter}
                    isActiveFormAddFilter={isActiveFormAddFilter} isActiveFormDelFilter={isActiveFormDelFilter}
                    setActiveFormDelFilter={setActiveFormDelFilter}
                    />
                )}
            </div>
        </>
    );
}

export default Table;