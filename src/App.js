import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';

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
  const { datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
        {/* {datos ? <Resumen /> : null}  para ni hacer un ternario comp-condicional en app
        podemos enviar datos por prop al comp Resumen y desde alli aplicar la condicion de 
        mostrarse ono segun si hay datos */}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
