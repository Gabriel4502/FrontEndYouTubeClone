
import { useContext} from 'react';
import { MenuContext } from '../../contexts/context';
import {
  Container, MenuItem,
} from "./styles";

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]



function Menu(){
    const {Menu} = useContext(MenuContext);
    return(
        <Container style={(Menu)? {width: '250px'} : {width: '100px'} } >
            {items.map(() => (
                <MenuItem >
                Início
                </MenuItem>
            ))}


        </Container>
    )

}

export default Menu;