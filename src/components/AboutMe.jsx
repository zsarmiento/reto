import { Education } from "./Education";
import { Projects } from "./Projects";
import { Work } from "./Work";
import './AboutMe.css'
export const AboutMe =()=>{
    return(
        <div className="aboutme">

            <Projects/>
            <Work/>
            <Education/>
        </div>
    )
}