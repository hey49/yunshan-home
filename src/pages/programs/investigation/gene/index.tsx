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
      <img className="title-img" src={data['pi3'].src}></img>
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
            2018年开始，为研究清楚我国天行长臂猿在生存栖息地破碎化严重的情况下，不同小种群之间是否存在基因交流的问题，我们在先后由两次99众筹（“守护猿住民的家”、“共建云端护猿基地”）和第三届“迈向生态文明
            向环保先锋致敬”环保公益项目“守护天行长臂猿最后的家”支持下，我们开始着手收集生活在不同片区中尚未习惯化的天行长臂猿最易得到的遗传信息——长臂猿粪便，并持续至今。{' '}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">过 程</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2018年3月开始学习带领搜粪犬着手猿粪的收集，并到高黎贡山保护区板厂研究基地和赧亢自然公园两个已习惯化的长臂猿栖息地内尝试寻找猿粪。随后，去到位于腾冲的高黎贡山国家级自然保护区大塘片区搜寻猿粪，搜寻无果之后转战盈江。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            此后一直到2021年6月，带着搜粪犬多次分别在支那乡和苏典乡7个村寨附近的森林里搜寻猿粪。过程中在苏典乡拉马河片区其中一群长臂猿的栖息地内，发现一只老年雄性长臂猿的尸体。
            2018年10月，首次来到梨树开展寻找猿粪的工作，并成功找到第一份天行长臂猿未习惯化个体的猿粪。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2021年4月，云山保护李如雪、中山大学博士研究生黄霞、云山保护野外实习生牟劲松和袁艺配合黄霞博士采集了德宏州野生动物救护中心救助的所有长臂猿个体的粪便，这些救护的笼养个体的粪便也将助力于更好的开展长臂猿遗传多样性分析。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://www.bilibili.com/video/BV1qf4y1x777/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
              专业团队，带你捡粪
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/QuARxIxO2GM9mkuK3zXQ2w">
              盗猎贩子啥都有卖的，而你们，半年才能找到一坨猿粪
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
