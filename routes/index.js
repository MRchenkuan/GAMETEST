var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');
var Msg = require('../Game/Msg.js');
var Player = require('../Game/Player.js');

// 游戏加载
var GamePools = require('../Game/GamePools.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/game",function(req,res,next){
    res.render('GameTable',{title:'游戏主页'});
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
    //res.render('report',{"data":JSON.stringify(game, null, 4)});
});


/**
 * 创建一个游戏
 */
router.get("/create",function(req,res,next){
    var gameid = req.query['id'];
    if(!gameid){
        return res.send(new Msg("请传入游戏id"));
    }

    if(GamePools.POOLS[gameid]){
        return res.send(new Msg("游戏已经存在,请换个ID"));
    }

    // 创建一个游戏
    console.log("开始创建游戏");
    var game = GamePools.createGame({player:6,gameid:gameid});

    // 增加6个玩家
    game.addPlayer(new Player({setOrder:1}));
    game.addPlayer(new Player({setOrder:2}));
    game.addPlayer(new Player({setOrder:3}));
    game.addPlayer(new Player({setOrder:4}));
    game.addPlayer(new Player({setOrder:5}));
    game.addPlayer(new Player({setOrder:6}));
    game.start();
    // 返回结果
    res.render('report',{"data":JSON.stringify(game, null, 4)});
});

module.exports = router;
