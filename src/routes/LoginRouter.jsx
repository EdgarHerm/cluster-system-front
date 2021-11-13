import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import AppRouter from './AppRouter'

const LoginRouter = () => {
    return (
        <Router>
            <AppRouter></AppRouter>
            <Switch>
                <Route   />
            </Switch>
        </Router>
    )
}

export default LoginRouter
