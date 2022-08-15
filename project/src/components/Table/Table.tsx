import React, { useEffect, useState } from 'react';
import '../../App.css';
import Logo from '../../images/logo.svg';
import Contract from '../Contract/Contract';
import {getAllContracts} from './TableService';



type Props = any

const Table: React.FC<Props> = () => {
    const [isActive, setActive] = useState(true);
    const [allContracts, setAllContracts] = useState<any>({ contracts: null, isLoad: false });

    const getContracts = async () => {
        getAllContracts()
       /* .then(res => setAllContracts({ cameras: res.data.cameras, isLoad: true }))
        .catch(() => setAllContracts({ ...allContracts, isLoad: true }));
        //addUser('test1', 'test1', '1')*/
        .then(res => console.log(res))
    }
    useEffect(() => {
        getContracts()
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    return (
<div className="table">
        <div className="table__wrp">
            <div className="table__header">
                <div className="table__part" data-name="Contract">
                    <div className="name">Contract Type</div>
                    <span>
                        <svg className="svg" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.45837L5 5.45837L9 1.45837" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
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
                    <Contract />
                    </div>
                    );
}

export default Table;
