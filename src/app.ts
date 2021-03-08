import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { router } from './routes'
require('dotenv').config();

class App {
    public express: express.Application

    public constructor() {

        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
    }

    private routes(): void {
        this.express.use(router)
    }
}

export default new App().express