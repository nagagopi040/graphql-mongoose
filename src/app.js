import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import userTypes from './graphql/types/userTypes'
import expressGraphQL from 'express-graphql'

const app = express()
const port = 3000

mongoose.Promise = global.Promise

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept')
    next();
});

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *')
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200)
    } else {
        next();
    }
});

app.use('/graphql',  expressGraphQL({
    schema: userTypes,
    graphiql: true
}))

mongoose.connect('mongodb://localhost:27017/test')
    .then(res => {
        app.listen(port, () => {
            console.log(`Server is Running on localhost:${port}`)
        })
    }).catch( err => {
        console.log(err.message)
    })