import { UserContext } from "../../contexts/userContext";
import {useContext} from "react";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function calculateTimeDifference(mysqlDate: string): string {

    const mysqlDateObject: Date = new Date(mysqlDate);
  
    const currentDate: Date = new Date();
  
    const timeDifference: number = currentDate.getTime() - mysqlDateObject.getTime();
  
    const segundos: number = Math.floor(timeDifference / 1000);
    const minutos: number = Math.floor(segundos / 60);
    const horas: number = Math.floor(minutos / 60);
    const dias: number = Math.floor(horas / 24);
    const semanas: number = Math.floor(dias / 7);
    const meses: number = Math.floor(dias / 30); 
    const anos: number = Math.floor(dias / 365); 
  
    // Determine the appropriate unit to display
    if (anos >= 1) {
      return anos + (anos === 1 ? ' ano' : ' anos');
    } else if (meses >= 1) {
      return meses + (meses === 1 ? ' mês' : ' meses');
    } else if (semanas >= 1) {
      return semanas + (semanas === 1 ? ' semana' : ' semanas');
    } else if (dias >= 1) {
      return dias + (dias === 1 ? ' dia' : ' dias');
    } else if (horas >= 1) {
      return horas + (horas === 1 ? ' hora' : ' horas');
    } else if (minutos >= 1) {
      return minutos + (minutos === 1 ? ' minuto' : ' minutos');
    } else {
      return segundos + (segundos === 1 ? ' segundo' : ' segundos');
    }
  }
  

export interface Video{

        name: string;
        imageUrl: string;
        title: string;
        description:string;
        views: number;
        tempo: string;
    
}

function VideoComponent(videoProp:Video){

    const {user} = useContext(UserContext);
    // const imgChannel:string = user.nome; 
    const tempoPassado: string = calculateTimeDifference(videoProp.tempo)
    return(
        <Container>
            <ImageBanner src={videoProp.imageUrl || 'https://i.redd.it/4ptb36v17sc81.jpg'}/>
            <TitleContainer>
                <ChannelImage>
                    { videoProp.name.substring(0,1).toUpperCase()}
                </ChannelImage>
                <TextContainer>
                    <Title>{videoProp.title}</Title>
                    <TextCard style={{cursor:'pointer'}} >{videoProp.name}</TextCard>
                    <TextCard>{videoProp.views} de visualizações - há {tempoPassado}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>

    )
}

export default VideoComponent;