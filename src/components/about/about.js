import { Cfocus } from '../../general-styles'
import * as e from './aboutComponents'
import profilepreview from '../../resources/profilepreview.jpg'
import svg1 from '../../resources/meeting.svg'
import svg2 from '../../resources/18content.svg'
import svg3 from '../../resources/justtalking.svg'
function About(){
return(
<e.Content>
    <e.First>
         <e.FirstTitle className='animate__animated animate__fadeInUp'>
             It's <Cfocus>easier</Cfocus> than you think
         </e.FirstTitle>
         <e.FirstDesc className='animate__animated animate__flipInX'>
              There are many ways to find the best teacher for you.
         </e.FirstDesc>
         <e.ProfilePreview className='animate__animated animate__lightSpeedInRight' src={profilepreview} />
    </e.First>
    <e.Second>
        <e.SecondTitle className='animate__animated animate__fadeInUp'>See how other users use <Cfocus>Focus</Cfocus></e.SecondTitle>
        <e.Box1>
        <e.Object1 className='animate__animated animate__zoomIn' data={svg1}/>
            <e.Object1desc className='animate__animated animate__lightSpeedInLeft'>Meeting people you love, just imagine talking with Selena Gomez in private!</e.Object1desc>
        </e.Box1>
        <e.Box2>
        <e.Object2 className='animate__animated animate__zoomIn' data={svg2}/>
        <e.Object2desc  className='animate__animated animate__fadeInUp'>+18 Content support, we also care about this content.</e.Object2desc>
        </e.Box2>
        <e.Box3>
        <e.Object3 className='animate__animated animate__zoomIn' data={svg3}/>
        <e.Object3desc  className='animate__animated animate__lightSpeedInRight'>#JustTalking is most popular!<br/> sometimes explaining how you are feeling to another person could be improve your day a lot.</e.Object3desc>
        </e.Box3>
    </e.Second>
</e.Content>
)
}
export default About;
