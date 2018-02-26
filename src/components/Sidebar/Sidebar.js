import React from 'react';

//Sidebar will consist of many Section components
//and Add Secton component at the bottom - or on top?
//So far just hard coding
const Sidebar = () => (
  <div>
    <p>
      Urgent & Important
      <span>Count:</span>
    </p>
    <p>
      Less urgent but Important
      <span>Count:</span>
    </p>
    <p>
      Urgent but less Important
      <span>Count:</span>
    </p>
    <p>
      Neither Urgent, nor Important
      <span>Count:</span>
    </p>
    <p>
      Add section
    </p>
  </div>
)

export default Sidebar;
