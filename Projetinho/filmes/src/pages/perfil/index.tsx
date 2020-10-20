import React, {useState} from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';

import '../../assets/styles/global.css';

function Perfil(){

    const [idUsuario, setIdUsuario] = useState(0);
    const [usuario, setUsuario] = useState('');

    const refresh = (id: number) => {
        fetch('http://localhost:5000/api/perfil/' + id, {
            method: 'GET',
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
        .then(resp => resp.json())
        .then(dados => {
            setIdUsuario(dados.idUsuario);
            setUsuario(dados.nome);
        })
        .catch(e => console.error(e));
    }

    const salvar = () => {
        const form = {
            nome: usuario
        }

        fetch('http://localhost:5000/api/perfil/' + idUsuario, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'contest-type' : 'application/json',
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
        .then(() => {
            alert('Usuario alterado com sucesso!');
        })
    }

    return(
        <div className="perfil-principal">
            <Header description="Edite seu perfil, caso necessário"/>
            <div className="">
                <h1>Perfil</h1>
                    <Input type="text" name="nome" label="Nome"/>
                    <br/>
                    <Input type="email" name="email" label="E-mail"/>
                    <br/>
                    <Input type="password" name="senha" label="Senha"/>
                    <div className="edit-button">
                        <Button name="Editar"/>
                    </div>
                    <div className="save-button">
                        <Button name="Salvar" />
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Perfil;