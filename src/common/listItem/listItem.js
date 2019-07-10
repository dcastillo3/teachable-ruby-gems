import React from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Button } from '../../styled';
import { putItem, deleteItem } from '../../store';

const ListItem = props => {
    const { myItems } = props;
    const { item } = props;
    //Ruby gem properties
    const { name, version, info, downloads, sha } = item;

    const handleAdd = (item) => {
        const { addItem } = props;

        addItem(item);
    }

    const handleRemove = (id) => {
        const { removeItem } = props;

        removeItem(id);
    }

    return (
        <Box class="list-item">
            <Box>
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

            {myItems.some(myItem => myItem.sha === item.sha)
                ? <Button buttonType="button" buttonAction={() => handleRemove(sha)}>Remove</Button>
                : <Button buttonType="button" buttonAction={() => handleAdd(item)}>Save</Button>
            }
        </Box>
    )
}

const mapState = (state, ownProps) => {
    const { myItems } = state;

    return {
        myItems
    }
}

const mapDispatch = (dispatch) => {
    return {
        addItem: item => dispatch(putItem(item)),
        removeItem: item => dispatch(deleteItem(item))
    }
}

export default connect(mapState, mapDispatch)(ListItem);