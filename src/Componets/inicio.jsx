import React from 'react';
import Linkedin from '../assets/Linkedin.png'
import Insta from '../assets/Insta.png'
import Face from '../assets/Face.png'
import Avatar from '../assets/AvatarMaker.png'
import * as S from './style.jsx'
function Inicio() {
  return (
    <S.Inicio>
      <img src={Avatar} alt="perfil" />
      <h1>Oi eu sou a Carol</h1>

      <div>
        <img src={Linkedin} alt="logodolinkedin"/>
        <img src={Insta} alt="logodoinsta" />
        <img src={Face} alt="logodoface" />
      </div>
    </S.Inicio>
  );
}
export default Inicio;
