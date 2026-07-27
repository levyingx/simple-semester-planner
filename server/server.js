import { JSONFilePreset } from 'lowdb/node'
import express from 'express'

import { Discipline, color } from '../src/scripts/data.js'

const app = express()
const port = 3000

const db = await JSONFilePreset('server/db.json', { posts: [] })

app.get('/semester', (req, res) => {
    res.send(db.data.posts.at(0))
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});