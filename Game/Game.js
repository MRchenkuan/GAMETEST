/**
 * Created by chenkuan on 16/3/3.
 */

var Msg = require('./Msg.js');
/**
 * 游戏类
 * @param option
 * @constructor
 */
function Game(option){
    var game = this;
    game.round = 1;// 回合数
    game.roundOwner = 1; // 出牌的玩家位置号
    game.stage = 1;//0.回合结束 1.摸牌阶段,2出牌阶段,3弃牌阶段
    game.maxPlayers = 6;
    game.currentStage = 0; //当前阶段的游戏进度 0-100
    game.stageStartTime = Date.now(); //当前阶段开始时间
    game.PoolId = 0; // 游戏所属线程号
    game.isAlive=true; // 游戏是否活着
    game.actived=false; // 游戏是否正在运行

    game.over = function(){
        game.isAlive=false;
    };
    game.players = [];
    game.players.length=option.player||0;
    /**
     * 添加玩家
     */
    game.addPlayer = function (player) {
        game.players.push(player);// 将玩家加入游戏
        player.gameid = game.PoolId; // 将玩家的所属游戏设置为当前游戏,不能直接游戏对象,因为游戏对象需要引用玩家对象,会导致循环引用
        return player;
    };
    /**
     * 开始游戏
     * @returns {Msg|exports|module.exports}
     */
    game.start = function(){
        if(game.actived)return new Msg("游戏正在运行请勿重复启动");
        if(game.players.length<4)return new Msg("玩家人数不足4人,请加入玩家");
        // 1.分配玩家座位

        for(var i=0;i<game.players.length;i++){
            game.players[i].setOrder = i;
            if(!game.players[i]){
                return new Msg("人数不足 "+i+" 号位 没人");
            }
        }

        // 2.设置游戏参数
        game.actived=true;

        // 3.开始游戏
        var _timer = setInterval(function () {
            if(!game.actived)clearInterval(_timer);// 游戏生命周期检查
            var player = game.players[game.roundOwner-1];
            player.play(game);
        },13);

        return new Msg("游戏运行中...");
    };

}
module.exports = Game;