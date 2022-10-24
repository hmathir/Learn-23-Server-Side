const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send("Server Running...")
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id == id);
    res.send(course)
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})