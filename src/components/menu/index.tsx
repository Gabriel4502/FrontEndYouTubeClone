import { useContext, useState, useEffect} from 'react';
import { MenuContext } from '../../contexts/context';
import {useNavigate } from 'react-router-dom';
import {
    ButtonIcon,
  Container,Linha, Links, MenuItem, Copyright, LoginButton, SobreItem
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
import Studio from '../../assets/StudioYT.png'
import Config from '../../assets/config.png'
import Denuncias from '../../assets/flag.png'
import Ajuda from '../../assets/help.png'
import Feedback from '../../assets/feedback.png'
import SeusVideos from '../../assets/yourVideos.png'
import WatchLater from '../..//assets/watchLater.png'
import Clips from '../..//assets/scissor.png'
import DownArrow from '../../assets/downArrow.png'
import ArrayModFunction from '../menu/inferfaceArrayMod'
import Like from '../..//assets/like.png'
import PlayList from '../..//assets/playlist.png'
import { UserContext } from '../../contexts/userContext';

const icones = [
    Home, Shorts, Inscrito, lib, historico, Trending, Shopping,
    Musica, Filmes, Live, Gaming, News, Esportes, Aprender,
    Adicionar, YtPremium, YtKids, YtMusic, Config, Denuncias, Ajuda,
    Feedback,
] ;


let listaItemsOpen: React.ReactNode;
let listaItemsClosed: React.ReactNode;

export function Menu(){
    const {openMenu} = useContext(MenuContext);
    const {login} = useContext(UserContext);
    const [menuExtraContent,setMenuExtraContent] = useState(false);
    const [subscribersContent,setSubscribersContent] = useState(false);
    const navigate = useNavigate();

    const itemsClosed = [{nome: 'Inicio', link:'/', acao:()=>{ navigate('/') }, icone: Home },
    {nome: 'Shorts', link:'/shorts', acao:()=>{ navigate('/') }, icone: Home },
    {nome: 'Inscrições', link:'/subscriptions', acao:()=>{ navigate('/') }, icone: Home },
    {nome: 'Biblioteca', link:'/library', acao:()=>{ navigate('/') }, icone: Home },
    {nome: 'Histórico', link:'/history', acao:()=>{ navigate('/') }, icone: Home },

    ] ;
    const itemsOpen= [{nome: 'Inicio', link:'/', acao:()=>{ navigate('/') }, icone: Home },
                    {nome: 'Shorts', link:'/', acao:()=>{navigate('/shorts')}, icone: Shorts },
                    {nome:'Inscrições', link:'/', acao:()=>{ navigate('/inscrições') }, icone: Inscrito, linha: <Linha/> },
                    {nome:'Biblioteca', link:'/library', acao:()=>{ navigate('/library') }, icone: lib },
                    {nome:'Histórico', link:'/history', elemento3: <Linha/> , acao:()=>{navigate('/history')}, icone: historico},
                    {nome:'Seus videos', elemento2:' ', link:'/history', acao:()=>{}, icone: SeusVideos,},
                    {nome:'Assistir mais tarde', elemento2:' ', link:'/history', acao:()=>{}, icone: WatchLater,},
                    {nome:'Seus clipes', elemento2:' ', link:'/history', acao:()=>{}, icone: Clips,},
                    {nome:'Mostrar mais', link:'/history', acao:()=>{setMenuExtraContent(!menuExtraContent)} , icone: DownArrow, linha2: <Linha/> , elemento: <div>
                        <div style={{ width:'100%', display:'flex', justifyContent:'flex-start'}} >
                            <span style={{padding:'6px 12px 4px', fontSize:"16px", fontWeight:'600'}} >
                                Faça login para curtir vídeos, comentar e se inscrever
                            </span>
                        </div>
                    <LoginButton onClick={()=> navigate('/login')} >
                        <ButtonIcon  alt='/login' src={Perfil} />
                        <span>Fazer Login</span>
                    </LoginButton>
                    <Linha/>
                    
                    </div>, },
                    {nome:'Canal1', elemento2: login? <SobreItem id='Inscricoes' >
                     <span>Inscrições</span>
                </SobreItem>: ' ', link:'/history', acao:()=>{}, icone: Perfil,},
                    {nome:'Canal2', elemento2:' ', link:'/history', acao:()=>{}, icone: Perfil,},
                    {nome:'Mostrar mais', elemento2:' ', link:'/history', linha2: <Linha/>, acao:()=>{ setSubscribersContent(!subscribersContent) }, icone: DownArrow,},
                    {nome:'Em alta', link:'/',elemento2: <SobreItem ><span>
                    Explorar
                </span></SobreItem>  , acao:()=>{}, icone: Trending }, 
                    {nome: 'Shopping', link:'/', acao:()=>{}, icone: Shopping },
                    {nome: 'Música', link:'/', acao:()=>{}, icone: Musica},
                    {nome: 'Filmes e programas', link:'/', acao:()=>{}, icone: Filmes },
                    {nome: 'Ao Vivo', link:'/', acao:()=>{}, icone: Live },
                    {nome: 'Jogos', link:'/', acao:()=>{}, icone: Gaming },
                    {nome: 'Notícias', link:'/', acao:()=>{}, icone: News },
                    {nome: 'Esportes', link:'/', acao:()=>{}, icone: Esportes },
                    {nome: 'Aprender', elemento3: <Linha/> ,  linha2: <Linha/> , link:'/', acao:()=>{}, icone: Aprender },
                    {nome: 'Procurar canais', linha: <Linha/> , linha2: <Linha/>, link:'/', acao:()=>{}, icone: Adicionar },
                    {nome: 'YouTube Premium', sobreTitulo: <SobreItem ><span>
                    Mais do YouTube
                </span></SobreItem> , link:'/', acao:()=>{}, icone: YtPremium },
                    {nome: 'YouTube Music', link:'/', acao:()=>{}, icone: YtMusic },
                    {nome: 'YouTube Kids', linha: <Linha/>, link:'/', acao:()=>{}, icone: YtKids },
                    {nome: 'Configurações', link:'/', acao:()=>{}, icone: Config },
                    {nome: 'Histórico de Denúncias', link:'/', acao:()=>{}, icone: Denuncias }, 
                    {nome: 'Ajuda', link:'/', acao:()=>{}, icone: Denuncias },
                    {nome: 'Enviar Feedback', linha: <Linha/>, link:'/', acao:()=>{}, icone: Feedback },
                    {elemento2:<>
                    
                    
                                            <Links> 
                                                <a>Sobre</a> <a>Imprensa</a> <a>Direitos autorais</a> <a>Entre em contato</a> 
                                                <a>Criadores de conteúdo</a> <a>Publicidade</a> <a>Desenvolvedores</a> 
                                           </Links>
                                             <Links> <a>Termos</a> <a>Privacidade</a> <a>Política e segurança</a> 
                                             <a>Como funciona o YouTube</a> <a>Testar os novos recursos</a> 
                                              </Links>  <Copyright>© 2023 Google LLC</Copyright>
                    </> 
                                             
                    } ];
                    
                    if(login===true){
                        itemsOpen.splice(23,0, {nome:'YouTube Studio', elemento2:' ', link:'/studio', acao:()=>{navigate('/channel/Content')}, icone: Studio},);
                        itemsOpen.splice(21,1);
                    } 
                    if(menuExtraContent){
                        itemsOpen.splice(8,0, 
                            {nome:'Videos marcados com gostei', elemento2:' ', link:'/history', acao:()=>{}, icone: Like},
                             {nome:'Playlist1', elemento2:' ', link:'/history', acao:()=>{}, icone: PlayList},
                             {nome:'Playlist2', elemento2:' ', link:'/history', acao:()=>{}, icone: PlayList,});
                    }

                    if(subscribersContent){
                        !menuExtraContent? itemsOpen.splice(11,0, {nome:'Canal3', elemento2:' ', link:'/history', acao:()=>{}, icone: Perfil},):
                        itemsOpen.splice(14,0, {nome:'Canal3', elemento2:' ', link:'/history', acao:()=>{}, icone: Perfil},)
                    }
                    
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResizeWindow= () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        // window.removeEventListener("Resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

        return(

            <Container id='MenuContainer' openMenu={openMenu}>
                <>
                {width>791? itemsClosed.map(
        (valor, i)=><MenuItem openMenu = {openMenu} >
                        <ButtonIcon alt='' src={icones[i]} /> <span>{valor.nome}</span>
                    </MenuItem> 
    ):''}
                    <Container id='menuSobreTela' openMenu={openMenu} style={{}} >
                        {itemsOpen.map( (valor, i)=>
                            <>
                            {valor.elemento2} {valor.sobreTitulo}
                            
                            {valor.elemento && !valor.elemento2 && !login ? valor.elemento :
                                valor.elemento2 && !login || i=== itemsOpen.length-1? '' :
                                <MenuItem openMenu={openMenu} onClick={valor.acao} >
                                <ButtonIcon alt='' src={ valor.elemento2 && !login? '': valor.icone}/>
                                <span >{ valor.elemento2 && !login? '': valor.nome}</span>
                            </MenuItem>
                                
                            }
                            {!login ? valor.elemento3:''}
                            {login ? valor.linha2:''}
                            {valor.linha}
                                {/* {login? valor.login: ''} */}
                        
                            </> )}
                    </Container>
            </>
            </Container>
        )
    }



export default Menu;