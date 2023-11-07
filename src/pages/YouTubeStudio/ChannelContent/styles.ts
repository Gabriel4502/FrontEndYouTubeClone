import styled from "styled-components";

export const ButtonIconStudio = styled.img `
    width:25px;
`;

export const MainStudioContainer = styled.div <{openMenu:boolean}> `
    display: flex;
    width: ${({openMenu}) =>openMenu? '88%': '100%' } ;
    height: 93.1vh;
    flex-direction: column;
    flex-wrap:wrap;
    transition: 0.4s;
    

`
export const TitleContainer = styled.div `
  width: 100%;
  height: 55px;
  display: flex;
  align-items: start;
`

export const TitleContent = styled.div `
  display: flex;
  width: auto;
  height: 60px;
  justify-content: end;
  
  h1{
    margin: 0;
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    flex-shrink: 1;
  }
`

export const MidContainer =styled.div `
  height: 56vh;
  width: 100%;
`

export const TabsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 63px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 24px 0 24px;
  border-bottom: solid 1px ;
  transition: opacity 0.1s;
  -moz-transition: ease-in-out;
`

export const StudioTabsContainer = styled.ul  `
display:flex;
list-style: none;
height: 48px;
align-items: flex-end;
padding-left: 10px;
margin: 0;
transition: opacity 0.1s;
-moz-transition: ease-in-out;
width: 525px;

justify-content:space-between;
`
export const StudioTabs = styled.li <{active: boolean}> `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  box-sizing: border-box;
  height: 48px;
  font-size: 15px;
  min-width: 48px;
  line-height: 18px;
  white-space: nowrap;
  font-weight: 600;
    transition: 150ms;
    transition-timing-function: cubic-bezier(0, 1.18, 0.58, 1);
    transition-delay: 0s;
    transition-property: all;
  color: ${({active}) =>active? '#3ea6ff': 'black'} ;
  border-bottom: ${({active}) =>active? ' solid 3px #3ea6ff': ''} ;
`

export const SelectionBar = styled.div `


    display: block;
    background-color: #3ea6ff;
    width: 48px;
    height: 3px;
    margin-top: 10px ;
    border-radius: 1px;
    background-color: #3ea6ff;
    color: #3ea6ff;
    transition: 0.2s;


`

export const BetaSpan = styled.span`
  text-align:center;
  border-radius:3px;
  align-items:center;
  background-color:grey;
  padding:2px 5px;
  margin-left:3px ;
`



export const FilterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  border-bottom: solid 1px ;
`

export const FilterInput = styled.input`
  width: 100%;
  height: 32px;
  margin: 4;
  padding: 0;
  border: 0;
  outline: none;
  :hover{}

`

export const VideoStatistics = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: solid 1px ;
  display: flex;

`
export const ChannelContentContainer = styled.div`
  width: 100%;
  margin: 50px 0px;
  height: 272px;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

`
export const SendVideos = styled.button`
  background-color: #3ea6ff;
  margin-top: 5px;
  width: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  cursor: pointer;
  border: 0;
  border-radius: 2px;
  font-weight: 600;
`
export const StudioTableHeader = styled.a`
display:flex;
align-items:center;
padding-left:4.4%;
font-size: 13px;
white-space: nowrap;
`