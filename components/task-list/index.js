import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.setSelectedTask = this.props.onTaskSelection;
  }

  render () {
    return (
      <List selectable ripple>
        <ListItem
          caption='Anagram'
          legend="Test if 2 strings are anagrams"
          onClick={(e) => this.setSelectedTask('anagram')}
        />
        <ListItem
          caption='Design Pattern'
          legend="Knowledge of design pattern"
          onClick={(e) => this.setSelectedTask('designPattern')}
        />
        <ListItem
          caption='Video Player App'
          legend='Sample video player'
          onClick={(e) => this.setSelectedTask('videoPlayer')}
        />
      </List>
    );
  }
}

export default TaskList;