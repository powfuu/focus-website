import styled from 'styled-components'
const s = props =>{
return `@media screen and(max-width: ${props}px)`
}
export const Content = styled.div`{
margin-top:4.8em;
}`
export const First = styled.div`{
text-align:center;
}`
export const FirstTitle = styled.h1`{
color:black;
font-size:2.2em;
margin-right:1em;
margin-left:1em;
}`
export const FirstDesc = styled.p`{
margin-right:.95em;
margin-left:.95em;
margin-top:.9em;
}`
export const FirstSvg = styled.object`{
height:140px;
margin-top:3em;
margin-bottom:5em;
}`
export const Second = styled.div`{
background:#EEEEEE;
padding-bottom:6em;
text-align:center;
padding-left:1em;
padding-right:1em;
border-radius:3.5%;
}`
export const SecondTitle = styled.h1`{
color:black;
margin-top:2em;
margin-bottom:1em;
}`
export const Box = styled.div`{
background:white;
border-radius:6px;
margin:0 auto;
width:max-content;
padding-left:1.7em;
padding-right:1.7em;
display:inline-block;
margin-right:1em;
height:270px;
margin-top:1em;
transition:.4s all ease-in-out; 
&:hover{
box-shadow:0px 1px 11px -3px rgba(150,150,150,100%);
}
box-shadow:0px 1px 11px -3px rgba(215,215,215,100%);
}`
export const ElTitle = styled.h3`{
color:black;
margin-top:1em;
}`
export const ElDesc = styled.p`{
width:250px;
margin-top:.4em;
font-size:.9em;
}`
export const ElSvg = styled.object`{
height:80px;
margin-top:1.9em;
}`
//third sera el apoyo como q unete a focus y apoyanos a crecer
export const Third = styled.div`{
padding-top:4em;
padding-bottom:4em;
text-align:center;
padding-right:1em;
padding-left:1em;
overflow:hidden;
}`
export const ThirdTitle = styled.h1`{
color:black;
font-size:1.8em;
}`
export const ThirdDivDescription = styled.p`{
margin-top:.75em;
}`
export const JoinFocusB = styled.button`{
background:#24252A;
color:white;
margin-top:1.25em;
font-size:1.02em;
}`
