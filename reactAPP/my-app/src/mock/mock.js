import Mock from "mockjs"
Mock.mock("https://api.myjson.com/bins/d4zq5",{
    "list|10-20":[
        {
        "name":"@last @first",
        "time":"@time(hh:mm:ss)",
        "cname":"@cname",
        "img":"@img(100*100)"
        },   
    ]
})
let Random = Mock.Random;
let arr = [];
for(let i=0;i<20;i++){
    arr.push({
        name:Random.cname,
        img:Random.dataImage('100*100','ou'),
        address:Random.province(),
    })
}
Mock.mock("https://www.fellow32.com/getdate",{
    data:arr
})