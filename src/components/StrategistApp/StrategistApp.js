import React, {Component} from 'react';
import AddSection from '../AddSection/AddSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import Objective from '../Objective/Objective';
import PlanningBar from '../PlanningBar/PlanningBar';
import Section from '../Section/Section';
import Sidebar from '../Sidebar/Sidebar';

export default class StrategistApp extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Sidebar />
        <PlanningBar />
        <Footer />
      </div>
    );
  }
}
