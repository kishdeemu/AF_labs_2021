const Koa = require('koa');
const HomeRouter = require('./routes/home.router');
const bodyParser = require('koa-bodyparser');
const PostRoutes = require('./routes/post.routes');

const app = new Koa();

app.use(bodyParser());

app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());


app.use(ctx => {
    ctx.body = 'Hello';
});

//app.listen(3000);
//console.log('Application is running on port 3000');

app.listen(3000, err =>{
    if (err){
        console.error(err);
        return;
    }
    console.log('Application is running on port 3000');
});
