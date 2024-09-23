import { Avatar } from "./Avatar"
import { Menu } from "./Menu"
import { Nombre } from "./Nombre"
import './Header.css'

export const Header=()=>{
    return(
        <div className="header">
            <Avatar/>
            <Nombre/>
            <Menu/>

        </div>
    )
}