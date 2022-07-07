const express = require('express');
const env = require('dotenv/config');

const libelulaRouter = require('./routers/libelula/libelulaRouter');

const database = require('./db');

const app = express();
app.use(express.json());

app.use('/libelula', libelulaRouter);

app.listen(process.env.PORT || 5000,'0.0.0.0', async () => {
    //const resultDb = await database.sync({alter:true});
    const resultDb = await database.sync({force:true});
    console.log('server started');
})
