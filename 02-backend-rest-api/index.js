const nodeFetch = require('node-fetch');
const url = require('url');

async function nodeFetchy(method, host, path, opts) {
    opts = opts || {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const requestUrl = url.resolve(host, path);
    const requestResult = await nodeFetch(requestUrl, {
        method, ...opts
    });

    return { status: requestResult.status, body: await requestResult.json() };
}

module.exports = function (host) {
    return {
        get: nodeFetchy.bind(global, 'GET', host),
        post: nodeFetchy.bind(global, 'POST', host)
    }
}