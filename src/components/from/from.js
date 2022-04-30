import { Cfocus } from '../../general-styles'
import * as e from './fromComponents'
import worksvg from '../../resources/work.svg'
import profile1 from '../../resources/profile1.jpeg'
import profile2 from '../../resources/profile2.jpeg'
import profile3 from '../../resources/profile3.jpeg'
function From(){
let reviews = [
{name: 'Joseph Brieghfill', img:profile1, username:'@JosephBriegh',desc:'Working as a content creator in this platform has changed my life, now i can work from my house without anny difficult!'},
{name: 'Gregory Schurmann', img:profile2, username:'@gregfSchur', desc:'This platform has give me a lot of opportunities working as a match teacher, now i can get paid doing what i love!'},
{name: 'Miyuki Zeri', img:profile3, username:'@miyuteach', desc:"I'm a teacher and i started teaching in this platform around 1 year ago, now i have more than 300 students and this becomes my new dreamed job, i'm so happy with this!"}
]
return(
<e.Content>
    <e.WorkWithUs>
        <e.WWUTitle className='animate__animated animate__jello'>Start <Cfocus>working</Cfocus> with us</e.WWUTitle>
        <e.WWUDesc className='animate__animated animate__fadeInUp'>you can earn money as a content creator in <Cfocus>Focus</Cfocus> Platform.</e.WWUDesc>
        <e.WWUSvg className='animate__animated animate__lightSpeedInLeft' data={worksvg}/>
    </e.WorkWithUs>
    <e.WorkersReview>
        <e.ReviewContent>
            <e.ReviewTitle className='animate__animated animate__fadeInUp'><Cfocus>profesional</Cfocus> reviews from content creators</e.ReviewTitle>
            {reviews.map((data)=>{
            return(
                <e.Review className='animate__animated animate__zoomIn'>
                    <e.ReviewImg src={data.img}/>
                    <e.ReviewName>{data.name}</e.ReviewName>
                    <br/>
                    <br/>
                    <e.ReviewUsername>{data.username}</e.ReviewUsername>
                    <br/>
                    <e.ReviewDesc>{data.desc}</e.ReviewDesc>
                </e.Review>
            )
            })}
        </e.ReviewContent>
    </e.WorkersReview>
        <e.StartWorking>
            <e.SWTitle>Start Working with us</e.SWTitle>
            <e.SWDesc>explore the world with new opportunities</e.SWDesc>
            <e.SWButton>Join to <Cfocus style={{cursor:'pointer'}}>Focus</Cfocus></e.SWButton>
    </e.StartWorking>
</e.Content>
)
}
export default From;
