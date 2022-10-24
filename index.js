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

app.get('/courses/category/:id', (req, res) => {
    const categoryID = req.params.id;
    const courseCate = courses.filter(course => course.category == categoryID);
    res.send(courseCate);
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})