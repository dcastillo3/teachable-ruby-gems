import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, List } from '../../common';
import { Box } from '../../styled';
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
            <div className="home">
                <Search thunk={getRubyGems} />

                {rubyGems[0] !== 'No items'
                    ? <List items={rubyGems} />
                    : <Box>No results found.</Box>
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