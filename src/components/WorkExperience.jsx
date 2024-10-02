import './Stylesheet.css'

export const WorkExperience = ({ puesto, empresa, años }) => {
  return (
    <div>
      <h2 className="project">{puesto}</h2>
      <p className="project">{empresa}</p>
      <p className="project">{años}</p>
    </div>
  )
}

