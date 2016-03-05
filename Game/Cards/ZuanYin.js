/**
 * Created by chenkuan on 16/3/5.
 */

var Card = require('./Card.js');
/**
 * 钻营类
 * @constructor
 */
function ZuanYin(){
    this.type="ZuanYin";
    this.useStage=3; //阶段3,钻营阶段才能用
}ZuanYin.prototype = new Card();

function KouQue(count){
    this.text = "叩阙";
    this.power = 1;
}

function ShiWeiSuCan(count){
    this.text = "言尸位素餐事";
    this.power = 2
}

function ShangShuZiBian(count){
    this.text = "上疏自辩";
    this.power = 1;
}

KouQue.prototype
    = ShiWeiSuCan.prototype
    = ShangShuZiBian.prototype
    = new ZuanYin();

module.exports = {
    'KouQue':KouQue,
    'ShiWeiSuCan':ShiWeiSuCan,
    'ShangShuZiBian':ShangShuZiBian
};