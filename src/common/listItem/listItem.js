import React from 'react';
import { Grid, GridColumn, Button, TitleCard, TitleMuted, TitleThin, Text, Box } from '../../styled';

const ListItem = props => {
    const { item, haveItem, handleAdd, handleRemove } = props;

    //Ruby gem properties
    let { name, version, info, downloads, sha } = item;
    let truncatedInfo = `${info.substring(0, 120)}...`;

    return (
        <Grid className="list-item">
            <GridColumn alignItems="flex-start" flex="auto">
                <Grid>
                    <TitleCard>{name}</TitleCard>
                    <TitleMuted>{version}</TitleMuted>
                </Grid>

                <Text>{truncatedInfo}</Text>

                <Grid width="100%">
                    {haveItem
                        ? <Box flex="auto">
                            <Button type="button" onClick={() => handleRemove(sha)}>Remove</Button>
                        </Box>
                        : <Box flex="auto">
                            <Button type="button" onClick={() => handleAdd(item)}>Save</Button>
                        </Box>
                    }

                    <GridColumn alignItems="flex-end">
                        <TitleCard>{downloads}</TitleCard>
                        <TitleThin>DOWNLOADS</TitleThin>
                    </GridColumn>
                </Grid>

            </GridColumn>
        </Grid>
    )
}

export default ListItem;