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
      <img className="title-img" src={data['ps3'].src}></img>
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
            基于分布在保护区外的天行长臂猿的保护需求，以及栖息地周边社区群众对长臂猿缺乏科学认知、与自然的情感连结越来越淡薄的现状，云山保护面向乡村小学生，用自然教育的方式培养在地保护力量。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            本项目在北京市企业家环保基金会的支持下，于2020年7月1日至2021年11月30日，对盈江县长臂猿栖息地周边社区学校的学生进行长臂猿主题自然教育，让社区的年轻一代逐步了解自然和人的关系，成为家乡生态环境守护者。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">过 程</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            结合社区传统文化，我们打造了长臂猿主题自然科普课堂，使社区青少年了解有地方特色的、以长臂猿为主线的环境知识，形成对科学保护的认知。面向一所乡村小学3-5年级学生的课程实践表明，经过10节课的学习，107位参与者在长臂猿相关生态知识方面均有显著提升，部分学生在自然连结感方面有显著提升。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            同时，我们也开展了社区自然体验活动，加深人们与自然的连结，使家乡环境成为自我身份认同中的一部分。在跨度一年的周期性活动中，参与人次约685人，大部分参与者在地方感方面有显著提升。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            除了激发保护意愿、奠定保护行动的基础，这些区别于传统课堂的参与式活动和在地化场景学习，还产生了助力乡村孩子在自然中获得情感慰藉与积极发展的附加影响。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/46nLPLqZoRj6xg9vzpYR_A">
              世界野生动植物日，和小孩一起玩家乡
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
