const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const Router = require('koa-router');
const koaBody = require('koa-body')
const cloud = require('tcb-admin-node');
//初始化路由
const router = new Router({
  prefix:"/fellow"
});

app.use(cors({
    // origin: ['http://localhost:9527'],
    origin: function(ctx) {
      return [ctx.request.header.origin];
    },
    maxAge: 5,
    credentials: true
}));

app.use(koaBody());
//小程序初始化
cloud.init({
  secretId: 'AKIDA9h03gpWmGYP5WwfLo22nIYZMvFJik7F',
  secretKey: 'Aj38yax5zf6JJ4f290OaBQpkbZKsDNuC',
  env:"o-06a46cu"
  // env:'test-41b8dc'   
});


// let doctor = require('./controller/doctor.js');
// let util = require('./controller/util.js');
let user = require('./controller/user.js');
router.use('/user', user.routes());
// let office = require('./controller/office.js');
// let appointment = require('./controller/appointment.js');
// let caseRouter = require('./controller/case.js');
// let articleRouter = require('./controller/article.js');
// let adminRouter = require('./controller/admin.js');
// router.use('/doctor', doctor.routes());
// router.use('/util', util.routes());
// router.use('/muser', user.routes());
// router.use('/office', office.routes());
// router.use('/appointment', appointment.routes());
// router.use('/case', caseRouter.routes());
// router.use('/article', articleRouter.routes());
// router.use('/admin', adminRouter.routes());
//使用router
app.use(router.routes());
// app.use(router.allowedMethods());
//创建监听 端口号
app.listen(3000);
console.log("server runing")
// app.listen(9527);
/*
    // Post
    router.post('/login',async (ctx,next)=>{
    console.log('login Success!')
    //ctx.request.body 用于获取post的参数
    ctx.body=ctx.request.body;
    })

    // GET
    router.get('/user',async (ctx,next)=>{
    console.log('user Ok!')
    //crx.query 是用于获取get请求的参数
    ctx.body=ctx.query;
    })
*/