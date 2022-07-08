const express = require('express');
const env = require('dotenv/config');

const database = require('./db');
const app=express();
app.use(express.json());

const libelulaRouter = require('./routers/libelula/libelulaRouter');
const carrinhoRouter=require('./routers/libelula/carrinhoRouter');
const clienteRouter = require('./routers/libelula/clienteRouter');
const produtoRouter = require('./routers/libelula/produtoRouter');

app.use('/libelula', libelulaRouter);
app.use('/carrinho',carrinhoRouter);
app.use('/cliente', clienteRouter);
app.use('/produto', produtoRouter);

app.listen(process.env.PORT || 3000, async ()=>{
    const resultDb = await database.sync({force:true});
    console.log('server started');
})

