import './AboutMe.css'
export const WorkExperience =(props)=>{
    return(
        <div >
        <h3 className="project">{props.work.webpage}</h3>
        <p className="project">{props.work.descripcion}</p>
        <p className="project"><a href="">visit my githup repo at {props.work.githubLink}</a></p>
        </div>
    )
}