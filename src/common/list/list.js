import React from 'react';
import { Box } from '../../styled';
import { connect } from 'react-redux';
import { ListItem } from '../';

const List = props => {
    //TODO: Make rubyGems naming convention generic
    const { rubyGems } = props;

    //TODO: Nothing found should appear only after search
    return (
        <Box>
            {rubyGems.length
                ? rubyGems.map(gem => {
                    const { name, version, info, downloads } = gem;

                    return (
                        <ListItem key={`${name}-${version}`} item={gem} />
                    )
                })
                : <Box>Nothing found.</Box>}
        </Box>
    )
}

const mapState = (state, ownProps) => {
    return {
        ...state
    }
}

export default connect(mapState)(List);