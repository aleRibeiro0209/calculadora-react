import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    height: 100vh;
    background: url('./assets/bg-mad.jpg') no-repeat center;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    box-shadow: 0 0 20px ;
    background-color: #322733;
    padding: 50px 20px;
    width: 100%;
    max-width: 335px;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const GrandButton = styled.div`
    flex: 4.05;
`