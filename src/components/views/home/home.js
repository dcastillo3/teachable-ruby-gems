import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, List } from '../../common';
import { Box, Title, TitleCard, GridColumn, TextCaption, BoxGutter } from '../../styled';
import { fetchRubyGems } from '../../../store';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { getRubyGems, rubyGems } = this.props;

        return (
            <GridColumn 
            className="home" 
            flex="auto" 
            justifyContent="center"
            padding="60px 0px"
            >
                <Box>
                    <GridColumn justifyContent="center" alignItems="center">
                        <Box margin="0 0 20px 0">
                            <Title fontFamily="Barlow">Find Ruby Gems</Title>
                        </Box>
                        <Box margin="0 0 10px 0">
                            <TextCaption>Hit the Ruby Gems search API endpoint and display the results in a list view. All gems can be saved or removed, saved gems are viewable in the menu.</TextCaption>
                        </Box>
                    </GridColumn>

                    <Box
                        maxWidth="700px"
                        margin="10px auto"
                    >
                        <Search thunk={getRubyGems} />
                    </Box>
                </Box>

                <Box>
                    {rubyGems && rubyGems[0] !== 'No items'
                        ? <List items={rubyGems} />
                        : <Box>
                            <TitleCard>No results found.</TitleCard>
                        </Box>
                    }
                </Box>
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