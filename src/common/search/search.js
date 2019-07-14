import React, { Component } from 'react';
import { Input, ButtonSearch, Form } from '../../styled/';
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
            <div className="search">
                <Form position="relative" onSubmit={this.handleSearchSubmit}>
                        <Input
                            placeholder="Search items..."
                            type="text"
                            value={this.state.query}
                            onChange={this.handleSearchChange}
                        />
                        <ButtonSearch
                            position="absolute"
                            textSize="20px"
                            top="11px"
                            right="11px"
                            className="submit-button"
                            type="submit"
                        >
                            <i className="fas fa-search"></i>
                        </ButtonSearch>
                </Form>
            </div >
        )
    }
}

export default Search;