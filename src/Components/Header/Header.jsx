
import { Avatar } from "../Avatar/Avatar"
import { Menu } from "../Menu/Menu"
import { Nombre } from "../Nombre/Nombre"
import './Header.css'


export const Header = () => {
    return (
            <div className = 'header' >
                 <Avatar src="\images\1590023500311.jpeg" alt="mi foto"  />
                 <Nombre/>
                 <Menu/>
            
             </div>
           
    )


}
  