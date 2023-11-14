import {HtmlHTMLAttributes, useContext, useEffect} from "react"
import { UserContext } from "../../contexts/userContext"
import { ButtonIcon } from "../menu/styles"
import { DropDownItem, DropDownMenu, Inicial, InicialContainer, MenuUserContent, Separador, SetaMenu } from "../DropDownMenu/styles"
import seta from '../../assets/right-arrow.png'
import User from "../../assets/perfil-de-usuario.png"
import Studio from "../../assets/StudioYT.png"
import ChangeAcc from "../../assets/changeAcc.png"
import { MenuContext } from "../../contexts/context"


function DropMenu(){

    const {logOut, user} = useContext(UserContext);
    const { setDropDown} = useContext(MenuContext);
    const itemsMenuDrop = [
        {nome:'Seu canal', link:'', açao: ()=>{}, icone: User},
        {nome:'YouTube Studio', link:'', açao: ()=>{}, icone:Studio},
        {nome:'Alterar conta', link:'', açao: ()=>{}, elemento: <SetaMenu alt="" src={seta}/>, icone:ChangeAcc},
        {nome:'Sair', link:'', açao: ()=>{logOut();setDropDown(false) }, linha:<Separador></Separador>, icone:User},
        {nome:'Compras e assinaturas', link:'', açao: ()=>{}, icone:User},
        {nome:'Seus dados no Youtube', link:'', açao: ()=>{}, linha:<Separador></Separador>, icone:User},
        {nome:'Aparência: tema do dispositivo', link:'', açao: ()=>{}, elemento: <SetaMenu alt="" src={seta}/>, icone:User},
        {nome:'Idioma: Português', link:'', açao: ()=>{}, elemento: <SetaMenu alt="" src={seta}/>, icone:User},
        {nome:'Modo restrito: desativado', link:'', açao: ()=>{}, elemento: <SetaMenu alt="" src={seta}/>, icone:User},
        {nome:'Local: Brasil', link:'', açao: ()=>{}, elemento: <SetaMenu alt="" src={seta}/>, icone:User},
        {nome:'Atalhos do teclado', link:'', açao: ()=>{}, linha:<Separador></Separador>, icone:User},
        {nome:'Configurações', link:'', açao: ()=>{}, linha:<Separador></Separador>, icone:User},
        {nome:'Ajuda', link:'', açao: ()=>{}, icone:User},
        {nome:'Seus dados no Youtube', link:'', açao: ()=>{}, icone:User},
        {nome:'Enviar feedback', link:'', açao: ()=>{}, icone:User},
    ]


  

    return(

       <DropDownMenu>
            
            <MenuUserContent>

                <InicialContainer>
                <Inicial>
                    <span>{ user.nome ? user.nome.charAt(0): '?' }</span>
                </Inicial>
                </InicialContainer>

                <div className="userInfo">
                    <span>
                        {user?.nome || '?'}
                    </span>
                    <span style={{marginBottom:'5px'}}>
                        {`@${user.nome}-codigo`}
                    </span>
                    <a>Gerenciar sua conta do Google</a>
                </div>
             
            </MenuUserContent>
           
           <Separador/>

        <div className="ItemsDrop">
            {itemsMenuDrop.map(
               (valor, i)=>
               <>
               <DropDownItem onClick={valor.açao}>
                <img className="icone1" alt="" src={valor.icone} />
                <div className="menuTexto">
                    <span>{valor.nome}</span>
                </div>
                <div className="imagem" >
                    {valor.elemento}
                </div>
               </DropDownItem>

               {valor.linha}
               </>
            )}
        </div>

       </DropDownMenu>
    )
}

export default DropMenu