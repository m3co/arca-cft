import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import '../../App.css';
import Table from './Table/Table';
import { getAllReports } from './Table/TableService';
import { ReportType } from './types';

const Reports = () => {
    const [allReports, setAllReports] = useState<{reports: ReportType[] | null, isLoad: boolean}>({ reports: null, isLoad: false });
    const [isActiveFormDel, setActiveFormDel] = useState<ReportType | null>(null);

    const getReports = React.useCallback(() => {
        getAllReports()
        .then(res => setAllReports({ reports: res, isLoad: true }))
        .catch(() => setAllReports({ ...allReports, isLoad: true }));
    }, [allReports.isLoad]);
  
    useEffect(() => {
        getReports();
    }, [getReports]);

    return (
        <div>
            <Header />
            <Table 
            allReports={allReports} 
            getReports={getReports}
            isActiveFormDel={isActiveFormDel} 
            setActiveFormDel={setActiveFormDel} 
            />
            <div 
            className={
            isActiveFormDel ? 
            'modal-window__backdrop' : 
            'modal-window__backdrop hidden'}>
            </div>
        </div>
    );
}

export default React.memo(Reports);
