import express from 'express'
import { CONNECT_DB, GET_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware.js'
import cors from 'cors'
import { corsOptions } from '~/config/cors'

const START_SERVER = () => {
  CONNECT_DB()
  const app = express()

  //enable req.body json data
  app.use(express.json())

  app.use(cors(corsOptions))

  app.use('/v1', APIs_V1)

  //Middleware xử lí lỗi tập trung
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server is running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })
}

CONNECT_DB()
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .then(() => {
    START_SERVER()
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error)
  })
