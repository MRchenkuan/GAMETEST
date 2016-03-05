/**
 * Created by chenkuan on 16/3/3.
 */

/**
 * 玩家类
 * @param option
 * @constructor
 */
function Player(option){
    this.setOrder=option.setOrder||0;
    this.name=option.name||"系统玩家:"+Math.random();
    this.id=option.uid||"system";
    this.avt=option.avt||"01.jpeg";
    this.stage = 0;
    this.gameid=null;
    this.shengjuan = 4;// 圣眷
    this.handPile = [];// 手牌
    this.mensheng = [];// 门生牌
    this.zouzhang = [];// 奏章牌

}

/**
 * 玩家类的原型
 * @type {{run: Player.run, pass: Player.pass}}
 */
Player.prototype = {
    play:function(game){
        //if(!this.game){throw "玩家与游戏关联失败!"}
        //var game = this.game;
        if(!game){throw "玩家与游戏关联失败!"}
        game.currentStage = 100*(Date.now()-game.stageStartTime)/10000; // 当前阶段的倒计时进度
        //当出牌时间大于10秒时,暂停1秒,跳到下一个阶段
        if(game.currentStage>100){
            // 回合加1
            console.log(this);
            this.stage++;
            // 重置回合时间
            game.stageStartTime= Date.now();
            //当阶段大于4时,当前阶段归0,回合加1,移交控制权
            if(this.stage>3){
                this.stage=0;
                // 轮到下一个玩家
                game.round++;game.roundOwner++;
                // 当当前玩家座位号大于总人数时,回到第一个操作的玩家
                if(game.roundOwner>game.players.length){
                    game.roundOwner=1;
                }
            }

        }
        game.stage = this.stage;// 设置游戏阶段为当前阶段
    },

    pass:function(){

    }
};


module.exports = Player;