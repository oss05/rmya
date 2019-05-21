import React from 'react';
import Translate from 'react-translate-component';
import '../css/Publicaciones.css';

const Abogado = props => {
    return (
        <div>
            <div className="titulosPublicaciones">IVÁN RUIZ MORENO</div>
            <Translate className=" abogadoCont" content="contenido.abogados.ivan" component="p" style={{ fontSize: 14 , color: "#635f7d", textAlign: "justify" }} />
        </div>
    )
}

export default Abogado;