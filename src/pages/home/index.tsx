import VideoComponent from "../../components/videoComponent";
import { MenuContext } from "../../contexts/context";
import { Container, HomeContent, Left, MainContainer, Right, TagItem, TagWrapper, Tags, VideoContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { VideoContext } from "../../contexts/videoContext";


interface Videos {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    data_Upload: string;
    views: number;
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');


function leftScroll(element: string) {
    const left = document.getElementById(element);
    left!.scrollBy(-200, 0);
}
function rightScroll(element: string) {
    const right = document.getElementById(element);
    right!.scrollBy(200, 0);
}



function Home() {
    const { openMenu, dropDown, setDropDown } = useContext(MenuContext);
    const { AllVideos, videos, Search, SearchVideo } = useContext(VideoContext);
    const [LeftEndScroll, setLeftEndScroll] = useState(0);
    const [videoArray, setVideoArray] = useState<Videos[]>([]);
    // const [videos, setVideos] = useState<Videos[]>([]);
    // const url = `https//youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`
    function carregar() {

        return () => setVideoArray(videos);
    }
    useEffect(() => {
        const handleScrollState = () => setLeftEndScroll(document.querySelector('#tag')?.scrollLeft as number);
        document.querySelector("#tag")?.addEventListener("scroll", handleScrollState);

        carregar();
        { Search.length === 0 ? AllVideos() : SearchVideo() }

    }, [Search]);

    useEffect(() => {
        setDropDown(false);
    }, [])



    return (

        <MainContainer openMenu={openMenu} >
            <Header />

            <Container openMenu={openMenu}>
                <Menu />

                <HomeContent openMenu={openMenu} >
                    {dropDown ? <DropMenu /> : undefined}


                    <TagWrapper >
                        {LeftEndScroll > 0 ? <Left title="Anterior" className="left" onClick={() => leftScroll('tag')}><ButtonIcon alt="" src={LefttArrow} /></Left> : ''}

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
                        {LeftEndScroll >= document.querySelector("#tag")!?.scrollWidth - document.querySelector("#tag")!?.clientWidth - 40 ? '' :
                            <Right title="Próximo" className="right" onClick={() => rightScroll('tag')}>
                                <ButtonIcon alt="" src={RightArrow} />
                            </Right>}
                    </TagWrapper>



                    <VideoContainer openMenu={openMenu}>

                        {videos.map((video: Videos) => (
                            <VideoComponent
                                name={video.name || ''}
                                title={video.title || ''}
                                description={video.description || ''}
                                imageUrl={video.imageUrl || ''}
                                tempo={video.data_Upload || ''}
                                views={video.views || 0}
                            />
                        ))}
                    </VideoContainer>
                </HomeContent>

            </Container>
        </MainContainer>

    )
}

export default Home;