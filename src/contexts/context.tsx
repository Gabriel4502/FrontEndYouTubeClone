import {createContext, useState, useContext} from 'react';

interface MenuContextProps{
    Menu: boolean;
    mudaMenu:(estado: boolean) => void;
}

interface MenuProviderprops{
    children: React.ReactNode
}

export const MenuContext = createContext({} as MenuContextProps);

export const MenuProvider = ({children}: MenuProviderprops) => {
    const [menu, setMenu]= useState (true);

    function mudaMenu(Menuu: boolean){
        setMenu(Menuu);
    }

    return (
        <MenuContext.Provider value= {{
           Menu: menu,
           mudaMenu
        }}>
            {children}
        </MenuContext.Provider>
    )
};

export function useMenu(){
    const context = useContext(MenuContext);
    return context;
}