import styled from 'styled-components';

const Button = styled.button`
    background: #fff;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #ef6060;
    border-radius: 5px;
    color: #ef6060;
    ${props => props.textSize ? `font-size: ${props.textSize}` : ''}

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
    position: ${props => props.position || 'static'};
    ${props => props.top ? `top: ${props.top}` : ''}
    ${props => props.right ? `right: ${props.right}` : ''}
    ${props => props.bottom ? `bottom: ${props.bottom}` : ''}
    ${props => props.left ? `left: ${props.left}` : ''}
    color: #000;
    background: transparent;
    padding: 0;
    border: 0;
    border-radius: none;

    &:hover {
        background: #fff;
        color: #ef6060;
    }
`;

export default Button;