var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');
var Msg = require('../Game/Msg.js');
var Player = require('../Game/Player.js');

// 游戏池加载
var GamePools = require('../Game/GamePools.js');

// 游戏临时对象
var _data = {
    users:{
        '01':"01.jpeg",
        '02':"02.jpeg",
        '03':"03.jpeg",
        '04':"04.jpeg",
        '05':"01.jpeg",
        '06':"02.jpeg"
    }
};
// ==========

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/game-:gameid",function(req,res,next){
    var game = GamePools.POOLS[req.params.gameid];
    if(!game)return res.send(new Msg("游戏不存在"));
    res.render('GameTable',{gameid:req.params["gameid"]});
});

/**
 * 获取游戏执行池信息
 */
router.get("/getinfo",function(req,res,next){
    var gameid = req.query['id'];
    var data = req.query;
    console.log(gameid);
    if(!gameid){return res.send(new Msg("请传入游戏id"))}
    if(!GamePools.POOLS[gameid]){return res.send(new Msg("游戏不存在"))}
    var game = GamePools.POOLS[gameid];
    res.send(game);
});

router.get("/info",function(req,res,next){
    var gameid = req.query['id'];
    var data = req.query;
    console.log(gameid);
    if(!gameid){return res.send(new Msg("请传入游戏id"))}
    if(!GamePools.POOLS[gameid]){return res.send(new Msg("游戏不存在"))}
    var game = GamePools.POOLS[gameid];
    res.render('report',{"data":JSON.stringify(game, null, 4)});
});


/**
 * 创建一个游戏
 */
router.get("/create-:gameid-:id",function(req,res,next){
    var gameid = req.params.gameid;
    var hostid = req.params.id;

    if(!gameid){
        return res.send(new Msg("请传入游戏id"));
    }

    if(!hostid){
        return res.send(new Msg("确定房主ID"));
    }

    if(GamePools.POOLS[gameid]){
        return res.send(new Msg("游戏已经存在,请换个ID"));
    }
    // 创建一个游戏
    console.log("开始创建游戏");
    var game = GamePools.createGame({gameid:gameid});
    game.addPlayer(new Player({uid:hostid,avt:_data.users[hostid]}));

    // 返回结果
    res.render('GameTable-ready',{
        "data":JSON.stringify(game, null, 4),
        "gameid":req.params.gameid
    });
});

/**
 * 加入一个游戏
 */

router.get("/join-:gameid-:uid",function(req,res,next){
    var game = GamePools.POOLS[req.params.gameid];
    if(!game)return res.send(new Msg("游戏不存在"));
    if(game.players.length>=game.maxPlayers)return new Msg("游戏已满");
    var uid = req.params.uid;
    console.log(_data.users[uid]);
    game.addPlayer(new Player({uid:uid,avt:_data.users[uid]}));
    //res.render('report',{"data":JSON.stringify(game, null, 4)});
    game.actived
        ? res.render('GameTable',{"gameid":req.params.gameid})
        : res.render('GameTable-ready',{
            "data":JSON.stringify(game, null, 4),
            "gameid":req.params.gameid
        });
});


/**
 * 开始游戏
 */

router.get("/start-:gameid",function(req,res,next){
    var gameid = req.params.gameid;
    console.log(gameid);
    if(!gameid){
        return res.send(new Msg("请传入游戏id"));
    }
    var game = GamePools.POOLS[gameid];
    if(!game){
        return res.send(new Msg("游戏不存在,请换个ID",GamePools));
    }
    var rst = game.start();
    res.render('report',{"data":JSON.stringify(new Msg(rst,game), null, 4)});
});

/**
 * 动作请求
 */
router.get("/usercard-:gameid-:uid-:target",function(req,res,next){
    var gameid = req.params.gameid;
    var actor = req.params.uid;
    var target = req.params.target;
});










module.exports = router;
