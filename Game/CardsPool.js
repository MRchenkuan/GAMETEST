/**
 * Created by chenkuan on 16/3/5.
 */

var Card = require('./Cards/Card');
var ZouZhang = require('./Cards/ZouZhang.js');
var YanGuan = require('./Cards/YanGuan.js');
var ZuanYin = require('./Cards/ZuanYin.js');
var GuanZhi = require('./Cards/Guanzhi.js');
var GuanSheng = require('./Cards/GuanSheng.js');

var CardsPool ={};
CardsPool.zouzhang = function () {
    var cards = new Card();
    // 奏章牌
    cards.add(new ZouZhang.Bing(6));
    cards.add(new ZouZhang.Gong(6));
    cards.add(new ZouZhang.Guan(6));
    cards.add(new ZouZhang.Xin(6));
    cards.add(new ZouZhang.Li(6));
    cards.add(new ZouZhang.Hu(6));

    return cards;
};

CardsPool.actions = function(){
    var cards = new Card();
    // 言官牌
    cards.add(new YanGuan.DuYuShi(10));
    cards.add(new YanGuan.YuShi(36));
    //cards.add(new YanGuan.MenSheng(13));

    // 钻营牌
    cards.add(new ZuanYin.KouQue(2));
    cards.add(new ZuanYin.ShiWeiSuCan(2));
    cards.add(new ZuanYin.ShangShuZiBian(2));
    cards.add(new ZuanYin.XiangRui(2));
    cards.add(new ZuanYin.MiZou(2));
    cards.add(new ZuanYin.BiXiaQinZheng(2));
    cards.add(new ZuanYin.ShuHua(3));
    cards.add(new ZuanYin.DanYao(3));
    cards.add(new ZuanYin.JiaRen(3));
    cards.add(new ZuanYin.DingYou(6));
    cards.add(new ZuanYin.TingXZhang1(6));
    cards.add(new ZuanYin.TingXZhang2(3));
    cards.add(new ZuanYin.JianXiuLinQin(3));
    cards.add(new ZuanYin.DongChang(3));
    cards.add(new ZuanYin.JinYiWei(3));
    cards.add(new ZuanYin.DuoQin(3));
    cards.add(new ZuanYin.DaoGe(3));
    cards.add(new ZuanYin.DaJinCha(1));
    return cards;

};

CardsPool.GuanZhi = function () {
    var cards = new Card();
    // 身份牌
    cards.add(new GuanZhi.Bing());
    cards.add(new GuanZhi.Gong());
    cards.add(new GuanZhi.Li());
    cards.add(new GuanZhi.Hu());
    cards.add(new GuanZhi.Xin());
    cards.add(new GuanZhi.Guan());
    return cards;
};

CardsPool.GuanSheng = function () {
    var cards = new Card();
    // 身份牌
    cards.add(new GuanSheng.Lao());
    cards.add(new GuanSheng.Neng());
    cards.add(new GuanSheng.Ning());
    cards.add(new GuanSheng.Quan());
    cards.add(new GuanSheng.Zhi());
    cards.add(new GuanSheng.Zhong());
    return cards;
};


module.exports = CardsPool;