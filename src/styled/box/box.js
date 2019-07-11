import styled from 'styled-components';

const Box = styled.div`
    ${props => props.position ? `position: ${props.position}` : ''};
    ${props => props.alignItems ? `align-self: ${props.alignItems}` : ''};
    ${props => props.justifyContent? `justify-self: ${props.justifyContent}` : ''};
    ${props => props.flex? `flex: ${props.flex}` : ''};
    ${props => props.background ? `background: ${props.background}` : ''};
    padding: ${props => props.padding ? props.padding : '20px'};
    margin: ${props => props.margin ? props.margin : '10px'};
`;

export default Box;