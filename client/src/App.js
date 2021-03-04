import React, {Component} from 'react';
import NavBar from "./components/navbar/navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
import {Login} from "./components/pages/Login";
import {Profile} from "./components/pages/Profile";


import Wanderlist from "./components/pages/Artistfind";


import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions'
// import { loadUser } from './flux/actions/authActions';


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (<Provider store={store}>
            <>
                <Router>
                    <NavBar/>
                    <div className="pages">
                        <Switch>
                            <Route exact path="/"
                                component={Home}/>
                            <Route exact path="/about"
                                component={About}/>
                            <Route exact path="/Artistfind"
                                component={Wanderlist}/>
                            <Route exact path="/Profile"
                                component={Profile}/>

                            <Route path="*"
                                component={Home}/>

                        </Switch>
                    </div>
                </Router>
            </>
        </Provider>);
    }
}


export default App;
