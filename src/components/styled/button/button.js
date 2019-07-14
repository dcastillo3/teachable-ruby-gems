import styled from 'styled-components';

const Button = styled.button`
    ${props => props.position ? `position: ${props.position}` : ''};
    ${props => props.textSize ? `font-size: ${props.textSize}` : ''};
    ${props => props.top ? `top: ${props.top}` : ''};
    ${props => props.right ? `right: ${props.right}` : ''};
    ${props => props.bottom ? `bottom: ${props.bottom}` : ''};
    ${props => props.left ? `left: ${props.left}` : ''};
    background: #fff;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #ef6060;
    border-radius: 5px;
    color: #ef6060;

    &:hover {
        background: #ef6060;
        color: #fff;
        cursor: pointer;
        transition: .2s cubic-bezier(0.4,0.06,0.09,1.1);
    }

    &:focus {
        outline: none;
    }
`;

export const ButtonSearch = styled(Button)`
    color: #000;
    background: transparent;
    padding: 0;
    border: 0;
    border-radius: none;

    &:hover {
        background: transparent;
        color: #ef6060;
    }
`;

export const ButtonMenu = styled(ButtonSearch)`
    ${props => props.active ? `transform: rotate(90deg);` : ''}
    font-size: 2rem;
    align-self: flex-start;
    color: #e8e8e8;
    padding: 20px;
`

export default Button;