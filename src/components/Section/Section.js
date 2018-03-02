import React from 'react';
import AddObjective from '../AddObjective/AddObjective';
import ObjList from '../ObjectivesList/ObjList';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSectionOpen: false,
      itemsList: [
        {name: 'Objective 1', description: 'Description 1', checked: false},
        {name: 'Objective 2', description: 'Description 2', checked: false},
        {name: 'Objective 3', description: 'Description 3', checked: false},
        {name: 'Objective 4', description: 'Description 4', checked: false}
      ]
    }
  }
  render() {
    return (
      <div>
        <span>
          {this.props.sectionName}
        </span>
      </div>
    );
  }

}
