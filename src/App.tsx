import React from 'react';
import FableCards from "components/FableCards";
import DefaultLayout from "layouts/DefaultLayout";
import "assets/global.scss";
import { fable } from "components/FableCards";

function App() {
    const fables = require("data/fable_cards.json");

    return (
        <div className="App">
            <DefaultLayout>
                <FableCards fables={fables as Array<fable>} />
            </DefaultLayout>
        </div>
    );
}

export default App;
