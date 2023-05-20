
import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: #D93856;
    color: white;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{opacity:0.8}
    &:active{opacity:0.4;}

    ${props => 
    props.isGrey && 
    `
        background: rgba(255, 255, 255, 0.14);
    `}
`;