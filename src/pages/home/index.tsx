import VideoCoponent from "../../components/videoComponent";
import { MenuContext } from "../../contexts/context";
import { Container, TagItem, Tags, VideoContainer } from "./styles";
import {useContext} from "react"
function Home(){
    const {openMenu} = useContext(MenuContext);

    return(
         
        <Container openMenu={openMenu}>
            <Tags>
                <TagItem><a>Metal</a></TagItem>
                <TagItem><a>Death Metal</a></TagItem>
                <TagItem><a>Technical Death Metal</a></TagItem>
                <TagItem><a>Progressive Death Metal</a></TagItem>
                <TagItem><a>Neoclassical Metal</a></TagItem>
                <TagItem><a>Power Metal</a></TagItem>
                <TagItem><a>Doom Metal</a></TagItem>
                <TagItem><a>Shred</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
                <TagItem><a>Dissonant Death Metal</a></TagItem>
            </Tags>
            <VideoContainer openMenu={openMenu}>
            <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>
                <VideoCoponent/>


            </VideoContainer>
          
        </Container>
    )
}

export default Home;