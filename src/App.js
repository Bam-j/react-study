import React, {Fragment} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './codes/router/Home';
import About from './codes/router/About';

const App = () => {
    return (
        <Fragment>
            <div>
                <Link to ="/">Home</Link>
                <br />
                <Link to ="/about">About</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} exact={true}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </div>
        </Fragment>
    );
};

export default App;
