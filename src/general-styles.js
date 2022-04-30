import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`{
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
*{
font-family: 'Quicksand', sans-serif;
margin:0;
padding:0;
overflow-x:hidden !important;
outline: none;
border: none;
color: rgb(100,100,100);
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
cursor: default;
}
.swal2-popup .swal2-styled:focus {
    box-shadow: none !important;
}
.swal2-icon.swal2-info {
    border-color: #777 !important;
}
Button{
border-radius:24px;
padding-left:1em;
padding-right:1em;
padding-top:.65em;
padding-bottom:.65em;
&:hover{
cursor:pointer;
}
}
/* Only FireFox */
html {scrollbar-color: transparent transparent;}
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
  background: #666;
  border-radius: 12px;
}
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
}
`
export const WAPP = styled.div`{

}`
export const Content = styled.div`{
margin-top:calc(3.83em+5px);
}`
export const Cfocus = styled.span`{
background: #ec008c;  
background: -webkit-linear-gradient(to top, #fc6767, #ec008c);
background: linear-gradient(to top, #fc6767, #ec008c);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent; 
}`
