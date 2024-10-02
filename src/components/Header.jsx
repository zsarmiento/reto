import { Avatar } from "./Avatar"
import { Menu } from "./Menu"
import { Nombre } from "./Nombre"
import './Stylesheet.css'
export const Header=()=>{
    return(
        <div className="header">
            <Avatar/>
            <Nombre/>
            <Menu/>

        </div>
    )
}