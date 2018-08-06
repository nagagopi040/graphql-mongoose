import express from 'express'
import expressHTTP from 'express-graphql'
import schema from './schema'

const app = express()
const port = 3000

app.use('/graphql', expressHTTP({
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