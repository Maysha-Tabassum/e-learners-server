const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json')


app.get('/', (req, res) => {
    res.send('Courses API running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c  => c._id === id);
    res.send(selectedCourse);
})

app.get('/category/:id', (req,res) => {
    const id = req.params.id;
    const category_course = course.filter(c => c.category_id === id);
    res.send(category_course);
})





app.listen(port, () => {
    console.log('e-learners server runing:', port);
})