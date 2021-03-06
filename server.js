var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles={
    'article-one': {
        title:'B Prathyusha | Article One',
        heading: 'Article One',
        date: 'Sept 5th 2016',
        content:`
            <p>
                This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
                This is my first article.This is my first article.This is my first article.This is my first article.
            </p>
            <p>
                This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
                This is my first article.This is my first article.This is my first article.This is my first article.
            </p>
            <p>
                This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
                This is my first article.This is my first article.This is my first article.This is my first article.
            </p>`
    },
    'article-two': {
        title:'B Prathyusha | Article Two',
        heading: 'Article Two',
        date: 'Sept 10th 2016',
        content:`
            <p>
                This is my Second article.
            </p>`
    },
    'article-three' :{
        title:'B Prathyusha | Article Three',
        heading: 'Article Three',
        date: 'Sept 15th 2016',
        content:`
            <p>
                This is my Third article.
            </p>`
    }
};
function CreateTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var HtmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>`
    ;
    return HtmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(CreateTemplate(Articles[articleName]));
});
app.get('/article-Two', function (req, res) {
   res.send(CreateTemplate(Articles.ArticleTwo));
});
app.get('/article-Three', function (req, res) {
   res.send(CreateTemplate(ArticleThree));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
