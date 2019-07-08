import React from 'react';
import { Box, Grid } from '../../styled';

const List = props => {
    return (
        <Box>
            <Grid>
                <Box>TITLE</Box>
                <Box>DESCRIPTION</Box>
            </Grid>

            <Grid>
                <Box>NUMBER</Box>
                <Box>DOWNLOADS</Box>
            </Grid>
        </Box>
    )
}

export default List;