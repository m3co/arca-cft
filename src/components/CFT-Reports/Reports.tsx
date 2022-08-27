import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import '../../App.css';
import Table from './Table/Table';
import { getAllReports } from './Table/TableService';
import { ContractType } from './types';

const Reports = () => {
    const [allContracts, setAllContracts] = useState<{contracts: ContractType[] | null, isLoad: boolean}>({ contracts: null, isLoad: false });
    const [isActiveFormAdd, setActiveFormAdd] = useState(false);
    const [isActiveFormDel, setActiveFormDel] = useState<ContractType | null>(null);
    const [isActiveFormAddFilter, setActiveFormAddFilter] = useState<ContractType | null>(null);
    const [isActiveFormDelFilter, setActiveFormDelFilter] = useState<ContractType | null>(null);
  
    const getContracts = () => {
        getAllReports()
        .then(res => setAllContracts({ contracts: res, isLoad: true }))
        .catch(() => setAllContracts({ ...allContracts, isLoad: true }));
    }
    console.log(allContracts.contracts)
  
    useEffect(() => {
        getContracts();
    }, [allContracts.isLoad]);
  return (
    <div>
        <Header />
        <Table 
              allContracts={allContracts} 
              setAllContracts={setAllContracts} 
              getContracts={getContracts}
              isActiveFormDel={isActiveFormDel} 
              setActiveFormDel={setActiveFormDel} 
              isActiveFormAddFilter={isActiveFormAddFilter}
              setActiveFormAddFilter={setActiveFormAddFilter} 
              isActiveFormDelFilter={isActiveFormDelFilter} 
              setActiveFormDelFilter={setActiveFormDelFilter}/>
    </div>
  );
}

export default Reports;
