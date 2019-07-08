import React from 'react';
import { Header, Main, Footer } from './layout';

const App = props => {
    return (
        <div className="sections">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;