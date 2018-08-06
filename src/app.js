import express from 'express'
import expressHTTP from 'express-graphql'
import mongoose from 'mongoose'

import schema from './schema'

const app = express()
const port = 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test')

app.use('/employee', expressHTTP({
    schema,
    context:{
        userId: 1
    },
    graphiql: true
}))

app.get('/', (req, res) => {
    res.json({ message: "Hello World!" })
})

app.listen(port, () => {
    console.log(`Server is Running on localhost:${port}`)
})