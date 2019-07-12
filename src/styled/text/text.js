import styled from 'styled-components';

const Text = styled.p`
    ${props => props.maxWidth? `max-width: ${props.maxWidth}` : ''};
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
`;

export default Text;