import styled from 'styled-components'
const s = props =>{
return `@media screen and (max-width: ${props}px)`
}
export const First = styled.div`{
height:660px;
background:#f5f4f2;
text-align:center;
border-bottom-left-radius: 3.5%;
border-bottom-right-radius: 3.5%;
padding-bottom:2em;
${s(814)}{
height:600px;
}
${s(625)}{
height:500px;
}
${s(465)}{
height:450px;
}
}`
export const FirstTitle = styled.h1`{
color:black;
margin-top:3em;
${s(435)}{
margin-right:.5em;
margin-left:.5em;
}
}`
export const Content = styled.div`{

}`
export const FirstDesc = styled.p`{
margin-top:.5em;
${s(435)}{
margin-right:2em;
margin-left:2em;
}
}`
export const ProfilePreview = styled.img`{
border-radius:6px;
height:450px;
margin-top:1.5em;
${s(814)}{
height:350px;
}
${s(625)}{
height:250px;
}
${s(465)}{
height:220px;
}
${s(404)}{
height:180px;
}
}`
export const Second = styled.div`{
text-align:center;
padding-bottom:3em;
padding-top:2em;
}`
export const SecondTitle = styled.h1`{
color:black;
margin-bottom:1.75em;
margin-top:1em;
margin-right:1em;
margin-left:1em;
}`
export const Box1 = styled.div`{
display:inline-block;
width:350px;
overflow:hidden;
height:120px;
${s(383)}{
width:300px;
}
${s(335)}{
width:275px;
}
}`
export const Object1desc = styled.p`{
color:black;
margin-top:.3em;
}`
export const Object1 = styled.object`{
height:33px;
}`
export const Box2 = Box1;
export const Object2desc = Object1desc;
export const Object2 = Object1;
export const Box3 = Box1;
export const Object3desc = Object1desc;
export const Object3 = Object1;
