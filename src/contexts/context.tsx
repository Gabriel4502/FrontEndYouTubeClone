import {createContext, useState, useContext, Dispatch, SetStateAction, useEffect} from 'react';

interface MenuContextProps{
    openMenu: boolean;
    // mudaMenu:(estado: boolean) => void;
    dropDown: boolean;
    // mudaDropOpen:(estado: boolean) => void;
    overlay: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setOverlay: React.Dispatch<React.SetStateAction<boolean>> ;
    setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProviderprops{
    children: React.ReactNode
    
}

export const MenuContext = createContext({} as MenuContextProps);



export const MenuProvider = ({children}: MenuProviderprops) => {
    const [menu, setMenu]= useState (true);
    const [dropDown, setDropDown] = useState(false);
    const [overlay, setOverlay] = useState(false);



    return (
        <MenuContext.Provider value= {{
           openMenu: menu,
        //    mudaMenu,
           dropDown,
           setMenu,
        //    mudaDropOpen,
           setDropDown,
           overlay,
           setOverlay,
        }}>
            {children}
        </MenuContext.Provider>
    )
};

// export function useMenu(){
//     const context = useContext(MenuContext);
//     return context;
// }