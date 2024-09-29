import { Review } from "./Review"
import './Reviews.css'
export const Reviews=()=>{
    const data =[
        {
            comment:"Zula is the best",
            autor: "Alex Valencia",
            role: "Techlab manager",
        },
        {
            comment:"Zula is my friend",
            autor: "Ingeniero Sergio Mesa",
            role: "Innovation Tech Lead",
        },
        {
            comment:"Zula is crazy",
            autor: "Amanda moreno",
            role: "QA LSS Lead",
        }
    ]
    
    return(
        <div className="otro">
            <h3 styles={{padding:'20px 10px 20px 10px'}}>Reviews from my teachers</h3>
           <ul className="generaldiv">
                <li className="lireviews"><Review datos={data[0]}/></li> 
                <li className="lireviews"><Review datos={data[1]}/></li> 
                <li className="lireviews"><Review datos={data[2]}/></li>
            </ul>
        </div>
    )
}