import express from 'express'
const app = express()

// a hundred bucks? the ad said 3000
const port = 3000

app.get('/', (req, res) => {
    res.send('I missed the part where thats my problem.')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});