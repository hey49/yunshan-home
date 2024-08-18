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
      <div className="image-container">
        <img className="title-img" src={data['np2'].src}></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.news.public.illegal' })}
        </div>
      </div>
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
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.background' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'news.illegal.background.1' })}
            <br />
            {intl.formatMessage({ id: 'news.illegal.background.2' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'programs.description' })}
              </div>
            </Divider>
          </Grid>

          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'news.illegal.event.1' })}
            <br />
            {intl.formatMessage({ id: 'news.illegal.event.2' })}
            <br />
            {intl.formatMessage({ id: 'news.illegal.event.3' })}
            <br />
            {intl.formatMessage({ id: 'news.illegal.event.4' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.learn' })}
              </div>
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
