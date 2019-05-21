import React, { Component } from 'react';
import Title from '../components/Title'
import Translate from 'react-translate-component';
import Abogado from '../components/Abogado';
import '../css/MainContent.css';

class Abogados extends Component {
    state = {}
    render() {
        return (
            <div className="mainContentAll">
                <div className="lawyer-title">
                    <Translate className="font" content="contenido.bolsaDeTrabajo.title" style={{ fontSize: 36 }} component="h1" />
                    <Translate content="contenido.subtitle" component="p" style={{ fontSize: 13 }} />
                </div>
                <Title
                    contenido='contenido.bolsaDeTrabajo.subtitle'
                />
                <div className="input-component">
                    <Translate content="contenido.bolsaDeTrabajo.p1" component="p" style={{ fontSize: 14 }} />
                    <label htmlFor="name" >Name:
                        <input id="name" type="text" />
                    </label>
                    <label htmlFor="email">Email:
                        <input id="email" type="email" />
                    </label>
                    <label htmlFor="phone">Phone Number:
                        <input id="phone" type="text" />
                    </label>
                    <label htmlFor="subject">Subject:
                        <input id="subject" type="text" />
                    </label>
                    <label htmlFor="message">Message:
                        <textarea id="message" type="text" />
                    </label>
                    <button type="submit">✓Submit</button>
                    <Translate content="contenido.bolsaDeTrabajo.p2" component="p" style={{ fontSize: 14 }} />
                </div>
            </div>
        );
    }
}

export default Abogados;