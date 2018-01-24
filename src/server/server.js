import express from 'express'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'
import responseTime from 'response-time'
import compression from 'compression'

import cors from './../config/cors'
import stars from './../api/controllers/starController'

const Server = express()

Server.use(helmet())
Server.use(json())
Server.use(urlencoded({ extended: true }))
Server.use(compression())
Server.use(responseTime())
Server.use(cors)
Server.use('/api', stars)

Server.set('port', process.env.PORT || 3000)

Server.get('/healthcheck', (req, res) =>
  res.status(200).json({ message: 'The API is working correctly!' }))

Server.listen(Server.set('port'), () => {
  console.log(`Listening on: ${Server.set('port')}`)
})

export default Server
