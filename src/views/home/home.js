import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, List } from '../../common';
import { Box, Title, GridColumn, TextCaption } from '../../styled';
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
            <GridColumn flex="auto" justifyContent="center" className="home">
                <Box>
                    <GridColumn justifyContent="center" alignItems="center">
                        <Title fontFamily="Barlow">Find Ruby Gems</Title>
                        <TextCaption>Hit the Ruby Gems search API endpoint and display the results in a list view. All gems can be saved or removed, saved gems are viewable in the menu.</TextCaption>
                    </GridColumn>

                    <Box
                        maxWidth="700px"
                        margin="0 auto"
                    >
                        <Search thunk={getRubyGems} />
                    </Box>
                </Box>

                {rubyGems && rubyGems[0] !== 'No items'
                    ? <List items={rubyGems} />
                    : <Box>
                        <Title>No results found.</Title>
                    </Box>
                }
            </GridColumn>
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