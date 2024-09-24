export const Review =(props)=>{
  console.log(props.datos.comment);
    return(
        <div>
            <p>{props.datos.comment}</p>
            <p>{props.datos.autor}</p>
            <p>{props.datos.role}</p>
        </div>
    )
}