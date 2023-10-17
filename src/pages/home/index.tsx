import VideoComponent from "../../components/videoComponent";
import { MenuContext } from "../../contexts/context";
import { Container, HomeContent, MainContainer, TagItem, Tags, VideoContainer } from "./styles";
import {useContext} from "react";
import necro from '../../assets/videoBanners/necroph.png';
import death from '../../assets/videoBanners/chuck.png';
import kreator from '../..//assets/videoBanners/kreator.png';
import davie from '../..//assets/videoBanners/davie.png';
import Header from "../../components/header";
import Menu from "../../components/menu";
import DropMenu from "../../components/DropDownMenu";
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



function Home(){
    const {openMenu} = useContext(MenuContext);
    
   

    return(

        <MainContainer openMenu={openMenu} >
            <Header />
            
        <Container openMenu={openMenu}>
        <Menu/>
            <HomeContent openMenu={openMenu} >
                <DropMenu />
            
            <Tags openMenu={openMenu}>
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