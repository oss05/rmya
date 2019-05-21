import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Text from '../components/Text';
import Title from '../components/Title';
import imgEnergia from '../assets/energia2.jpg';
import '../css/MainContent.css';

class Telecomunicaciones extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.energia.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgEnergia}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text paddingTop={20} fontSize={14} content='contenido.energia.p1' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.energia.p2' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.energia.p3' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.energia.p4' component="p" />
                    </div>
                </section>

            </div>
        );
    }
}

export default Telecomunicaciones;