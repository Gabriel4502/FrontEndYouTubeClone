import { BotaoCriar, CustomInput, LoginContainer, LogoIcon, PageContainer } from "../../login/styles";
import google from '../../../assets/google.png';
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import name from "./nameSurname";
function EmailRegister(){
    const navigate = useNavigate();
    const {register, name, password, setPassword} = useContext(UserContext);
    const [email,setEmail] = useState('');

    return (

        <PageContainer>
            <div>
                <LoginContainer>
                    <LogoIcon alt='' src={google}/>
                    <div style={{width:'368px', height:'47.98', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'24px'}}>
                       Usar seu e-mail atual
                    </div>
                    <div style={{marginBottom:'50px'}}>
                     Digite o endereço de e-mail que você quer usar na sua Conta do Google
                    </div>
                    <div style={{width:'368px',padding:'8px 0 0', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <CustomInput style={{marginBottom:'20px'}} id='e-mail' placeholder='Endereço de e-mail' type='e-mail' onChange={(e) => setEmail(e.target.value)} ></CustomInput>
                    <CustomInput style={{marginBottom:'20px'}} id='password' placeholder='Digite sua senha' type='password' onChange={(e) => setPassword(e.target.value)} ></CustomInput>
                    
                    <div style={{width:'368px',display:'flex', justifyContent:'flex-start'}}>
                        <a style={{cursor:'pointer', color:'rgb(26 115 232)', fontWeight:'600'}}>
                           Criar um endereço do Gmail
                        </a>
                        </div>
                    </div>
                    <div style={{width: '400px', display:'flex', margin:'0 0 50px 0', justifyContent:'flex-end'}} >
                        <button style={{width:'102.398px', height:'38px', fontSize:'14px', borderRadius:'5px', 
                                        backgroundColor:'rgb(26 115 232)', color:'white', border:'none', cursor:'pointer'}}
                                        onClick={email.length===0? ()=>alert(`Insira seu e-mail`):
                                        ()=>{
                                            register(name, email, password)
                                            navigate('/login')
                                        } }>Próxima
                        </button>
                    </div>
                </LoginContainer>
                <div style={{display:'flex', marginTop:'20px'}} >Language  
                    <div style={{display:'flex',width:'230px', marginLeft:'120px', justifyContent:'space-between'}}>
                        <a>Ajuda</a> <a>Privacidade</a> <a>Termos</a> 
                    </div>
                </div>
            </div>
        </PageContainer>
    )

}

export default EmailRegister;