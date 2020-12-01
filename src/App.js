import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AscyncPizza = asyncComponent(() => import('./containers/Pizza'))

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <link to="/">Users</link>
                    <link to="/pizza">Pizza</link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={AscyncPizza} />
                </div>
            </div>
        )
    }
}

export default App
