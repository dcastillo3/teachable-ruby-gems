import styled from 'styled-components';

const Box = styled.div`
    position: ${props => props.position || 'static'};
    background: #2b2b2b;
    padding: 20px;
    margin: 10px;
`;

export default Box;