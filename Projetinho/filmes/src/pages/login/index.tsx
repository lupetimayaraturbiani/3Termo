import React, {useState} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import './style.css';
import Button from '../../components/button';
import {useHistory} from 'react-router-dom';

function Login(){

    let history = useHistory()

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = () =>{
        const login ={
            email: email,
            senha: senha
        }

        fetch('http://localhost:5000/api/conta/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'content-type': 'application/json'
            }
        })
        
        .then(resp =>resp.json())
        .then(dados=>{
            if(dados.token != undefined || dados.token != '' || dados.token != null){
                localStorage.setItem('token-filmes', dados.token)
                history.push('/')
            }
            else{
                alert("Senha ou email incorretos");
            }
        })
        .catch(error=>console.error(error))
    }

    return(
        <div>
            <Header description="Faça login e acesse a Coletânea"/>
            <div className="centro">
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={event=>{
                        event.preventDefault()
                        login()
                    }}>
                        <Input type="email" name="email" label="E-mail" onChange={e => setEmail(e.target.value)}/>
                        <br/>
                        <Input type="password" name="senha" label="Senha" onChange={e => setSenha(e.target.value)}/>
                        <br/>
                        <div className="login-button">
                            <Button name="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;