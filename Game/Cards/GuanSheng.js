/**
 * Created by chenkuan on 16/3/5.
 */
var Card = require('./Card.js');

/**
 * 官声牌 继承于Card类
 * @constructor
 */
function GuanSheng(){
    var self = this;
    self.type="GuanZhi";
    self.useStage=1; //阶段2,朝议阶段才能用
}GuanSheng.prototype = new Card();

/**
 * 老、直、佞、能、权、忠
 * @constructor
 */
function Lao(){
    this.Type = "老臣";
    this.name = "老臣";
    this.desc = "描述";
}

function Zhi(){
    this.Type = "直臣";
    this.name = "直臣";
    this.desc = "描述";
}

function Ning(){
    this.Type = "佞臣";
    this.name = "佞臣";
    this.desc = "描述";
}

function Neng(){
    this.Type = "能臣";
    this.name = "能臣";
    this.desc = "描述";
}

function Quan(){
    this.Type = "权臣";
    this.name = "权臣";
    this.desc = "描述";
}

function Zhong(){
    this.Type = "忠臣";
    this.name = "忠臣";
    this.desc = "描述";
}


Lao.prototype
    = Zhi.prototype
    = Ning.prototype
    = Neng.prototype
    = Quan.prototype
    = Zhong.prototype
    = new GuanSheng();

module.exports = {
    'Lao':Lao,
    'Zhi':Zhi,
    'Ning':Ning,
    'Neng':Neng,
    'Quan':Quan,
    'Zhong':Zhong
};