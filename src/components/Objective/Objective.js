import React from 'react';

//this comp will render individual objective 
export default class Objective extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          {this.props.itemsList}
        </span>
      </div>
    );
  }
}
