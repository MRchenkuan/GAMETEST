/**
 * Created by chenkuan on 16/3/3.
 */

var Msg = require('./Msg.js');
var CardsPool = require('./CardsPool.js');
var Player = require('./Player.js');
/**
 * 游戏类
 * @param option
 * @constructor
 */
function Game(option){
    var game = this;
    game.round = 1;// 回合数
    game.roundOwner = 1; // 出牌的玩家位置号
    game.stage = 1;//0.回合结束 1.摸牌阶段,2朝议阶段,3钻营阶段,4票拟阶段,5披红阶段,6结算阶段
    game.maxPlayers = 6;
    game.currentStage = 0; //当前阶段的游戏进度 0-100
    game.stageStartTime = Date.now(); //当前阶段开始时间
    game.PoolId = 0; // 游戏所属线程号
    game.isAlive=true; // 游戏是否活着
    game.actived=false; // 游戏是否正在运行
    game.stack_action=[];// 钻营牌+言官牌堆
    game.stack_zouzhang=[];// 奏章牌堆
    game.discard = [];// 弃牌堆
    game.handLimit =5;// 每位玩家的手牌上限
    game.nowPlayer=null;

    game.over = function(){
        game.isAlive=false;
    };
    game.players = [];
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
     * @returns {Msg|exports}
     */
    game.start = function(){
        if(game.actived)return new Msg("游戏正在运行请勿重复启动");
        if(game.players.length<4)return new Msg("玩家人数不足4人,请加入玩家");
        // 0.新建牌组,并洗牌
        game.stack_action = new CardsPool.actions();
        game.stack_zouzhang = new CardsPool.zouzhang();
        game.stack_action.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});
        game.stack_zouzhang.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});
        // 1.分配玩家座位
        for(var i=0;i<game.players.length;i++){
            game.players[i].setOrder = i;
            if(!game.players[i]){
                return new Msg("人数不足 "+i+" 号位 没人");
            }
        }
        // 2.设置游戏参数
        game.actived=true;

        // 3.发牌
        for(i=0;i<game.players.length;i++){
            for(var j=0;j<game.handLimit;j++){
                // 先发钻营牌,每人5长
                game.players[i].handPile.push(game.stack_action.shift());
            }
        }
        // 4.开始游戏
        game.run();

        return new Msg("游戏运行中...");
    };

    /**
     * 游戏主循环
     */
    game.run = function(){
        game.timer.startCount();// 开始游戏计时
        var _timer = setInterval(function () {
            if(!game.actived)clearInterval(_timer);// 游戏生命周期检查
            game.nowPlayer = game.players[game.roundOwner-1]; // 获取当前玩家
            game.currentStage = game.timer.getProgress(); // 获取当前阶段的倒计时进度
            //当出牌时间100%时,跳到下一个阶段
            if(game.currentStage>100){
                game.nowPlayer.stage++;//玩家阶段+1
                game.timer.reset(); // 重置计时器

                // 当玩家阶段大于4时,当前阶段归0,回合加1,移交控制权
                if(game.nowPlayer.stage>3){
                    // 轮到下一个玩家
                    game.round++;game.roundOwner++;
                    // 当当前玩家座位号大于总人数时,回到第一个操作的玩家
                    if(game.roundOwner>game.players.length){
                        game.roundOwner=1;
                    }
                }

            }
            game.stage = this.stage;// 设置游戏阶段为当前阶段
        },13);


    };

    /**
     * 游戏计时器
     */
    game.timer = {
        // 重新计时
        reset:function(){
            if(!this.startTime)throw "计时器未开始";
            this.progress = 0;
            this.startTime = Date.now();
        },
        /**
         * 获取进度百分比，当进度超过100时执行回调
         * @param callback
         */
        getProgress : function(callback){
            if(!this.startTime)throw "计时器未开始";
            this.progress =  100*(Date.now()-this.startTime)/10000;
            if(callback && this.progress>=1){
                callback()
            }
            return this.progress;
        },
        // 开始计时
        startCount:function(){
            this.startTime = Date.now();
        },
        startTime:null,
        progress:0
    }

}

var game = new Game({player:6});
game.addPlayer(new Player({uid:2,avt:99}));
game.addPlayer(new Player({uid:2,avt:99}));
game.addPlayer(new Player({uid:2,avt:99}));
game.addPlayer(new Player({uid:2,avt:99}));
game.start();
console.log(game);
module.exports = Game;