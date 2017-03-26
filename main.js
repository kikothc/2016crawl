var async=require('async');
var read=require('./read');
var write=require('./write');
var logger=require('debug')('crawl:main');
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
logger('ready go!!!!');
async.waterfall([
    function(callback){
        read(url,callback)
    },function(movies,callback){
        write(movies,callback)
    }
],function(err,res){
    logger('全部任务执行完毕')
});