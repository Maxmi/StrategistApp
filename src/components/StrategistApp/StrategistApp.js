import React, {Component} from 'react';
import AddSection from '../AddSection/AddSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Modal from '../Modal/Modal';
import Objective from '../Objective/Objective';
// import PlanningBar from '../PlanningBar/PlanningBar';
import Section from '../Section/Section';
import Sidebar from '../Sidebar/Sidebar';

export default class StrategistApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    }
  }
  render() {
    return (
      <div className="container">
        <Header onLeftIconClick={() => this.setState({isSidebarOpen: true})}/>
        <Sidebar
          open={this.state.isSidebarOpen}
          onToggle={(isSidebarOpen) => this.setState({isSidebarOpen})}

        />
        <HomePage />
        <Footer />
      </div>
    );
  }
}
