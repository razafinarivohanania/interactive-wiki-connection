const express = require('express');
const path = require('path');
const { readFile } = require('./src/utils/file');

const app = express();
const port = 2345;

app.use(express.static('public'));
app.set('view engine', 'ejs');

async function getNewSolutionHtml(){
    return await readFile(path.resolve(__dirname, 'views', 'new-solution.ejs'));
}

async function getAbstractSituations(currentPath){
    const data = currentPath.split('/');
    for (var i = 1; i < data.length; i++){
        //TODO
    } 
}

(async () => {
    const newSolutionHtml = getNewSolutionHtml();

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/quizz', (req, res) => {
        res.render('quizz');
    });

    app.get('/quizz/1', (req, res) => {
        res.render('quizz/1');
    });

    app.get('/quizz/1/1', (req, res) => {
        res.render('quizz/1/1');
    });

    app.get('/quizz/1/1/1', (req, res) => {
        res.render('quizz/1/1/1', { newSolutionHtml: newSolutionHtml });
    });

    app.get('/quizz/1/1/2', (req, res) => {
        res.render('quizz/1/1/2', { newSolutionHtml: newSolutionHtml });
    });

    app.get('/quizz/1/2', (req, res) => {
        res.render('quizz/1/2');
    });

    app.listen(port, () => console.log(`Server runs on port ${port}`));
})();