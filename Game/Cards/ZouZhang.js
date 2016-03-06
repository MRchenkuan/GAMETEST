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
    this.feature = [
        {name:"外夷入贡",desc:"描述描述",trouble:"外结蕃邦"},
    ];
}

function Guan(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "吏部奏章";
    this.feature = [
        {name:"整顿吏治",desc:"描述描述",trouble:"打击异己"},
        {name:"整顿吏治",desc:"描述描述",trouble:"打击异己"}
    ];

}

function Bing(count){
    // 若传了数量,则返回一个此类数组
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "兵部奏章";
    this.feature = [
        {name:"编练新军",desc:"描述描述",trouble:"穷兵黩武"},
        {name:"整顿吏治",desc:"描述描述",trouble:"打击异己"},
        {name:"北鞑寇边4",desc:"描述描述",trouble:"擅开边衅"},
        {name:"北鞑寇边4",desc:"描述描述",trouble:"擅开边衅"},
        {name:"北鞑寇边5",desc:"描述描述",trouble:"擅开边衅"}];
}

function Gong(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "工部奏章";
    this.feature = [
        {name:"兴建宫殿",desc:"描述描述",trouble:"不恤民力"},
        {name:"兴修水利",desc:"描述描述",trouble:"不恤民力"},
    ];

}

function Hu(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "户部奏章";
    this.feature = [
        {name:"丈田清册",desc:"描述描述",trouble:"不恤民力"},
    ];

}

function Xin(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.dept = "刑部奏章";
    this.feature = [
        {name:"开放海禁",desc:"描述描述",trouble:"里通倭寇"},

    ];
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