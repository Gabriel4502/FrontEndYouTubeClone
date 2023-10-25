import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useContext} from 'react';
import HeaderStudio from "../HeaderStudio/headerStudio";
import MenuStudio from "../menuStudio/menuStudio";
import Filter from '../../../assets/StripedFilter.png';
import { MenuContext } from "../../../contexts/context";
import ChannelContentIllustration from '../../../assets/noContentIllustration.png'
import { BetaSpan, ChannelContentContainer, FilterContainer, FilterInput, MainStudioContainer, MidContainer, SendVideos, StudioTableHeader, StudioTabs, StudioTabsContainer, TabsContainer, TitleContainer, TitleContent, VideoStatistics } from "./styles";
function VideosUpload(){

    const {openMenu}= useContext(MenuContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [paginação, setPaginação] = useState([{ Videos:true }, {AoVivo: false}]);


    return (<div style={{ transition:'0.4s', width:'100%',  height:'100vh'}} >
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

                                           
                                            <StudioTabs  className={location.pathname==='/channel/videosUpload'? "active" : ' '} onClick={()=>{navigate('/channel/videosUpload')}} >Vídeos</StudioTabs>
                                            <StudioTabs className={location.pathname==='/channel/live'? "active" : ' '} onClick={()=>{navigate('/channel/live')}} >Ao Vivo</StudioTabs>
                                            <StudioTabs>Playlists</StudioTabs>
                                            <StudioTabs>Podcasts</StudioTabs>
                                            <StudioTabs>Promoções <BetaSpan>Beta</BetaSpan></StudioTabs>
                                           
                                        </StudioTabsContainer>
                                        
                                </TabsContainer>

                                <div>


                                <FilterContainer>
                                    <img style={{width:'24px', height:'24px', padding:'8px', margin:'4px 24px 4px 20px' }} alt="" src={Filter}/>
                                    <FilterInput placeholder="Filtrar" />
                                </FilterContainer>
                                <VideoStatistics>
                                    <div style={{width: location.pathname==='/channel/videosUpload'? '42%':  '25%', height:'47px', display:'flex', justifyContent:'flex-start'}} >
                                        <div style={{ display:"flex", alignItems:'center' ,  padding:'0 4px 0 24px'}} >

                                            <input type="checkbox" style={{width:'18px', height:'18px', margin:'3px'}} ></input>
                                        </div>
                                        <StudioTableHeader>{location.pathname==='/channel/videosUpload'? 'Vídeo' : location.pathname==='/channel/live'? 'Transmissões ao vivo' :''}
                                        </StudioTableHeader>
                                    </div>
                                   
                                    {location.pathname==='/channel/live'? <> <StudioTableHeader>Tipo</StudioTableHeader> </>: '' }
                                    
                                    <StudioTableHeader>Visibilidade</StudioTableHeader>
                                        <StudioTableHeader>Restrições</StudioTableHeader>
                                        <StudioTableHeader>Data</StudioTableHeader>
                                        <StudioTableHeader style={{paddingLeft: location.pathname==='/channel/live'? '6%':  '4.7%'}} >
                                            Visualizações
                                        </StudioTableHeader>
                                        {location.pathname==='/channel/live'? <> <StudioTableHeader>Espectadores ao vivo</StudioTableHeader> </>: '' }
                                        <StudioTableHeader>Comentários</StudioTableHeader>
                                        <StudioTableHeader>Gostei x Não Gostei</StudioTableHeader>
                                </VideoStatistics>
                                <ChannelContentContainer>
                                    <img src={ChannelContentIllustration} alt="" />
                                    <span>Nenhum conteúdo disponível</span>
                                    <SendVideos>
                                        <span style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'103px', padding:'8px 0', height:"20px" }} >
                                            Enviar Vídeos
                                        </span>
                                        </SendVideos>
                                </ChannelContentContainer>
                                </div>
                            </MidContainer>
                            
                            
                        </MainStudioContainer>

                    </div>
                    
        
    </div>)
}

export default VideosUpload;

