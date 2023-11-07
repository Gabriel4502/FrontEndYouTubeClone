import { UserContext } from "../../contexts/userContext";
import {useContext} from "react";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface Video{

        name: string;
        imageUrl: string;
        title: string;
        description:string;
        views: number;
        tempo: string;
    
}

function VideoComponent(video: Video){

    const {user} = useContext(UserContext);
    const imgChannel:string = user.nome; 

    return(
        <Container>
            <ImageBanner src={video.imageUrl || 'https://i.redd.it/4ptb36v17sc81.jpg'}/>
            <TitleContainer>
                <ChannelImage>
                    { video.name.substring(0,1).toUpperCase()}
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard style={{cursor:'pointer'}} >{video.name}</TextCard>
                    <TextCard>{video.views} de visualizações - há {video.tempo}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>

    )
}

export default VideoComponent;