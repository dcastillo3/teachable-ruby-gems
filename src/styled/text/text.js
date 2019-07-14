import styled from 'styled-components';

const Text = styled.p`
    ${props => props.maxWidth? `max-width: ${props.maxWidth}` : ''};
    ${props => props.textAlign? `text-align: ${props.textAlign}` : ''};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
`;

export const TextCaption = styled(Text)`
    max-width: 500px;
    text-align: center;
    font-size: 12px;
    color: #cecece;
    margin: 0 auto;
`

export default Text;