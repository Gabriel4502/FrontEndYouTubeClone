import { 
    Container,
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton } from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import SinoIcon from '../../assets/sino.png'
import {useMenu } from "../../contexts/context";

function Header(){
    let {openMenu, mudaMenu} = useMenu();

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer margin='0 10px 0 0' onClick={() => mudaMenu(!openMenu) } >
                    <ButtonIcon  alt ="" src={HamburguerIcon} />
                </ButtonContainer>
                <img style={{cursor: 'pointer', width: '100px'}} 
                alt ='Página inicial do YouTube'
                src={Logo}
                />
            </LogoContainer>

        <SearchContainer>
            <SearchInputContainer>
                <SearchInput placeholder="Pesquisar" />
            </SearchInputContainer>
            <SearchButton>
                <ButtonIcon alt="" src={SearchIcon} />
            </SearchButton>
            <ButtonContainer margin='0 0 0 10px' >
                <ButtonIcon  alt="" src={MicIcon} />
            </ButtonContainer>
        </SearchContainer>

        <HeaderButton>
            <ButtonContainer>
                <ButtonIcon alt=""  src={VideoIcon} />
            </ButtonContainer>
            <ButtonContainer>
                <ButtonIcon alt="" src= {SinoIcon} />
            </ButtonContainer>
            <ButtonContainer>
                P
            </ButtonContainer>
        </HeaderButton>

        </Container>
    )
}

export default Header;