/**
 * Created by chenkuan on 16/3/4.
 */
/**
 * 牌类
 * @constructor
 */
function Card() {
    /**
     * 牌组增加卡牌
     * @param argsArr 卡牌数组
     */
    this.add = function (argsArr) {
        Array.prototype.push.apply(this, argsArr);
    };

    /**
     * 创建一定数量的同类卡牌
     * @param card 各类卡牌的构造方法
     * @param count 需要构造的数量
     * @returns {Array}
     */
    this.createCards  = function(card,count){
        var cards = [];
        for(var i=0;i<count;i++){
            var _card = new card();
            // 指定奏章牌特征
            _card.feature = _card.feature?_card.feature[Math.min(i,_card.feature.length-1)]:null;
            cards.push(_card)
        }
        return cards;
    };
}Card.prototype = Array.prototype;

module.exports = Card;