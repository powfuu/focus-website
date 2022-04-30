import { Cfocus } from '../../general-styles'
import * as e from './goalsComponents'
import goal from '../../resources/goal.svg'
import improve from '../../resources/improvement.svg'
import emptystreet from '../../resources/emptystreet.svg'
import location from '../../resources/location.svg'
import payment from '../../resources/payment.svg'
import videocall from '../../resources/videocall.svg'
import support from '../../resources/support.svg'
function Goals(){
let goals = [
{title: 'Improve your tools', desc:'We want to give to our users the right tools for specific contents.', svg:improve},
{title:'Security and Comfort', desc:'We focus on Learning and meeting people from your house, we think that today can be a lot more safe.',svg:emptystreet},
{title:'Easier and anywhere', desc:'We give the opportunity to learn and know from your location to all WORLD!',svg:location},
{title:'Easier and secure Payments', desc:'We want to give you the right tools to make your transaction without any problem.', svg:payment},
{title:'FACE TO FACE', desc:`We want to innovate this tool, is private & secure and usefull.`, svg:videocall}
]
return(
<e.Content>

    <e.First>
        <e.FirstTitle className='animate__animated animate__fadeInDown'>What's our goal?</e.FirstTitle>         
        <e.FirstDesc className='animate__animated animate__fadeInUp'>We want to innovate the private session face to face, this project is oriented to all contents and we want to give you the opportunity to use our utilty for creating content for your clients.<br/><Cfocus>Focus</Cfocus> is developed for many reasons, including meeting with private sessions, <Cfocus>Learning</Cfocus> and to improve your tools to get more easier things what you want.</e.FirstDesc>
        <e.FirstSvg data={goal} className='animate__animated animate__lightSpeedInLeft'/>
    </e.First>

    <e.Second>
        <e.SecondTitle className='animate__animated animate__fadeInUp'><Cfocus>Know</Cfocus> some of our goals</e.SecondTitle>      
        {goals.map((data)=>{
        return(
        <e.Box className='animate__animated animate__fadeInUp'>
            <e.ElTitle>{data.title}</e.ElTitle>
            <e.ElDesc>{data.desc}</e.ElDesc>
            <e.ElSvg data={data.svg}/>
        </e.Box>
        )
        })}
    </e.Second>

    <e.Third>
        <e.ThirdTitle>Support Developers joining to <Cfocus>Focus</Cfocus></e.ThirdTitle> 
        <e.ThirdDivDescription>Joining to our platform will be a lot for us!</e.ThirdDivDescription>
        <e.JoinFocusB>Join to <Cfocus style={{cursor:'pointer'}}>Focus</Cfocus></e.JoinFocusB>
    </e.Third>

</e.Content>
)
}
export default Goals;
