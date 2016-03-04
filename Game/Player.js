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
    this.play = function(game){

    };
    this.pass = function(game){

    }
}


module.exports = Player;