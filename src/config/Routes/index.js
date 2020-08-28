import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register, Home } from '../../pages'


// Router/navigasi digunakan untuk navigasi perpindahan antar halaman
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Router path="/login">
                    <Login />
                </Router>
                <Router patt="/register">
                    <Register />
                </Router>
                <Router path="/">
                    <Home />
                </Router>
            </Switch>
        </Router>
    )
}

export default Routes
