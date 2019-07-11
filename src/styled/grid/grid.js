import styled from 'styled-components';
import Box from '../box/box';

const Grid = styled(Box)`
    ${props => props.justifyContent? `justify-content: ${props.justifyContent}` : ''};
    ${props => props.wrap? `flex-wrap: ${props.wrap}` : ''};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
`;

export const GridColumn = styled(Grid)`
    align-items: ${props => props.alignItems ? props.alignItems : 'flex-start'};
    flex-direction: column;
`;

export default Grid;