import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import logo from '../../assets/images/logo.png';
import {Link, useHistory} from 'react-router-dom';

interface HeaderProps{
    description: string;
    text?: string;
}

const Header:React.FunctionComponent<HeaderProps> = (props) =>  {
    
    let history = useHistory();

    const logout = () => {
        localStorage.removeItem('token-filmes');
        history.push('/');
    }

    const menu = () => {
        const token = localStorage.getItem('token-filmes');
        if(token === undefined || token === null) {
            return(
                <ul className="menu">
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/login">Login</Link></li>
                        <li><Link className="link" to="/cadastro">Cadastro</Link></li>
                </ul>
            )
        }
        else{
            return(
                <ul className="menu">
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/perfil">Perfil</Link></li>
                        <li><Link className="link" to="/genero">Generos</Link></li>
                        <li><Link className="link" to="/filme">Filmes</Link></li>
                        <li><Link to="" onClick={(event) => {
                            event.preventDefault(); logout();                                }}>Logout</Link></li>
                </ul>
            )
        }
    }


    return (
        <div className="principal">
            <div className="header">
                <div className="align">
                    <nav>
                        <Link to="/"><img src={logo} alt="logo filmes collection"/></Link>
                        {menu()}
                    </nav>
                <h3>{props.description}</h3>
                {props.text && <p>{props.text}</p>}
                </div>
            </div>
        </div>
    );
}


export default Header;