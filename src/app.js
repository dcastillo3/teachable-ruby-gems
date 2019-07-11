import React from 'react';
import { Header, Main, Footer, SideBar } from './layout';
import { Box } from './styled';
import './app.css';

const App = props => {
    return (
        <Box class="sections">
            <SideBar />
            <Header />
            <Main />
            <Footer />
        </Box>
    )
}

export default App;