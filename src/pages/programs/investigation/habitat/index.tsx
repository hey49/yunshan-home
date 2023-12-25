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
      <img className="title-img" src={data['pi5'].src}></img>
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
            北白颊长臂猿曾经在中国云南南部有较多分布，但是八十年代开始因为云南南部低海拔地区开始大量的种植橡胶，热带雨林被大规模开垦，白颊长臂猿种群数量迅速下降，在范朋飞教授2011年的野外调查中就没有再在曾经的栖息地发现过任何长臂猿的踪迹。其它地区因为没有过北白颊长臂猿的记录，此物种被认为可能在中国已经野外灭绝。
            <br />
            在针对北白颊长臂猿的调查过程中我们了解到白掌长臂猿、西黑冠长臂猿与天行长臂猿也可能有现今调查未涵盖的分布区域。为这些保护区外的长臂猿重要栖息地建立必要的保护措施，是未来长臂猿种群数量增长的基本保障。
            <br />
            2018年到2021年，在阿拉善SEE联合公益项目“支付宝小而美——寻找濒危的长臂猿”与月捐项目“和云山一起保护中国猿”的支持下我们针对以上四种长臂猿开展了社区及野外调查
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            综合多次社区调查、与当地保护区交流得到的重要历史分布信息与潜在线索以及科研专家的建议，我们分别前往普洱孟连县、江城县、宁洱县，西双版纳州勐腊县、德宏州盈江县开展调查。在更为详细的社区调查后，结合实地走访与卫星图分析，开展优先调查区域野外调查。
            <br />
            我们在孟连县、勐腊县、盈江县卡场安装了坚挺设备收集森林中的声音数据，尝试用声音监测设备代替人力做长臂猿分布调查。在森林中分批安装了监听设备收集声音数据。在三种长臂猿的潜在分布区设置了70多个监听位点，获得了8289小时的声音数据。
            <br />
            在铜壁关保护区提供信息和人员支持的基础上，我们并在盈江县卡场镇发现了一只单独的雌性天行长臂猿，芒章乡发现了一个可自我维持的天行长臂猿小种群。这一发现扩大了原有的天行长臂猿栖息地面积，直接增加了天行长臂猿国内的种群数量，为这一濒危物种的存续与发展提供了更多的保障与可能。卡场镇独猿的活动领域更是刷新了盈江县天行长臂猿地理分布的最南端记录。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650427978&idx=1&sn=1d1fd7b47190c1a50eeb0e52d897f29c&chksm=f2eb4cedc59cc5fbbeab7b15c2373a705d622312904aa5a038d5a1f23a03fa522687fc72874d&scene=21#wechat_redirect">
              山野行记：听见你的声音
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650428857&idx=1&sn=6b7e3a5616e2033a54e63ab524d25e86&chksm=f2eb4b1ec59cc2086daa8b119138c559cc61c329e62129f347e0b1188a7bd3aae6b8abb0dae3&token=1317119189&lang=zh_CN#rd">
              空缺调查告诉我们：中国野外还有白掌长臂猿吗？
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650430095&idx=1&sn=b2700a3475c623b375e012931758e38a&chksm=f2eb4428c59ccd3e25af9b4e5ec6c2a7333561f55f756f938753e17e75c54059e4d86f765a3d&token=1317119189&lang=zh_CN#rd">
              空缺调查：聆听山林，确保我们不曾留下可能的遗憾
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
