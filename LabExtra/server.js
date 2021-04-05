const Koa = require("koa");
const HomeRoutes = require('./routes/home.router');
const bodyParser = require('koa-bodyparser');
const PostRoutes = require('./routes/post.routes');
require('./dal');

//koa application
const app = new Koa();

//Content-Type = application/jsom
//Registering the body parser -> get the data from the request and convert it to applicable and make it available
app.use(bodyParser()); //bodyP -> middleware

//Register router with the HTTP method
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());

app.use(ctx => {
    ctx.body = 'Hello';
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Application is running on port 3000');
});