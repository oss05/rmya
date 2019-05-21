import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Text from '../components/Text';
import Title from '../components/Title';
import imgCompetencia from '../assets/competencia.jpg';
import '../css/MainContent.css';

class Telecomunicaciones extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.competenciaEconomica.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgCompetencia}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text paddingTop={20} fontSize={14} content='contenido.competenciaEconomica.p1' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.competenciaEconomica.p2' component="p" />
                    </div>
                </section>

            </div>
        );
    }
}

export default Telecomunicaciones;