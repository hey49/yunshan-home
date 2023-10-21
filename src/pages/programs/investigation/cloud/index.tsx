import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../../data/headpics';

const Tianxing: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
      <img className="title-img" src={data['pi4'].src}></img>
      <Card>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">背 景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            板厂保护与科研基地（板厂基地）位于高黎贡山国家级自然保护区隆阳分局百花岭站辖区内。从2011年开始，范朋飞教授带领长臂猿科研团队在板厂持续开展了7年的长臂猿野外监测和科研工作。依托
            2018 年和 2019 年腾讯 99
            公益日众筹项目支持，云山保护“共建云端护猿基地”项目于 2019 年 1
            月正式启动，与高黎贡山国家级自然保护区保山分局、中山大学签订了三方共建共管协议，并开展了长达两年整的驻站工作。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">过 程</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            板厂基地探索和实践了保护区、公益机构与科研团队三方共建共管模式，在两年内组建和培养了长期驻扎在野外的工作团队（1位站长，2-4位监测向导，2-4位研修生），开展了以天行长臂猿为旗舰物种的生态和行为学监测，设计并实施了公众可参与的科研与保护活动，连结了媒体及多种类型的跨界合作，让更多人了解天行长臂猿和高黎贡山的生物多样性。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            长期野外监测积累了连续且高精度的天行长臂猿种群、行为及相关生态学数据，提供了鸣叫、食源植被、栖息地利用、共域动物、与人类活动关系等多方面有助于保护决策和行动的重要信息。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            线上和实地的公众参与活动有机地桥接了真实且一线的保护行业与相关领域新生代力量，拓宽了参与自然保护工作的渠道。严谨的科学传播与积极的跨界合作让天行长臂猿及其相关生态环境、生物多样性保护和保护工作者的故事触及到了更广泛的人群。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://www.bilibili.com/video/BV11E411y7ss/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
              云南高黎贡山有一群可爱的人，守护着中国野外少于150只的天行长臂猿
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650427878&idx=1&sn=9a13c34e2afb68e42d40051baaccf1d0&chksm=f2eb4f41c59cc6573ae5f9da35f6b4ab9fe2d0e36f09f796e3c380a6c3c7f723557215477194&token=1317119189&lang=zh_CN#rd">
              第一封基地家书：我在板厂，挺好的
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650428945&idx=1&sn=6e3cec131adb9762f7dd057b45af61d4&chksm=f2eb48b6c59cc1a0e0b31027873a20e70fe6ce945bf5a4e7ea68f016bd48c59f42230eb567b8&token=1317119189&lang=zh_CN#rd">
              护林21年，蔡叔：守到我一辈子攀不动为止
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/3OT4rJrm9jOs7_CcfKE9xg">
              祝常悦：离开高黎贡，两年来我在家过了第一个春节
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
