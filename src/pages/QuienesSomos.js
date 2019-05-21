import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Text from '../components/Text';
import Title from '../components/Title';
import imgQuienesSomos from '../assets/logo-grande.jpg';
import '../css/MainContent.css';


class QuienesSomos extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.quienesSomos.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgQuienesSomos}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text fontSize={19} content='contenido.subtitle' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.quienesSomos.p1' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.quienesSomos.p2' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.quienesSomos.p3' component="p" />
                        <Text paddingTop={20} fontSize={14} content='contenido.quienesSomos.p4' component="p" />
                    </div>
                </section>

            </div>
        );
    }
}

export default QuienesSomos;