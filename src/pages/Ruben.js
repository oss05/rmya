import React from 'react';
import Translate from 'react-translate-component';
import '../css/Publicaciones.css';

const Abogado = props => {
    return (
        <div>
            <div className="titulosPublicaciones">Rubén Gutiérrez Díaz</div>
            <Translate className=" abogadoCont" content="contenido.abogados.ruben" component="p" style={{ fontSize: 14 , color: "#635f7d", textAlign: "justify" }} />
        </div>
    )
}

export default Abogado;