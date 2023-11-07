import styled from "styled-components";

export const MainContainer = styled.div`
  width: 960px;
  height: 90vh;
  background-color: #373636;
  position: fixed;
  left: 21.25vw;
  top: 45px;
  border-radius: 5px;

`

export const StudioHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 16px 0 24px;
    border-radius: 8px 8px 0 0;
    margin: 0;
    background-color: #373636;
    height: 64px;
    border-bottom: solid 0.1px white;
`

export const HeaderTitle = styled.h3`
    font-size: 20px;
    margin: 0 16px 0 0;
    width: fit-content;
    line-height: 28px;
    font-weight: 500;
    color: white;
`

export const HeaderIconsContainer = styled.div`
    color: #AAAAAA;
    height: 40px;
    padding: 8px;
    box-sizing: border-box;
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderIcons = styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: #AAAAAA;
`

export const BottomContainer = styled.div`
    width: 960px;
    height: 747px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const FormContainer = styled.form`
    width: 705px;
    height: 731px;
    padding: 16px 50px 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const FileInput = styled.input`

`

export const UploadArrowContainer= styled.button`
    width: 136px;
    height: 136px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    margin-top: 206px;
    cursor: pointer;

`

export const UploadArrow = styled.img`
    display: flex;
    width: 60px;
    height: 52px;
    cursor: pointer;
`
export const UploadButton = styled.button`
    padding: 0 16px;
    border-radius: 2px;
    height: 36px;
    border: 0;
    width: 188px;
    background-color: #3ea6ff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`
