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

    return (
        <>
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
