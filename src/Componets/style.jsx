import styled from 'styled-components';
export const Nav = styled.nav`
background-color:#5A2FD0;
`;

export const Lista = styled.ul`
display:flex;
justify-content:space-evenly;
align-items:center;
height:20vh;
list-style:none;

a{
  text-decoration:none;
  color:#8387CA;
  font-size:2rem;
  font-family: "Roboto", sans-serif;
}
a:hover{
  color:magenta;
  font-weight:800;
  font-style:italic;
}
`;
//---estilização do componente inicio
export const Inicio = styled.main`
background-color:magenta;
height:80vh;
display:flex;
justify-content:space-evenly;
flex-direction:column;
align-items:center;
img{
    border-radius: 50%;
}


h1{
    color: #5A2FD0;
  font-family: "Roboto", sans-serif;

}
`