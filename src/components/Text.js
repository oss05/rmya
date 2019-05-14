import React, { Component } from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import es from '../lang/es';
import en from '../lang/en';
import '../css/Text.css';

counterpart.registerTranslations('es', es);
counterpart.registerTranslations('en', en);
counterpart.setLocale('es');

class Text extends Component {
    state = {  
        lang: 'es'
    }

    onLangChange = e => {
        this.setState({lang:e.target.value});
        counterpart.setLocale(e.target.value);
    }

    render() { 
        return ( 
            <div className="text">
                <select value={this.state.lang} onChange={this.onLangChange}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <Translate {...this.props} component="p"/>
            </div>
         );
    }
}
 
export default Text;