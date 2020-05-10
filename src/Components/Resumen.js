import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helper';

const ContenedroResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #e1b4d561;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === '' || year === '' || plan === '') {
    return null;
  }
  return (
    <ContenedroResumen>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año: {year}</li>
      </ul>
    </ContenedroResumen>
  );
};

export default Resumen;
