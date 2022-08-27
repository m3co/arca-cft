import React from 'react';
import './App.css';
import Definitions from './components/CFT-Definitions/Definitions';
import Reports from './components/CFT-Reports/Reports';
import ThirdPage from './components/CFT-ThirdPage/ThirdPage';
import Logo from './images/logo.svg';


const App = () => {
  const [routes, setRoutes] = React.useState(['Reports', 'Definitions', 'Third Page']);
  const [activeRoute, setActiveRoute] = React.useState('Definitions');
  return (
    <div className="App" style={{display: /*activeRoute === 'Definitions' ? 'flex' : */'block'}}>
                  
      <div style={{display: 'flex', justifyContent: 'space-between', /*width: 800*/marginBottom: 24}}>
        <div>
            <a href="/" className="header__logo">
                <img src={Logo} alt='logo'/>
            </a>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', width: 450, alignItems: 'center', margin: '0 auto'}}>
          <div 
          className={activeRoute === 'Definitions' ? 'btnRouteActive' : 'btnRoute'} 
          onClick={() => setActiveRoute('Definitions')}>
            <span>Definitons</span>
          </div>
          <div 
          className={activeRoute === 'Reports' ? 'btnRouteActive' : 'btnRoute'} 
          onClick={() => setActiveRoute('Reports')}
          >
            <span>Reports</span>
          </div>
          <div 
          className={activeRoute === 'Third Page' ? 'btnRouteActive' : 'btnRoute'}
          onClick={() => setActiveRoute('Third Page')}
          >
            <span>Third Page</span>
          </div>
        </div>
       
      </div>
      {activeRoute === 'Definitions' ? <Definitions /> : null}
      {activeRoute === 'Reports' ? <Reports /> : null}
      {activeRoute === 'Third Page' ? <ThirdPage /> : null}
    </div>
  );
}

export default App;
