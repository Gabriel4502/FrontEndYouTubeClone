import styled from "styled-components";
import Home from ".";

export const MainContainer = styled.div <{openMenu:boolean}> `
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media(max-width:1312px){
        

    }    

`

export const Container = styled.div<{openMenu:boolean}>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
`
export const HomeContent = styled.div<{openMenu:boolean}>`
    width: ${({openMenu}) => openMenu? '79%': '85%' } ;
    display: flex;
    justify-content: center;
    margin-left:20px;
    flex-wrap: wrap;
    @media(max-width:1097px){
        width:79%;

    }    
    
`

export const VideoContainer = styled.div<{openMenu:boolean}>`
    max-width: 100%;
    max-height: 1818px;
    min-width:99%;
    padding:20px 0px;
    box-sizing:border-box;
    justify-content:center;
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(4, 1fr)': 'repeat(3, 1fr)' } ;
    column-gap: 20px;
    row-gap: 50px;

    @media(max-width:1097px){
        grid-template-columns: repeat(2,1fr);

    }

    @media(max-width:699px){
        grid-template-columns: repeat(1,1fr);

    }    
`

export const Tags = styled.div <{openMenu:boolean}>`

    @media(max-width:1312px){
        

    }    

    width: 100%;
    height: 56px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    position: sticky;
    overflow-x: scroll;
    white-space: nowrap;
    top: 55px;
    z-index: 14!important;
    ::-webkit-overflow-scrolling{
        
    }
`

export const TagItem = styled.div `
background-color: #717171;
height: 30px;
margin: 0 0 0 10px;
border-radius: 10px;
display: flex;
align-items: center;
cursor: pointer;
padding: 2px 8px;
margin-bottom: 5px;
box-sizing: border-box;
display: flex;
align-items: center;

 a{
    text-align: left;
   font-weight: 400;
   margin: 5px 5px;
   font-size: 14px;
 }

 :hover{
    background-color: #f1f1f1;
    transition: 0.15s linear;
 }    

`
