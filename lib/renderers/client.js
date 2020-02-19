import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import json from '../data';

export const App = initialProps => {
    const { store: initialStore } = initialProps;

    const [store, setStore] = useState(initialStore);

    useEffect(() => {
        (async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            const raw = await axios.get('/data');

            setStore(raw);
        })();
    }, []);

    return (
        <>
            <h1>Hello, SSR!</h1>
            <pre>{JSON.stringify(store)}</pre>
        </>
    );
};

const isServer = typeof window === 'undefined';

!isServer &&
    ReactDOM.hydrate(<App store={json} />, document.getElementById('root'));
