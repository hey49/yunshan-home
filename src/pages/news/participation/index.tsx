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
      <img className="title-img" src={data['np3'].src}></img>
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
            野生动物保护工作不仅需要政府、当地社区、科研团队、保护团队的合作与努力，还需要公众的力量。保护长臂猿有一万种姿态，有人从政策层面推动保护工作，有人勤奋研究获取物种保护的钥匙，有人在地执行，有人慷慨捐赠，有人奔走相告……云山意识到，公众参与环节缺一不可，而该部分因参与深度不同呈现出了更全面、更健康的保护逻辑链条。中国猿的保护工作中，公众筹款并不仅限于资金支持，同时也是濒危物种和保护故事的品牌传播。看见保护故事→激发捐赠行为→从单次捐款到长臂猿保护支持者身份认同的转变，是我们认可并期待的保护环节。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            从2015开始，云山开始参与9.9腾讯公益日、支付宝公益等众筹活动，并在2020年12月底开通了月捐“和云山一起保护中国猿”项目，在公益项目传播热点积极传递我们的保护故事和价值观、筹集保护经费。
            <br />
            筹款只是其中一个切口，在工作中，我们也积极招募，目前已有设计、绘画、传播、视频、翻译、英语教育、野外调查、自然导师、数据分析、法务、法律文书整理、活动执行、驾驶等方面的研修生、实习生、志愿者在保护工作中贡献了自己的专业技能。
            <br />
            截至2022年5月，云山的志愿者超过340人，实习生累计达到40人，月捐人累计达到724人，众筹捐赠者累计达到34255人次
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/EaFY3wAhEXoOxgg4C7_F8g">
              志愿者手记：和云山一起，把长臂猿带回它们的故乡吧！
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://www.bilibili.com/video/BV1wh411R7GY/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
              在野保NGO实习是一种什么样的体验？
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
