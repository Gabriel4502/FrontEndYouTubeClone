import styled from "styled-components";

export const MenuStudioContainer = styled.div  <{openMenu:boolean}> `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${({ openMenu }) =>openMenu?'255px':'60px' };
    transition: 0.4s;
    height: 93.1vh;
    border-right: solid 1px;

   
`

export const MenuItemsTopSection = styled.div <{openMenu:boolean}> `
     height: ${({openMenu}) =>openMenu? '557px': '703px' };
     
     transition: 0.4s;
`

export const MenuItemsBottomSection = styled.div <{openMenu:boolean}> `
    height: 104px;
    transition: 0.4s;
`

export const MenuStudioUserContent = styled.div <{openMenu:boolean}>  `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height:  ${({openMenu}) =>openMenu?'208px': '60px' } ;
    transition: 0.4s;
    background-color: aliceblue;
`
export const MenuUserId= styled.div <{ openMenu: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-size: ${({openMenu}) =>openMenu? '60px': '20px' } ;
        color: white;
        padding-bottom: 4px;
    }

    width: ${({openMenu}) =>openMenu? '112px':'32px'} ;
    height: ${({openMenu}) =>openMenu? '112px':'32px'} ;
    background-color: orangered;
    border-radius: 50%;
    transition: 0.4s;
`

export const MenuStudioItem = styled.div <{openMenu:boolean}> `
:hover{
    background-color: darkgrey;
}

cursor: pointer;

span{
    font-weight: 400;
    margin-left: 6px;
  }
    display: flex;
    box-sizing: border-box;
    justify-content: ${({openMenu}) =>openMenu? 'none':'center' } ;
    padding: 0 12px;
    height: 48px;
    align-items: center;
    transition: 0.4s;
`