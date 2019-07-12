import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, List } from '../../common';
import { Box, Title } from '../../styled';
import { fetchRubyGems } from '../../store';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { getRubyGems, rubyGems } = this.props;

        return (
            <Box className="home" padding="0" margin="0">
                <Box
                    maxWidth="700px"
                    margin="0 auto"
                >
                    <Search thunk={getRubyGems} />
                </Box>

                {rubyGems && rubyGems[0] !== 'No items'
                    ? <List items={rubyGems} />
                    : <Box>
                        <Title>No results found.</Title>
                    </Box>
                }
            </Box>
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