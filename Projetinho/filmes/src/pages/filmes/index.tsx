import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Mascaras from '../../assets/images/theater.png';
import cinema from '../../assets/images/cinema.png';
import lixo from '../../assets/images/trash.png';
import atual from '../../assets/images/refresh.png';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import '../../assets/styles/global.css';
import './style.css';

function Filmes() {
    //prop string genero {get; set;} = "";
    const [idfilme, setIdFilme] = useState(0);
    const [filme, setFilme] = useState('');
    const [filmes, setFilmes] = useState([]);

    const [idGenero, setIdGenero] = useState(0);
    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);

    //useEffect te permite executar efeitos colaterais em componentes funcionais
    //Buscar dados é um exemplo de efeito colateral
    //usando o useEffect informo ao React que o componente somente depois da renderização
    //é executado depois da renderização do componente, quando ele já estiver montado na DOM
    useEffect(() => {
    listar();
    }, []);

    const listar = () => {
    fetch('http://localhost:5000/api/filmes', {
        method: 'GET',
        headers: {
          //Bearer authentication é o token authentication, um Schema para autenticação HTTP
          //O Bearer identifica recursos protegidos por um OAuth2.
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
    })
        .then(response => response.json())
        .then(dados => {
        setFilmes(dados);
        setGeneros(dados);
        })
        .catch(err => console.error(err));
    }


    const trash = (id: number) => {
        if(window.confirm('Deseja excluir o Genero?')){
            fetch('http://localhost:5000/api/genero/' + id, {
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer' + localStorage.getItem('token-filmes')
                }
            })
            .then(resp => resp.json())
            .then(dados => {
                listar();
            })
            .catch(e => console.error(e));
        }
    }

    const refresh = (id: number) => {
        fetch('http://localhost:5000/api/genero/' + id, {
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
        })
        .then(response => response.json())
        .then(dados => {
            setIdFilme(dados.idFilme);
            setFilme(dados.nome);
            setGenero(dados.idGeneroNavigation.nome)
        })
        .catch(err => console.error(err));
    }


    const salvar = () => {
    const form = {
        nome: filme,
        titulo: genero
    };

    const method = (idfilme && idGenero === 0 ? 'POST' : 'PUT');
    const urlRequest = (idfilme && idGenero === 0 ? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idfilme);

    fetch(urlRequest, {
        method: method,
        body: JSON.stringify(form),
        headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
    })
        .then(() => {
        alert('Filme cadastrado');
        setIdFilme(0);
        setFilme('');
        setIdGenero(0);
        setGenero('');
        listar();
        })
        .catch(err => console.error(err));
    }

    return (
    <div>
        <Header description="Lista de filmes da nossa coletanea" />

    <main>
        <h1>Lista de Filmes</h1>
        <div className="imgTitulo">
            <img className="theater" src={cinema} alt="" width="100px"/>
        </div>
        <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Título</th>
            </tr>
        </thead>
        <tbody>
            {
            filmes.map((item: any) => {
                return (
                <tr key={item.idfilme}>
                    <td>{item.idFilme}</td>
                    <td>{item.titulo}</td>
                    {/* <td>{item.generos}</td> */}
                    <td>
                        <img className="icon" src={atual}  onClick={() => refresh(item.idGenero)} alt="" width="30px" />
                        <img className="icon1" src={lixo}  onClick={() => trash(item.idGenero)} alt="" width="30px"/>
                    </td>
                </tr>
                )
            })
            }
        </tbody>
        </table>

        <form onSubmit={event => {
        event.preventDefault();
        salvar();
        }}>

<div className="form">
                            <Input name="filme" label="Cadastrar filme" value={filme} onChange={e => setFilme(e.target.value)}/>
                            {/* <select name="genero" onChange={e => setGenero(e.target.value)} value={genero}>
                                <option value="0">Selecione um </option>
                                {
                                    generos.map((item: any) => {
                                        return <option value={item.idGenero}>{item.idGeneroNavigation.nome}</option>
                                    })
                                }
                            </select> */}
                            <div className="btn">
                                <Button name="Salvar"/>
                            </div>
                        </div>

        </form>
        </main>
        <Footer/>

    </div>

    );
}

export default Filmes;
