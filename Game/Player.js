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
    this.guanzhi = "无";// 官职
    this.guansheng = "新人";// 官声

}

/**
 * 玩家类的原型
 * @type {{run: Player.run, pass: Player.pass}}
 */
Player.prototype = {
    /**
     * 使用卡牌
     * @param card
     */
    use:function(game,card){
        //使用卡牌
        card.use();
        //重置时间
        game.timer.reset();

    },

    pass:function(){

    }
};


module.exports = Player;