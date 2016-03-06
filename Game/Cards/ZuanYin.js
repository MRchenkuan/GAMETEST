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
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "叩阙";
}

function ShiWeiSuCan(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "言尸位素餐事";
}

function ShangShuZiBian(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "上疏自辩";
}

function XiangRui(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "言祥瑞事";
}

function MiZou(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "密奏";
}

function BiXiaQinZheng(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "言陛下勤政事"
}

function ShuHua(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "书画"
}

function ZhuBao(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "珠宝"
}

function DanYao(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "丹药"
}

function JiaRen(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "佳人"
}

function DingYou(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "丁忧"
}

function TingXZhang1(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "廷杖\"着实打\""
}

function TingXZhang2(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "廷杖\"用心打\""
}

function JianXiuLinQin(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "监修陵寝"
}

function DongChang(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "提督东厂"
}

function JinYiWei(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "授锦衣卫"
}

function DuoQin(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "夺情"
}

function DaoGe(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "倒阁"
}

function DaJinCha(count){
    if(typeof count ==="number") return this.createCards(arguments.callee,count);
    this.text = "大京察"
}

KouQue.prototype
    = ShiWeiSuCan.prototype
    = ShangShuZiBian.prototype
    = XiangRui.prototype
    = MiZou.prototype
    = BiXiaQinZheng.prototype
    = ShuHua.prototype
    = ZhuBao.prototype
    = DanYao.prototype
    = JiaRen.prototype
    = DingYou.prototype
    = TingXZhang1.prototype
    = TingXZhang2.prototype
    = JianXiuLinQin.prototype
    = DongChang.prototype
    = JinYiWei.prototype
    = DuoQin.prototype
    = DaoGe.prototype
    = DaJinCha.prototype
    = new ZuanYin();

module.exports = {
    'KouQue':KouQue,
    'ShiWeiSuCan':ShiWeiSuCan,
    'ShangShuZiBian':ShangShuZiBian,
    'XiangRui':XiangRui,
    'MiZou':MiZou,
    'BiXiaQinZheng':BiXiaQinZheng,
    'ShuHua':ShuHua,
    'ZhuBao':ZhuBao,
    'DanYao':DanYao,
    'JiaRen':JiaRen,
    'DingYou':DingYou,
    'TingXZhang1':TingXZhang1,
    'TingXZhang2':TingXZhang2,
    'JianXiuLinQin':JianXiuLinQin,
    'DongChang':DongChang,
    'JinYiWei':JinYiWei,
    'DuoQin':DuoQin,
    'DaoGe':DaoGe,
    'DaJinCha':DaJinCha
};