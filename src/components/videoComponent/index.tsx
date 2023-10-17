import { UserContext } from "../../contexts/userContext";
import {useContext} from "react";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";



function VideoComponent({vid}: any){

    const {user} = useContext(UserContext);
    const imgChannel:string = user.nome; 

    return(
        <Container>
            <ImageBanner src={vid.image || 'https://i.redd.it/4ptb36v17sc81.jpg'}/>
            <TitleContainer>
                <ChannelImage>
                    {/* {imgChannel.substring(0,1).toUpperCase()} */}CC
                </ChannelImage>
                <TextContainer>
                    <Title>{vid.title}</Title>
                    <TextCard style={{cursor:'pointer'}} >{vid.channel}</TextCard>
                    <TextCard>{vid.views} de visualizações - há {vid.tempo}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>

    )
}

export default VideoComponent;