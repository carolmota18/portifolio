import React from 'react';
import Inicio from './inicio.jsx';
import Sobre from './sobre.jsx';
import Projetos from './projetos.jsx';
import * as S from './style.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Navegacao() {
  return (
    <BrowserRouter>
      <S.Nav>
        <S.Lista>
          {/* to = para, um link para tal lugar (sobre, projetos e início / ) */}
          <li>
            {' '}
            <Link to="/"> Início </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/sobre"> Sobre </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/projetos"> Projetos </Link>
          </li>
        </S.Lista>
      </S.Nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Navegacao;
