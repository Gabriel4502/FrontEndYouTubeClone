import styled from "styled-components";

export const Container = styled.div<{openMenu:boolean}>`
    width: 100%;
    max-width: 1600px;
    display: grid;
`

export const VideoContainer = styled.div<{openMenu:boolean}>`
    width: 100%;
    max-width: 1600px;
    padding:25px 50px;
    cursor: pointer;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(5, 1fr)': 'repeat(4, 1fr)' } ;
    column-gap: 20px;
    row-gap: 50px;
`

export const Tags = styled.div`
width: 100%;
height: 56px;
background-color: white;
display: flex;
align-items: center;
flex-direction: row;
overflow-x: auto;
white-space: nowrap;
overflow: auto;
position: sticky;
top: 55px;
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
    background-color: #f2f2f2;
 }    

`
