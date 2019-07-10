import React from 'react';
import { Box } from '../../styled';
import { ListItem } from '../';

const List = props => {
    const { items } = props;

    return (
        <Box>
            {items.map(item => {
                const { name, version } = item;

                return (
                    <ListItem key={`${name}-${version}`} item={item} />
                )
            })}
        </Box>
    )
}

export default List;