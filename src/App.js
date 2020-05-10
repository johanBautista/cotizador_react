import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import Resultado from './Components/Resultado';
import Spinner from './Components/Spinner';

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

  // state del resultado/spinner
  const [cargando, guardarCargando] = useState(false);
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        <Resumen datos={datos} />
        {/* mostrar un condicional entre el resultado y el spinner  */}
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
