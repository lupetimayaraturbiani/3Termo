import React from 'react';
import './style.css';
import logoNegativo from '../../assets/images/logonegativo.png'
import '../../assets/styles/global.css';

function Footer(){
    return(
        <div className="principal-footer">
            <div className="footer">
                <div className="img">
                    <img src={logoNegativo} alt="logo filmes collection negativo"/>
                </div>
                <hr/>
                <div className="text">

                    <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>

                    <p>Call us now toll free: (800)2345-6789</p>

                    <p>Customer support: support@demolink.org</p>

                    <p>Skype: sample-username</p>

                </div>
            </div>
        </div>
    )
}

export default Footer;