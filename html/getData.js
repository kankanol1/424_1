//console.log("你好，祖国！");

/*
    爬取新闻数据


*/
//nodeJS单线程
//模块引入方法CommandJS模块化标准
const http = require("http");
const url = "http://sports.sina.com.cn/nba/1.shtml";

http.get(url,(res)=>{
    var html = "";
    //有数据发送过来的时候
    res.on("data",(chunk)=>{
        html += chunk;
    });
    //请求数据全部发送完毕
    res.on("end",()=>{
        console.log(html);
    });

}).on("error",(e)=>{
    console.log('error:${e.message}');
});