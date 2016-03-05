/**
 * Created by chenkuan on 16/3/5.
 */

var Card = require('./Cards/Card');
var ZouZhang = require('./Cards/ZouZhang.js');
var YanGuan = require('./Cards/YanGuan.js');
var ZuanYin = require('./Cards/ZuanYin.js');

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

    return cards
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
    return cards

};


module.exports = CardsPool;