/**
 * Created by chenkuan on 16/3/5.
 */
var Card = require('./Card.js');

/**
 * 奏章类 继承于Card类
 * @constructor
 */
function GuanZhi(){
    var self = this;
    self.type="GuanZhi";
    self.useStage=1; //阶段2,朝议阶段才能用
}GuanZhi.prototype = new Card();


function Li(){
    this.dept = "礼部";
    this.name = "礼部尚书";
    this.desc = "描述";
}

function Guan(){
    this.dept = "吏部";
    this.name = "吏部尚书";
    this.desc = "描述";
}

function Bing(){
    this.dept = "兵部";
    this.name = "兵部尚书";
    this.desc = "描述";
}

function Gong(){
    this.dept = "工部";
    this.name = "工部尚书";
    this.desc = "描述";
}

function Hu(){
    this.dept = "户部";
    this.name = "户部尚书";
    this.desc = "描述";
}

function Xin(count){
    this.dept = "刑部";
    this.name = "刑部尚书";
    this.desc = "描述";
}


Li.prototype
    = Guan.prototype
    = Bing.prototype
    = Gong.prototype
    = Hu.prototype
    = Xin.prototype
    = new GuanZhi();

module.exports = {
    'Li':Li,
    'Guan':Guan,
    'Bing':Bing,
    'Gong':Gong,
    'Hu':Hu,
    'Xin':Xin
};