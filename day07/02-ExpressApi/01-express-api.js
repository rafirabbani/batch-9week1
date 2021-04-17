const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const Pool = require("pg").Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'batch-9',
    password: '1234',
    port: 5432
})

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port ${port}`))

app.get('/api/regions', (req, res) => {
    pool.query(
        'select region_id, region_name from regions',
        [],
        (error, results) => {
            if (error) {
               throw error
            }
            res.status(200).json(results.rows)
        }
    )
})

app.get('/api/regions/:id', (req, res) => {
    const {id} = req.params
    pool.query(
        'select region_id, region_name from regions where region_id = $1',
        [id],
        (error, results) => {
            if (error) {
               throw error
            }
            res.status(200).json(results.rows)
        }
    )
})

app.post('/api/regions', (req, res) => {
    const {region_name} = req.body
    pool.query(
        'insert into regions (region_name) values($1)',
        [region_name],
        (error, results) => {
            if (error) {
               throw error
            }
            res.status(200).json(results.rowCount)
        }
    )
})

app.put('/api/regions/:id', (req, res) => {
    const {id} = req.params
    const {region_name} = req.body
    pool.query(
        'update regions set region_name = $1 where region_id = $2',
        [region_name, id],
        (error, results) => {
            if (error) {
               throw error
            }
            res.status(200).json(results.rowCount)
        }
    )
})

app.delete('/api/regions/:id', (req, res) => {
    const {id} = req.params
    pool.query(
        'delete from regions where region_id = $1',
        [id],
        (error, results) => {
            if (error) {
               throw error
            }
            res.status(200).json(results.rowCount)
        }
    )
})