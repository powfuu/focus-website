import { HamILogo, HamELogo, Hamburger,NavContent,Button,InputNav, Navigation, Signin,Elements,SearchIco, FindTeachers,Logo, Ule,Hamburgerdad } from './navComponents'
import { Cfocus } from '../../general-styles'
import ilogo from '../../resources/logo.png'
import elogo from '../../resources/evercode-logo.png'
import {useRef, useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
function Nav(){
const isActive = useRef()
const [selected, setSelected]=useState(undefined)
const home = useRef()
const goals = useRef()
const about = useRef()
const from = useRef()
const navcontent = useRef()
const [ham,setHam]=useState(false)
 const [y,
    setY] = useState(document.scrollingElement.scrollHeight);

const handleNavigation = useCallback((e) => {

    if (y < window.scrollY) {
isActive.current.style.background='rgba(255,255,255,.5)'
document.querySelector('.nav').style.boxShadow='0px 1px 11px -5px rgba(215,215,215,100%)'
}
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {
if(y <= 20){
isActive.current.style.background='white'
document.querySelector('.nav').style.boxShadow='none'
}
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  });
useEffect(()=>{
if(window.location.pathname === '/'){
home.current.style.color = 'black'
}else if(window.location.pathname === '/goals'){
goals.current.style.color = 'black'
}else if(window.location.pathname === '/about'){
about.current.style.color = 'black'
}else if(window.location.pathname === '/work-with-us'){
from.current.style.color = 'black'
}
})
useEffect(()=>{
if(selected === 0){
home.current.style.color='black'
goals.current.style.color='rgb(180,180,180)'
about.current.style.color='rgb(180,180,180)'
from.current.style.color='rgb(180,180,180)'
}else if(selected === 1){
goals.current.style.color='black'
home.current.style.color='rgb(180,180,180)'
about.current.style.color='rgb(180,180,180)'
from.current.style.color='rgb(180,180,180)'
}else if(selected === 2){
about.current.style.color='black'
goals.current.style.color='rgb(180,180,180)'
home.current.style.color='rgb(180,180,180)'
from.current.style.color='rgb(180,180,180)'
}else if(selected === 3){
from.current.style.color='black'
goals.current.style.color='rgb(180,180,180)'
about.current.style.color='rgb(180,180,180)'
home.current.style.color='rgb(180,180,180)'
}
},[selected])
return(
<Navigation className='nav' ref={isActive}>
    <Link to='/'><Logo src={ilogo}/></Link>
    <NavContent ref={navcontent}>
    <Ule>
        <Elements onClick={()=>{
        setSelected(0);
        setHam(!ham)

ham ? isActive.current.style.height='58px' : isActive.current.style.height='100vh';
 ham ? navcontent.current.style.right='-200vw' : navcontent.current.style.right='0';
        }} ref={home} to='/'>Home</Elements>  
    <Elements onClick={()=>{
    setSelected(1)

ham ? isActive.current.style.height='58px' : isActive.current.style.height='100vh';
 ham ? navcontent.current.style.right='-200vw' : navcontent.current.style.right='0';
        setHam(!ham)
    }} ref={goals} to='/goals'>Goals</Elements>  
<Elements onClick={()=>{

ham ? isActive.current.style.height='58px' : isActive.current.style.height='100vh';
setSelected(2)
 ham ? navcontent.current.style.right='-200vw' : navcontent.current.style.right='0';
setHam(!ham)
}} ref={about} to='/about'>About <Cfocus style={{cursor:'pointer'}}>Focus</Cfocus></Elements>  
        <Elements onClick={()=>{
        setSelected(3)

ham ? isActive.current.style.height='58px' : isActive.current.style.height='100vh';
 ham ? navcontent.current.style.right='-200vw' : navcontent.current.style.right='0';
        setHam(!ham)
        }} ref={from} to='/work-with-us'>Content Creator</Elements> 
</Ule> 
<Button>Join to <Cfocus style={{cursor:'pointer'}}>Focus</Cfocus></Button>
<Signin>Log In</Signin>
<InputNav>
<FindTeachers onChange={(e)=>{
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
}} placeholder='Find a Teacher'></FindTeachers>
<SearchIco src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVFJREFUSEvVleExBEEQRt9FQAoiQATIgAgQASJABIgAESACZEAEyIAIqKd6qub2Zmen7N4P/eu2dqdf99dfz81YcsyWnJ8+wCpwBOwCG1HEC3APXAGfrYWVAAfABSCkFCY/AW5aIF2Aya/j4ANwCTzF8zZwBmzF8150VOXkACt+i8oPKxUKOQ2Z1obkygHpoJWrfS3syk7Oo6veb3OAQ1wHdjJZ+g4q1yPgmc1aJTngOz5stW7T92MBXxW3/db7V4mc0R3wDChX0wzSkF0mLdgyZPdBKzcBtOk7sBLO0CGlSIV8xJZXt7o70NS6ibWiyZTBUAr9nyQZtGh3Bqlat9m27aQUDtb3wrSpv2/7NKpddsexcO6G8RpXgwmVJe2N77yX3P6FaPV86Wx+b/VCxgBS0v2MvtDJWMAgZApAFzJ3E08FSBCtPfdHNCWg6NT/D/gBeOVFGZeTouUAAAAASUVORK5CYII="}/>
</InputNav>
<HamILogo src={ilogo}/>
<HamELogo src={elogo}/>
</NavContent>
<Hamburgerdad>
<Hamburger toggled={ham ? true : false} type="button" style={{cursor:'pointer'}} rounded label="Menu" easing="ease-in" size={27} onToggle={()=>{
ham ? isActive.current.style.height='58px' : isActive.current.style.height='100vh';
ham ? navcontent.current.style.right='-200vw' : navcontent.current.style.right='0';
}} toggle={()=>{
setHam(!ham);
}} style={{cursor:'pointer'}}>
  <span class="'hamburger-box" style={{cursor:'pointer',padding:'1em'}}>
    <span class="hamburger-inner"  style={{cursor:'pointer'}}></span>
  </span>
</Hamburger>
</Hamburgerdad>
</Navigation>
)
}
export default Nav;
