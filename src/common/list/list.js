import React from 'react';
import { Box, Grid } from '../../styled';
import { connect } from 'react-redux';

const List = props => {
    const { rubyGems } = props;

    return (
        <Box>
            {rubyGems && rubyGems.map(gem => {
                const { name, version, info, downloads } = gem;

                return (
                    <Box key={`${name}-${version}`}>
                        <Grid>
                            <Grid>
                                <Box>{name}</Box>
                                <Box>{version}</Box>
                            </Grid>
                            <Box>{info}</Box>
                        </Grid>

                        <Grid>
                            <Box>{downloads}</Box>
                            <Box>DOWNLOADS</Box>
                        </Grid>
                    </Box>
                )
            })}
        </Box>
    )
}

const mapState = (state, ownProps) => {
    return {
        ...state
    }
}

export default connect(mapState)(List);