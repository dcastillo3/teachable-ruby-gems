import React from 'react';
import { Grid, GridColumn, Button, Title, TitleMuted, TitleThin, Text } from '../../styled';

const ListItem = props => {
    const { item, haveItem, handleAdd, handleRemove } = props;

    //Ruby gem properties
    const { name, version, info, downloads, sha } = item;

    return (
        <Grid className="list-item">
            <GridColumn flex="auto">
                <Grid>
                    <Title>{name}</Title>
                    <TitleMuted>{version}</TitleMuted>
                </Grid>
                <Text maxWidth="200px">{info}</Text>
                {haveItem
                    ? <Button type="button" onClick={() => handleRemove(sha)}>Remove</Button>
                    : <Button type="button" onClick={() => handleAdd(item)}>Save</Button>
                }
            </GridColumn>

            <GridColumn alignSelf="flex-end">
                <Title>{downloads}</Title>
                <TitleThin>DOWNLOADS</TitleThin>
            </GridColumn>
        </Grid>
    )
}

export default ListItem;