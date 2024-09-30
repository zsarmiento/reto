/*import './AboutMe.css'
export const WorkExperience =(props)=>{
  /* return(
        <div >
            <h3 className="project">{props.work.wp}</h3>
            <p className="project">{props.work.dc}</p>
            <p className="project"><a href="">visit my githup repo at {props.work.ghl}</a></p>
        </div>
    )
}*/




export const WorkExperience = ({ puesto, empresa, años }) => {
  return (
    <div>
      <h2 className="project">{puesto}</h2>
      <p className="project">{empresa}</p>
      <p className="project">{años}</p>
    </div>
  )
}

