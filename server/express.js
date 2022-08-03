import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'

// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
//end

//comment out before building for production
import devBundle from './devBundle'

//Module Routes
import ProductRoutes from "./routes/product";
import UserRoutes from "./routes/user";
import OrderRoutes from "./routes/order";


const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//comment out before building for production
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Shagsring
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes


app.get('/', (req, res) => {
    const markup = ReactDOMServer.renderToString(<div>hola</div>)

    /*
ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
              <MainRouter/>
      </StaticRouter>
     */
    res.status(200).send(Template({markup: markup}))
})

app.use('/', ProductRoutes)
app.use('/', UserRoutes)
app.use('/', OrderRoutes)

// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error": err.name + ": " + err.message})
    }
})


export default app
