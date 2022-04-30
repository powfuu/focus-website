import styled from "styled-components"
import { Sling as HamburgerReact } from 'hamburger-react'
import { NavLink } from "react-router-dom";
const s = (props) =>{
return `@media screen and (max-width: ${props}px)`
}
const ss = (props) =>{
return `@media screen and (min-width: ${props}px)`
}
export const HamILogo = styled.img`{
height:35px;
margin-top:7.8em;
${(ss(895))}{
display:none;
}
}`
export const HamELogo = styled.img`{
height: 43px;
margin-left:-.2em;
vertical-align:bottom;
${(ss(895))}{
display:none;
}
}`
export const Navigation = styled.nav`{
width:100%;
height:58px;
position:fixed;
top:0;
background: white;
z-index:1;
border-bottom: none;
transition: .6s all ease-in-out;
backdrop-filter: blur(8px);
${ss(895)}{
height:58px !important;
}
}`
export const Ule = styled.ul`{
margin-left:8.25em;
//Responsive
${s(894)}{
margin:auto auto !important;
}
}`
export const Elements = styled(NavLink)`{
display:inline-block;
text-decoration: none;
margin-left: 1.5em;
margin-top:1.45em;
font-size:.92em;
color: rgb(200,200,200);
transition: .5s all ease-in-out;
cursor:pointer;
&:hover{
color:black !important;
}
&.active{
border-color:black;
}
&:after{
  display:block;
  content: '';
border-bottom: solid 1px #24252A;
padding-bottom:.4em;
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
&:hover:after { transform: scaleX(1); }

${s(894)}{
display:block !important;
margin-left:-.3em;
&.active{
padding-left:.6em;
padding-right:.6em;
padding-top:.3em;
border-radius:6px;
}
&:after{
border-bottom:transparent !important;
}
}
}`;
export const Logo = styled.img`{
float:left;
cursor:pointer;
height:34px;
margin-top:.7em;
margin-left:5.75em;

//Responsive
${s(1070)}{
margin-left:2em !important;
}
}`;
export const Button = styled.button`{
font-size:.95em;
margin-top:-2.8em;
float:right;
margin-right:1.35em;
font-weight: 500;
padding-bottom:.7em !important;
background:#24252A;
color:white;
${s(1070)}{
}
${s(894)}{
float:initial !important;
display:block;
margin: .92em auto !important;
}
}`;
export const Signin = styled.a`{
margin-right:10.5em;
margin-top:-2em;
float:right;
position:absolute;
right:0;
cursor:pointer;
color:black;
&:hover{
text-decoration: underline;
}
${s(894)}{
width:100%;
transform:translate(-50%,-50%);
left:50%;
margin-top:1.2em;
}
}`
export const InputNav = styled.div`{
margin-top:-2.5em;
float:right;
position:absolute;
right:0;
margin-right:14.8em;
${s(894)}{
margin: 3.4em auto !important;
width:100%;
}
}`
export const FindTeachers = styled.input`{
cursor:initial;
font-size:.95em;
background:rgb(248,248,248);
border-radius:24px;
width:180px;
padding-left:2.6em;
padding-right:1em;
padding-top:.65em;
padding-bottom:.65em;
${s(1070)}{
width:140px !important;
}
${s(894)}{
width:220px !important;
}
}`
export const SearchIco = styled.img`{
position:absolute;
margin-left:-13.75em;
height:17px;
margin-top:.72em;
${s(1070)}{
margin-left:-11.3em !important;
}
${s(894)}{
margin-left:-16.3em !important;
}
}`
export const NavContent = styled.div`{
transition:.5s all ease-in-out;
position:absolute !important;
width:100%;
${ss(895)}{
right:0 !important;
}
${s(894)}{
text-align:center;
background:white;
z-index:1;
right:200vw;
height:100vh !important;
}
}`
export const Hamburgerdad = styled.div`{
position:fixed;
right:0;
margin-top:.25em;
cursor:pointer !important;
margin-right:1em;
z-index:3;
${s(894)}{
display:block !important;
}
display:none;
}`
export const Hamburger = styled(HamburgerReact)`{
cursor: pointer !important;
}`
