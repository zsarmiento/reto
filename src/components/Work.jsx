import './AboutMe'
import { WorkExperience } from "./WorkExperience"
export const Work =()=>{
    const trabajos = [
        {
            webpage: "url.com",
            descripcion: "hacia b y c",
            githubLink: "github.com",
        },
        {
            webpage: "url2.com",
            descripcion: "hacia a y b",
            githubLink: "github2.com",
        }
    ]

    return(
        <div className="titles">
            <h2 >Work Experience</h2>
            <WorkExperience  work={trabajos[0]} />
            <WorkExperience  work={trabajos[1]} />
        </div>
    )
}