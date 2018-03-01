import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const HomePage = () => (
  <div className="homePage">
    <blockquote>
      <p>In preparing for buttle I have always found that plans are useless, but planning is indispensable.</p>
      <cite>Dwight D. Eisenhower</cite>
    </blockquote>
    <div className="signupForm">
      <form action="" method="post">
        <label htmlFor="email"></label>
        <TextField
          type="email"
          hintText="Your email..."
        />
        <RaisedButton
          label="Sign Up"
          primary={true}
          />
      </form>
    </div>
  </div>
);

export default HomePage;
