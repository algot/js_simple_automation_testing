const nodeFetchy = require('./');

const request = nodeFetchy('http://localhost:8888');

async function test() {
    const result = await request.get('user');
    console.log(result);
}

test()