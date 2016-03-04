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
    var self = this;
    self.round = 1;// 回合数
    self.roundOwner = 1; // 出牌的玩家位置号
    self.stage = 1;// 1.摸牌阶段,2出牌阶段,3弃牌阶段
    self.currentStage = 1;
    self.stageStartTime = Date.now();
    self.PoolId = 0;
    self.isAlive=true;
    self.actived=false;
    self.valint=0;
    self.valstring="hello game";
    self.over = function(){
        self.isAlive=false;
    };
    self.players = [];
    self.players.length=option.player||6;
    /**
     * 添加玩家
     */
    self.addPlayer = function (player) {
        self.players[player.setOrder-1] = player
    };
    self.start = function(){
        for(var i=0;i<self.players.length;i++){
            if(!self.players[i]){
                return new Msg("人数不足 "+i+" 号位 没人");
            }
        }
        self.actived=true;

        // 开始计时
        var _timer = setInterval(function () {
            if(!self.actived)clearInterval(_timer);
            self.currentStage = 100*(Date.now()-self.stageStartTime)/10000;
            console.log(self.roundOwner,self.stage,self.currentStage);
            //当出牌时间大于10秒时,暂停1秒,跳到下一个阶段
            if(self.currentStage>100){
                // 回合加1
                self.stage++;
                // 重置回合时间
                self.stageStartTime= Date.now();
                //当阶段大于4时,回合加1,移交控制权
                if(self.stage>3){
                    self.stage=1;
                    // 轮到下一个玩家
                    self.round++;self.roundOwner++;
                    // 当当前玩家座位号大于6时,回到第一个操作的玩家
                    if(self.roundOwner>6){
                        self.roundOwner=1;
                    }
                }

            }
        },13);
    };

}
module.exports = Game;