import styled from 'styled-components';

export const Container = styled.div <{onClick?: (e: Event) => void; openMenu:boolean }> `
width: ${({openMenu}) => openMenu? '250px': '100px' } ;
height: 100vh;
box-sizing: border-box;
padding: 65px 10px 10px 10px;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
`
export const MenuItem = styled.div <{openMenu: boolean}>`
width: 100%;
min-height: ${({openMenu}) => openMenu? '40px' :'70px'};
border-radius: 10px;
cursor: pointer;
padding: 2px 17px;
box-sizing: border-box;
display: flex;
flex-direction: ${({openMenu}) => openMenu? 'row': 'column' };
align-items: center;
justify-content: ${({openMenu}) => openMenu? 'none': 'center' } ;

 span{
   font-weight: ${({openMenu}) => openMenu? '600': '400' };
   margin-left: ${({openMenu}) => openMenu? '10px': 'none' };
   font-size: ${({openMenu}) => openMenu? '14px': '12px' };
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
  color: #3ea6ff;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span{
    font-weight: bold;
    margin-left: 6px;
  }

  :hover{
        background-color: #d3d3d3 ;
    }

`

