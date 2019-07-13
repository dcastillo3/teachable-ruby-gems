import styled from 'styled-components';
import Box from '../box/box';

const Grid = styled(Box)`
    ${props => props.justifyContent? `justify-content: ${props.justifyContent}` : ''};
    ${props => props.alignItems? `align-items: ${props.alignItems}` : ''};
    ${props => props.flexWrap? `flex-wrap: ${props.flexWrap}` : ''};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const GridColumn = styled(Grid)`
    flex-direction: column;
`;

export default Grid;