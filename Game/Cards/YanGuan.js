/**
 * Created by chenkuan on 16/3/5.
 */
var Card = require('./Card.js');

/**
 * 言官类
 * @constructor
 */
function YanGuan(){
    this.type="YanGuan";
    this.useStage=2; //阶段2,朝议阶段才能用

    /**
     * 言官技能 - 支持
     */
    this.support = function(){
        this.power = Math.abs(this.power);
    };

    /**
     * 言官技能 - 反对
     */
    this.oppose = function(){
        this.power = 0-Math.abs(this.power);

    }
}YanGuan.prototype = new Card();


function YuShi(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "御史";
    this.power = 1;
}

function DuYuShi(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "都御史";
    this.power = 2
}

function MenSheng(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.name = "门生";
    this.power = 1;
    this.available = true;
}

YuShi.prototype = DuYuShi.prototype = MenSheng.prototype = new YanGuan();

module.exports = {
    'YuShi':YuShi,
    'DuYuShi':DuYuShi,
    'MenSheng':MenSheng
};