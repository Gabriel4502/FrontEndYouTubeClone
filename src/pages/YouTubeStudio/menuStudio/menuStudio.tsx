import  {useContext}  from "react";
import { MenuItemsBottomSection, MenuItemsTopSection, MenuStudioContainer, MenuStudioItem, MenuStudioUserContent, MenuUserId } from "./styles";
import { MenuContext } from "../../../contexts/context";
import teste from "../../../assets/dollar.png"
import Painel from '../../../assets/painel.png'
import Content from '../../../assets/yt-lib.png'
import Analytics from '../../../assets/graphic.png'
import Comments from '../../../assets/comment.png'
import Subtitle from '../../../assets/transcript.png'
import Copyright from '../../../assets/copyright.png'
import Dollar from '../../../assets/dollar-sign.png'
import Editing from '../../../assets/editing.png'
import AudioLib from '../../../assets/music-archive.png'
import Config from '../../../assets/config.png'
import Feedback from '../../../assets/feedback.png'
import { ButtonIconStudio } from "../ChannelContent/styles"
import { UserContext } from "../../../contexts/userContext";
function MenuStudio(){

    const {openMenu} = useContext(MenuContext);
    const {user} = useContext(UserContext);
    const itemsOpen=[
        {nome: 'Painel', icone: Painel, acao:()=>{}},
        {nome: 'Conteúdo', icone: Content, acao:()=>{}},
        {nome: 'Analytics', icone: Analytics, acao:()=>{}},
        {nome: 'Comentários', icone: Comments, acao:()=>{}},
        {nome: 'Legendas', icone: Subtitle, acao:()=>{}},
        {nome: 'Direitos Autorais', icone: Copyright, acao:()=>{}},
        {nome: 'Monetário', icone: Dollar, acao:()=>{}},
        {nome: 'Personalização', icone: Editing, acao:()=>{}},
        {nome: 'Bibliotecas de áudio', icone: AudioLib, acao:()=>{}},
        {nome: 'Configurações', icone: Config, acao:()=>{}},
        {nome: 'Enviar feedback', icone: Feedback, acao:()=>{}},
    ]






    return (<>
                <MenuStudioContainer openMenu={openMenu}>
                    <MenuStudioUserContent openMenu={openMenu} >
                        <MenuUserId openMenu={openMenu}>
                            <span> {user?.nome?.charAt(0).toUpperCase() || '?'} </span>
                        </MenuUserId>
                        {openMenu? <>
                            <span>Seu canal</span>
                            <span>{user?.nome || '?'}</span>
                        </>:'' }
                    </MenuStudioUserContent>
                    

                        <>
                            <MenuItemsTopSection openMenu={openMenu}>

                                {itemsOpen.map((valor, i)=>
                                 i<9!?
                                    <MenuStudioItem openMenu={openMenu} >
                                        {
                                           

                                                openMenu? <>
                                                    <ButtonIconStudio src={valor.icone} />
                                                        <span>{valor.nome}</span></>:
                                                    <ButtonIconStudio title="teste" src={valor.icone}
                                                        />
                                            
                                        }
                                    </MenuStudioItem>
                                    :''
                                )}
                            </MenuItemsTopSection>
                            <MenuItemsBottomSection openMenu={openMenu}>
                                {itemsOpen.slice(9).map((valor, i) =>
                                    <MenuStudioItem openMenu={openMenu}>
                                        { openMenu? <>
                                                    <ButtonIconStudio src={valor.icone} />
                                                        <span>{valor.nome}</span></>:
                                                    <ButtonIconStudio title="teste" src={valor.icone}/>
                                        }

                                    </MenuStudioItem>
                                ) }
                             </MenuItemsBottomSection>
                        </>
                </MenuStudioContainer>

        </>
    )
}

export default MenuStudio;