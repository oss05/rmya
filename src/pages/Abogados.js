import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Abogado from '../components/Abogado';
import '../css/MainContent.css';

class Abogados extends Component {
    state = {}
    render() {
        return (
            <div className="mainContentAll">
                <div className="lawyer-title">
                    <Translate className="font" content="contenido.abogados.title" style={{fontSize:22}} component="h1" />
                    <Translate content="contenido.subtitle" component="p" style={{fontSize:13}} />
                </div>
                <div className="lawyer-component">
                    <Abogado
                        abogadoPage="/ivan"
                        Nombre="Iván Ruiz Moreno"
                        Rol="contenido.abogados.rol"
                    />
                    <Abogado 
                    abogadoPage="/eli"
                    Nombre="Eli Manuel Ramírez Villaseñor"
                    Rol="contenido.abogados.rol2"
                    />
                    <Abogado 
                    abogadoPage="/erika"
                        Nombre="Erika Marcela Estrever Aviña"
                        Rol="contenido.abogados.rol3"
                    />
                    <Abogado 
                    abogadoPage="/ruben"
                        Nombre="Rubén Gutiérrez Díaz"
                        Rol="contenido.abogados.rol2"
                    />
                    <Abogado 
                    abogadoPage="/denia"
                    Nombre="Denia Resendiz."
                    Rol="contenido.abogados.rol4"
                    />
                </div>
            </div>
        );
    }
}

export default Abogados;