# 2016crawl
简介
学习nodejs时写的一个网页爬虫利用node的http模块请求网页内容，使用es6的promise对象处理异步回调，将数据根据学习人数排序输出，并利用node的fs模块将数据保存至json文件中。

技术栈
nodejs + es6 + promise
主要功能

爬取网上的信息
将课程信息按照观看人数排序输出到console
将信息保存至本地json文件中

总结
promise的运用：在获取html的promise里面再new一个获取人数的分支promise，待这个分支promise处理后再执行获取html的promise，将；两次请求的数据数据放入对象中传入then处理。
js里的回调非常常见，但是多层回调嵌套便回形成回调地狱，node里早就开始应用promise，js里也有async.js等库，es6终于将其标准化了。异步编程真的太反人类了，很多时候不知道异步操作什么时候完成，用promise等方式将异步操作流程化是非常有必要的。es6有promise/generator,es7还有async/await，要学的还有很多。
除了需要用get获取页面html还要用ajax获取观看数据，并且是多个页面同时请求，因此需要所有异步请求完成再来进行数据的处理输出
