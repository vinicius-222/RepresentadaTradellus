import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Login from './pages/Login';
import Representadas from './pages/Representadas';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Clientes from './pages/Clientes';

export default () => {
    return(
        <Switch>
            <RouteHandler  exact path='/Login'>
                <Login />
            </RouteHandler>
            <RouteHandler  exact path='/Cadastrar'>
                <Cadastrar />
            </RouteHandler>
            <RouteHandler  private exact path='/'>
                <Home />
            </RouteHandler>
            <RouteHandler  private exact path='/Representadas'>
                <Representadas />
            </RouteHandler>
            <RouteHandler  private exact path='/Produtos'>
                <Produtos />
            </RouteHandler>
            <RouteHandler  private exact path='/Pedidos'>
                <Pedidos />
            </RouteHandler>
            <RouteHandler  private exact path='/Clientes'>
                <Clientes />
            </RouteHandler>
        </Switch>
    )
}