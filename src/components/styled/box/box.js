import styled from 'styled-components';

const Box = styled.div`
    ${props => props.position ? `position: ${props.position}` : ''};
    ${props => props.top ? `top: ${props.top}` : ''};
    ${props => props.right ? `right: ${props.right}` : ''};
    ${props => props.bottom ? `bottom: ${props.bottom}` : ''};
    ${props => props.left ? `left: ${props.left}` : ''};
    ${props => props.alignSelf ? `align-self: ${props.alignSelf}` : ''};
    ${props => props.justifySelf? `justify-self: ${props.justifySelf}` : ''};
    ${props => props.flex? `flex: ${props.flex}` : ''};
    ${props => props.background ? `background: ${props.background}` : ''};
    ${props => props.borderWidth ? `border-width: ${props.borderWidth}` : ''};
    ${props => props.borderStyle ? `border-style: ${props.borderStyle}` : ''};
    ${props => props.borderColor ? `border-color: ${props.borderColor}` : ''};
    ${props => props.borderRadius ? `border-radius: ${props.borderRadius}` : ''};
    ${props => props.maxWidth? `max-width: ${props.maxWidth}` : ''};
    ${props => props.flexBasis? `flex-basis: ${props.flexBasis}` : ''};
    ${props => props.flexShrink? `flex-shrink: ${props.flexShrink}` : ''};
    ${props => props.flexGrow? `flex-grow: ${props.flexGrow}` : ''};
    ${props => props.boxShadow? `box-shadow: ${props.boxShadow}` : ''};
    ${props => props.transition? `transition: ${props.transition}` : ''};
    ${props => props.cursor? `cursor: ${props.cursor}` : ''};
    ${props => props.boxDisplay? `display: ${props.boxDisplay}` : ''};
    ${props => props.width? `width: ${props.width}` : ''};
    ${props => props.height? `height: ${props.height}` : ''};
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
`;

export const BoxGutter = styled(Box)`
    padding: ${props => props.padding ? props.padding : '20px'};
    margin: ${props => props.margin ? props.margin : '10px'};
`;

export const BoxSuccess = styled(BoxGutter)`
    width: 300px;
    background-color: #f6f4ff;
    border-radius: 15px;
    margin: 20px;
    box-shadow: 0px 0px 85px 12px #00000024;
    transition: .2s cubic-bezier(0.4, 0.06, 0.09, 1.1);

    &:hover {
        ${props => props.hoverTransform? `transform: ${props.hoverTransform}` : ''};
        background: #bbffaa;
    }
`;
export const BoxDanger = styled(BoxSuccess)`

    &:hover {
        background: #ffd4d4;
    }
`;

export default Box;