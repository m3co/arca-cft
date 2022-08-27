import React, { useState, useEffect } from 'react';
import '../../App.css';
import Header from './Header/Header';
import Table from './Table/Table';
import { getAllContracts } from './Table/TableService';
import { ContractType } from './types';

const Definitions = () => {
  const [allContracts, setAllContracts] = useState<{contracts: ContractType[] | null, isLoad: boolean}>({ contracts: null, isLoad: false });
  const [isActiveFormAdd, setActiveFormAdd] = useState(false);
  const [isActiveFormDel, setActiveFormDel] = useState<ContractType | null>(null);
  const [isActiveFormAddFilter, setActiveFormAddFilter] = useState<ContractType | null>(null);
  const [isActiveFormDelFilter, setActiveFormDelFilter] = useState<ContractType | null>(null);

  const getContracts = () => {
      getAllContracts()
      .then(res => setAllContracts({ contracts: res, isLoad: true }))
      .catch(() => setAllContracts({ ...allContracts, isLoad: true }));
  }

  useEffect(() => {
      getContracts();
  }, [allContracts.isLoad]);

  return (
    <div className="App">
      <Header 
      getContracts={getContracts} 
      isActiveFormAdd={isActiveFormAdd} 
      setActiveFormAdd={setActiveFormAdd}
      />
      <Table 
      allContracts={allContracts} 
      setAllContracts={setAllContracts} 
      getContracts={getContracts}
      isActiveFormDel={isActiveFormDel} 
      setActiveFormDel={setActiveFormDel} 
      isActiveFormAddFilter={isActiveFormAddFilter}
      setActiveFormAddFilter={setActiveFormAddFilter} 
      isActiveFormDelFilter={isActiveFormDelFilter} 
      setActiveFormDelFilter={setActiveFormDelFilter}
      />
      <div 
      className={
      isActiveFormAdd || 
      isActiveFormDel || 
      isActiveFormAddFilter || 
      isActiveFormDelFilter ? 
      'modal-window__backdrop' : 
      'modal-window__backdrop hidden'}>
      </div>
    </div>
  );
}

export default Definitions;
