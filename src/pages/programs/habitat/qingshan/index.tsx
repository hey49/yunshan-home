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
      <img className="title-img" src={data['ph1'].src}></img>
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
            作为天行长臂猿的主要分布区——云南省德宏州盈江县的栖息地森林破碎化程度较高，部分种群的栖息地面积非常小，难以支撑种群增长的需求。同时，盈江县的部分较低海拔的森林栖息地也是社区的生产生活用地，存在较高程度的人为干扰。为了让这些生活在国有林和社区集体林的长臂猿的生存需求得到满足，并进一步改善现有栖息地质量，扩大栖息地面积，我们正跟林业部门、乡政府和村民通过生态种植的方式探索一种既能为当地社区提供多样经济来源又能促进长臂猿种群长期存续的保护模式。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">过 程</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2022年3月，在中华环境保护基金会美团外卖青山计划专项基金的支持下，云山在盈江县苏典乡梨树自然村正式启动了天行长臂猿社区生态种植试点项目。我们将在梨树村开展天行长臂猿食物树和藤本育苗、光坡苗木移栽和藤本补种，促进恢复梨树长臂猿群栖息地内植物群落结构；同时探索社区参与式的生态种植日常管理监测和长期的栖息地恢复植物多样性监测。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://www.bilibili.com/video/BV1N84y1f7Fb/?spm_id_from=333.337.search-card.all.click&vd_source=beec0246ef894e17a936065f77a10d56">
              与傈僳族人劳动共舞，感受山间自然之美
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
