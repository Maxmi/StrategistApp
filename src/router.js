import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import StrategistApp from './components/StrategistApp/StrategistApp'
import UrgentAndImportant from './pages/UrgentAndImportant/UrgentAndImportant'
import Layout from './components/Layout/Layout'

class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={StrategistApp}/>
            <Route exact path='/urgent-and-important' component={UrgentAndImportant}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Router
