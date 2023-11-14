import { useContext, useEffect, useState } from "react";
import { ButtonContainer, ButtonIcon, HeaderButton, LogoContainer, SearchContainer } from "../../../components/header/styles";
import { UserContext } from "../../../contexts/userContext";
import { MenuContext } from "../../../contexts/context";
import { SearchInputContainerStudio, SearchInputStudio } from "./styles";
import VideoIcon from '../../../assets/StudioYT.png';
import SinoIcon from '../../../assets/sino.png';
import HamburguerIcon from '../../../assets/hamburger.png'
import Logo from '../../../assets/YouTubeStudioLogo.png'
import SearchIcon from '../../../assets/search.png'
import { Container } from "../../home/styles";


function HeaderStudio() {
    const {login, user} = useContext(UserContext);
    const {dropDown, setDropDown, setMenu, openMenu} = useContext(MenuContext);

    return (

                        
        <Container style={{flexWrap:'nowrap', width:'100%', height:'64px', alignItems:'center', padding:'12px 24px 12px 16px', boxSizing:'border-box'}} openMenu={openMenu} >
                            
        <LogoContainer id='ytMenu' >
            <ButtonContainer margin='0 10px 0 0' onClick={() => {setMenu(!openMenu)} } >
                <ButtonIcon  alt ="" src={HamburguerIcon} />
            </ButtonContainer>
            <img style={{cursor: 'pointer', width: '100px'}} 
            alt =''
            title="Painel do YouTube Studio"
            src={Logo}
            />
        </LogoContainer>


        <SearchContainer>


        <SearchInputContainerStudio style={{borderRadius:"5px"}}>
            <ButtonIcon style={{opacity:'0.6' ,color:'#8c8c8c',width:'18px', height:'18px', marginRight:'7px'}} src={SearchIcon} />
           <SearchInputStudio placeholder="Pesquise no seu canal" ></SearchInputStudio>
        </SearchInputContainerStudio>

        </SearchContainer>

        <HeaderButton>
            <div style={{ width:'100%', display:'flex', justifyContent:'flex-end',}} >
                <ButtonContainer >
                    <ButtonIcon title='Criar' alt="Criar"  src={VideoIcon}  />
                </ButtonContainer>
               
                    <ButtonContainer>
                    <ButtonIcon title='Notificações' id='sino' alt="" src= {SinoIcon} />
                </ButtonContainer>
                

                <ButtonContainer style={{backgroundColor:'orangered', color:'white' }}  title="Conta" id="ativaMenu" onClick={()=>{setDropDown(!dropDown)}} >
                    {(user?.nome?.charAt( 0 ).toUpperCase()) || "?"}
                </ButtonContainer>
            </div>
        
        </HeaderButton>



    



</Container>




                            
)
}

export default HeaderStudio;