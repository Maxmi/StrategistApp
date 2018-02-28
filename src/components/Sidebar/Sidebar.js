import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Section from '../Section/Section';
import AddSection from '../AddSection/AddSection';

//Sidebar will consist of many Section components
//and Add Secton component at the bottom

const Sidebar = (props) => (
  // <div className="sidebar">
  //   <Section sectionName={'Urgent & Important'}/>
  //   <Section sectionName={'Urgent but less Important'}/>
  //   <Section sectionName={'Less urgent but Important'}/>
  //   <Section sectionName={'Neither Urgent, nor Important'}/>
  //   <AddSection />
  // </div>
  <Drawer open={false}>
    <MenuItem><Section sectionName={'Urgent & Important'}/></MenuItem>
    <MenuItem><Section sectionName={'Urgent but less Important'}/></MenuItem>
    <MenuItem><Section sectionName={'Less urgent but Important'}/></MenuItem>
    <MenuItem><Section sectionName={'Neither Urgent, nor Important'}/></MenuItem>
    <MenuItem><AddSection /></MenuItem>
  </Drawer>
);



export default Sidebar;
