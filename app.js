const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routers/main');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRouter)


app.listen(3001, () => console.log('servidor rodando em http://localhost:3001'));
