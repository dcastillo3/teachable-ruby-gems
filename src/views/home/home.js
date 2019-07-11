import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, List } from '../../common';
import { Box, Text } from '../../styled';
import { fetchRubyGems } from '../../store';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        //TODO: Create local property 'queryStatus' to conditionally render List
        const { getRubyGems, rubyGems } = this.props;

        return (
            <div className="home">
                <Box>
                    <Search thunk={getRubyGems} />
                </Box>

                {rubyGems[0] !== 'No items'
                    ? <List items={rubyGems} />
                    : <Box>
                        <Text>No results found.</Text>
                    </Box>
                }
            </div>
        )
    }
}

const mapState = (state, ownProps) => {
    const { rubyGems } = state;

    return {
        rubyGems
    }
}

const mapDispatch = (dispatch) => {
    return {
        getRubyGems: query => dispatch(fetchRubyGems(query))
    }
}

export default connect(mapState, mapDispatch)(Home);