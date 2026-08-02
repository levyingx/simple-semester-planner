import { JSONFilePreset } from 'lowdb/node'
import express from 'express'
import cors from 'cors'

import { Discipline, color } from '../src/scripts/data.js'

const app = express()

app.use(cors())

const port = 8080

const db = await JSONFilePreset('server/db.json', { posts: [] })

app.get('/user', (req, res) => {
    const { user } = db.data
    res.json(user)
})

app.get('/semester', (req, res) => {
    const { semester } = db.data
    res.json(semester)
})

app.get('/disciplines', (req, res) => {
    const { disciplines } = db.data
    res.json(disciplines)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})