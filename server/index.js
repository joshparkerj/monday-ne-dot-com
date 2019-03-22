require ('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const massive = require('massive');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('tiny'));

massive ({
  host: 'localhost',
  port: 5432,
  database: 'monday',
  user: 'postgres',
  ssl: false,
  poolSize: 10
})
  .then( db => {
    app.set ('db',db)
    console.log('connected to database')
    require('./configure/session')(app,db)
    app.use(express.static(path.join(__dirname,'../build')));
    app.use('/api' , require('./routes'))
    app.get('*',(req,res,next) => {
        res.sendFile(path.join(__dirname,'../build/index.html'));
    })
    app.listen(3003, () => console.log('listening on 3003'))
  })
  .catch (error => console.error(error));
