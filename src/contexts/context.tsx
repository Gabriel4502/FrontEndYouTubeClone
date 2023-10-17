import {createContext, useState, useContext} from 'react';

interface MenuContextProps{
    openMenu: boolean;
    mudaMenu:(estado: boolean) => void;
    active?: boolean;
    mudaDropOpen:(estado: boolean) => void;
}

interface MenuProviderprops{
    children: React.ReactNode
}

export const MenuContext = createContext({} as MenuContextProps);

export const MenuProvider = ({children}: MenuProviderprops) => {
    const [menu, setMenu]= useState (true);
    const [active, setActive] = useState(false);

    function mudaDropOpen(active: boolean){
        setActive(active);
    }

    function mudaMenu(Menuu: boolean){
        setMenu(Menuu);
    }

    return (
        <MenuContext.Provider value= {{
           openMenu: menu,
           mudaMenu,
           active,
           mudaDropOpen
        }}>
            {children}
        </MenuContext.Provider>
    )
};

export function useMenu(){
    const context = useContext(MenuContext);
    return context;
}