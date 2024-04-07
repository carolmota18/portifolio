import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navegacao from './Componets/navegacao';


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Dancing+Script:wght@400;700&family=Edu+NSW+ACT+Foundation:wght@400..700&family=Lora:ital,wght@0,400;0,600;1,700&family=Martian+Mono&family=Mooli&family=Open+Sans&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
  
}
`
function App() {
  return (
    <>
      <GlobalStyle />
      <Navegacao />
    </>
  );
}
export default App;
