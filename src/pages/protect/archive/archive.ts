import ht1 from './asset/images/Hoolock_tianxing_1.jpg';
import ht2 from './asset/images/Hoolock_tianxing_2.jpg';
import hl1 from './asset/images/Hylobates_lar_1.jpg';
import hl2 from './asset/images/Hylobates_lar_2.jpg';
import nc1 from './asset/images/Nomascus_concolor_1.jpg';
import nc2 from './asset/images/Nomascus_concolor_2.jpg';
import nh1 from './asset/images/Nomascus_hainanus_1.jpg';
import nh2 from './asset/images/Nomascus_hainanus_2.jpg';
import nl1 from './asset/images/Nomascus_leucogenys_1.jpg';
import nl2 from './asset/images/Nomascus_leucogenys_2.jpg';
import nn1 from './asset/images/Nomascus_nasutus_1.jpg';
import nn2 from './asset/images/Nomascus_nasutus_2.jpg';

const data = [
  {
    key: 0,
    name: '天行长臂猿',
    latin: 'Hoolock tianxing',
    classification: {
      family: '长臂猿',
      genus: '白眉长臂猿',
    },
    body: {
      weight: '6 - 8.5',
      height: '60 - 90',
    },
    IUCN: 'EN（濒危），被列为全球最濒危的25种灵长类',
    chineseLevel: '1级',
    distribution: '中国、缅甸。中国分布：云南西部怒江以西的保山、腾冲和盈江',
    amount: '不足150只',
    feature:
      '雌雄异色，成年雄性褐黑色或暗褐色，有两条明显分开的白色眼眉，头顶的毛较长而披向后方，故头顶扁平。虽然都有着标志性的白色眉毛，但天行长臂猿的眉毛并没有东部白眉长臂猿那么厚重。雄性天行长臂猿的下巴上没有和眉色配套的白胡子，而雌性天行长臂猿的白眼圈也不像东部白眉长臂猿的那么浓密。',
    imageCount: 2,
    images: [ht1, ht2],
  },
  {
    key: 1,
    name: '海南长臂猿',
    latin: 'Nomascus hainanus',
    classification: {
      family: '长臂猿',
      genus: '冠长臂猿',
    },
    body: {
      weight: '7 — 10',
      height: '40 — 50',
    },
    IUCN: '极危',
    chineseLevel: '1级',
    distribution: '海南岛',
    amount: '6群37只',
    feature:
      '雌雄异色。雄性：通体黑色，体形比母猿略小，头顶有短而直立冠状簇毛，如怒发冲冠。雌性：全身金黄，体背为灰黄、棕黄或橙黄色，头顶有棱形或多角形黑色的冠斑，恰似戴了顶小黑帽。海南黑冠长臂猿一生中要变换几次颜色，刚出生时为金黄色，长到6个月开始变成黑色，到6-7岁性成熟毛色才渐分雌雄，雌猿经过一年多的时间变成金黄色的着装，而雄猿却还是一身黑衣。',
    imageCount: 2,
    images: [nh1, nh2],
  },
  {
    key: 2,
    name: '东黑冠长臂猿',
    latin: 'Nomascus nasutus',
    classification: {
      family: '长臂猿',
      genus: '冠长臂猿',
    },
    body: {
      weight: '7 - 10',
      height: '40 - 55',
    },
    IUCN: '极危',
    chineseLevel: '1级',
    distribution: '中国、越南',
    amount: '33只',
    feature:
      '雌性异色。雄性：全身为黑色，胸部有部分浅褐色毛发，头顶冠毛不长。雌性：体背灰黄、棕黄或橙黄色，脸周有白色长毛，头顶冠斑面积较大，通常能超过肩部，达到背部中央，胸部有部分浅褐色毛发。不同于其它冠长臂猿属同类的是，雌性在接近成年前才完成被毛的变色。东黑冠长臂猿也存在一夫二妻的家庭结构。',
    imageCount: 2,
    images: [nn1, nn2],
  },
  {
    key: 3,
    name: '西黑冠长臂猿',
    latin: 'Nomascus concolor',
    classification: {
      family: '长臂猿',
      genus: '冠长臂猿',
    },
    body: {
      weight: '7 - 10',
      height: '40 - 55',
    },
    IUCN: '极危',
    chineseLevel: '1级',
    distribution:
      '中国、老挝、越南。中国分布：云南中部无量山、哀牢山，云南南部黄连山、西隆山、芭蕉河，云南西部永德大雪山',
    amount: '约1400只',
    feature:
      '西黑冠长臂猿有4个亚种。雌雄异色，毛被短而厚密。幼体刚出生均为淡黄色，在1岁左右逐渐变成黑色，雄性一直保持黑发至成年，雌性性成熟时则大部分体毛由黑色逐渐变成灰黄、棕黄或橙黄色（仅头顶、胸腹部遗留黑色）。成年雄性头顶有短而直立的冠状簇毛；成年雌性头顶有棱形或多角形黑褐色冠斑，随着年龄的增长，雌性胸腹黑褐色毛发逐渐增多。西黑冠长臂猿除典型的一夫一妻家庭结构外，还存在一夫二妻的现象。',
    imageCount: 2,
    images: [nc1, nc2],
  },
  {
    key: 4,
    name: '北白颊长臂猿',
    latin: 'Nomascus leucogenys',
    classification: {
      family: '长臂猿',
      genus: '冠长臂猿',
    },
    body: {
      weight: '7 - 10',
      height: '40 - 50',
    },
    IUCN: '极危',
    chineseLevel: '1级',
    distribution: '中国、老挝、越南',
    amount: '中国境内可能已经灭绝',
    feature:
      '雌雄异色。雄性以黑色为主，从下巴底部一直延伸至耳朵上方各有一块白色毛发生长在脸颊两侧，头顶冠毛隆起。雌性体毛呈淡黄色至桔黄色，头顶有暗褐色冠斑呈多角形，面部有一圈或完整或不完整的白毛，没有冠毛，胸腹的黑褐色稀少，性成熟之前与雄性一般都为黑色。两性毛发都长而密。',
    imageCount: 2,
    images: [nl1, nl2],
  },
  {
    key: 5,
    name: '白掌长臂猿 ',
    latin: 'Hylobates lar',
    classification: {
      family: '长臂猿',
      genus: '长臂猿',
    },
    body: {
      weight: '4.2 - 6.8',
      height: '50 - 76',
    },
    IUCN: '濒危',
    chineseLevel: '1级',
    distribution: '中国、老挝、缅甸、泰国、马来西亚、印度尼西亚',
    amount: '中国境内可能已经灭绝',
    feature:
      '白掌长臂猿有5个亚种，以体毛色泽的变化为划分依据。手、足为白色或淡白色，故称白掌长臂猿。两性均有暗（棕色到黑色）、淡（奶白色到棕黄色）两种色型，色型与性别、年龄无关，随着分布地的不同呈现差异。所有白掌长臂猿的面部边缘经面颊到下颌有一圈白毛形成的圆环，把脸部勾勒得十分醒目。部分白掌长臂猿的家庭结构中有长期的一妻二夫现象。',
    imageCount: 2,
    images: [hl1, hl2],
  },
];
export default data;
