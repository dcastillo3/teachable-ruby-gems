import React, { Component } from 'react';
import { Input, Button } from '../../styled/';
import { connect } from 'react-redux';
import { fetchRubyGems } from '../../store';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchChange(event) {
        const { value } = event.target;

        this.setState({ value });
    }

    handleSearchClick() {
        const { value } = this.state;
        const { getRubyGems } = this.props;

        getRubyGems(value);
    }

    render() {

    return (
        <div className="search-gem-container">
            <Input inputValue={this.state.value} inputChange={this.handleSearchChange} />
            <Button buttonType="submit" buttonAction={this.handleSearchClick}>Search</Button>
        </div>
    )
    }
}

const mapDispatch = (dispatch) => {
    return {
        getRubyGems: query => dispatch(fetchRubyGems(query))
    }
}

export default connect(null, mapDispatch)(Search);