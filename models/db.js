// http://www.ituring.com.cn/article/5976
// http://www.cnblogs.com/yuanzm/p/3770986.html
var settings = require('./settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}), {safe: true});