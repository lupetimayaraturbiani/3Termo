import React, {useEffect, useState }from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input';
import Button from '../../components/button';


import cinema from '../../assets/images/cinema.png';
import imgRefresh from '../../assets/images/refresh.png';
import imgTheater from '../../assets/images/theater.png';
import imgTrash from '../../assets/images/trash.png';
import '../../assets/styles/global.css';
import '../../pages/generos/style.css'

function Generos(){

    const [idGenero, setIdGenero] = useState(0);
    const [genero, setGenero] = useState('');

    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = ()=> {
        fetch('http://localhost:5000/api/genero', {
            method: 'GET',
            headers: {
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        }) 
        .then(resp => resp.json())
        .then(dados => {
            setGeneros(dados);
        })
        .catch(e => console.error(e));
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
            setIdGenero(dados.idGenero);
            setGenero(dados.nome);
        })
        .catch(err => console.error(err));
    }
    

    const salvar = () => {
        const form = {
            nome: genero
        };

        const method = (idGenero === 0 ? 'POST' : 'PUT');

        const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/genero' : 'http://localhost:5000/api/genero/' +idGenero)

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'contest-type' : 'application/json',
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
        .then(() => {
            alert('Genero cadastrado');
            setIdGenero(0);
            setGenero('');
            listar();
        })
        .catch(e => console.error(e));
    }

    return(
        <div className="genero-principal">
            <Header description="Cadastre os gêneros dos filmes"/>
            <main>
                <div >
                    <h1>Gêneros</h1>
                    <div className="imgTitulo">
                        <img className="theater" src={imgTheater} alt=""width="100px"/>
                    </div>

                    <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Gênero</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            {
                generos.map((item: any) => {
                return (
                    <tr key={item.idGenero}>
                    <td>{item.idGenero}</td>
                    <td>{item.nome}</td>
                    <td>
                        <img className="icon" src={imgRefresh}  onClick={() => refresh(item.idGenero)} alt="" />
                        <img className="icon" src={imgTrash}  onClick={() => trash(item.idGenero)} alt="" />
                        {/* <input type="button" onClick={() => editar(item.idGenero)} /> */}
                        {/* <input type="button" onClick={() => remover(item.idGenero)} /> */}
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
                            <Input name="genero" label="Cadastrar genero" value={genero} onChange={e => setGenero(e.target.value)}/>
                            {/* <select name="genero" onChange={e => setGenero(e.target.value)} value={genero}>
                                <option value="0">Selecione um Gênero</option>
                                {
                                    generos.map((item: any) => {
                                        return <option value={item.idGenero}>{item.nome}</option>
                                    })
                                }
                            </select> */}
                            <div className="btn">
                                <Button name="Salvar"/>
                            </div>
                        </div>

                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Generos;