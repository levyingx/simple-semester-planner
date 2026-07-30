import { JSONFilePreset } from 'lowdb/node'
import express from 'express'
import cors from 'cors'

import { Discipline, color } from '../src/scripts/data.js'

const app = express()

app.use(cors())

const port = 3000

const db = await JSONFilePreset('server/db.json', { posts: [] })

app.get('/user', (req, res) => {
    const { user } = db.data
    res.json(user)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})