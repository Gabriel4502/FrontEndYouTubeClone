import styled from 'styled-components';
import { MenuContext } from '../../contexts/context';
import { useContext } from 'react';

export const Container = styled.div <{onClick?: (e: Event) => void; openMenu:boolean;}> `
width: ${({openMenu}) => openMenu? '250px': '100px' } ;

  @media (max-width:791px){
    display: ${({openMenu}) => openMenu? 'flex' : 'none' } ;
    width: 1px;
  }
  overflow-x: hidden;
  

height: calc(100vh - 55px);
box-sizing: border-box;
padding: ${({openMenu}) => openMenu? ' 10px 10px 10px 10px': ' 10px 25px 10px 0px'  } ;
display: flex;
position: sticky;
top: 55px;
align-items: center;
flex-direction: column;
overflow-y: auto;
z-index: 15;

  ::-webkit-scrollbar-thumb{
    background-color: transparent;
  }

:hover{
  ::-webkit-scrollbar-thumb{
    background-color: #8c8c8c;
  }
 
}

#menuSobreTela{
  display: ${({openMenu}) => openMenu? 'flex': 'none' };
  position: fixed;
  left: 0px;
  z-index: 15;
  background-color: white;
  width: 250px;


}

`
export const MenuItem = styled.div <{openMenu: boolean}>`
  width: 98%;
  min-height: ${({openMenu}) => openMenu? '40px' :'70px'};
  border-radius: 10px;
  cursor: pointer;
  padding: 0px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({openMenu}) => openMenu? 'row': 'column'};
  align-items: center;
  justify-content: ${({openMenu}) => openMenu? 'none': 'center'};

  span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: ${({openMenu}) => openMenu? '600': '400' }; 
    margin-left: ${({openMenu}) => openMenu? '10px': 'none'};
    font-size: ${({openMenu}) => openMenu? '14px': '12px'};
 }

 :hover{
    background-color: #f2f2f2;
 }    

`
export const ButtonIcon = styled.img`
    width: 25px;
`;

export const Divisoria = styled.div`
    width: 100%;
    border: 0;
`;

export const Linha = styled.hr`
        margin: 10px 0 0 0;
        width: 100%;
        height: 1px;
        background-color: black;
`
export const Links = styled.div`
  width: 100%;
  font-size: 13px;
  display: block;
  padding: 16px 24px 0px;
  box-sizing: border-box;
 a{
  margin: 0 8px 0 0;
  display: inline-block;
  cursor: pointer;
 }
`

export const Copyright = styled.div`
width: 100%;
padding: 16px 24px;
box-sizing: border-box;
color: #717171;
font-size: 13px;
`
export const LoginButton = styled.div`
  border-radius: 40px 40px 40px 40px;
  height: 35px;
  margin: 15px 0 15px 15px ;
  width: 80%;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;

  justify-content: center;
  align-items: center;
  cursor: pointer;

  span{
    font-weight: bold;
    color: rgb(62 163 210);
    margin-left: 6px;
  }

  :hover{
        background-color: #d3d3d3 ;
    }

`

export const SobreItem = styled.div`

    width:90%;
    margin:10px 0 4px 0;
    display:flex;
    justify-content:flex-start;

`