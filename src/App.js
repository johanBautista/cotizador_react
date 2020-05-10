import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import Resultado from './Components/Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #e1b4d561;
  padding: 3rem;
`;

function App() {
  // state de resumen que se envia componentes
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',
    },
  });
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
        <Resultado cotizacion={cotizacion} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
