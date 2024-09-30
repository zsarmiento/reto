export const Review =(props)=>{

    return(
        <div>
            <p>{props.datos.comment}</p>
            <p>{props.datos.autor}</p>
            <p>{props.datos.role}</p>
        </div>
    )
}