import {useContext, useEffect, useState} from 'react';
import { 
    Container,
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,} from "./styles";
import Perfil from '../../assets/perfil-de-usuario.png';    
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import SinoIcon from '../../assets/sino.png'
import Pontos from '../../assets/dots.png'
import Back from '../.././assets/backArrow.png'
import video from '../../assets/yourVideos.png'
import Broadcast from '../../assets/broadcast.png'
import {MenuContext } from "../../contexts/context";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/userContext';
import { LoginButton } from '../menu/styles';
import { VideoContext } from '../../contexts/videoContext';

function Header(){
    const {login, user} = useContext(UserContext);
    const { setSearch} = useContext(VideoContext);
    const {dropDown, setDropDown, setMenu, openMenu} = useContext(MenuContext);
    const [srcBar, setSrcBar] = useState(false);
    const [createVid, setCreateVid] = useState(false);
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.innerWidth);
    const [inputText, setInputText] = useState(String);
    
    useEffect(()=>{
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        // window.removeEventListener("Resize", handleResizeWindow);
    });


    useEffect(()=>{
        if(!login) setCreateVid(false)
    },[login]);
    // if (location.pathname === "/login" || location.pathname==='/sign-up/emailRegister' || location.pathname === "/sign-up/nameSurname" || location.pathname === "/login2"){
    //     return <></>
    // }

    

    return (
        <>
           

            {srcBar ?
                    <>
                    {width>=656 ?setSrcBar(false):'' }
                    
                    
                        <Container id='srcHeader' >
                            <ButtonContainer onClick={()=>setSrcBar(!srcBar)} >
                                <ButtonIcon  alt='' src={Back} >
        
                                </ButtonIcon>
                            </ButtonContainer>
                            <SearchContainer  >
        
                                <SearchInputContainer>
                                    <SearchInput placeholder="Pesquisar" onKeyDown={e=>{if(e.key==='enter') setInputText(inputText)}}  />
                                </SearchInputContainer>
        
                                <SearchButton srcBar={srcBar} >
                                    <ButtonIcon alt="" src={SearchIcon} />
                                </SearchButton>
        
                            </SearchContainer>
                            
                        </Container> 
                    </>
                        :
        
                        <Container>
                            
                            <LogoContainer  id='ytMenu' >
                                <ButtonContainer margin='0 10px 0 0' onClick={() => {setMenu(!openMenu)} } >
                                    <ButtonIcon  alt ="" src={HamburguerIcon} />
                                </ButtonContainer>
                                <img style={{cursor: 'pointer', width: '100px'}} 
                                    alt ='Página inicial do YouTube'
                                    title='Página inicial do YouTUbe'
                                    src={Logo}
                                    onClick={()=>navigate('/')}

                                />
                            </LogoContainer>
        
                    
                        {width>656? 
                            <>
                            <SearchContainer>
        
        
                            <SearchInputContainer>
                                <SearchInput placeholder="Pesquisar" onChange={e=>{setInputText(e.target.value)}} onKeyDown={e=>{if(e.key==='Enter') setSearch(inputText)}}  />
                            </SearchInputContainer>
        
                            <SearchButton onClick={()=>setSearch(inputText)} >
                                <ButtonIcon title='Pesquisar' alt="" src={SearchIcon} />
                            </SearchButton>
        
                            <ButtonContainer margin='0 0 0 10px' >
                                <ButtonIcon title='Pesquisar com sua voz' id='mic'  alt="" src={MicIcon} />
                            </ButtonContainer>
                            </SearchContainer>
                            </>:
                            <div style={{width:'100%', display:'flex', justifyContent:'flex-end'}} > 
                                <SearchButton onClick={()=>setSrcBar(!srcBar)} >
                                    <ButtonIcon   id='search' alt="" src={SearchIcon} />
                                </SearchButton>
                            </div>
                        }
                        
                    
        
                    <HeaderButton>
                    
                        {login?
                            <>
                            <div style={{ width:'100%', display:'flex', justifyContent:'flex-end',}} >
                                <ButtonContainer onClick={()=>setCreateVid(!createVid)} >
                                    <ButtonIcon title='Criar' alt="Criar"  src={VideoIcon}  />
                                </ButtonContainer>
                                {width>428? <>
                                    <ButtonContainer>
                                    <ButtonIcon title='Notificações' id='sino' alt="" src= {SinoIcon} />
                                </ButtonContainer>
                                </>:"" }
                                
        
                                <ButtonContainer id="ativaMenu" onClick={()=>{setDropDown(!dropDown)}} >
                                    {(user?.nome?.charAt( 0 ).toUpperCase()) || "?"}
                                </ButtonContainer>
                            </div>
                            
                            </> :
        
                        <div style={{display:'flex', justifyContent:'flex-end'}} >
        
        
                                            <HeaderButton>
        
                                            <ButtonContainer margin='13px 0 0 10px' ><ButtonIcon alt="" src={Pontos}/></ButtonContainer>
                                            <LoginButton onClick={()=>navigate('/login')} >
                                                <ButtonIcon alt='' src= {Perfil} />
                                                <span>Fazer Login</span>    
                                        </LoginButton>
                                            </HeaderButton>
                        </div>
                            
                        }
                            
                    </HeaderButton>
        
                </Container>
                }
                     {createVid?  
                            <Container id='createVideoMenu' 
                            style={{position:'fixed', width:'206px', padding:'8px 0', display:'block',borderRadius:' 10px 10px 10px 10px', top:'50px' ,
                             left:'calc(100vw - 320px)', zIndex:'15', height:'96px', backgroundColor:'#656565'}}>
                                <Container id='VideoMenuItem' onClick={()=>navigate('/channel/Content')} >
                                    <ButtonIcon style={{marginRight:'10px'}} alt='' src={video} /> Enviar Video
                                </Container>
                                <Container id='VideoMenuItem' onClick={()=>navigate('/channel/Broadcast')} >
                                    <ButtonIcon style={{marginRight:'10px'}} alt='' src={Broadcast} />
                                    Transmitir ao vivo
                                </Container>
                            </Container>


                         :
            ''}
            
        </>
    )
}

export default Header;