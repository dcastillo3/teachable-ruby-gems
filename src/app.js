import React from 'react';
import { GridColumn } from './styled';
import { Header, Main, Footer } from './layout';

import './app.css';

const App = props => {
    return (
        <GridColumn className="sections" height="100vh">
            <Header />
            <Main />
            <Footer />
        </GridColumn>
    )
}

export default App;