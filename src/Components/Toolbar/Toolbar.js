import React from 'react';

import DrawerToggleButton from '../Drawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">The Van Halen Project </a> </div>
            <div className="spacer" />
            <div className="sidebar_navigation-items">
                <ul>
                    {/* <li><a href="/">History </a></li>
                    <li><a href="/">Profile </a></li> */}
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
