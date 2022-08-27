import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import '../../App.css';
import Table from './Table/Table';
import { getAllReports } from './Table/TableService';
import { ReportType } from './types';

const Reports = () => {
    const [allReports, setAllReports] = useState<{reports: ReportType[] | null, isLoad: boolean}>({ reports: null, isLoad: false });
    const [isActiveFormDel, setActiveFormDel] = useState<ReportType | null>(null);

    const getReports = () => {
        getAllReports()
        .then(res => setAllReports({ reports: res, isLoad: true }))
        .catch(() => setAllReports({ ...allReports, isLoad: true }));
    }
    console.log(allReports.reports)
  
    useEffect(() => {
        getReports();
    }, [allReports.isLoad]);

    return (
        <div>
            <Header />
            <Table 
            allReports={allReports} 
            getReports={getReports}
            isActiveFormDel={isActiveFormDel} 
            setActiveFormDel={setActiveFormDel} 
            />
        </div>
    );
}

export default Reports;
