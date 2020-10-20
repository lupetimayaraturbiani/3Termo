import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login/index';
import Cadastro from './pages/cadastro/index'
import Filmes from './pages/filmes';
import Generos from './pages/generos';
import Perfil from './pages/perfil';


function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/filme" component={Filmes}/>
            <Route path="/genero" component={Generos}/>
            <Route path="/perfil" component={Perfil}/>
        </BrowserRouter>
    )
}

export default Routers;