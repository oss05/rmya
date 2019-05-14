import React, { Component } from 'react';
import Logo from '../assets/logoSOMA.png'
import '../css/Footer.css';

class Footer extends Component {
    render() { 
        return ( 
            <div className="prevent-footer">
                <div className="footer">
                    <div className="left">
                        <p>© 2019 R M & A. All Rights Reserved. Designed by</p>
                        <img src={Logo} alt="logo soma"/>
                    </div>
                    <div className="right">
                        <a href="">Aviso de Privacidad</a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;