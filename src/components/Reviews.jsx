import { Review } from "./Review"
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
        <div>
            <Review/>

        </div>
    )
}