import React, {useState} from 'react';
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/navigation/Toolbar/Toolbar';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }
    
    return (
        <React.Fragment> 
            <Toolbar toggle={sideDrawerToggleHandler} show={showSideDrawer} />
            <SideDrawer show={showSideDrawer} closed={sideDrawerToggleHandler} />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
};

export default Layout
