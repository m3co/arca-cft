import React from 'react';
import './App.css';
import Definitions from './components/CFT-Definitions/Definitions';
import Reports from './components/CFT-Reports/Reports';
import CFTs from './components/CFT-ThirdPage/CFTs';
import Logo from './images/logo.svg';

const App = () => {
  const [activeRoute, setActiveRoute] = React.useState('CFT-Definitions');

  const urlDefinitions = '/definitions';
  const urlReports= '/reports';
  const urlCFTs= '/cfts';

  React.useEffect(() => {
    if(activeRoute === 'CFT-Definitions') {
      window.history.replaceState(null, '', urlDefinitions);
    }
    if(activeRoute === 'Reports') {
      window.history.replaceState(null, '', urlReports);
    }
    if(activeRoute === 'CFTs') {
      window.history.replaceState(null, '', urlCFTs);
    }
    
  }, [activeRoute]);

  return (
    <div className="App" style={{display: 'block'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 24}}>
        <div>
            <a href="/" className="header__logo">
                <img src={Logo} alt='logo'/>
            </a>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', width: 450, alignItems: 'center', margin: '0 auto'}}>
          <div 
          className={activeRoute === 'CFT-Definitions' ? 'btnRouteActive' : 'btnRoute'} 
          onClick={() => setActiveRoute('CFT-Definitions')}>
            <span>Definitons</span>
          </div>
          <div 
          className={activeRoute === 'Reports' ? 'btnRouteActive' : 'btnRoute'} 
          onClick={() => setActiveRoute('Reports')}
          >
            <span>Reports</span>
          </div>
          <div 
          className={activeRoute === 'CFTs' ? 'btnRouteActive' : 'btnRoute'}
          onClick={() => setActiveRoute('CFTs')}
          >
            <span>CFTs</span>
          </div>
        </div>
      </div>
      {activeRoute === 'CFT-Definitions' ? <Definitions /> : null}
      {activeRoute === 'Reports' ? <Reports /> : null}
      {activeRoute === 'CFTs' ? <CFTs /> : null}
    </div>
  );
}

export default App;
