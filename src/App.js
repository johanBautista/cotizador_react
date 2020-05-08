import React from 'react';
import styled from '@emotion/styled';

import Header from './Components/Header';
import Formulario from './Components/Formulario';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #e1b4d5cb;
  padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
