const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',           // name of other container rather than http:domain
    port: 6379
});

// set value if not exists in redis
client.setnx('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.incr('visits');
    })
});

app.listen(8081, ()=> {
    console.log('Listening on port 8081');
});