import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import history from '../history'
import about from '../pages/about'
import createpost from '../pages/createpost'
import forum from '../pages/forum'
import inicio from '../pages/inicio'
import viewpost from '../pages/viewpost'
import Cadastro from './Cadastro'
import Login from './Login'
import RotaIndefinida from './RotaIndefinida'

class Rotas extends Component {
   
    render() {
        return (
            <div>
                <Router history={history}>
                <Switch>
                    <Route exact path="/" component={inicio}></Route>
                    <Route exact path="/forum" component={forum}></Route>
                    <Route exact path="/forum/create" component={createpost}></Route>
                    <Route exact path="/forum/view/" component={viewpost}></Route>
                    <Route exact path="/forum/view/:id" component={viewpost}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/cadastro" component={Cadastro}></Route>
                    <Route exact path="/sobre" component={about}></Route>
                    <Route exact path="*" component={RotaIndefinida}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}



export default Rotas;
