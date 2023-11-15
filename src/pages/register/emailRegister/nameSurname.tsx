import { BotaoCriar, CustomInput, LoginContainer, LogoIcon, PageContainer } from "../../login/styles";
import google from '../../../assets/google.png';
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
function NameSurname(){

    const navigate = useNavigate();
    const {name, setName, surname, setSurname, password, setPassword} = useContext(UserContext);


    return (

        <PageContainer>
            <div>
                <LoginContainer>
                    <LogoIcon alt='' src={google}/>
                    <div style={{width:'368px', height:'47.98', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'24px'}}>
                       Criar uma Conta do Google
                    </div>
                    <div style={{marginBottom:'50px'}}>
                        Insira seu nome
                    </div>
                    <div style={{width:'368px',padding:'8px 0 0', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <CustomInput style={{marginBottom:'20px'}} id='name' placeholder='Nome' type='string'
                        onKeyDown={e=>{if(e.key==='Enter'){
                                            
                            name.length===0? alert(`Insira seu nome`):
                            navigate('/sign-up/emailRegister')
                        
                    } }}
                        onChange={(e) => setName(e.target.value+` ${surname}`)} ></CustomInput>
                    <CustomInput id='name' placeholder='Sobreome(Opicional)' type='string' onChange={(e) => setName(name+e.target.value)}
                         onKeyDown={e=>{if(e.key==='Enter'){
                                            
                            name.length===0? alert(`Insira seu nome`):
                            navigate('/sign-up/emailRegister')
                        
                    } }}
                    ></CustomInput>
                    <div style={{width:'368px',display:'flex', justifyContent:'flex-start'}}>
                        <a style={{cursor:'pointer', color:'rgb(26 115 232)', fontWeight:'600'}}>
                           
                        </a>
                        </div>
                    </div>
                    <div style={{margin:'50px 0 30px 0', fontSize:'14px', }} >Não está no seu computador? Use o modo visitante para fazer login com privacidade.
                        <a style={{cursor:'pointer', fontWeight:'600', color:'rgb(26 115 232)'}}>Saiba mais</a>
                    </div>
                    <div style={{width: '400px', display:'flex', margin:'0 0 50px 0', justifyContent:'flex-end'}} >
                        <button tabIndex={0} style={{width:'102.398px', height:'38px', fontSize:'14px', borderRadius:'5px', 
                                        backgroundColor:'rgb(26 115 232)', color:'white', border:'none', cursor:'pointer'}}
                                        onKeyDown={e=>{if(e.key==='Enter'){
                                            
                                            name.length===0? alert(`Insira seu nome`):
                                            navigate('/sign-up/emailRegister')
                                        
                                    } }}
                                        onClick={name.length===0? ()=>alert(`Insira seu nome`): ()=>navigate('/sign-up/emailRegister') }>Próxima
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

export default NameSurname;