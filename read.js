/**
 * @param url 读取的URL地址
 * @param callback 回调
 * 读取URL响应体 并且提取其中的电影列表传给callback
 */
    var cheerio=require('cheerio')
var request=require('request');
var iconv=require('iconv-lite');
var debug=require('debug');
var logger=debug('crawl:read');
module.exports=function(url,callback){
    request({url,encoding:null},function(err,response,body){
        body=iconv.decode(body,'gbk');
        var movies=[];
        var $=cheerio.load(body);
        $('.keyword .list-title').each(function(index,item) {
            var move={
                name:$(item).text(),
                url:$(item).attr('href')
            };
            logger(`读到电影:${move.name}`);
            movies.push(move)
        });
        callback(err,movies)
    })
};
//module .exports('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',function(err,movies){console.log(movies)})