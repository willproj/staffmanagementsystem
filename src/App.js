import React, { useContext, createContext, useState } from 'react';
import Login from './component/Login'
import Register from './component/Register'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";


const App = () => {

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/manageBoard">
                            board
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;