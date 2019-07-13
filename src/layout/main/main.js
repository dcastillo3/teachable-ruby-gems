import React from 'react';
import { GridColumn } from '../../styled';
import { Routes } from '../../routes';

const Main = (props) => {
    return (
        <GridColumn flex="auto" className="main">
            <Routes />
        </GridColumn>
    );
}

export default Main;