import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Logged = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const Header = () => (
  <AppBar
    title="StrategistApp"
    iconElementRight={<Logged />}
    onLeftIconButtonClick={ () => console.log('clicked')}
    />
);

export default Header;
