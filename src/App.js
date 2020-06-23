import React from 'react';
import './App.css';
import { Router} from "@reach/router";
import Yeezy from "./Yeezy";
import Chanel from "./Chanel";
import './css/hover.css'

function App() {
        return (
            <Router>
                <Yeezy path="/1" />
                <Chanel path="/2" />
            </Router>
        );
}


export default App;
