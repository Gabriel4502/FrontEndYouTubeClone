import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);
interface Usuario{
    nome: string;
    email: string;
    id: string;
}


export const UserStorage = ({children}: any) =>{
    const [login, setLogin] = useState(false);
    const [ver, setVer] = useState(false);
    const [email, setEmail] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [password,setPassword] = useState('');
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getUser = (token: string) =>{
        api.get('/user/get-user', {headers:{Authorization: token}} ).then(({data}) =>{
            setUser(data.user as Usuario)
            setLogin(true); 
            console.log(data.user);
        }).catch((error)=>{
            console.log('Usuário não autenticado', error)
        })
    }

    useEffect(()=>{
        getUser(token);
    },[token]);


    const logOut = () =>{
        setLogin(false);
        localStorage.removeItem('token');
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({data}) =>{
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            setVer(false);
        }).catch((error) =>{
            console.log('Não foi possível fazer o login', error);
            setLogin(false);
            setVer(true);
        })
    }

    const register =(name: string, email: string, password: string)=>{

        // api.post('/user/get-email',{email}).catch((error)=>{
        //     if (error == false){
        //         return alert('Este email já foi cadastrado.')
        //     }else{

                
        //     }
        // })

        api.post('/user/sign-up',{ name,email, password}).then((response)=>{
            // if (error=== 1062){

            //     alert("Email já cadastrado")
            // } else
             if(response.status == 200){
                alert("Conta criada com sucesso, você já pode efetuar o seu login!")
            }else
            alert("Não foi possível criar sua conta")
        })
    }
    
    return (

        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            email,
            setEmail,
            ver,
            setVer,
            token,
            setLogin,
            register,
            name,
            setName,
            password,
            setPassword,
            surname,
            setSurname,
        }}>
            {children}
        </UserContext.Provider>
    )
}