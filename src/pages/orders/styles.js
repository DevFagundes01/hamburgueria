import styled from 'styled-components';

import Bottom from '../../assets/bottom.png'

export const Div = styled.div`
    background: url("${Bottom}");
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Image = styled.img`
    height: 354px;
`;
export const Li = styled.li`
    color: white;
    display: flex;
    margin-left: 36px;
    align-items: center;
    justify-content: center;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-bottom: 14px;

    button{
        background:none;
        border: none;
        cursor: pointer;
    }
`
export const Div2 = styled.div`
    width: 14vw;
    display: flex;
    flex-direction: column;
`
export const Div3 = styled.div`
`
export const Button = styled.button`
    width: 342px;
    height: 68px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.14);
    color: white;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{opacity:0.8}
    &:active{opacity:0.4;}
`;
