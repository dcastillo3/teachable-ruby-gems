import React, { Component } from 'react';
import { Input, ButtonSearch, Box } from '../../styled/';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchChange(event) {
        const { value } = event.target;

        this.setState({ query: value });
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        const { query } = this.state;
        const { thunk } = this.props;

        thunk(query);
    }

    render() {
        return (
            <Box class="search-container">
                <form onSubmit={this.handleSearchSubmit}>
                    <Box position="relative" class="search-inputs">
                        <Input
                            placeholder="Search items..."
                            type="text"
                            value={this.state.query}
                            onChange={this.handleSearchChange}
                        />
                        <ButtonSearch
                            position="absolute"
                            textSize="20px"
                            top="8px"
                            right="11px"
                            class="submit-button"
                            type="submit"
                        >
                            <i class="fas fa-search"></i>
                        </ButtonSearch>
                    </Box>
                </form>
            </Box >
        )
    }
}

export default Search;