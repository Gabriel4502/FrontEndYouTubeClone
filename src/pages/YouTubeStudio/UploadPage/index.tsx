import { BottomContainer, FileInput, FormContainer, HeaderIcons, HeaderIconsContainer, HeaderTitle, MainContainer, StudioHeaderContainer, UploadArrow, UploadArrowContainer, UploadButton } from "./style";
import Feedback from '../../../assets/Greyfeedback.png';
import Close from '../../../assets/cancel.png';
import Arrow from '../../../assets/uploadArrow.png'
import { useContext, useState } from "react";
import { MenuContext } from "../../../contexts/context";
import { VideoContext } from "../../../contexts/videoContext";
import { UserContext } from "../../../contexts/userContext";



function UploadPage(){

        const {overlay, setOverlay} = useContext(MenuContext);
        const {user} = useContext(UserContext);
        const {AdicionarVideo} = useContext(VideoContext);
        const [title, setTitle]= useState(String);
        const [description, setDescription]= useState(String);
        const [thumb, setThumb]= useState(String);

        const API_KEY = 'AIzaSyCBwUkDtEgLXfhT8OZF_kLDkZzhZs-s_H8';

    return (<MainContainer>
                <StudioHeaderContainer>
                    <HeaderTitle>Enviar Vídeos</HeaderTitle>
                    <HeaderIconsContainer>
                            <HeaderIcons src={Feedback} />
                            <HeaderIcons onClick={()=>{ setOverlay(false) }} src={Close} />
                    </HeaderIconsContainer>
                </StudioHeaderContainer>
                <BottomContainer>
                        
                        <FormContainer >
                                {/* method="POST" dir="../../../videos" encType="multipart/form-data" action="" */}
                        <label>

                        <UploadArrowContainer >
                                <UploadArrow src={Arrow} />
                        </UploadArrowContainer>
                        </label>
                        <label style={{color:'white',}} >Arraste e solte os arquivos de vídeo para fazer o envio</label>
                        <label style={{color:"lightgrey",  fontSize:'13px', lineHeight:'20px'}} >Seus vídeos ficarão privados até que você os publique.</label>
                        <p>
                                <FileInput placeholder="Insira um título" name="titulo" type="text" onChange={e=>{setTitle(e.target.value)}} />
                                <FileInput placeholder="Insira a descrição do vídeo" name="description" type="text" onChange={e=>{setDescription(e.target.value)}} />
                                <FileInput placeholder="Insira a URL da thumbnail" name="thumbnail" type="text" onChange={e=>{setThumb(e.target.value)}} />
                               
                        </p>
                        <UploadButton name="upload" type="submit" onClick={()=>AdicionarVideo(title, description, user?.id,thumb )} >Enviar video</UploadButton>
                        
                        </FormContainer>
                </BottomContainer>
                
        </MainContainer>)
}

export default UploadPage;
