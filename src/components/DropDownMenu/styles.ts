import styled from "styled-components"


export const DropDownMenu = styled.div <{active:boolean}> `
    width: 300px;
    z-index: 15;
    border-radius: 10px 10px 10px 10px;
    
    overflow-y: auto;
    ::-webkit-scrollbar-thumb{
    background-color: transparent;
  }


    .ItemsDrop{
        padding-top: 8px;
        display: block;
        max-height: 740px;
        border-radius: 10px 10px 10px 10px;
        background-clip: border-box;
        background-size: auto;
        overflow-y: auto;

        ::-webkit-scrollbar-thumb{
            background-color: transparent;
        }

        :hover{
            ::-webkit-scrollbar-thumb{
                background-color: #8c8c8c;
            }
        }
    }

    flex-direction: column;
    display: ${({active}) => active? 'block': 'none' };
    position: fixed;
    box-sizing: border-box;
    top: 5%;
    left: calc(100vw - 390px);
    background-color: #f1f1f1;
    
`


export const MenuUserContent = styled.div`
        width: 300px;
        height:96px;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        
        .userInfo{
            display: flex;
            flex-direction: column;
            width: 90%;
            z-index: 15;
            a{
                cursor: pointer;
                color: rgb(62, 163, 210);
                font-size:0.95rem;
                font-weight:400;
            }
        }
   
`



export const DropDownItem = styled.li<{}>`
    cursor: pointer;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    font-weight: 400;
    .imagem{
        display: flex;
        height: 40px;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2.8px;
        width: 13%;
    }
    .menuTexto{
        width: 90%;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .icone1{
        width: 24px;
        margin-right: 16px;
    }
    span{
        font-size: 0.9rem;
        
    }
    box-sizing: border-box;
    height:40px;
    padding: 0 0 0 16px;
    background-color: #f1f1f1;

    :hover{
        background-color: darkgray;
    }
    
    
`

export const InicialContainer= styled.div`
    width: 22%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

`

export const Inicial = styled.div`
    width: 40px;
    border-radius: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff4e45;
    color: white;
    cursor: default;
    span{
        text-align: center;
    }

`

export const SetaMenu = styled.img`
    width: 18px;
    height: 16px;
    margin: 0;
`

export const Separador = styled.hr`
    margin: 10px 0 0 0;
        width: 99.4%;
        height: 1px;
        background-color: black;
`
