import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import '../../App.css';
import { getAllCFTs } from './CFTsService';
import { CFTType } from './types';
import Table from './Table/Table';


const CFTs = () => {
  const [allCFTs, setAllCFTs] = useState<{CFTs: CFTType[] | null, isLoad: boolean}>({ CFTs: null, isLoad: false });
  const [isActiveFormAdd, setActiveFormAdd] = useState(false);
  const [isActiveFormDel, setActiveFormDel] = useState<CFTType | null>(null);
  const [isActiveFormAddFilter, setActiveFormAddFilter] = useState<CFTType | null>(null);
  const [isActiveFormDelFilter, setActiveFormDelFilter] = useState<CFTType | null>(null);

  const getCFTs = React.useCallback(() => {
    getAllCFTs()
      .then(res => setAllCFTs({ CFTs: res, isLoad: true }))
      .catch(() => setAllCFTs({ ...allCFTs, isLoad: true }));
  }, [allCFTs.isLoad]);

  useEffect(() => {
    getCFTs();
  }, [getCFTs]);
 
  return (
    <div>
        <Header 
        getCFTs={getCFTs}
        isActiveFormAdd={isActiveFormAdd} 
        setActiveFormAdd={setActiveFormAdd}
        />
        <Table
        setAllCFTs={setAllCFTs}
        allCFTs={allCFTs} 
        getCFTs={getCFTs}
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

export default CFTs;
