import React, { Fragment } from 'react';

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === '' || year === '' || plan === '') {
    return null;
  }
  return (
    <Fragment>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca:_{marca}</li>
        <li>Plan:_{plan}</li>
        <li>Año:_{year}</li>
      </ul>
    </Fragment>
  );
};

export default Resumen;
