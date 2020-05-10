import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
  background-color: #20b2aa67;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

const Contenedor = styled.div`
  background-color: #20b2aa67;
  text-align: center;
  text-transform: uppercase;
  text-align: center;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige los datos del seguro</Mensaje>
  ) : (
    <Contenedor>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Mensaje>Tu seguro es: $ <span>{cotizacion}</span></Mensaje>
        </CSSTransition>
      </TransitionGroup>
    </Contenedor>
  );
};
Resultado.protoTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
