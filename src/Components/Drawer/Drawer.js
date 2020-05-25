import React from 'react';
import Selectors from "./Components/Selector/selectors";

import './Drawer.css';

const drawer = props => {

    let drawerClasses = 'drawer';
    if (props.show) {
        drawerClasses = 'drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/"> History</a></li>
                <li><a href="/"> Profile</a></li>
                <li><a href="/"> Profile</a></li>

            </ul>
        </nav>
    );
};

export default drawer;
