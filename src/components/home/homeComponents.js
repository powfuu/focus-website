import styled from 'styled-components'
const s = (props) =>{
return `@media screen and (max-width: ${props}px)`
}
const ss = (props) =>{
return `@media screen and (min-width: ${props}px)`
}
export const Vid = styled.video`{
height:250px;
border-radius:6px;
margin-top:9.5em;
display:inline-block;
margin-right:1em;
${s(1009)}{
margin-top:3em !important;
margin-bottom:4.5em;
}
${s(637)}{
height:48vw !important;
}
}`
export const DarkDiv = styled.div`{
background: #241e12;
padding-top:4em;
width:100%;
height:500px;
display:table;
overflow:hidden !important;
text-align:center;
border-bottom-left-radius:3.5%;
border-bottom-right-radius:3.5%;
}`
export const LeftVid = styled.div`{
display:inline-block;
margin-left:1em;
vertical-align:top;
overflow:hidden !important;
height:100%;
text-align:right;
padding-right:8em;
${s(1170)}{
padding-right:2em !important;
}

${s(637)}{
margin-left:4em;
}
${s(392)}{
margin-left:2em;
}
}`
export const TitleDark = styled.h1`{
background: #ec008c;
text-align:left;
background: -webkit-linear-gradient(to top, #fc6767, #ec008c);
background: linear-gradient(to top, #fc6767, #ec008c);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent; 
font-size:2.8em;
margin-top:2.5em;
${s(1009)}{
margin-top:.95em !important;
}
${s(392)}{
font-size:2.2em !important;
}
}`
export const DescriptionDark = styled.h3`{
margin-top:1em;
color:rgb(230,230,230);
font-weight:400;
text-align:left;
margin-left:.3em;
${s(392)}{
font-size:1em !important;
}
}`
export const TitleD = styled.div`{
float:right;
overflow:hidden !important;
}`
export const JoinDark = styled.button`{
float:left;
margin-top: 2em;
font-size:.98em;
padding-left:1.4em !important;
padding-right:1.4em !important;
color:black;
background:white;
}`
export const SearchDiv = styled.div`{
margin-top:5.5em;
text-align:center;
}`
export const SearchTitle = styled.h1`{
color:black;
font-size:2.3em;
${s(732)}{
font-size:1.8em;
}
${s(616)}{
padding-right:.5em; padding-left:.5em;
}
}`
export const SearchInput = styled.input`{
cursor:initial;
margin-top:3em;
font-size:1.1em;
background:rgb(248,248,248);
border-radius:24px;
width:600px;
padding-left:2.6em;
padding-right:1em;
padding-top:.62em;
padding-bottom:.65em;
${s(732)}{
width:500px;
}
${s(616)}{
width:350px;
margin-top:2.5em;
}
${s(435)}{
width:280px;
}
${s(357)}{
width:235px;
}
}`
export const SearchIco = styled.img`{
position:absolute;
height:19px;
float:left;
margin-top:4.08em;
margin-left:1.1em;
${s(616)}{
margin-top:3.6em;
}
}`
export const ThirdDiv = styled.div`{
margin-top:4.5em;
text-align:center;
width:100%;
display:table;
${s(1009)}{
margin-top:2em;
}
}`
export const ThirdDivInverse = styled.div`{
margin-top:4.5em;
text-align:center;
width:100%;
display:table;
${s(1009)}{
margin-top:2em;
}
}`
export const RightDivTitle = styled.div`{
display:table-cell;
vertical-align:top;
text-align:left;
padding-left:2em;
${s(1009)}{
display:block !important;
margin-top:.5em;
text-align:center !important;
}
}`
export const RightDivTitleInverse = styled.div`{
display:table-cell;
vertical-align:top;
text-align:right;
padding-right:1em;
${s(1009)}{
display:block !important;
text-align:center !important;
margin-top:.5em;
margin-left:.75em !important;
margin-right:.75em !important;
}
}`
export const ThirdDivTitle = styled.h1`{
color:black;
${s(1009)}{
margin-top:.5em !important;
margin-left:.5em !important;
margin-right:.5em !important;
}
}`
export const ThirdDivDescription = styled.p`{
color:rgb(80,80,80);
margin-top:.75em;
max-width:550px;
${s(1009)}{
float:none;
margin: .75em auto;
width:80%;
}
}`
export const ThirdDivDescriptionInverse = styled.p`{
color:rgb(80,80,80);
margin-top:.75em;
max-width:550px;
float:right;
${s(1009)}{
float:none;
margin: .75em auto;
width:80%;
}
}`
export const ThirdVid = styled.video`{
border-radius:4px;
height:210px;
margin-left:6em;
margin-right:.5em;
float:right;
display:table-cell;
${s(1009)}{
float:none; 
display:block;
margin:0.4em auto;
}
${s(500)}{
height:160px;
}
}`
export const ThirdVidInverseInverse = styled.video`{
border-radius:4px;
height:210px;
margin-left:6em;
margin-right:.5em;
float:right;
display:table-cell;
display:none;
${s(1010)}{
display:none !important;
}
${s(1009)}{
float:none; 
display:block !important;
margin:0.4em auto;
}
${s(500)}{
height:160px;
}
}`
export const ThirdVidInverse = styled.video`{
border-radius:4px;
height:210px;
margin-left:2.3em;
float:left;
display:table-cell;
${s(1009)}{
display:none;
}
}`
export const WhatsFocus = styled.div`{
text-align:center;
margin-top:5.5em;
margin-bottom:.85em;

}`
export const WfTitle = styled.h1`{
font-size:2.2em;
margin-top:.2em;
margin-bottom:.15em;
color:black;
${s(732)}{
font-size:1.8em;
}
}`
export const WfDesc = styled.p`{
margin-top:.7em;
line-height:1.5em;
font-size:1em;
margin-left:.75em;
margin-right:.75em;
color:rgb(80,80,80);
${s(732)}{
font-size:.95em;
margin-left:1.75em; margin-right:1.75em;
}
}`
export const GetStarted = styled.div`{
text-align:center;
margin-top:4em;
background:#F4F9F9;
padding-top:6em;
padding-bottom:5.5em;
border-top-left-radius:3.5%;
border-top-right-radius:3.5%;
}`
export const GsTitle = styled.h1`{
color:black;
font-size:2em;
${s(685)}{
font-size:1.8em;
margin-left:.85em; 
margin-right:.85em;
}
}`
export const GsButton = styled.button`{
background:#24252A;
color:white;
font-size:1.15em;
margin-top:1.75em;
${s(685)}{
font-size:1em;
}
}`
export const WhoUsesFocus = styled.div`{
text-align:center;
}`
export const Titlewuf = styled.h1`{
color:black;
margin-top:2.5em;
${s(732)}{
font-size:1.8em;
}
}`
export const Descriptionwuf = styled.p`{
margin-top:1em;
font-size:1.2em;
margin-bottom:1em;
${s(732)}{
font-size:.95em;
margin-right:.85em; margin-left:.85em;
}
}`
export const Hashes = styled.p`{
color:black;
opacity:.35;
font-weight:bold;
transition:.5s all ease-in-out;
&:hover{
opacity:1;
text-decoration:underline;
}
}`
export const HashMap = styled.div`{
margin-top:.35em;
display:inline-block;
margin-right:.75em;
font-size:1.05em;
}`
export const HashBody = styled.div`{
max-width:600px;
overflow:hidden;
margin:0 auto;
${s(732)}{
margin-top:1em;
margin-right:.75em; margin-left:.75em;
}
}`
