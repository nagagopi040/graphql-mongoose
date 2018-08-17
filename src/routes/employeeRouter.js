import { Router } from 'express'
import expressHTTP from 'express-graphql'

import schema from '../schemas/employeeSchema'

const router = Router();

router.post('/', expressHTTP({
    schema,
    graphiql: true
}))

module.exports = router