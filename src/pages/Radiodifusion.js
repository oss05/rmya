import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Text from '../components/Text';
import Title from '../components/Title';
import imgRadio from '../assets/radiodifusion2.jpg';
import '../css/MainContent.css';

class Telecomunicaciones extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.radio.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgRadio}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text paddingTop={20} fontSize={14} content='contenido.radio.p1' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.radio.p2' component="p" />
                    </div>
                </section>

            </div>
        );
    }
}

export default Telecomunicaciones;