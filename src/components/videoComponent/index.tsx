import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoCoponent(){

    return(
        <Container>
            <ImageBanner src="https://lastfm.freetls.fastly.net/i/u/ar0/07690c94c7d24e408e793f42158fb885.jpg" />
            <TitleContainer>
                <ChannelImage>
                    AA
                </ChannelImage>
                <TextContainer>
                    <Title>Necrophagist - Culinary Hyperversity</Title>
                    <TextCard>Necrophagist</TextCard>
                    <TextCard>840 tri de visualizações - há 280 anos</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>

    )
}

export default VideoCoponent;