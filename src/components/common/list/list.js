import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from '..';
import { BoxSuccess, BoxDanger, Grid } from '../../styled';
import { putItem, deleteItem } from '../../../store';

const List = props => {
    const { items } = props;
    const { myItems } = props;

    const handleAdd = (item) => {
        const { addItem } = props;

        addItem(item);
    }

    const handleRemove = (id) => {
        const { removeItem } = props;

        removeItem(id);
    }

    return (
        <Grid className="list" flexWrap="wrap" justifyContent="center">
            {items && items.map(item => {
                const { name, version } = item;
                const haveItem = myItems.some(myItem => myItem.sha === item.sha);
                const listItem = (
                        <ListItem
                            item={item}
                            haveItem={haveItem}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}
                        />
                    )

                return (
                    haveItem
                        ? <BoxDanger
                            key={`${name}-${version}`}
                            hoverTransform="scale(1.1)"
                            alignSelf="flex-start">
                            {listItem}
                        </BoxDanger>
                        : <BoxSuccess
                            key={`${name}-${version}`}
                            hoverTransform="scale(1.1)"
                            alignSelf="flex-start">
                            {listItem}
                        </BoxSuccess>
                )
            })}
        </Grid>
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

export default connect(mapState, mapDispatch)(List);