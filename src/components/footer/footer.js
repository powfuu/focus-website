import { Cfocus } from '../../general-styles';
import * as e from './footerComponents.js'
import logo from '../../resources/logo.png'
import elogo from '../../resources/evercode-logo-white.png'
import { Link } from 'react-router-dom';
function Footer(){
let locationimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVlJREFUSEu1lX1RQ0EMxHcdgAJAAa0CKgEUgAOKk+IAFIADQAFFQcEBKAizzD3myMt9zdD78126v2STXIk9H+5ZH02AmR0DuAawArBICW0BPAO4JfleS7IKMLNNEq9pbEjelAKKADNTlqedFm5JLqPYENCZudeTXWv/cQZInu9c4AcA/VhV6agXsu/IxZ34nkQA77vEFyQ/czEzO0jAHDKrIgJ47y9IPkb+mtk5gIfsbtaLCGBO7NBnP91HdpL8o/nfgC+Ssu73RAAt0FkWM2LRC0ktZBVwB+Ayi9GmLgtNfgWgTZ/OPcmrFkAZPLk+CKIxfUvftYCatlxcV0pkGuWf0NKijWzxlMvMnhogqiKa1PzbLPsiQBeDz0X4TFQBCdJjVWjNVFrrudZMa2xLr6qaviotYrOCVEUJ0hTvAhQgXeLdgAyi2ddZ12ypLlprFkfvm3/6o4I+/huWgI4ZOZjB/wAAAABJRU5ErkJggg=="
return(
<e.Footer>
    <e.Table>
    <e.First>
        <e.Logo src={logo} />
        <e.Copyright >© <Cfocus>Focus</Cfocus> | Evercode</e.Copyright>
        <e.Location  src={locationimg}/>
        <e.LocationText >Spain, Madrid</e.LocationText>
    </e.First>
    <e.Second>
        <e.Title >FOR CREATORS</e.Title>
        <e.Description >#Development</e.Description>
        <e.Description >#Artists</e.Description>
        <e.Description >#Designers</e.Description>
        <e.Description >#Marketing</e.Description>
        <e.Description >#100,000+</e.Description>
    </e.Second>
    <e.Third>
        <e.Title >MENU SHORTCUT</e.Title> 
        <e.DescriptionP onClick={()=>{ window.location.pathname='/' }}>Home</e.DescriptionP>
        <e.DescriptionP onClick={()=>{ window.location.pathname='/goals' }}>Goals</e.DescriptionP>
        <e.DescriptionP onClick={()=>{ window.location.pathname='/about' }}>About <Cfocus style={{cursor:'pointer'}}>Focus</Cfocus></e.DescriptionP>
        <e.DescriptionP onClick={()=>{ window.location.pathname='/work-with-us' }}>Content Creator</e.DescriptionP>
    </e.Third>
    <e.Fourth>
        <e.Title >EVERCODE</e.Title>
        <e.DescriptionP >Official Website</e.DescriptionP>
        <e.DescriptionP >Services</e.DescriptionP>
        <e.DescriptionP >Everit Molero</e.DescriptionP>
        <e.Elogo  src={elogo}/>
    </e.Fourth>
</e.Table>
</e.Footer>
)
}
export default Footer;
