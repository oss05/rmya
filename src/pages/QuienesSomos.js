import React, { Component } from 'react';
import Img from '../components/Img';
import Text from '../components/Text';
import '../css/MainContent.css';

class QuienesSomos extends Component {
    state = {  }
    render() { 
        return (
            <div className="mainContent">
                <Img/>
                <Text content='contenido.quienesSomos.content' component="p"/>
            </div>       
         );
    }
}
 
export default QuienesSomos;