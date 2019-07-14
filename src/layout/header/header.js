import React from 'react';
import { Box } from '../../styled';
import { SideBar } from '../../views';

const Header = (props) => {
    return (
        <Box className="header">
            <SideBar />
        </Box>
    );
}

export default Header;