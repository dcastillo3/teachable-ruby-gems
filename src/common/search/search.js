import React, { Component } from 'react';
import { Input, Button } from '../../styled/';
import { connect } from 'react-redux';
import { fetchRubyGems } from '../../store';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchChange(event) {
        const { value } = event.target;

        this.setState({ query: value });
    }

    handleSearchClick() {
        const { query } = this.state;
        const { thunk } = this.props;

        thunk(query);
    }

    render() {
        return (
            <div className="search-gem-container">
                <Input inputValue={this.state.query} inputChange={this.handleSearchChange} />
                <Button buttonType="button" buttonAction={this.handleSearchClick}>Search</Button>
            </div>
        )
    }
}

export default Search;