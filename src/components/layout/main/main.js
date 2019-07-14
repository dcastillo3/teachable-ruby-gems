import React from 'react';
import { GridColumn } from '../../styled';
import { Routes } from '../../routes';

const Main = (props) => {
    return (
        <GridColumn className="main" flex="auto">
            <Routes />
        </GridColumn>
    );
}

export default Main;