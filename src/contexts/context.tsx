import {createContext, useState, useContext, Dispatch, SetStateAction} from 'react';

interface MenuContextProps{
    openMenu: boolean;
    mudaMenu:(estado: boolean) => void;
    active?: boolean;
    mudaDropOpen:(estado: boolean) => void;
    overlay: boolean;
    setOverlay: React.Dispatch<React.SetStateAction<boolean>> ;
}

interface MenuProviderprops{
    children: React.ReactNode
}

export const MenuContext = createContext({} as MenuContextProps);

export const MenuProvider = ({children}: MenuProviderprops) => {
    const [menu, setMenu]= useState (true);
    const [active, setActive] = useState(false);
    const [overlay, setOverlay] = useState(false);

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
           mudaDropOpen,
           overlay,
           setOverlay,
        }}>
            {children}
        </MenuContext.Provider>
    )
};

export function useMenu(){
    const context = useContext(MenuContext);
    return context;
}