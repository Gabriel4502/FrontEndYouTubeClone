import {useState, useContext, useEffect} from 'react'
import { UserContext } from '../../contexts/userContext';
import { BotaoCriar, CustomInput, LoginContainer, LogoIcon, PageContainer } from './styles';
import google from '../../assets/google.png'
import { useNavigate } from 'react-router-dom';
import Login2 from './login2';

function Login (){
    const {email, setEmail} = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <PageContainer>
            <div>
                <LoginContainer>
                    <LogoIcon alt='' src={google}/>
                    <div style={{width:'368px', height:'47.98', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'24px'}}>
                        Fazer Login
                    </div>
                    <div style={{marginBottom:'50px'}}>
                        Prosseguir no YouTube
                    </div>
                    <div style={{width:'368px',padding:'8px 0 0', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <CustomInput id='email' placeholder='E-mail ou telefone' type='email' 
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={e=>{if(e.key==='Enter') email? (navigate(`/login2`)) : alert("Insira um e-mail válido")} } 
                        ></CustomInput>
                    <div style={{width:'368px',display:'flex', justifyContent:'flex-start'}}>
                        <a style={{cursor:'pointer', color:'rgb(26 115 232)', fontWeight:'600'}}>
                            Esqueceu seu E-mail?
                        </a>
                        </div>
                    </div>
                    <div style={{margin:'50px 0 30px 0', fontSize:'14px', }} >Não está no seu computador? Use o modo visitante para fazer login com privacidade.<a style={{cursor:'pointer', fontWeight:'600', color:'rgb(26 115 232)'}}>Saiba mais</a></div>
                    <div style={{width: '400px', display:'flex', margin:'0 0 50px 0', justifyContent:'space-between'}} >
                    <BotaoCriar onClick={()=>navigate('/sign-up/nameSurname')}>Criar conta</BotaoCriar>
                    <button style={{width:'102.398px', height:'38px', fontSize:'14px', borderRadius:'5px', backgroundColor:'rgb(26 115 232)', color:'white', border:'none', cursor:'pointer'}}
                     onClick={email? ()=>(navigate(`/login2`)) : ()=>alert("Insira um e-mail válido")}>Avançar</button>
                    </div>
                </LoginContainer>
                <div style={{display:'flex', marginTop:'20px'}} >Language  <div style={{display:'flex',width:'230px', marginLeft:'120px', justifyContent:'space-between'}}> <a>Ajuda</a> <a>Privacidade</a> <a>Termos</a> </div></div>
            </div>
        </PageContainer>
    )
}

export default Login;