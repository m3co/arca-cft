import React from 'react';
import '../../../App.css';

const Header: React.FC = () => {
    return (
        <div className='headerReports' style={{marginBottom: 30}}>
            <div className="header__wrp-info">
                <div className="header__wrp-titles">
                    <h1>Reports</h1>
                    <h2>Convert the reports into CFT-Definitions on demand</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
