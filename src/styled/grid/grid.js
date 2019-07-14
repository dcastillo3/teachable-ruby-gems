import styled from 'styled-components';
import Box from '../box/box';

const Grid = styled(Box)`
    ${props => props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
    ${props => props.alignItems ? `align-items: ${props.alignItems}` : ''};
    ${props => props.flexWrap ? `flex-wrap: ${props.flexWrap}` : ''};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const GridColumn = styled(Grid)`
    flex-direction: column;
`;

export const GridMenu = styled(GridColumn)`
    flex-wrap: nowrap;
    width: 400px;
    background: #000;
    overflow-y: scroll;
`;

export const GridContainer = styled(Grid)`
    left: ${props => props.active ? '0px' : '-400px'};
    flex-wrap: nowrap;
    position: fixed;
    transition: .5s cubic-bezier(0.23, 0.19, 0.26, 1.1);
    z-index: 99;
`;

export default Grid;