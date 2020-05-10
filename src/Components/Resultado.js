import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
  background-color: #20b2aa67;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige los datos del seguro</Mensaje>
  ) : (
    <Mensaje>Tu seguro es: $ {cotizacion}</Mensaje>
  );
};

export default Resultado;
