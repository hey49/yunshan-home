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
      <img className="title-img" src={data['np2'].src}></img>
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
            长期以来，相较于象牙、犀角等非法野生动物制品贸易，灵长类动物的非法贸易受关注较少。但其跨境、活体交易多、物种辨识难度高的特点，又为执法部门有效打击灵长类动物非法贸易增添了难度。为了有效保护灵长类动物的野生种群，我们必须与政府执法部门、公众联合起来，构建有效的跨境灵长类非法贸易信息共享网络。
            <br />
            2018年12月云山保护初步开始尝试通过志愿者进行灵长类非法贸易线上调查，2019年7月云山保护申请到中国绿色碳汇基金会的打击濒危野生动植物非法贸易小额基金，用于支持灵长类非法贸易调查与信息共享平台构建。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>

          <Grid item xs={12} sm={10} md={8}>
            在这个为期一年半的小额项目中，云山保护招募并培训了24位志愿者，通过不断的培训与实践，形成稳定的调查小组：
            <br />
            针对非法贸易信息实时监测、新闻数据收集以及法律文书信息整合3个大方向进行分工。
            <br />
            实时监测小组收集共计151条灵长类非法贸易信息，共向森林公安提交5个完整的野生动物非法贸易调查宗卷；
            <br />
            通过与森林公安的配合，其中3个案件得到了侦破；
            <br />
            新闻小组整理共计285条灵长类救护与非法贸易信息；
            <br />
            法律文书小组整理2014-2019年间涉及灵长类非法贸易案件745件
            <br />
            基于上述整理，2021年4月云山保护志愿者调查小组完成中国灵长类辨识与救护手册的制作，通过云山保护、果壳、中国绿色碳汇基金会等平台面向公众及有关执法部门输出，影响将近30万公众。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/CXcDsL4zo7d3z60QLYUKLw">
              “萌宠”视频的背后——没有终点的绝望循环
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/-Fj2tTQzcIisn4OTUF2V3g">
              张三抓猴子看守芒果地，这些案例可能连罗翔老师都没听过
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/mjvuwZp8q9OebBgNPfG-BA">
              “一只长臂猿宠物的背后：有239只死在交易的各个环节。
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
