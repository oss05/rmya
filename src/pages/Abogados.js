import React, { Component } from 'react';
import Img from '../components/Img';
import Text from '../components/Text';
import '../css/MainContent.css';

class Abogados extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mainContent">
                <Img/>
                <Text content='contenido.abogados' component="p"/>
            </div>  
         );
    }
}
 
export default Abogados;