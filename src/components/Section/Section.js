import React from 'react';
// import Badge from 'material-ui/Badge';

const Section = (props) => (
  <div className="section">
    <span>
      {props.sectionName}
    </span>
    {/* <Badge
      badgeContent={0}
      primary={true}
      >
    </Badge> */}
  </div>
);

export default Section;
