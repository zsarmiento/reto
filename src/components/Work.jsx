import './AboutMe'
import { WorkExperience } from "./WorkExperience"
export const Work =()=>{
    const trabajos = [
        {
           id:1,
            webpage: "url.com",
            descripcion: "hacia b y c",
            githubLink: "github.com",
        },
        {
            id:2,
            webpage: "url2.com",
            descripcion: "hacia a y b",
            githubLink: "github2.com",
        }
    ]

return(
    <div className="titles">
        <h2>Work Experience</h2>
        {
            trabajos.map((trabajos) =>(
               
                <WorkExperience 
                    key={trabajos.id}    
                    puesto={trabajos.webpage}
                    empresa={trabajos.descripcion}
                    años={trabajos.githubLink}
                />
            ))
        }
    </div>
)
}