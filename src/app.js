import React from 'react';
import { Header, Main, Footer, SideBar } from './layout';

const App = props => {
    return (
        <div className="sections">
            <SideBar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;