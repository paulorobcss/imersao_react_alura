import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index.js';

import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'

import CadastroVideo from './pages/cadastro/video/index.js';
import CadastroCategoria from './pages/cadastro/categoria/index.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route  path='/cadastro/video' component={CadastroVideo} />
      <Route  path='/cadastro/categoria' component={CadastroCategoria} />
      <Route  path='/' component={Home} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);