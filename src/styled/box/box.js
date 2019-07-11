import styled from 'styled-components';

const Box = styled.div`
    position: ${props => props.position || 'static'};
    background: #2b2b2b;
    margin: 10px;
`;

export default Box;