import React, { Component } from 'react';
import { Input, Button } from '../../styled/';

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
            <div className="search-gem-container">
                <form onSubmit={this.handleSearchSubmit}>
                    <Input inputValue={this.state.query} inputChange={this.handleSearchChange} />
                    <Button buttonType="submit">Search</Button>
                </form>
            </div>
        )
    }
}

export default Search;