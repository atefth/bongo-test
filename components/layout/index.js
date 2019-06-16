import React from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox/lib';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib';

class MainLayout extends React.Component {
    state = {
        drawerActive: false
    };

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    
                </NavDrawer>
                <Panel>
                    <AppBar leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>

                    </div>
                </Panel>
            </Layout>
        );
    }
}

export default MainLayout;