import styled from 'styled-components';

import Bottom from '../../assets/bottom.png'

export const Div = styled.div`
    background: url("${Bottom}");
    height: 100vh;
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
export const Inputlabel = styled.p`
    color: white;
    display: flex;
    margin-left: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
`;
export const Input = styled.input`
    color: white;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-bottom: 64px;
    flex: none;
    padding-left: 15px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
`;