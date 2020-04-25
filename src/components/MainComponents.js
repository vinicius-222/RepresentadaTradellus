import styled from 'styled-components';

export const Template = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;

`;

export const SubTemplate = styled.div`
    display:flex;
    flex-direction:row;
    flex:1;
`;

export const Body = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`;

export const PageContainer = styled.div`
    width:100%;
    margin:0px;
`;

export const PageTitle = styled.h1`
    font-size:27px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
    margin:10px 0;
    background-color:#FFCACA;
    color:#000;
    border:2px solid #FF0000;
    padding:10px;
`;


export const SucessoMessage = styled.div`
    margin:10px 0;
    background-color:#98FB98;
    color:#000;
    border:2px solid #008B45;
    padding:10px;
`;