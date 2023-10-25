import VideoComponent from "../../components/videoComponent";
import { MenuContext } from "../../contexts/context";
import { Container, HomeContent, Left, MainContainer, Right, TagItem, TagWrapper, Tags, VideoContainer } from "./styles";
import {useContext, useEffect, useState} from "react";
import necro from '../../assets/videoBanners/necroph.png';
import death from '../../assets/videoBanners/chuck.png';
import kreator from '../..//assets/videoBanners/kreator.png';
import davie from '../..//assets/videoBanners/davie.png';
import LefttArrow from '../../assets/left-arrow.png';
import RightArrow from '../../assets/right-arrow.png';
import Header from "../../components/header";
import Menu from "../../components/menu";
import DropMenu from "../../components/DropDownMenu";
import { StyledComponent } from "styled-components";
import { ButtonIcon } from "../../components/header/styles";
const videos =
    [
        { image: necro,
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: death,
        title:'Death - Bite the pain',
        channel:'Death Metal Channel',
        views:'460 tri',
        tempo:'28 anos'},

        {image: davie,
        title:'Bass',
        channel:'Davie504',
        views:'42069 mi',
        tempo:'69 anos'},

        {image: kreator,
        title:'Kreator - Absolute Misanthropy',
        channel:'Thrash channel',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Bass',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Bass2',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Intankável o bostil',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Motor de movimento perpétuo part1',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},

        {image: '',
        title:'Necrophagist - Culinary Hyperversity',
        channel:'Tech death',
        views:'840 tri',
        tempo:'280 anos'},
]

const buttonRight= document.getElementById('slideRight');
const buttonLeft= document.getElementById('slideLeft');


      function leftScroll(element: string ) {
        const left = document.getElementById (element);
        left!.scrollBy(-200, 0);
      }
      function rightScroll(element:string) {
        const right = document.getElementById(element);
         right!.scrollBy(200, 0);
      }



function Home(){
    const {openMenu} = useContext(MenuContext);
    const [LeftEndScroll, setLeftEndScroll] = useState(0);
   
   
    useEffect(()=>{
        const handleScrollState = ()=> setLeftEndScroll(document.querySelector('#tag')?.scrollLeft as number);
        document.querySelector("#tag")?.addEventListener("scroll", handleScrollState);
       
    });


    return(

        <MainContainer openMenu={openMenu} >
            <Header />
            
        <Container openMenu={openMenu}>
        <Menu/>
        
            <HomeContent  openMenu={openMenu} >
                <DropMenu />
            

                <TagWrapper >
                    { LeftEndScroll>0? <Left title="Anterior" className="left" onClick={()=>leftScroll('tag')}><ButtonIcon alt="" src={LefttArrow} /></Left>: ''}

                    <Tags id="tag" openMenu={openMenu}>
                        
                        
                            <TagItem title="Metal" ><a>Metal</a></TagItem>
                            <TagItem title="Thrash Metal" ><a>Thrash Metal</a></TagItem>
                            <TagItem title=" Death Metal" ><a>Death Metal</a></TagItem>
                            <TagItem><a>Technical Death Metal</a></TagItem>
                            <TagItem><a>Progressive Death Metal</a></TagItem>
                            <TagItem><a>Neoclassical Metal</a></TagItem>
                            <TagItem><a>Power Metal</a></TagItem>
                            <TagItem><a>Doom Metal</a></TagItem>
                            <TagItem><a>Shred</a></TagItem>
                            <TagItem><a>80s</a></TagItem>
                            <TagItem><a>90s</a></TagItem>
                            <TagItem><a>Blues</a></TagItem>
                            <TagItem><a>Fusion</a></TagItem>
                            <TagItem><a>Jazz</a></TagItem>
                            <TagItem><a>Fuzz</a></TagItem>
                            <TagItem><a>Dissonant Death Metal</a></TagItem>
                            <TagItem><a>MeloDeath</a></TagItem>
                            <TagItem><a>Modern Thrash Metal</a></TagItem>
                    </Tags>
                    {LeftEndScroll >= document.querySelector("#tag")!?.scrollWidth - document.querySelector("#tag")!?.clientWidth-40 ? '' :
                            <Right title="Próximo" className="right" onClick={()=>rightScroll('tag')}>
                                <ButtonIcon alt="" src={RightArrow} />
                            </Right> }
                </TagWrapper>
                
            

            <VideoContainer openMenu={openMenu}>
            {videos.map((video) =>(
                    <VideoComponent vid= {video} />
                ))}
            </VideoContainer>
            </HomeContent>
          
        </Container>
        </MainContainer>

    )
}

export default Home;