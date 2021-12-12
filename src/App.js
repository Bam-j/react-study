import React, {Fragment} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './codes/router/Home';
import About from './codes/router/About';
import User from './codes/router/User';

const App = () => {
    return (
        <Fragment>
            <div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/user/Bam">Bam's info</Link>
                <br/>
                <Link to="/user/k">k's info</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} exact={true}/>
                    <Route path="/about1" element={<About/>}/>
                    <Route path="/user/:userName" element={<User/>}/>
                </Routes>
            </div>
        </Fragment>
    );
};

export default App;
