/**
 * Created by chenkuan on 16/3/5.
 */
var Card = require('./Card.js');

/**
 * 奏章类 继承于Card类
 * @constructor
 */
function ZouZhang(){
    var self = this;
    self.type="ZouZhang";
    self.useStage=2; //阶段2,朝议阶段才能用
}ZouZhang.prototype = new Card();


function Li(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "礼部奏章";
    this.feature = [];
}

function Guan(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "吏部奏章";
    //this.feature = [];

}

function Bing(count){
    // 若传了数量,则返回一个此类数组
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "兵部奏章";
    this.feature = [
        {name:"北鞑寇边1",desc:"描述描述",trouble:"擅开边衅"},
        {name:"北鞑寇边2",desc:"描述描述",trouble:"擅开边衅"},
        {name:"北鞑寇边3",desc:"描述描述",trouble:"擅开边衅"},
        {name:"北鞑寇边4",desc:"描述描述",trouble:"擅开边衅"},
        {name:"北鞑寇边5",desc:"描述描述",trouble:"擅开边衅"}];
}

function Gong(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "工部奏章";
    this.feature = [];

}

function Hu(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "户部奏章";
    this.feature = [];

}

function Xin(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "刑部奏章";
    this.feature = [];
}


Li.prototype
    = Guan.prototype
    = Bing.prototype
    = Gong.prototype
    = Hu.prototype
    = Xin.prototype
    = new ZouZhang();

module.exports = {
    'Li':Li,
    'Guan':Guan,
    'Bing':Bing,
    'Gong':Gong,
    'Hu':Hu,
    'Xin':Xin
};