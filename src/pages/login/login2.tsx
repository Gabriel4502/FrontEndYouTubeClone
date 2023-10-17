import {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { BotaoCriar, CustomInput, LoginContainer, LogoIcon, PageContainer } from "./styles";
import { UserContext } from '../../contexts/userContext';
import google from '../../assets/google.png'


function Login2 (){
    const navigate = useNavigate();
    const {handleLogin, login, Error, ver, setVer, setLogin, token} = useContext(UserContext);
    const {email} = useContext(UserContext);
    const [senha, setSenha] = useState('');
    const [verifica, setVerifica] = useState(false);
   

    useEffect(()=>{
        setVer(false)
        if(login){
            navigate('/');
        }
        if(ver){
            alert("Credenciais incorretas")
            navigate('/login')
        }
    },[login, ver])

    // function clickEvent(email: string, senha: string){
    //     handleLogin(email, senha)
    //     if(ver){
    //         setVerifica(true);
    //     } else{
    //         setVerifica(false);
    //     }
    //     if(verifica){
    //         navigate('/');
    //     } else{
    //         navigate('/login');
    //     }

    //  }

    return(
        
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
                    <CustomInput id='password' placeholder='Digite sua senha' type='password' onChange={(e) => setSenha(e.target.value)} ></CustomInput>
                    <div style={{width:'368px',display:'flex', justifyContent:'flex-start'}}>
                        <a style={{cursor:'pointer', color:'rgb(26 115 232)', fontWeight:'600'}}>
                            Mostrar senha
                        </a>
                        </div>
                    </div>
                    <div style={{width: '400px', display:'flex', margin:'80px 0 50px 0', justifyContent:'space-between'}} >
                    <BotaoCriar>Esqueceu a senha?</BotaoCriar>
                    <button style={{width:'102.398px', height:'38px', fontSize:'14px',
                                    borderRadius:'5px', backgroundColor:'rgb(26 115 232)', color:'white',
                                    border:'none', cursor:'pointer'}} onClick={()=> {handleLogin(email, senha) }}>Avançar</button>
                    </div>
                </LoginContainer>
                <div style={{display:'flex', marginTop:'20px'}} >Language<div style={{display:'flex',width:'230px', marginLeft:'120px', justifyContent:'space-between'}}>
                    <a>Ajuda</a> <a>Privacidade</a> <a>Termos</a> </div>
                </div>
            </div>
        </PageContainer>
    )
}


export default Login2;