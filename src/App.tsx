import React from 'react';
import FragmentCards from "components/FragmentCards";
import DefaultLayout from "layouts/DefaultLayout";
import "assets/global.scss";
import { fable } from "components/FragmentCards";

function App() {
    const fables = require("data/fable_cards.json");

    return (
        <div className="App">
            <DefaultLayout>
                <FragmentCards fables={fables as Array<fable>} />
            </DefaultLayout>
        </div>
    );
}

export default App;
