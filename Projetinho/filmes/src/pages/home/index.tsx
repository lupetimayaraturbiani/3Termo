import React from 'react';
import '../../pages/home/style.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import cinema from '../../assets/images/cinema.png';
import teatro from '../../assets/images/theater.png';


import '../../assets/styles/global.css'

function Home() {
    return (
        <div >
            <Header description="Conheça nossa Coletanea" text="Olá, tudo bem?" />
            <div className="centro">
                <div className="home">
                    <h1>Monte sua coletânea de filmes...</h1>  <br />
                    <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h3> <br />
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    <p>exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>

                </div>

            </div>

            <div className="conteudo">

                <div className="cinema">

                    <img src={cinema} alt="cinema" width="100px" height="100px" />



                    <h3>Filmes</h3>

                    <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do </p>
                    <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
                    <p>enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    <p>laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea </p>
                    commodo consequat.


            </div>

                <div className="teatro">
                    <img src={teatro} alt="teatro" width="90px" height="100px" />

                    <h3>Categoria</h3>
                
                <div className="categoria-text">
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do </p>
                    <p> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
                    <p>enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <p>laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex </p>
                    ea commodo consequat.
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;