import { Review } from "./Review"
import './Reviews.css'
export const Reviews=()=>{
    const data =[
        {
            id:1,
            comment:"Zula is the best",
            autor: "Alex Valencia",
            role: "Techlab manager",
        },
        {
            id:2,
            comment:"Zula is my friend",
            autor: "Ingeniero Sergio Mesa",
            role: "Innovation Tech Lead",
        },
        {
            id:3,
            comment:"Zula is crazy",
            autor: "Amanda moreno",
            role: "QA LSS Lead",
        }
    ]
    /*
    return(
        <div className="otro">
            <h3 className="h3">Reviews from my teachers</h3>
           <ul className="generaldiv">
                <li className="lireviews"><Review datos={data[0]}/></li> 
                <li className="lireviews"><Review datos={data[1]}/></li> 
                <li className="lireviews"><Review datos={data[2]}/></li>
            </ul>
        </div>
    )*/
   return(
    <div className="otro">
        <h3 className="h3">Reviews From my teachers</h3>
        <ul className="generaldiv">
            {
                data.map((data)=>(
                   <li className="lireviews"> <Review
                        key={data.id}
                        comment={data.comment}
                        autor={data.autor}
                        role={data.role}
                    /></li>
                ))

            }
        </ul>
    </div>
   )
}