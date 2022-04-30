import styled from 'styled-components'
const s = (props) =>{
return `@media screen and (max-width: ${props}px)`
}
export const Footer = styled.div`{
display:block;
background:#241e12 !important;
height:160px !important;
text-align:center;
border-top-right-radius: 3.5%;
border-top-left-radius: 3.5%;
}`
export const Table = styled.div`{
display:table;
height:160px !important;
width:45%;
height:100%;
margin: 0 auto;
${s(1400)}{
width:60%;
}
${s(1100)}{
width:70%;
}
${s(910)}{
width:80%;
}
${s(721)}{
width:90%;
}
${s(500)}{
width:95%;
}
${s(443)}{
width:90%;
}
}`
export const First = styled.div`{
display:table-cell;
float:left;
}`
export const Second = styled.div`{
vertical-align:top;
display:table-cell;
${s(443)}{
display:none;
}
}`
export const Third = styled.div`{
display:table-cell;
vertical-align:top;
${s(659)}{
display:none;
}
}`
export const Fourth = styled.div`{
display:table-cell;
vertical-align:top;
}`
export const Logo = styled.img`{
height:31px;
margin-top:1.85em;
transition: .3s all ease-in-out;
&:hover{
opacity:.7;
cursor:pointer;
}
}`
export const Copyright = styled.p`{
color:White;
font-size:.9em;
margin-top:.5em;
}`
export const Location = styled.img`{
display:inline-block;
margin-top:.4em;
margin-left:-1.5em;
height:17px;
margin-right:.25em;
}`
export const LocationText = styled.p`{
color:white;
display:inline-block;
font-size:.89em;
}`
export const Title = styled.p`{
color:white;
margin-top:1.4em;
margin-bottom:.5em;
font-size:.82em;
font-weight:bold;
}`
export const Description = styled.p`{
color:white;
font-size:.82em;
width:max-content;
margin:0 auto;
line-height:1.5em;
&:hover{
text-decoration:underline;
}
}`
export const DescriptionP = styled.p`{
color:white;
font-size:.85em;
width:max-content;
margin:0 auto;
line-height:1.5em;
cursor:pointer;
&:hover{
text-decoration:underline;
}
}`
export const Elogo = styled.img`{
height:39px;
margin-top:.1em;
cursor:pointer;
transition: .3s all ease-in-out;
&:hover{
opacity:.7;
}
}`
