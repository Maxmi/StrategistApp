import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

export default class Layout extends Component {
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
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
