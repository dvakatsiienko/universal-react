import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import { App } from './client';
import config from '../config';

/* This should be fetched by server as part of SSR process. */
import json from '../data';

export const serverRender = async () => {
    /* This fetching is as part of SSR process. */
    // const raw = await axios.get(`http://${config.host}:${config.port}/data`);

    console.log(json)

    return {
        initialMarkup: ReactDOMServer.renderToStaticNodeStream(<App store={json} />),
        initialData: json
    };
};
