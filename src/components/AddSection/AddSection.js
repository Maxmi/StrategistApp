import React from 'react';
import FlatButton from 'material-ui/FlatButton';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';

const AddSection = (props) => (
  <div className="section">
      {/* <FloatingActionButton mini={true}>
        <ContentAdd />
      </FloatingActionButton> */}
      <FlatButton
        label="Add new section"
        primary={true}
        onClick={() => console.log('clicked on Add New Section!')}
      />
  </div>
);

export default AddSection;
