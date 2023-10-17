import styled from 'styled-components'



export const PageContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`
export const CustomInput = styled.input`
    width:336px;
    height:28px;
    padding:13px 15px;
    margin: 1px 1px 1px 0;
    border:1px solid #d3d3d3;
    border-radius:5px;
`

export const LoginContainer = styled.div`
    width: auto;
    height: auto;
    min-height: 500px;
    max-height: 500px;
    min-width: 448px;
    max-width: 448px;
    border: 1px solid #d3d3d3;
    border-radius: 10px 10px 10px 10px ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 48px 40px 36px;
`

export const LogoIcon = styled.img`
    width: 100px;

`
export const BotaoCriar = styled.button`
width:90.36; 
height:38px;
position: relative;
font-weight: 600;
top: 15px;
border-radius: 5px;
font-size:14px;
color:rgb(26 115 232);
background-color:white;
border:none;
cursor:pointer;

:hover{
    background-color: #d3d3d3;
}

`