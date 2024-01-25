import styled from "styled-components";
import Home from ".";

export const MainContainer = styled.div <{openMenu:boolean}> `
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   

`

export const Container = styled.div<{openMenu:boolean}>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
`

export const HomeContent = styled.div<{openMenu:boolean}>`
    width: calc( 100vw -  ${({openMenu}) =>openMenu?'290px': '130px'});
    @media (max-width: 791px) {
        width: 90%;
    }
    @media (max-width: 409px){
        width: 82%;
    }
    height: max-content;
    display: flex;
    justify-content: center;
    margin-left:20px;
    flex-direction: column;
    flex-wrap: wrap;
    
    
`

export const VideoContainer = styled.div<{openMenu:boolean}>`
    width: 100%;
    min-height: 760px;
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

   
    transition: 0.3s;
    width: 100%;
    height: 66px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    position: sticky;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    top: 55px;
    z-index: 14!important;
    ::-webkit-scrollbar-thumb {
 display: none;
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
 export const Right= styled.button<{}>`
        cursor: pointer;
        width: 40px;
        height: 40px;
        border: none;
        background-color: transparent;
        border-radius: 50%;
        :hover{
            background-color: darkgrey;
            transition: 0.3s;
        }
 `

export const Left= styled.button<{}>`
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        :hover{
            background-color: darkgrey;
            transition: 0.3s;
        }

`

export const TagWrapper = styled.div <{}> `
     width: 100%;
     background-color: white;
    display: flex;
    flex-wrap: nowrap;
    position: sticky;
    background-color: white;
    z-index: 14!important;
    top: 5.8vh;

    @media (max-height: 800px){
         top: 5.8vh;

    }
    @media (min-height: 946px){
         top: 2.8vh;

    }

`