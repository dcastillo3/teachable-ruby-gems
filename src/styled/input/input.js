import styled from 'styled-components';

const Input = styled.input`
    padding-right: 48px;
    box-shadow: 0 0 0px 5px rgba(20,28,34,0.1);
    box-sizing: border-box;
    width: 100%;
    font-size: 18px;
    padding: 10px;
    background: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 300;
    color: #141c22;
    outline: none;
    transition: .2s cubic-bezier(0.4, 0.06, 0.09, 1.1);

    &:focus {
        box-shadow: 0 0 0px 5px rgba(249, 207, 28, 0.65);

    }
`;

export default Input;