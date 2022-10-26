const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const course_info = require('./data/course-info.json');

app.get('/', (req, res) => {
    res.send('Courses API running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course_info/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course_info.find(c => c._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('e-learners server runing:', port);
})