
import express from 'express'
import mongoose from 'mongoose'
import { employee } from "./models/data.js"
import ejs from 'ejs'

let conn = await mongoose.connect('mongodb://localhost:27017/company')

const app = express()
const port = 3000
app.set('view engine', 'ejs')

let ranName = ['harry', 'jerry', 'kary', 'sandy']
let lang = ['Java', 'c++', 'ruby', 'flutter']
let cityName = ['new York', 'paris', 'berlin', 'tokyo']

app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.render('index')

    // Delete all collections on clicking...
    await employee.deleteMany({})

    //Generate 10 random data....
    for (let i = 0; i < 10; i++) {
        const ranData = new employee({ name: ranName[Math.floor(Math.random() * 4)], salary: Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000, language: lang[Math.floor(Math.random() * 4)], city: cityName[Math.floor(Math.random() * 4)], isManager: true })
        await ranData.save()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

