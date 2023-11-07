import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useContext} from 'react';
import HeaderStudio from "../HeaderStudio/headerStudio";
import MenuStudio from "../menuStudio/menuStudio";
import Filter from '../../../assets/StripedFilter.png';
import { MenuContext } from "../../../contexts/context";
import ChannelContentIllustration from '../../../assets/noContentIllustration.png'
import UploadPage from "../UploadPage/index";
import { BetaSpan, ChannelContentContainer, FilterContainer, FilterInput,
     MainStudioContainer, MidContainer, SelectionBar, SendVideos, StudioTableHeader, StudioTabs, StudioTabsContainer, TabsContainer,
      TitleContainer, TitleContent, VideoStatistics } from "./styles";

function VideosUpload(){

    const {openMenu}= useContext(MenuContext);
    const location = useLocation();
    const navigate = useNavigate();
    const {overlay, setOverlay} = useContext(MenuContext);
    // const [paginação, setPaginação] = useState([{ Videos:true }, {AoVivo: false}, {UploadPage: false}]);
    const [isVideoVisible, setIsVideoVisible] = useState(true);
    const [isAoVivoVisible, setIsAoVivoVisible] = useState(false);


    return (
    <>
    
    
    
        <div style={{ opacity:overlay?'0.4': '1', width:'100%',  height:'100vh'}} >
                <HeaderStudio/>
                
                
                
                

                    <div style={{display:"flex", width:'100%' }} >
                    <MenuStudio/>
                        <MainStudioContainer openMenu={openMenu}>
                           <TitleContainer>
                            <TitleContent>

                                <h1 style={{ height:'32px', width:'220.547px' ,padding:'23px 0 0 32px'}} >
                                    Conteúdo do canal
                                </h1>
                            </TitleContent>
                           </TitleContainer>
                            <MidContainer>
                                <TabsContainer>

                                        <StudioTabsContainer>

                                           
                                            <StudioTabs  active={isVideoVisible as boolean} onClick={() =>{setIsVideoVisible(true); setIsAoVivoVisible(false)}} >Vídeos
                                            </StudioTabs>
                                            <StudioTabs active={isAoVivoVisible as boolean} onClick={() =>{setIsVideoVisible(false); setIsAoVivoVisible(true)}}>Ao Vivo
                                               
                                            </StudioTabs>
                                            <StudioTabs active={false} >Playlists</StudioTabs>
                                            <StudioTabs active ={false} >Podcasts</StudioTabs>
                                            <StudioTabs active={false} >Promoções <BetaSpan>Beta</BetaSpan></StudioTabs>
                                           
                                        </StudioTabsContainer>
                                        
                                </TabsContainer>

                                <div>


                                <FilterContainer>
                                    <img style={{width:'24px', height:'24px', padding:'8px', margin:'4px 24px 4px 20px' }} alt="" src={Filter}/>
                                    <FilterInput placeholder="Filtrar" />
                                </FilterContainer>
                                <VideoStatistics>
                                    <div style={{width:  isAoVivoVisible? '24%':  '37%', height:'47px', display:'flex', justifyContent:'flex-start'}} >
                                        <div style={{ display:"flex", alignItems:'center' ,  padding:'0 4px 0 24px'}} >

                                            <input type="checkbox" style={{width:'18px', height:'18px', margin:'3px'}} ></input>
                                        </div>
                                        <StudioTableHeader>{ isVideoVisible? 'Vídeo' :  isAoVivoVisible? 'Transmissões ao vivo' :''}
                                        </StudioTableHeader>
                                    </div>
                                   
                                    {isAoVivoVisible? <> <StudioTableHeader>Tipo</StudioTableHeader> </>: '' }
                                    
                                    <StudioTableHeader>Visibilidade</StudioTableHeader>
                                        <StudioTableHeader>Restrições</StudioTableHeader>
                                        <StudioTableHeader>Data</StudioTableHeader>
                                        <StudioTableHeader style={{paddingLeft:  isAoVivoVisible? '6%':  '4.7%'}} >
                                            Visualizações
                                        </StudioTableHeader>
                                        { isAoVivoVisible? <> <StudioTableHeader>Espectadores ao vivo</StudioTableHeader> </>: '' }
                                        <StudioTableHeader>Comentários</StudioTableHeader>
                                        <StudioTableHeader>Gostei x Não Gostei</StudioTableHeader>
                                </VideoStatistics>
                                <ChannelContentContainer>
                                    <img src={ChannelContentIllustration} alt="" />
                                    <span>Nenhum conteúdo disponível</span>
                                    <SendVideos>
                                        <span onClick={()=> setOverlay(true) } style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'103px', padding:'8px 0', height:"20px" }} >
                                            Enviar Vídeos
                                        </span>
                                        </SendVideos>
                                </ChannelContentContainer>
                                </div>
                            </MidContainer>
                            
                            
                        </MainStudioContainer>

                    </div>
                    
        
    </div>
    {overlay? <><UploadPage  /></> :''}
    </>
    )
}

export default VideosUpload;

