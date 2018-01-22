import Express from 'express'
import { json, urlencoded } from 'body-parser'
import Helmet from 'helmet'
import responseTime from 'response-time'

import Cors from './../config/cors'
import Stars from './../api/controllers/starController'

const Server = Express()

Server.use(Helmet())
Server.use(json())
Server.use(urlencoded({ extended: true }))
Server.use(responseTime())
Server.use(Cors)
Server.use('/api', Stars)

Server.set('port', process.env.PORT || 3000)

Server.get('/healthcheck', (req, res) =>
  res.status(200).json({ message: 'The API is working correctly!' }))

Server.listen(Server.set('port'), () => {
  console.log(`Listening on: ${Server.set('port')}`)
})

export default Server
