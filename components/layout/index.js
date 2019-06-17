import React from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox/lib';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib';
import './index.css';
import TaskList from '../task-list/index.js'
import Anagram from '../anagram/index.js'
import DesignPattern from '../design-pattern/index.js'
import VideoPlayer from '../video-player/index.js'

class MainLayout extends React.Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    selectedTask: null,
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  }

  onTaskSelection = (selectedTask) => {
    this.setState({selectedTask: selectedTask});
    this.setState({drawerActive: false});
  }

  render() {
    var currentTask = null;
    const taskDefinition = <h2>Please select a test from the sidebar to view it's implementation and code</h2>;
    switch (this.state.selectedTask) {
      case 'anagram':
        currentTask = <Anagram/>;
        break;
      case 'designPattern':
        currentTask = <DesignPattern/>;
        break;
      case 'videoPlayer':
        currentTask = <VideoPlayer/>;
        break;
      default:
        currentTask = taskDefinition;
      }
    return (
      <Layout>
        <NavDrawer active={this.state.drawerActive} permanentAt='xxxl' onOverlayClick={ this.toggleDrawerActive } pinned={this.state.drawerPinned}>
          <TaskList onTaskSelection={this.onTaskSelection}/>
        </NavDrawer>
        <Panel>
          <AppBar title="BongoBD Test" leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } rightIcon='fiber_pin' onRightIconClick={ this.toggleDrawerPinned } />
            <div className='taskContainer'>
              {currentTask}
            </div>
        </Panel>
      </Layout>
    );
  }
}

export default MainLayout;