import styled from 'styled-components';
export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 25px 0 18px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;


    #VideoMenuItem{
        background-color: #656565;
        width: 206.33px;
        justify-content: flex-start;
        height: 40px;
        cursor: pointer;
        :hover{
            background-color: silver;
        }
    }

    #ativaMenu{
        width: 34px;
        height: 34px;
        background-color: #ff4e45;
        color: white;
    }

    @media (max-width: 1312){
        z-index:-1;
    }

`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

`;

export const ButtonContainer = styled.div  <{margin?: string, active?:boolean}>`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({margin}) => margin? margin : 0 } ;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: #f1f1f1;
    }

`;

export const ButtonIcon = styled.img `
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 85%;
`;

export const SearchInputContainer = styled.div`
    width: 35%;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0px 0px 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div <{srcBar?: boolean}> `

    @media(max-width: 656px){
        border-radius: ${({srcBar}) => srcBar? ' 0 40px 40px 0': '50%' } ;
        width: 35px;
        height: 35px;

    }

    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`

