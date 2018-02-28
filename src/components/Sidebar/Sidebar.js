import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import {cyan500} from 'material-ui/styles/colors';

import Section from '../Section/Section';
import AddSection from '../AddSection/AddSection';

//Sidebar will consist of many Section components
//and Add Secton component at the bottom

const Sidebar = (props) => (
  <Drawer
    open={props.open}
    docked={false}
    onRequestChange={open => props.onToggle(open)}
    >
    <MenuItem
      leftIcon={
        <ActionHome color={cyan500}/>
      }
      >
        <Section sectionName={''}/>
    </MenuItem>
    <MenuItem><Section sectionName={'Urgent & Important'}/></MenuItem>
    <MenuItem><Section sectionName={'Urgent but less Important'}/></MenuItem>
    <MenuItem><Section sectionName={'Less urgent but Important'}/></MenuItem>
    <MenuItem><Section sectionName={'Neither Urgent, nor Important'}/></MenuItem>
    <MenuItem><AddSection /></MenuItem>
  </Drawer>
);



export default Sidebar;
