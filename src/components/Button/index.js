import styled from 'styled-components';

const Button = styled.button`
    color: #11dc00;
    border: 1px solid #11dc00;
    border-width: 4px;
    background-color: #242c37;
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 14px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button