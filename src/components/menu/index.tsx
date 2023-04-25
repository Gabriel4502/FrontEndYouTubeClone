
import { useContext} from 'react';
import { MenuContext } from '../../contexts/context';
import {
    ButtonIcon,
  Container, Divisoria, Linha, Links, MenuItem, Copyright, LoginButton
} from "./styles";
import SinoIcon from '../../assets/sino.png'
import Home from '../../assets/botao-de-inicio.png'
import Shorts from '../../assets/youtube-shorts-icon.png'
import Inscrito from '../../assets/reprodutor-de-video.png'
import lib from '../../assets/yt-lib.png'
import historico from '../../assets/historico.png'
import Perfil from '../../assets/perfil-de-usuario.png'
import Shopping from '../../assets/shopping.png'
import Musica from '../../assets/musica.png'
import Filmes from '../../assets/filmes.png'
import Live from '../../assets/aoVivo.png'
import Gaming from '../../assets/youtube-gaming.256x180.png'
import News from '../../assets/newspaper.png'
import Esportes from '../../assets/trofeu.png'
import Aprender from '../../assets/ideia-criativa.png'
import Trending from '../../assets/trending.png'
import Adicionar from '../../assets/botao-adicionar.png'
import YtPremium from '../../assets/youtubePremium.png'
import YtKids from '../../assets/youtubeKids.png'
import YtMusic from '../../assets/youtubeMusic.png'
import Config from '../../assets/config.png'
import Denuncias from '../../assets/flag.png'
import Ajuda from '../../assets/help.png'
import Feedback from '../../assets/feedback.png'
import { ButtonContainer } from '../header/styles';

const icones = [
    Home, Shorts, Inscrito, lib, historico, Trending, Shopping,
    Musica, Filmes, Live, Gaming, News, Esportes, Aprender,
    Adicionar, YtPremium, YtKids, YtMusic, Config, Denuncias, Ajuda,
    Feedback,
] ;
const itemsOpen= ['Inicio','Shorts','Inscrições','Biblioteca','Histórico', 'Em alta', 
                    'Shopping','Música', 'Filmes e programas', 'Ao Vivo', 'Jogos', 'Notícias', 'Esportes',
                    'Aprender', 'Procurar canais', 'YouTube Premium', 'YouTube Music', 'YouTube Kids',
                    'Configurações', 'Histórico de denúncias', 'Ajuda', 'Enviar Feedback'];

const itemsClosed = ['Inicio','Shorts','inscrições','Biblioteca','Histórico'] ;
let listaItemsOpen: React.ReactNode;
let listaItemsClosed: React.ReactNode;
function controlador (openMenu: boolean) {
    if(openMenu){
        listaItemsOpen = itemsOpen.map(
            (valor, i)=> <>
                <MenuItem openMenu = {openMenu} >
                <ButtonIcon alt='' src={icones[i]} /> <span>{valor}</span>
                </MenuItem>
                {i===2? <Divisoria> <Linha></Linha> </Divisoria> :''} 
                {i===4? <div>
                            <Divisoria> 
                                <Linha></Linha> 
                            </Divisoria> 
                                <div style={{ width:'100%', display:'flex', justifyContent:'flex-start'}} >
                                    <span style={{padding:'6px 12px 4px', fontSize:"16px", fontWeight:'600'}} >
                                        Faça login para curtir vídeos, comentar e se inscrever
                                    </span>
                                 </div>
                            <LoginButton>
                                <ButtonIcon alt='' src={Perfil}/>
                                <span>Fazer Login</span>
                            </LoginButton>
                            <Divisoria><Linha></Linha></Divisoria>
                            <span style={{padding:'6px 12px 4px', fontSize:"16px", fontWeight:'400'}} >Explorar</span>
                 </div> : ''}
                
                {i===14? <><Divisoria><Linha></Linha></Divisoria>
                              <div style={{ width:'100%', display:'flex', justifyContent:'flex-start'}} >
                                 <span style={{padding:'6px 12px 4px', fontSize:"16px", fontWeight:'400'}} >Mais do YouTube</span>
                              </div> 
                          </> :''}
                {i===13? <Divisoria><Linha></Linha></Divisoria> :''} 
                {i===18? <Divisoria><Linha></Linha></Divisoria> :''} 
                {i===21?  <div> 
                    <Divisoria><Linha></Linha></Divisoria>
                    <Links> 
                        <a>Sobre</a> <a>Imprensa</a> <a>Direitos autorais</a> <a>Entre em contato</a> 
                        <a>Criadores de conteúdo</a> <a>Publicidade</a> <a>Desenvolvedores</a> 
                    </Links>
                    <Links> <a>Termos</a> <a>Privacidade</a> <a>Política e segurança</a> 
                    <a>Como funciona o YouTube</a> <a>Testar os novos recursos</a> 
                     </Links>  <Copyright>© 2023 Google LLC</Copyright>
                    </div> :''}
                </>
        )
    } listaItemsClosed = itemsClosed.map(
        (valor, i)=><MenuItem openMenu = {openMenu} >
                        <ButtonIcon alt='' src={icones[i]} /> <span>{valor}</span>
                    </MenuItem> 
    )
}



// function controlaLista(openMenu:boolean)  {

//     if(openMenu){
//         for(let i=0; i<5; i++){
//             <MenuItem openMenu={openMenu}>
//                 <ButtonIcon alt='' src={icones[i]} /> <span>{itemsOpen[i]}</span>
//             </MenuItem>
//         }
//     } for(let i=0; i<24; i++){
//         <MenuItem openMenu={openMenu}>
//             <ButtonIcon alt='' src={icones[i]} /> <span>{itemsOpen[i]}</span>
//         </MenuItem>
//     }
// }

// function controlador2 (openMenu: boolean) {
//     if(openMenu){
       
//     } listaItemsClosed = itemsClosed.map(
//         (valor, i)=><MenuItem openMenu = {openMenu} ><ButtonIcon alt='' src={icones[i]} /> <span>{valor}</span></MenuItem> 
//     )
// }

function Menu(){
    const {openMenu} = useContext(MenuContext);
    controlador(openMenu);
    
    return(
        
        <Container openMenu={openMenu}>
           {openMenu? (< >
                {listaItemsOpen}
                
            </>) : (<>
                {listaItemsClosed}
                
                
            </>)}
        </Container>
    )

}

export default Menu;