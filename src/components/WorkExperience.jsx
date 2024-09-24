import './AboutMe.css'
export const WorkExperience =(props)=>{
    return(
        <div >
        <h3>{props.work.webpage}</h3>
        <p>{props.work.descripcion}</p>
        <p><a href="">visit my githup repo at {props.work.githubLink}</a></p>
        </div>
    )
}