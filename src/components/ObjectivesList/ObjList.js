import React from 'react';
import Objective from '../Objective/Objective';
import {List, ListItem} from 'material-ui/List';

//this comp will render list of all objectives for each section 
export const ObjList = (props) => {
  return (
    <List>
      {props.items.map((item, key) => {
        return <ListItem primaryText="Hello" />
      })}
    </List>
  )
}
// export default ObjList;
