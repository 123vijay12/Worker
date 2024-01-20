import React,{useState} from 'react';
import { CDBSidebar, CDBSidebarHeader, CDBSidebarFooter,CDBSidebarMenuItem,CDBSidebarMenu,CDBSidebarContent
  ,CDBSidebarSubMenu, CDBBadge,CDBContainer,} from 'cdbreact';
import '../Slidebar/sidebar.css'
import logo from '../../assets/Logo.png';
import Emp1 from '../../assets/emp1.jpg';

const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen)
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'scroll initial' }}>
      {/* Sidebar Content */}
      <CDBSidebar textColor="#000" backgroundColor="#E88C7D" collapsed={!isSidebarOpen}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt=""
              style={{ width: '30px' }}
            />
            <h6 className="ms-2">WORKER </h6>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
            <CDBSidebarMenu>
                  <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                  <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
                  <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                    Metrics
                  </CDBSidebarMenuItem>
              </CDBSidebarMenu>
          </CDBSidebarContent>

        {/* Sidebar Footer */}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <CDBSidebarContent>
          <CDBSidebarMenuItem >
          <img src={Emp1} alt="User Photo" style={{
                    width: '40px',  
                    height: '40px', 
                    borderRadius: '50%', 
                    marginRight: '8px', 
                  }} />
           Sidlinga
            </CDBSidebarMenuItem>
            </CDBSidebarContent>
        </CDBSidebarFooter>

      </CDBSidebar>

      
    </div>
  );
};

export default Sidebar;
