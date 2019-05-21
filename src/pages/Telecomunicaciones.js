import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Text from '../components/Text';
import Title from '../components/Title';
import imgTelecom from '../assets/telecomunicaciones2.jpg';
import '../css/MainContent.css';

class Telecomunicaciones extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.telecom.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgTelecom}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text paddingTop={20} fontSize={14} content='contenido.telecom.p1' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.telecom.p2' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.telecom.p3' component="p" />
                        {/* <Text paddingTop={20} fontSize={14} content='contenido.telecom.p4' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.telecom.p5' component="p" /> */}
                    </div>
                </section>

            </div>
        );
    }
}

export default Telecomunicaciones;