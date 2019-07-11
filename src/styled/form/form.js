import styled from 'styled-components';

const Form = styled.form`
    ${props => props.position ? `position: ${props.position}` : ''}
`;

export default Form;