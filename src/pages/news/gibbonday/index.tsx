import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../data/headpics';

const Tianxing: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
      <img className="title-img" src={data['np1'].src}></img>
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
              <div className="tianxing-title">立项理由</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            每年的10月24号是由IUCN灵长类专家组(SSA)为长臂猿保护和宣传设立的“International
            Gibbon
            Day（国际长臂猿日）”。在这一天世界各地的长臂猿保护组织和动物园都会开展各种活动唤起公众对长臂猿生存和保护状态的关注。
            旨在引起社会公众对小猿（长臂猿）的关注，号召野生动物保护机构、研究学界、政府、企业、社会公众等社会力量联合起来，为保护长臂猿采取积极行动。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2017年，云山保护在国际长臂猿日开始与动物园合作，在园区内开展以“保护中国猿”为主题的科普宣教活动。这一年云山保护分别与北京动物园和昆明动物园合作开展了三场线下活动；
            <br />
            2018年除了在广州动物园、杭州植物园开展线下游园会科普活动，还联动了北京动物园、南京红山动物园、昆明动物园以及天津动物园同时开展科普宣传活动。
            <br />
            2019年以“长臂猿不是宠物，它们归属山野”为主题，在南京红山动物园的牵头下，联动10家不同省份的动物园开展活动，并策划了一段带动物园科普讲解员和饲养员奔向野外的旅程。
            <br />
            受疫情影响，2020年，我们通过线上的方式开展活动——直播放映首部天行长臂猿纪录片《天行情歌》、联合一线保护工作者分享他们在长臂猿栖息的边境村庄带来保护的故事与思考。
            <br />
            2021年，云山保护联动月捐人，进行了一线工作者的直播分享和长臂猿摄影展览。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/jrI-7MVPJZ_I11btUnLwuw">
              国际长臂猿日｜7种不足2000只，中国猿现状如何？
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/y3VeWUR1z_8t-bxxux3zsA">
              国际长臂猿日 | 让更多人看见和听见中国猿
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
