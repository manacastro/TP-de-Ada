import React from 'react';
//import Menu from 'components/Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavHeader.scss';
import { SidebarContextConsumer } from 'components/Context/SiderbarContext';

const NavHeader = () => (
    <>
        <div className='navHeader'>
            <p>Mi tablero</p>
            <SidebarContextConsumer>
                {
                    ({openSidebar}) => (
                        <div className="menu" 
                            onClick={openSidebar} >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    )
                }
            </SidebarContextConsumer>
        </div>
    </>
)

export default NavHeader;