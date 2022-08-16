import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { getAllContracts } from './components/Table/TableService';

const App = () => {
  const [allContracts, setAllContracts] = useState<any>({ contracts: null, isLoad: false });
  const [isActiveFormAdd, setActiveFormAdd] = useState(false);
  const [isActiveFormDel, setActiveFormDel] = useState<any | null>(null);
  const [isActiveFormAddFilter, setActiveFormAddFilter] = useState<any | null>(null);
  const [isActiveFormDelFilter, setActiveFormDelFilter] = useState<any | null>(null);

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
      <Header getContracts={getContracts} isActiveFormAdd={isActiveFormAdd} setActiveFormAdd={setActiveFormAdd}/>
      <Table allContracts={allContracts} setAllContracts={setAllContracts} getContracts={getContracts}
      isActiveFormDel={isActiveFormDel} setActiveFormDel={setActiveFormDel} isActiveFormAddFilter={isActiveFormAddFilter}
      setActiveFormAddFilter={setActiveFormAddFilter} isActiveFormDelFilter={isActiveFormDelFilter} setActiveFormDelFilter={setActiveFormDelFilter}
      />
      <div className={isActiveFormAdd || isActiveFormDel || isActiveFormAddFilter || isActiveFormDelFilter ? 'modal-window__backdrop' : 'modal-window__backdrop hidden'}></div>
    </div>
  );
}

export default App;
