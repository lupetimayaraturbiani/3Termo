import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';

function Cadastro(){
    return(
        <div>
            <Header description="Faça o Cadastro para o acesso"/>
            <div className="centro">
                <div className="cadastro">
                <h1>Cadastro</h1>
                    <Input type="text" name="email" label="Nome"/>
                    <br/>
                    <Input type="email" name="senha" label="E-mail"/>
                    <br/>
                    <Input type="password" name="senha" label="Senha"/>
                    <div className="login-button">
                        <Button name="Cadastrar" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro;