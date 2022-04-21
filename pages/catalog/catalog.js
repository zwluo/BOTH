// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  openStory(event) {
    wx.navigateTo({
      url: '../tale/tale?id=' + event.currentTarget.dataset.storyId + '&type=' + event.currentTarget.dataset.storyType
    })
  },
  onLoad(options) {
    var catalog = [{"title":"前言","id":"1"},{"title":"佩尔·京特","id":"2"},{"title":"山村里的猫","id":"3"},{"title":"不愿怀孕的女人","id":"4"},{"title":"渔夫的儿子","id":"5"},{"title":"换成烟草的少年","id":"6"},{"title":"三重巨浪","id":"7"},{"title":"会变化的小伙子","id":"8"},{"title":"异母姐妹","id":"9"},{"title":"偷黄油的贼","id":"10"},{"title":"魔岛","id":"11"},{"title":"鹅蛋儿大力士","id":"12"},{"title":"雄猫和蓝山的魔鬼","id":"13"},{"title":"红玫瑰","id":"14"}];
    if ("2" == options.id) {
      catalog = [{"title":"老妖婆和她的桦树皮鞋","id":"15"},{"title":"农夫和鬼的故事","id":"16"},{"title":"三个哥哥的妹妹","id":"17"},{"title":"担忧怀上身孕的牧师","id":"18"},{"title":"老狼的祷告","id":"19"},{"title":"小偷和国王","id":"20"},{"title":"公鸡得了个第一","id":"21"},{"title":"吝啬鬼的遗嘱","id":"22"},{"title":"瞎子船长","id":"23"},{"title":"恶龙和农民","id":"24"},{"title":"款待牧师的烤肉","id":"25"},{"title":"托尔斯的巨人","id":"26"},{"title":"狮子","id":"27"},{"title":"农民的儿子当了侍从官","id":"28"},{"title":"国王的兔子","id":"29"},{"title":"看不见的仆人","id":"30"},{"title":"无敌的大力士","id":"31"},{"title":"森林大仙","id":"32"},{"title":"国王的九个孙子","id":"33"},{"title":"灰姑娘","id":"34"}];
    } else if ("3" == options.id) {
      catalog = [{"title":"小越桔","id":"35"},{"title":"熊的来历","id":"36"},{"title":"花纹松鼠和熊","id":"37"},{"title":"农夫和熊","id":"38"},{"title":"野熊和三姐妹","id":"39"},{"title":"仙鹤教狐狸学飞行","id":"40"},{"title":"渔鹰和绒鸭","id":"41"},{"title":"动物和魔鬼的故事","id":"42"},{"title":"王子和海精灵","id":"43"},{"title":"我养的蜜蜂","id":"44"},{"title":"求婚的小伙子","id":"45"},{"title":"雷火","id":"46"},{"title":"骑士、魔鬼和爱斗嘴的妻子","id":"47"},{"title":"伯爵的儿子和熊","id":"48"},{"title":"荷尔摩勒——一个愚人村","id":"49"},{"title":"着魔的小学徒","id":"50"},{"title":"海岛上的三角房子","id":"51"},{"title":"勇敢的魏埃","id":"52"},{"title":"兄弟俩","id":"53"},{"title":"神斧","id":"54"},{"title":"大力士亚诺斯","id":"55"},{"title":"圆石","id":"56"},{"title":"黄昏、子夜和曙光","id":"57"},{"title":"熊儿","id":"58"}];
    } else if ("4" == options.id) {
      catalog = [{"title":"西兰岛的传说","id":"59"},{"title":"海峡","id":"60"},{"title":"国王戈姆和蒂娜","id":"61"},{"title":"被埋葬的海男","id":"62"},{"title":"是鸡蛋还是马","id":"63"},{"title":"小侏儒和啤酒桶","id":"64"},{"title":"王子的羽衣","id":"65"},{"title":"去磨房的途中","id":"66"},{"title":"饶舌的盖尔达","id":"67"},{"title":"梅特姑娘","id":"68"},{"title":"懒鬼拉尔斯","id":"69"},{"title":"王子与巨人","id":"70"},{"title":"古怪的公主","id":"71"},{"title":"大公羊","id":"72"},{"title":"汉斯和野猪","id":"73"},{"title":"妖龙王子","id":"74"},{"title":"黑船","id":"75"}];
    } else if ("5" == options.id) {
      catalog = [{"title":"被遗弃的孩子","id":"76"},{"title":"小船的对话","id":"77"},{"title":"乌鸦的故事","id":"78"},{"title":"巴拉达维克的海牛","id":"79"},{"title":"红头鲸鱼","id":"80"},{"title":"彼尔嘉姆的灵魂是怎样上天的","id":"81"},{"title":"捕捉月亮的故事","id":"82"},{"title":"捡地衣的人","id":"83"},{"title":"神磨","id":"84"},{"title":"雇工的女儿赫尔嘉","id":"85"},{"title":"穷老汉的女儿们","id":"86"},{"title":"母牛波科拉的故事","id":"87"},{"title":"农民的女儿凯娣律杜","id":"88"},{"title":"遭魔的王子","id":"89"},{"title":"报恩的鬼","id":"90"},{"title":"寒冷三兄弟","id":"91"},{"title":"母牛与孤儿","id":"92"},{"title":"金泪","id":"93"},{"title":"肯特尼特历险记","id":"94"},{"title":"七兄弟与七姐妹","id":"95"},{"title":"善良的后母","id":"96"}];
    } else if ("6" == options.id) {
      catalog = [{"title":"圣山","id":"97"},{"title":"阿库山上的野鹿","id":"98"},{"title":"造狼","id":"99"},{"title":"虱子的来历","id":"100"},{"title":"一个又聋又瞎的人","id":"101"},{"title":"两个捕鹿的人","id":"102"},{"title":"斯塔洛的新娘","id":"103"},{"title":"娶了母亲的小伙子","id":"104"},{"title":"阿斯拉克的替身斯塔洛","id":"105"},{"title":"结婚而不要孩子的丈夫","id":"106"},{"title":"一个诺阿登人的葬礼","id":"107"},{"title":"嘲笑太阳、月亮和北极光的人","id":"108"}];
    } else if ("7" == options.id) {
      catalog = [{"title":"法罗岛上的森林","id":"109"},{"title":"斯勒塔纳的魔鬼","id":"110"},{"title":"弗拉蒂斯和女妖","id":"111"},{"title":"海中怪兽克拉普斯","id":"112"},{"title":"海豹姑娘","id":"113"},{"title":"海上男妖","id":"114"},{"title":"海上女妖","id":"115"},{"title":"小侏儒","id":"116"},{"title":"鹿人","id":"117"},{"title":"护家精灵和聪明的玛尔蓉","id":"118"},{"title":"接生婆埃尔塞巴","id":"119"},{"title":"金牛角","id":"120"},{"title":"胜利石","id":"121"},{"title":"海边的牛(曹文轩)","id":"122"}];
    }

    this.setData({
      logs: catalog,
      type: options.id
    })

    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return {
    //       date: util.formatTime(new Date(log)),
    //       timeStamp: log
    //     }
    //   })
    // })
  }
})
