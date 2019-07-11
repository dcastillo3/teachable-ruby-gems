import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../../common';
import { Box, Text } from '../../styled';
import { fetchItems } from '../../store';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const { getItems } = this.props;

        getItems();
    }

    render() {
        const { myItems } = this.props;

        return (
            <Box className="side-bar">
                {myItems.length
                    ? <List items={myItems} />
                    : <Text>No items saved.</Text>
                }
            </Box>
        );
    }
}

const mapState = (state, ownProps) => {
    const { myItems } = state;

    return {
        myItems
    }
}

const mapDispatch = (dispatch) => {
    return {
        getItems: () => dispatch(fetchItems())
    }
}

export default connect(mapState, mapDispatch)(SideBar);