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
      <img className="title-img" src={data['pi2'].src}></img>
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
            2019年，云山保护在第三届“迈向生态文明
            向环保先锋致敬”环保公益项目与阿拉善SEE联合公益项目资助下，开展“守护天行长臂猿最后的家”、“支付宝小而美——守护猿住民的家”两个项目，以了解重点区域天行长臂猿种群栖息地质量和连通性，促进长臂猿群间基因交流，做好保护区外的天行长臂猿保护工作。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">过 程</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            我们培训了10多位护林员和野外向导，开展了盈江地区天行长臂猿的种群动态监测，于2020年6月前完成了盈江县支那乡和苏典乡的天行长臂猿种群数量和分布位置确认（长期持续更新中）。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            在长臂猿种群动态监测的基础上，为了了解长臂猿栖息地质量、食物丰富度与连通性，我们在盈江县三个活动范围比较确定的家庭群栖息地内开展植物样方调查，并给长臂猿食物树挂标识牌。我们对比了长臂猿利用程度不同的栖息地内的植被样方数据，从栖息地植被角度分析利用程度不同的可能原因，并提出改善长臂猿现有栖息地质量和扩大优质栖息地范围的建议。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650428551&idx=1&sn=9f742cc82c35c5731808b48c10d8e441&chksm=f2eb4a20c59cc33690b7d66bbed8479a7157d5cb00e14a54e9889b5a1327965c3f1d797c4daa&token=1317119189&lang=zh_CN#rd">
              向环保先锋致敬！云山保护获第三届环保公益资助20万元
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/iGLpRMIYUqMyI5gebXuy1w">
              去年出生的那只小猿会自己跑了
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
