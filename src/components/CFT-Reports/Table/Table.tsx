import React, { useEffect, useState } from 'react';
import '../../../App.css';
import Report from '../Report/Report';
import { ReportType } from '../types';

interface Props {
    getReports: () => void;
    allReports: {reports: ReportType[] | null, isLoad: boolean};
    isActiveFormDel: ReportType | null;
    setActiveFormDel: Function;
}

const Table: React.FC<Props> = ({
    getReports,
    allReports,
    isActiveFormDel,
    setActiveFormDel,
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
                {allReports.reports?.map((obj:ReportType) =>
                    <Report reportType={obj.ReportType} key={obj.ID} contractType={obj.ContractType}
                    BuiltInCategory={obj.BuiltInCategory} obj={obj}
                    setActiveFormDel={setActiveFormDel} isActiveFormDel={isActiveFormDel}
                    getReports={getReports}
                    />
                )}
            </div>
        </>
    );
}

export default Table;
