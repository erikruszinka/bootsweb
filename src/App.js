import React from 'react';
import './App.css';
import { Router} from "@reach/router";
import Yeezy from "./Yeezy";
import Chanel from "./Chanel";
import './css/hover.css'

function App() {
        return (
            <Router>
                <Yeezy path="/" />
                <Chanel path="/1" />
            </Router>
        );
}


export default App;
