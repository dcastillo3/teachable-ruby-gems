import React from 'react';
import { connect } from 'react-redux';
import { Box, Grid, GridColumn, Button, Title, TitleMuted, TitleThin, Text } from '../../styled';
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
        <div className="list-item">
            <Box>
                <Grid>
                    <GridColumn
                        flex="auto"
                    >
                        <Grid>
                            <Title>{name}</Title>
                            <TitleMuted>{version}</TitleMuted>
                        </Grid>
                        <Text>{info}</Text>
                        {myItems.some(myItem => myItem.sha === item.sha)
                            ? <Button type="button" onClick={() => handleRemove(sha)}>Remove</Button>
                            : <Button type="button" onClick={() => handleAdd(item)}>Save</Button>
                        }
                    </GridColumn>

                    <GridColumn
                        alignItems="flex-end"
                    >
                        <Title>{downloads}</Title>
                        <TitleThin>DOWNLOADS</TitleThin>
                    </GridColumn>

                </Grid>
            </Box>
        </div>
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