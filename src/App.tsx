import React from 'react';
import './App.css';
import Definitions from './components/CFT-Definitions/Definitions';
import Reports from './components/CFT-Reports/Reports';

const App = () => {
  const [routes, setRoutes] = React.useState(['Reports', 'Definitions', 'Test']);
  const [activeRoute, setActiveRoute] = React.useState('Reports');
  return (
    <div className="App" style={{display: activeRoute === 'Definitions' ? 'flex' : 'block'}}>
      <div style={{display: 'flex', width: 400, justifyContent: 'space-between', margin: '0 auto'}}>
        <div 
        className={activeRoute === 'Reports' ? 'btnRouteActive' : 'btnRoute'} 
        onClick={() => setActiveRoute('Reports')}
        >
          <span>Reports</span>
        </div>
        <div 
        className={activeRoute === 'Definitions' ? 'btnRouteActive' : 'btnRoute'} 
        onClick={() => setActiveRoute('Definitions')}>
          <span>Definitons</span>
        </div>
        <div 
        className={activeRoute === 'Test' ? 'btnRouteActive' : 'btnRoute'}>
          <span>Test</span>
        </div>
      </div>
      {activeRoute === 'Definitions' ? <Definitions /> : null}
      {activeRoute === 'Reports' ? <Reports /> : null}
    </div>
  );
}

export default App;
