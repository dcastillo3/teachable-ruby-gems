import React from 'react';
import { ListItem } from '../';

const List = props => {
    const { items } = props;

    return (
        <div className="list">
            {items && items.map(item => {
                const { name, version } = item;

                return (
                    <ListItem key={`${name}-${version}`} item={item} />
                )
            })}
        </div>
    )
}

export default List;