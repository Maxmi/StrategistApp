import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StrategistApp from './components/StrategistApp/StrategistApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(
  <MuiThemeProvider>
    <StrategistApp />
  </MuiThemeProvider>,
  document.getElementById('app'));
