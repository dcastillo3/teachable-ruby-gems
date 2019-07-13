import React from 'react';
import { GridColumn } from './styled';
import { Header, Main, Footer, SideBar } from './layout';

import './app.css';

const App = props => {
    return (
        <GridColumn height="100vh" className="sections">
            {/* <SideBar /> */}
            <Header />
            <Main />
            <Footer />
        </GridColumn>
    )
}

export default App;