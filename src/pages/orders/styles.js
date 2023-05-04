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
export const Div1 = styled.div`
    width: 414px;
    margin: 80px 400px;
    text-align: center;
`;
export const Image = styled.img`
    height: 354px;
`;
export const Li = styled.li`
    color: white;
    display: flex;
    margin-left: 40px;
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
    width: 18vw;
    display: flex;
    flex-direction: column;
`
export const Div3 = styled.div``