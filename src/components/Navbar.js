import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logorma from '../assets/logo-rma.png';
import '../css/Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
//1140
export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="prevent-nav">
        <Navbar color="#fff" light expand="md" className="custom-navbar">
          <NavbarBrand href="/"><img src={Logorma} alt="logo-rma" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink href="/"><span>Inicio</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/quienessomos">
                  <FontAwesomeIcon className="i" icon="users" />
                  <span>Quiénes somos</span>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/abogados">
                  <FontAwesomeIcon className="i" icon="gavel" />
                  <span>Abogados</span>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="navItem">
                <DropdownToggle nav caret>
                  <FontAwesomeIcon className="i" icon="home" />
                  <span> Áreas de práctica </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/telecomunicaciones">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Telecomunicaciones & IT </span>
                  </DropdownItem>
                  <DropdownItem href="/creditos-finanzas">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Créditos y Financiamiento  </span>
                  </DropdownItem>
                  <DropdownItem href="/radiodifusion">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Radiodifusión </span>
                  </DropdownItem>
                  <DropdownItem href="/derecho-corporativo">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Derecho Corporativo y Transaccional </span>
                  </DropdownItem>
                  <DropdownItem href="/energia">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Energía </span>
                  </DropdownItem>
                  <DropdownItem href="/competencia-economica">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Competencia Económica  </span>
                  </DropdownItem>
                  <DropdownItem href="/asesoria-legislativa">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Asesoría en Materia Legislativa y Regulatoria </span>
                  </DropdownItem>
                  <DropdownItem href="/litigio">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <span>Litigio  </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="navItem">
                <NavLink href="/bolsadetrabajo">
                  <FontAwesomeIcon className="i" icon="suitcase" />
                  <span>Bolsa de Trabajo </span>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/publicaciones">
                  <FontAwesomeIcon className="i" icon="file-contract" />
                  <span>Publicaciones </span>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/contacto">
                  <FontAwesomeIcon className="i" icon="phone" />
                  <span>Contacto </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}