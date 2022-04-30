import { Cfocus, Content } from '../../general-styles'
import vid from '../../resources/vid2.mp4'
import vid2 from '../../resources/vid1.mp4'
import vid3 from '../../resources/vid3.mp4'
import vid4 from '../../resources/vid4.mp4'
import Swal from 'sweetalert2'
import * as El from './homeComponents'
import { useEffect, useState } from 'react'
function Home(){
let searchicoimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVFJREFUSEvVleExBEEQRt9FQAoiQATIgAgQASJABIgAESACZEAEyIAIqKd6qub2Zmen7N4P/eu2dqdf99dfz81YcsyWnJ8+wCpwBOwCG1HEC3APXAGfrYWVAAfABSCkFCY/AW5aIF2Aya/j4ANwCTzF8zZwBmzF8150VOXkACt+i8oPKxUKOQ2Z1obkygHpoJWrfS3syk7Oo6veb3OAQ1wHdjJZ+g4q1yPgmc1aJTngOz5stW7T92MBXxW3/db7V4mc0R3wDChX0wzSkF0mLdgyZPdBKzcBtOk7sBLO0CGlSIV8xJZXt7o70NS6ibWiyZTBUAr9nyQZtGh3Bqlat9m27aQUDtb3wrSpv2/7NKpddsexcO6G8RpXgwmVJe2N77yX3P6FaPV86Wx+b/VCxgBS0v2MvtDJWMAgZApAFzJ3E08FSBCtPfdHNCWg6NT/D/gBeOVFGZeTouUAAAAASUVORK5CYII='
const animate = (props) =>{
return `animate__animated animate__${props}`
}
const hashes = [
{hash:'#Video Creators'},
{hash:'#JustTalking'},
{hash:'#Developers'},
{hash:'#Designers'},
{hash:'#Math'},
{hash:'#University Teachers'},
{hash:'#Gaming Creators'},
{hash:'#Musicians'},
{hash:'#Tutorials of all types'},
{hash:'#Education'},
{hash:'#Artists'},
{hash:'#Assesoration'},
{hash:'#OS Linux, Hacking, SEO'},
{hash:'#Gaming Couch'},
{hash:'#Gameplays'},
{hash:'#Photography'},
{hash:'#Cooking, Chefs'},
{hash:'#Podcasters'},
{hash:'#+18 Content'},
{hash:'#Drawers'},
{hash:'#School Teachers'},
{hash:'#Fitness Coaching'},
{hash:'#Marketing'},
{hash:'#UI/X Management'},
{hash:'#Courses'},
{hash:'#Style | Fashion'},
{hash:'#Creators of all kinds'}
]
useEffect(()=>{
let x,printHash=false;
const interval = setInterval(() => {
if(window.scrollY>=800){
printHash=true;
}

if(printHash === true){
x = Math.floor(Math.random() * 27);
document.querySelector('.i'+x.toString()).style.opacity='1';
}
}, 800)
return () => clearInterval(interval)
},[])

return(
<Content>
    <El.DarkDiv>
        <El.LeftVid>
            <El.TitleD>
             <El.TitleDark className={animate('lightSpeedInLeft')}>
                 Start Learning in Private <br/>anywhere & anytime.
             </El.TitleDark>
             <El.DescriptionDark className={animate('zoomInUp')}>
                 Life hack:<br/>
                 Never stop learning about you love.
             </El.DescriptionDark>
             <El.JoinDark className={animate('flipInX')}>
                  Get Started
             </El.JoinDark>
         </El.TitleD>
        </El.LeftVid>
        <El.Vid autoPlay muted loop className={animate('lightSpeedInRight')}>
            <source src={vid}/>
            Your browser does not support video tags
        </El.Vid>
    </El.DarkDiv>
    <El.SearchDiv>
        <El.SearchTitle className={animate('flipInX')}>Search the 100,000+ users on <Cfocus>Focus</Cfocus></El.SearchTitle>
        <div className={animate('fadeInUp')}>
        <El.SearchIco src={searchicoimg}/>
        <El.SearchInput onChange={(e)=>{
Swal.fire({
title:'Sign In to Focus',
text:'You need to Log In into your account to see Focus Platform content.',
confirmButtonText:'Ok',
confirmButtonColor:'#24252A',
icon: 'info',
showClass:{
popup: 'animate__animated animate__lightSpeedInRight'
},
})
}} placeholder='Find a Teacher'></El.SearchInput>
        </div>
    </El.SearchDiv>
    <El.WhatsFocus>
         <El.WfTitle data-aos='fade-up'>What's <Cfocus>Focus</Cfocus>?</El.WfTitle>
         <El.WfDesc data-aos-offset='100' data-aos='fade-left'>On <Cfocus>Focus</Cfocus> you'll learn about everything you want in <Cfocus>private sessions</Cfocus> that you'll choose.<br/>You can also <Cfocus>work as teacher or content creator and earn money</Cfocus> giving your knoweldge to your students/clients.<br/>Learning alone can be a little difficult and we give you the opportunity to learn with your favorite teacher in private sessions, <Cfocus>anywhere and anytime</Cfocus>.</El.WfDesc>
    </El.WhatsFocus>
    <El.ThirdDiv>
    
        <El.ThirdVid data-aos='zoom-in-right' muted autoPlay loop>
             <source src={vid3}/>
             Your browser does not support video tags.
        </El.ThirdVid>
        <El.RightDivTitle>
            <El.ThirdDivTitle data-aos='fade-right'><Cfocus>Learning is Essential</Cfocus></El.ThirdDivTitle>
            <El.ThirdDivDescription data-aos='fade-up'>Learning is essential in this world, we give you an opportunity to start learning about you love.<br/><Cfocus>Focus</Cfocus> Platform is used for teaching & learning for around +200 Categories and it's growing every day.<br/>You can Learn in anywhere and anytime with us!</El.ThirdDivDescription>
        </El.RightDivTitle>
    </El.ThirdDiv>
    <El.ThirdDivInverse>
        <El.ThirdVidInverseInverse muted autoPlay data-aos='fade-left' loop>
             <source src={vid4}/>
             Your browser does not support video tags.
        </El.ThirdVidInverseInverse>
        <El.RightDivTitleInverse>
            <El.ThirdDivTitle data-aos='zoom-in-left'><Cfocus>Comfort & Private Sessions</Cfocus></El.ThirdDivTitle>
            <El.ThirdDivDescriptionInverse data-aos='fade-up'>We provide you a way to use <Cfocus>Focus</Cfocus> in your comfort zone, without needs of exit of your room.<br/>All your private sessions will be 100% remotely and 100% privates (Face to Face), only you and your content creator/teacher!</El.ThirdDivDescriptionInverse>

    </El.RightDivTitleInverse>
        <El.ThirdVidInverse muted autoPlay data-aos='fade-left' loop>
             <source src={vid4}/>
             Your browser does not support video tags.
        </El.ThirdVidInverse>
    </El.ThirdDivInverse>
    <El.ThirdDiv>
        <El.ThirdVid muted autoPlay loop data-aos='zoom-in-right'>
             <source src={vid2}/>
             Your browser does not support video tags.
        </El.ThirdVid>
        <El.RightDivTitle>
            <El.ThirdDivTitle data-aos='fade-up'><Cfocus>Everything you need</Cfocus></El.ThirdDivTitle>
            <El.ThirdDivDescription data-aos='fade-left'>We'll give you essential tools as a client or a content creator.<br/>
                We care about our creators, your room will have the task manager, dates, and every tool needed, including history.
            </El.ThirdDivDescription>
        </El.RightDivTitle>
    </El.ThirdDiv>
    <El.WhoUsesFocus>
        <El.Titlewuf data-aos='zoom-in-up'>Who Uses <Cfocus>Focus</Cfocus>?</El.Titlewuf>
        <El.Descriptionwuf data-aos='fade-up'>Know about the content of our platform and start Teaching & Learning with us.<br/>If you have enough knoweldge to teach, <Cfocus>Focus</Cfocus> is for you.<br/>If you want to get private sessions and learn about what you love, definitely <Cfocus>Focus</Cfocus> is for you.</El.Descriptionwuf>
        <El.HashBody>
        {hashes.map((hash,i)=>{
        return(
        <El.HashMap data-aos='zoom-in-up'>
             <El.Hashes className={'i'+i}>{hash.hash}</El.Hashes>
        </El.HashMap>
        )
        })} 
        </El.HashBody>
    </El.WhoUsesFocus>
    <El.GetStarted>
         <El.GsTitle data-aos='zoom-in-up'>Are you ready to being part of our platform?</El.GsTitle>
         <El.GsButton data-aos='fade-up'>
             Get Started 
         </El.GsButton>
    </El.GetStarted>
    </Content>
)
}
export default Home;
