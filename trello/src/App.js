import React from 'react';
import NavHeader from 'components/NavHeader/NavHeader';
import DashBoard from 'components/DashBoard/DashBoard';
import SidebarControlProvider from 'components/Context/SiderbarContext';
import './App.scss';
import Sidebar from 'components/Sidebar/Sidebar';

const App = () => (
  <SidebarControlProvider>
    <NavHeader />
    <div className='app'>      
      <DashBoard />
      <Sidebar/>      
    </div>        
  </SidebarControlProvider>  
)

export default App;