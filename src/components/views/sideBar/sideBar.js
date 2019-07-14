import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../../common';
import { GridContainer, GridMenu, Box, Title, TitleMedium, ButtonMenu } from '../../styled';
import { fetchItems } from '../../../store';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.handleActive = this.handleActive.bind(this);
    }

    componentDidMount() {
        const { getItems } = this.props;

        getItems();
    }

    handleActive() {
        let status = !this.state.active;
        this.setState({ active: status })
    }

    render() {
        const { myItems } = this.props;
        const { handleActive } = this;
        const { active } = this.state;

        return (
            <GridContainer
                className="side-bar"
                height="100%"
                active={active}
            >
                <GridMenu>
                    <TitleMedium fontFamily="Barlow">My Gems</TitleMedium>
                    {myItems && myItems.length
                        ? <List items={myItems} />
                        : <Box>
                            <Title>No items saved.</Title>
                        </Box>
                    }
                </GridMenu>


                <ButtonMenu onClick={handleActive} active={active}>
                    <i className="fas fa-bars"></i>
                </ButtonMenu>
            </GridContainer>
        );
    }
}

const mapState = (state, ownProps) => {
    const { myItems } = state;

    return {
        myItems
    }
}

const mapDispatch = (dispatch) => {
    return {
        getItems: () => dispatch(fetchItems())
    }
}

export default connect(mapState, mapDispatch)(SideBar);